const { default: makeWASocket, useMultiFileAuthState, DisconnectReason } = require('@whiskeysockets/baileys');
const QRCode = require('qrcode');
const pino = require('pino');
const fs = require('fs');
const path = require('path');

const AUTH_DIR = process.env.VERCEL ? path.join('/tmp', 'baileys_auth_info') : path.join(__dirname, 'baileys_auth_info');
const SETTINGS_FILE = process.env.VERCEL ? path.join('/tmp', 'wa_settings.json') : path.join(__dirname, 'data', 'wa_settings.json');

let sock = null;
let currentQR = null;
let connectionState = 'DISCONNECTED'; // DISCONNECTED, CONNECTING, QR_READY, CONNECTED
let userJid = null;

// Pastikan folder data dan auth ada
try {
  if (!fs.existsSync(AUTH_DIR)) {
    fs.mkdirSync(AUTH_DIR, { recursive: true });
  }
} catch (e) {
  console.warn('[WA] Folder auth error:', e.message);
}


function loadSettings() {
  try {
    if (fs.existsSync(SETTINGS_FILE)) {
      return JSON.parse(fs.readFileSync(SETTINGS_FILE, 'utf8'));
    }
  } catch (err) {
    console.error('Gagal membaca wa_settings.json:', err);
  }
  return {
    targetPhone: '',
    autoSend: true,
    template: '🏡 *[KAS RUMAH TANGGA]* Pengeluaran Baru!\n\n📅 *Tanggal* : {tanggal}\n💸 *Jumlah* : {jumlah}\n🏷️ *Kategori* : {kategori}\n📝 *Keterangan* : {keterangan}\n💳 *Metode* : {metode}\n----------------------------------------\n💰 *Sisa Saldo Kas* : {saldo}'
  };
}

function saveSettings(newSettings) {
  try {
    const dir = path.dirname(SETTINGS_FILE);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    const current = loadSettings();
    const updated = { ...current, ...newSettings };
    fs.writeFileSync(SETTINGS_FILE, JSON.stringify(updated, null, 2), 'utf8');
    return updated;
  } catch (err) {
    console.error('Gagal menyimpan wa_settings.json:', err);
    throw err;
  }
}

async function connectToWhatsApp() {
  if (connectionState === 'CONNECTED' && sock) {
    return { status: connectionState, message: 'Sudah terhubung dengan WhatsApp' };
  }

  connectionState = 'CONNECTING';
  currentQR = null;

  try {
    const { state, saveCreds } = await useMultiFileAuthState(AUTH_DIR);

    sock = makeWASocket({
      auth: state,
      printQRInTerminal: false,
      logger: pino({ level: 'silent' }),
      browser: ['Kas Rumah Tangga', 'Chrome', '1.0.0']
    });

    sock.ev.on('creds.update', saveCreds);

    sock.ev.on('connection.update', async (update) => {
      const { connection, lastDisconnect, qr } = update;

      if (qr) {
        try {
          currentQR = await QRCode.toDataURL(qr);
          connectionState = 'QR_READY';
          console.log('[WA Service] QR Code Baru Siap Di-scan!');
        } catch (qrErr) {
          console.error('[WA Service] Error generate QR DataURL:', qrErr);
        }
      }

      if (connection === 'open') {
        connectionState = 'CONNECTED';
        currentQR = null;
        userJid = sock.user ? sock.user.id : null;
        console.log('[WA Service] WhatsApp Berhasil Terhubung! JID:', userJid);
      }

      if (connection === 'close') {
        const statusCode = lastDisconnect?.error?.output?.statusCode;
        const shouldReconnect = statusCode !== DisconnectReason.loggedOut;
        console.log('[WA Service] Koneksi terputus. Reason code:', statusCode, 'Reconnect:', shouldReconnect);
        
        if (shouldReconnect) {
          connectionState = 'CONNECTING';
          setTimeout(() => connectToWhatsApp(), 3000);
        } else {
          connectionState = 'DISCONNECTED';
          currentQR = null;
          sock = null;
          // Hapus session jika loggedOut
          try {
            if (fs.existsSync(AUTH_DIR)) {
              fs.rmSync(AUTH_DIR, { recursive: true, force: true });
            }
          } catch (e) {
            console.error('[WA Service] Gagal menghapus folder auth:', e);
          }
        }
      }
    });

    return { status: 'CONNECTING', message: 'Memulai koneksi WhatsApp...' };
  } catch (err) {
    connectionState = 'DISCONNECTED';
    console.error('[WA Service] Error saat inisialisasi WA:', err);
    return { status: 'DISCONNECTED', error: err.message };
  }
}

async function disconnectWhatsApp() {
  try {
    if (sock) {
      await sock.logout();
      sock = null;
    }
  } catch (e) {
    console.log('[WA Service] Logout error, cleaning up files directly...');
  }
  connectionState = 'DISCONNECTED';
  currentQR = null;
  userJid = null;
  if (fs.existsSync(AUTH_DIR)) {
    fs.rmSync(AUTH_DIR, { recursive: true, force: true });
  }
  return { status: 'DISCONNECTED', message: 'Berhasil keluar dan menghapus sesi WA.' };
}

function getStatus() {
  return {
    state: connectionState,
    hasQR: !!currentQR,
    qrDataURL: currentQR,
    user: userJid,
    settings: loadSettings()
  };
}

function formatPhone(phone) {
  if (!phone) return null;
  let cleaned = phone.replace(/\D/g, '');
  if (cleaned.startsWith('0')) {
    cleaned = '62' + cleaned.slice(1);
  }
  if (!cleaned.includes('@s.whatsapp.net')) {
    cleaned = cleaned + '@s.whatsapp.net';
  }
  return cleaned;
}

function formatRupiah(amount) {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(amount);
}

function formatDateIndo(dateStr) {
  if (!dateStr) return '';
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return dateStr;
  return d.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
}

async function sendExpenseNotification(transaction, currentBalance) {
  const settings = loadSettings();
  if (!settings.autoSend) {
    return { success: false, reason: 'Pengiriman otomatis WhatsApp dinonaktifkan di pengaturan.' };
  }

  if (connectionState !== 'CONNECTED' || !sock) {
    return { success: false, reason: 'WhatsApp belum terhubung (Perlu scan QR code 1x).' };
  }

  const targetJid = formatPhone(settings.targetPhone);
  if (!targetJid) {
    return { success: false, reason: 'Nomor WhatsApp tujuan belum diisi di Pengaturan.' };
  }

  try {
    let msg = settings.template || '🏡 *[KAS RUMAH TANGGA]* Pengeluaran Baru!\n\n📅 *Tanggal* : {tanggal}\n💸 *Jumlah* : {jumlah}\n🏷️ *Kategori* : {kategori}\n📝 *Keterangan* : {keterangan}\n💳 *Metode* : {metode}\n🏢 *Penerima* : {penerima}\n----------------------------------------\n💰 *Sisa Saldo Kas* : {saldo}';

    msg = msg
      .replace(/{tanggal}/g, formatDateIndo(transaction.date))
      .replace(/{jumlah}/g, formatRupiah(transaction.amount))
      .replace(/{kategori}/g, transaction.category || '-')
      .replace(/{keterangan}/g, transaction.note || '-')
      .replace(/{metode}/g, transaction.paymentMethod || 'Cash')
      .replace(/{penerima}/g, transaction.recipient || '-')
      .replace(/{saldo}/g, formatRupiah(currentBalance));

    await sock.sendMessage(targetJid, { text: msg });
    console.log('[WA Service] Notifikasi pengeluaran berhasil dikirim ke:', targetJid);
    return { success: true, target: settings.targetPhone, message: msg };
  } catch (err) {
    console.error('[WA Service] Gagal mengirim notifikasi WA:', err);
    return { success: false, error: err.message };
  }
}

async function sendTestMessage(targetNumber) {
  if (connectionState !== 'CONNECTED' || !sock) {
    return { success: false, reason: 'WhatsApp belum terhubung.' };
  }
  const jid = formatPhone(targetNumber);
  if (!jid) {
    return { success: false, reason: 'Nomor WhatsApp tidak valid.' };
  }
  try {
    const text = '✅ *[KAS RUMAH TANGGA]* Tes Koneksi WhatsApp Berhasil!\n\nBarcode 1x scan telah aktif dan terhubung. Notifikasi pengeluaran akan dikirim otomatis ke nomor ini.';
    await sock.sendMessage(jid, { text });
    return { success: true };
  } catch (err) {
    return { success: false, error: err.message };
  }
}

module.exports = {
  connectToWhatsApp,
  disconnectWhatsApp,
  getStatus,
  loadSettings,
  saveSettings,
  sendExpenseNotification,
  sendTestMessage
};

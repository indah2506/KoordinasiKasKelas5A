const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

let waService;
try {
  waService = require('./wa_service');
} catch (e) {
  console.warn('[Server] waService disabled:', e.message);
  waService = {
    getStatus: () => ({ isConnected: false, state: 'DISCONNECTED' }),
    connectToWhatsApp: async () => ({ status: 'DISCONNECTED', message: 'WA disabled on serverless' }),
    disconnectWhatsApp: async () => ({ status: 'DISCONNECTED', message: 'WA disabled on serverless' }),
    saveSettings: () => ({}),
    sendTestMessage: async () => ({ success: false }),
    sendExpenseNotification: async () => null
  };
}

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Path Helper for Vercel Serverless Read-Only Filesystem
function getWritablePath(filename, defaultSubfolder = 'data') {
  const localPath = path.join(__dirname, defaultSubfolder, filename);
  const tmpPath = path.join('/tmp', filename);

  if (process.env.VERCEL) {
    if (!fs.existsSync(tmpPath) && fs.existsSync(localPath)) {
      try {
        fs.writeFileSync(tmpPath, fs.readFileSync(localPath));
      } catch (e) {
        console.warn('[Vercel] Error copying to /tmp:', e.message);
      }
    }
    return tmpPath;
  }
  return localPath;
}

const DATA_FILE = getWritablePath('transactions.json');

// Helper untuk membaca & menulis data transaksi
function readTransactions() {
  try {
    const filePath = getWritablePath('transactions.json');
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf8');
      return JSON.parse(content);
    }
  } catch (err) {
    console.error('Error membaca transactions.json:', err);
  }
  return [];
}

function writeTransactions(data) {
  try {
    const filePath = getWritablePath('transactions.json');
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  } catch (err) {
    console.error('Error menulis transactions.json:', err);
  }
}

// Hitung Ringkasan Saldo
function calculateSummary(transactions) {
  let totalPemasukan = 0;
  let totalPengeluaran = 0;

  transactions.forEach(t => {
    const val = parseFloat(t.amount) || 0;
    if (t.type === 'pemasukan') {
      totalPemasukan += val;
    } else if (t.type === 'pengeluaran') {
      totalPengeluaran += val;
    }
  });

  const saldoSisa = totalPemasukan - totalPengeluaran;
  return { totalPemasukan, totalPengeluaran, saldoSisa };
}

// --- REST API ENDPOINTS ---

app.get('/api/transactions', (req, res) => {
  const transactions = readTransactions();
  transactions.sort((a, b) => new Date(b.date) - new Date(a.date) || b.id.localeCompare(a.id));
  const summary = calculateSummary(transactions);
  res.json({
    success: true,
    summary,
    transactions
  });
});

app.post('/api/transactions', async (req, res) => {
  try {
    const { type, amount, category, date, note, paymentMethod, recipient, sendWA } = req.body;

    if (!type || !amount || !category || !date) {
      return res.status(400).json({ success: false, message: 'Harap lengkapi field yang wajib diisi.' });
    }

    const transactions = readTransactions();
    const newTx = {
      id: 'tx_' + Date.now(),
      type,
      amount: parseFloat(amount),
      category,
      date,
      note: note || '',
      paymentMethod: paymentMethod || 'Cash',
      recipient: recipient || '-'
    };

    transactions.push(newTx);
    writeTransactions(transactions);

    const summary = calculateSummary(transactions);
    let waResult = null;

    if (type === 'pengeluaran' && sendWA !== false) {
      try {
        waResult = await waService.sendExpenseNotification(newTx, summary.saldoSisa);
      } catch (e) {
        console.warn('WA Notification skipped:', e.message);
      }
    }

    res.json({
      success: true,
      message: 'Transaksi berhasil disimpan!',
      transaction: newTx,
      summary,
      waResult
    });
  } catch (err) {
    console.error('Error saat menyimpan transaksi:', err);
    res.status(500).json({ success: false, message: err.message });
  }
});

app.delete('/api/transactions/:id', (req, res) => {
  try {
    const { id } = req.params;
    let transactions = readTransactions();
    const initialLen = transactions.length;
    transactions = transactions.filter(t => t.id !== id);

    if (transactions.length === initialLen) {
      return res.status(404).json({ success: false, message: 'Transaksi tidak ditemukan.' });
    }

    writeTransactions(transactions);
    const summary = calculateSummary(transactions);
    res.json({ success: true, message: 'Transaksi berhasil dihapus.', summary });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// --- WHATSAPP BOT INTEGRATION ENDPOINTS ---

app.get('/api/wa/status', (req, res) => {
  const status = waService.getStatus();
  res.json({ success: true, ...status });
});

app.post('/api/wa/connect', async (req, res) => {
  const result = await waService.connectToWhatsApp();
  res.json({ success: true, ...result });
});

app.post('/api/wa/disconnect', async (req, res) => {
  const result = await waService.disconnectWhatsApp();
  res.json({ success: true, ...result });
});

app.post('/api/wa/settings', (req, res) => {
  try {
    const { targetPhone, autoSend, template } = req.body;
    const updated = waService.saveSettings({ targetPhone, autoSend, template });
    res.json({ success: true, message: 'Pengaturan WhatsApp berhasil disimpan!', settings: updated });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

app.post('/api/wa/test', async (req, res) => {
  const { targetPhone } = req.body;
  const result = await waService.sendTestMessage(targetPhone);
  res.json(result);
});

// --- KAS BENDAHARA KELAS 5A REST API ENDPOINTS ---

let globalMemoryKas5A = null;

function readKas5AData() {
  if (globalMemoryKas5A) return globalMemoryKas5A;
  try {
    const filePath = getWritablePath('kas_5a.json');
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf8');
      globalMemoryKas5A = JSON.parse(content);
      return globalMemoryKas5A;
    }
  } catch (err) {
    console.error('Error membaca kas_5a.json:', err);
  }
  return null;
}

function writeKas5AData(data) {
  globalMemoryKas5A = data;
  try {
    const filePath = getWritablePath('kas_5a.json');
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    return true;
  } catch (err) {
    console.error('Error menulis kas_5a.json:', err);
    return true;
  }
}

app.get('/api/kas_5a', (req, res) => {
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  res.setHeader('Surrogate-Control', 'no-store');

  const data = readKas5AData();
  if (data) {
    res.json({ success: true, timestamp: Date.now(), data });
  } else {
    res.status(404).json({ success: false, message: 'Data Kas 5A belum ada' });
  }
});

app.post('/api/kas_5a/save', (req, res) => {
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  try {
    const { data } = req.body;
    if (!data) {
      return res.status(400).json({ success: false, message: 'Data tidak boleh kosong' });
    }
    const success = writeKas5AData(data);
    res.json({ success: true, timestamp: Date.now(), message: 'Data Kas 5A berhasil disimpan!' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});



// Only start standalone server when executed directly (not in Vercel serverless mode)
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`==================================================`);
    console.log(` 🏫 Kas Bendahara Kelas 5A SDS Kasih Ananda Berjalan di: http://localhost:${PORT}`);
    console.log(`==================================================`);
  });
}

module.exports = app;

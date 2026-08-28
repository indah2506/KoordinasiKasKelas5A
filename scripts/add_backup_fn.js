const fs = require('fs');
let js = fs.readFileSync('g:/Antigravity/Website/public/app.js', 'utf8');

const insertBefore = '  exportToExcel() {';
const idx = js.indexOf(insertBefore);
if (idx === -1) { console.error('marker not found'); process.exit(1); }

const backupFn = [
  '  // Backup data ke file JSON di perangkat pengguna',
  '  backupData() {',
  '    try {',
  '      const now  = new Date();',
  "      const ts   = now.toISOString().slice(0,10).replace(/-/g,'') + '_' +",
  "                   now.toTimeString().slice(0,5).replace(':','');",
  "      const filename = 'Backup_Kas5A_' + ts + '.json';",
  '      const json = JSON.stringify(this.data, null, 2);',
  "      const blob = new Blob([json], { type: 'application/json' });",
  '      const url  = URL.createObjectURL(blob);',
  "      const a    = document.createElement('a');",
  '      a.href = url; a.download = filename;',
  '      document.body.appendChild(a); a.click();',
  '      document.body.removeChild(a); URL.revokeObjectURL(url);',
  '      const paid = this.countPaid(this.data);',
  '      const nom  = (this.data.settings && this.data.settings.nominalPerBulan) ? this.data.settings.nominalPerBulan : 20000;',
  "      alert('\\u2705 Backup berhasil!\\n\\nFile: ' + filename + '\\nTotal lunas: ' + paid + ' bulan\\nTotal: Rp ' + (paid*nom).toLocaleString('id-ID') + '\\n\\nSimpan file ini di tempat aman ya!');",
  "    } catch(e) { alert('\\u274C Backup gagal: ' + e.message); }",
  '  }',
  '',
  ''
].join('\n');

const newJs = js.substring(0, idx) + backupFn + js.substring(idx);
fs.writeFileSync('g:/Antigravity/Website/public/app.js', newJs, 'utf8');
console.log('backupData() added. File size:', Math.round(newJs.length/1024), 'KB');

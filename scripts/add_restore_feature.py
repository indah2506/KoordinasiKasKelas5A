import json, re

# Update public/app.js with handleUniversalRestore
with open(r'E:\Antigravity\Website\public\app.js', 'r', encoding='utf-8', errors='ignore') as f:
    app_js = f.read()

restore_fn = '''  // --- FITUR PULIHKAN DATA UNIVERSAL (JSON / EXCEL) ---
  handleUniversalRestore(e) {
    const file = e.target.files && e.target.files[0];
    if (!file) return;

    const fileName = file.name.toLowerCase();

    if (fileName.endsWith('.json')) {
      const reader = new FileReader();
      reader.onload = (evt) => {
        try {
          const parsed = JSON.parse(evt.target.result);
          if (!parsed.students || !Array.isArray(parsed.students)) {
            alert('❌ Format file JSON tidak valid (tidak berisi daftar siswa).');
            return;
          }

          const count = this.countPaid(parsed);
          const expCount = (parsed.expenses && Array.isArray(parsed.expenses)) ? parsed.expenses.length : 0;
          const totalExp = (parsed.expenses && Array.isArray(parsed.expenses)) ? parsed.expenses.reduce((a, b) => a + (Number(b.amount) || 0), 0) : 0;
          const nom = (parsed.settings && parsed.settings.nominalPerBulan) ? parsed.settings.nominalPerBulan : 20000;
          const totalInc = count * nom;
          const saldo = totalInc - totalExp;

          if (confirm(`Apakah Anda yakin ingin memulihkan data dari:\\n${file.name}?\\n\\n• Total Lunas: ${count} transaksi (Rp ${totalInc.toLocaleString('id-ID')})\\n• Pengeluaran: Rp ${totalExp.toLocaleString('id-ID')} (${expCount} item)\\n• Saldo Akhir: Rp ${saldo.toLocaleString('id-ID')}\\n\\nKlik OK untuk menerapkan sekarang.`)) {
            this.data = parsed;
            this.saveData();
            this.renderAllViews();
            alert(`✅ Data Berhasil Dipulihkan!\\n\\nSaldo saat ini: Rp ${saldo.toLocaleString('id-ID')}`);
          }
        } catch (err) {
          alert('❌ Gagal membaca file JSON: ' + err.message);
        } finally {
          e.target.value = '';
        }
      };
      reader.readAsText(file);
    } else if (fileName.endsWith('.xlsx') || fileName.endsWith('.xls')) {
      this.handleExcelImport(e);
    } else {
      alert('❌ Format file tidak didukung. Harap pilih file .json atau .xlsx');
      e.target.value = '';
    }
  }
'''

if 'handleUniversalRestore' not in app_js:
    idx = app_js.find('  handleExcelImport(e) {')
    if idx != -1:
        app_js = app_js[:idx] + restore_fn + '\n\n' + app_js[idx:]
        with open(r'E:\Antigravity\Website\public\app.js', 'w', encoding='utf-8') as f:
            f.write(app_js)
        print('SUCCESS: Added handleUniversalRestore to app.js')
    else:
        print('WARNING: handleExcelImport marker not found in app.js')
else:
    print('handleUniversalRestore already in app.js')

# Update public/index.html with Pulihkan Data button
with open(r'E:\Antigravity\Website\public\index.html', 'r', encoding='utf-8', errors='ignore') as f:
    html = f.read()

restore_btn_html = '''        <button class="btn btn-sm" onclick="document.getElementById('fileRestoreInput').click()" style="background:#0284c7;color:#fff;border:none;border-radius:8px;font-weight:700;cursor:pointer;display:flex;align-items:center;gap:6px;font-size:13px;padding:8px 14px;" title="Pulihkan Data dari File Backup JSON / Excel">
          <i class="fa-solid fa-file-import"></i> Pulihkan Data
        </button>
        <input type="file" id="fileRestoreInput" accept=".json,.xlsx,.xls" style="display:none;" onchange="app.handleUniversalRestore(event)">
'''

if 'fileRestoreInput' not in html:
    idx_btn = html.find('<button class="btn" style="background:#15803d;color:#fff')
    if idx_btn == -1:
        idx_btn = html.find('id="backupBtn"')
        if idx_btn != -1:
            idx_btn = html.rfind('<button', 0, idx_btn)
    if idx_btn != -1:
        html = html[:idx_btn] + restore_btn_html + '\n        ' + html[idx_btn:]
        with open(r'E:\Antigravity\Website\public\index.html', 'w', encoding='utf-8') as f:
            f.write(html)
        print('SUCCESS: Added Pulihkan Data button to index.html')
    else:
        print('WARNING: backupBtn marker not found in index.html')
else:
    print('fileRestoreInput already in index.html')

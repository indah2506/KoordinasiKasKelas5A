const fs = require('fs');
let js = fs.readFileSync('g:/Antigravity/Website/public/app.js', 'utf8');

// Find the exact range to replace
const startMarker = '  loadData() {\n    let loadedData = null;';
const endMarker = '  async saveData() {\n    try { localStorage.setItem(\'kas_5a_data\', JSON.stringify(this.data)); } catch (e) {}\n\n    // Backup to local Vercel endpoint\n    try {\n      fetch(\'/api/kas_5a/save\', {\n        method: \'POST\',\n        headers: { \'Content-Type\': \'application/json\' },\n        body: JSON.stringify({ data: this.data })\n      });\n    } catch (e) {}\n\n    this.renderAllViews();\n  }';

const si = js.indexOf(startMarker);
const ei = js.indexOf(endMarker);

if (si === -1 || ei === -1) {
  console.error('Cannot find markers. si:', si, 'ei:', ei);
  // Show nearby text
  const saveIdx = js.indexOf('async saveData()');
  console.log('saveData found at:', saveIdx);
  console.log('Context around saveData:');
  console.log(JSON.stringify(js.substring(saveIdx, saveIdx+200)));
  process.exit(1);
}

console.log('Found range:', si, '-', ei + endMarker.length);

const replacement = `  // ── Count paid months from a data object ─────────────────────────────────
  countPaid(dataObj) {
    let count = 0;
    if (!dataObj || !dataObj.students) return 0;
    dataObj.students.forEach(st => {
      if (!st || !st.payments) return;
      Object.values(st.payments).forEach(p => {
        if (p === true || (p && (p.status === true || p.status === 'true'
            || p.status === 'LUNAS' || p.status === 1 || p.status === '1'))) count++;
      });
    });
    return count;
  }

  // ── Find best (most paid) backup from all localStorage slots ──────────────
  _loadBestBackup() {
    const keys = ['kas_5a_data', 'kas_5a_backup_1', 'kas_5a_backup_2'];
    let best = null, bestCount = -1;
    keys.forEach(k => {
      try {
        const raw = localStorage.getItem(k);
        if (!raw) return;
        const parsed = JSON.parse(raw);
        const cnt = this.countPaid(parsed);
        if (cnt > bestCount && parsed.students && parsed.students.length > 0) {
          bestCount = cnt;
          best = parsed;
        }
      } catch(e){}
    });
    return best;
  }

  loadData() {
    // Get best backup across all 3 slots
    let loadedData = this._loadBestBackup();
    const paidLocal = this.countPaid(loadedData);
    const paidInit  = this.countPaid(INITIAL_DATA);

    if (!loadedData || paidLocal < paidInit) {
      // Local data is older/empty — use INITIAL_DATA
      console.warn('[KasApp] ⚠️ Using INITIAL_DATA (local backup empty or older).');
      loadedData = JSON.parse(JSON.stringify(INITIAL_DATA));
    }

    // Ensure all required fields exist
    if (!loadedData.months || !loadedData.months.length)
      loadedData.months   = JSON.parse(JSON.stringify(INITIAL_DATA.months));
    if (!loadedData.expenses || !Array.isArray(loadedData.expenses))
      loadedData.expenses = JSON.parse(JSON.stringify(INITIAL_DATA.expenses || []));
    if (!loadedData.students || !loadedData.students.length)
      loadedData.students = JSON.parse(JSON.stringify(INITIAL_DATA.students));

    if (!loadedData.settings) loadedData.settings = {};
    loadedData.settings.namaWaliKelas   = loadedData.settings.namaWaliKelas   || 'Bu Liswati';
    loadedData.settings.namaKoordinator = loadedData.settings.namaKoordinator || 'Mom Kim';
    loadedData.settings.namaBendahara   = loadedData.settings.namaBendahara   || 'Mom Kim';

    this.data = loadedData;

    // Save to all 3 slots immediately on load
    const json = JSON.stringify(this.data);
    try { localStorage.setItem('kas_5a_data',       json); } catch(e){}
    try { localStorage.setItem('kas_5a_backup_1',   json); } catch(e){}
    try { localStorage.setItem('kas_5a_backup_2',   json); } catch(e){}
    try { localStorage.setItem('kas_5a_backup_paid', String(this.countPaid(this.data))); } catch(e){}
  }

  async saveData() {
    const paidNow  = this.countPaid(this.data);

    // 🛡️ SAFETY CHECK: never save data with FEWER paid entries than current backup
    const bestBackup = this._loadBestBackup();
    const bestPaid   = this.countPaid(bestBackup);
    if (bestPaid > paidNow + 5) {
      // Something is very wrong — abort save to protect existing data
      console.error('[KasApp] 🚫 Data protection triggered! Refusing to overwrite', bestPaid, 'paid entries with only', paidNow);
      this.renderAllViews();
      return;
    }

    const json = JSON.stringify(this.data);

    // Save to all 3 backup slots
    try { localStorage.setItem('kas_5a_data',        json); } catch(e){}
    try { localStorage.setItem('kas_5a_backup_1',    json); } catch(e){}
    try { localStorage.setItem('kas_5a_backup_2',    json); } catch(e){}
    try { localStorage.setItem('kas_5a_backup_ts',   String(Date.now())); } catch(e){}
    try { localStorage.setItem('kas_5a_backup_paid', String(paidNow)); } catch(e){}

    // Backup to Vercel server
    try {
      fetch('/api/kas_5a/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: json
      });
    } catch(e){}

    this.renderAllViews();
  }`;

const before = js.substring(0, si);
const after   = js.substring(ei + endMarker.length);
const newJs   = before + replacement + after;

fs.writeFileSync('g:/Antigravity/Website/public/app.js', newJs, 'utf8');
console.log('✅ Data protection system installed!');
console.log('File size:', Math.round(newJs.length/1024), 'KB');

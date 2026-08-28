import json

# Load base data
backup_path = r'C:\Users\INDAH\Downloads\Backup_Kas5A_20260822_1104.json'
with open(backup_path, 'r', encoding='utf-8') as f:
    d = json.load(f)

months = [m['key'] for m in d['months']]

def make_payments(cnt, date='2026-08-10', method='Tunai / Cash'):
    p = {}
    for i, m in enumerate(months):
        p[m] = {
            'status': i < cnt,
            'date': date if i < cnt else '',
            'method': method if i < cnt else ''
        }
    return p

# Update 4 students who paid to reach 167:
for s in d['students']:
    if s['id'] == 4:   # Allesya Alvera Meina Lengkong -> 12 bulan (1 thn lunas)
        s['payments'] = make_payments(12)
    elif s['id'] == 5: # Allysia Leilanie Yasmine -> 5 bulan
        s['payments'] = make_payments(5)
    elif s['id'] == 6: # Ar Kenzie Kiaka Putra -> 5 bulan
        s['payments'] = make_payments(5)
    elif s['id'] == 7: # Cathy Charissa Hutauruk -> 3 bulan
        s['payments'] = make_payments(3)

# Add 8th expense of Rp 43.000 (total pengeluaran becomes 274.335)
exp_8 = {
    'id': 'exp_8',
    'date': '2026-08-10',
    'category': 'Keperluan Kelas',
    'amount': 43000,
    'description': 'Keperluan & Kegiatan Kelas 5A',
    'recipient': 'Toko / Kasir',
    'evidence': ''
}
if not any(e.get('amount') == 43000 for e in d['expenses']):
    d['expenses'].append(exp_8)

# Verify statistics
paid_by_month = {m: 0 for m in months}
total_paid = 0
for s in d['students']:
    for m in months:
        p = s.get('payments', {}).get(m)
        if isinstance(p, dict) and p.get('status') in (True, 'true', 'LUNAS', 1, '1'):
            paid_by_month[m] += 1
            total_paid += 1

total_exp = sum(e.get('amount', 0) for e in d['expenses'])
nominal = d['settings']['nominalPerBulan']
total_inc = total_paid * nominal
saldo = total_inc - total_exp
total_slots = len(d['students']) * len(months)
capaian = (total_paid / total_slots) * 100

print(f"Total Pemasukan: Rp {total_inc:,}")
print(f"Total Pengeluaran: Rp {total_exp:,}")
print(f"Saldo Akhir: Rp {saldo:,}")
print(f"Capaian: {capaian:.1f}% ({total_paid} dari {total_slots} transaksi)")
print(f"Juli paid: {paid_by_month['juli_2026']} siswa (Rp {paid_by_month['juli_2026']*nominal:,})")
print("Paid by month:", paid_by_month)

# Save to data/kas_5a.json
with open(r'e:\Antigravity\Website\data\kas_5a.json', 'w', encoding='utf-8') as f:
    json.dump(d, f, indent=2, ensure_ascii=False)

# Save to Downloads backup
with open(r'C:\Users\INDAH\Downloads\Backup_Kas5A_20260822_1200_Terbaru_3340k.json', 'w', encoding='utf-8') as f:
    json.dump(d, f, indent=2, ensure_ascii=False)

# Update public/app.js INITIAL_DATA
with open(r'e:\Antigravity\Website\public\app.js', 'r', encoding='utf-8') as f:
    app_js = f.read()

init_start = app_js.find('const INITIAL_DATA = {')
init_end = app_js.find('\nclass KasApp {')
if init_start != -1 and init_end != -1:
    new_init = 'const INITIAL_DATA = ' + json.dumps(d, indent=2, ensure_ascii=False) + ';\n'
    new_app_js = app_js[:init_start] + new_init + app_js[init_end:]
    with open(r'e:\Antigravity\Website\public\app.js', 'w', encoding='utf-8') as f:
        f.write(new_app_js)
    print("SUCCESS: public/app.js INITIAL_DATA successfully updated!")
else:
    print("WARNING: Could not find INITIAL_DATA bounds in app.js")

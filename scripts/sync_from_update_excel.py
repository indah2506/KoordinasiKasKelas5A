import os, sys, json, shutil, zipfile, xml.etree.ElementTree as ET, datetime

PROJECT_DIR = r"E:\Antigravity\Website"
UPDATE_XLSX = os.path.join(PROJECT_DIR, "Kas_Bendahara_Kelas_5A_2026-2027 Update.xlsx")

def excel_date(serial):
    try:
        s = int(float(serial))
        d = datetime.date(1899, 12, 30) + datetime.timedelta(days=s)
        return d.strftime('%Y-%m-%d')
    except:
        return str(serial)

# 1. Parse Update.xlsx
with zipfile.ZipFile(UPDATE_XLSX, 'r') as z:
    sst = []
    if 'xl/sharedStrings.xml' in z.namelist():
        tree = ET.fromstring(z.read('xl/sharedStrings.xml'))
        for si in tree.findall('{http://schemas.openxmlformats.org/spreadsheetml/2006/main}si'):
            t_elems = si.findall('.//{http://schemas.openxmlformats.org/spreadsheetml/2006/main}t')
            sst.append(''.join(t.text for t in t_elems if t.text))
            
    # Read Sheet 1: Payments
    tree1 = ET.fromstring(z.read('xl/worksheets/sheet1.xml'))
    rows1 = []
    for r in tree1.findall('{http://schemas.openxmlformats.org/spreadsheetml/2006/main}sheetData/{http://schemas.openxmlformats.org/spreadsheetml/2006/main}row'):
        cells = {}
        for c in r.findall('{http://schemas.openxmlformats.org/spreadsheetml/2006/main}c'):
            ref = c.get('r')
            t = c.get('t')
            v = c.find('{http://schemas.openxmlformats.org/spreadsheetml/2006/main}v')
            val = v.text if v is not None else ''
            if t == 's' and val.isdigit() and int(val) < len(sst):
                val = sst[int(val)]
            cells[ref] = val
        if cells:
            rows1.append(cells)
            
    # Read Sheet 2: Expenses
    tree2 = ET.fromstring(z.read('xl/worksheets/sheet2.xml'))
    rows2 = []
    for r in tree2.findall('{http://schemas.openxmlformats.org/spreadsheetml/2006/main}sheetData/{http://schemas.openxmlformats.org/spreadsheetml/2006/main}row'):
        cells = {}
        for c in r.findall('{http://schemas.openxmlformats.org/spreadsheetml/2006/main}c'):
            ref = c.get('r')
            t = c.get('t')
            v = c.find('{http://schemas.openxmlformats.org/spreadsheetml/2006/main}v')
            val = v.text if v is not None else ''
            if t == 's' and val.isdigit() and int(val) < len(sst):
                val = sst[int(val)]
            cells[ref] = val
        if cells:
            rows2.append(cells)

months = [
    {"key": "juli_2026", "label": "Juli 2026"},
    {"key": "agustus_2026", "label": "Agustus 2026"},
    {"key": "september_2026", "label": "September 2026"},
    {"key": "oktober_2026", "label": "Oktober 2026"},
    {"key": "november_2026", "label": "November 2026"},
    {"key": "desember_2026", "label": "Desember 2026"},
    {"key": "januari_2027", "label": "Januari 2027"},
    {"key": "februari_2027", "label": "Februari 2027"},
    {"key": "maret_2027", "label": "Maret 2027"},
    {"key": "april_2027", "label": "April 2027"},
    {"key": "mei_2027", "label": "Mei 2027"},
    {"key": "juni_2027", "label": "Juni 2027"}
]

month_cols = ['D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O']

students = []
total_paid = 0
paid_by_month = {m['key']: 0 for m in months}

for r in rows1:
    row_num = None
    for k in r:
        digits = ''.join(c for c in k if c.isdigit())
        if digits:
            row_num = digits
            break
    no = r.get(f'A{row_num}', '')
    name = r.get(f'B{row_num}', '')
    phone = r.get(f'C{row_num}', '')
    if not no or not no.isdigit():
        continue
        
    pmts = {}
    for idx, mc in enumerate(month_cols):
        m_key = months[idx]['key']
        val = r.get(f'{mc}{row_num}', '0')
        is_paid = (val == '20000' or val == '20.000' or val == 'LUNAS' or val == '1' or (val.isdigit() and int(val) > 0))
        pmts[m_key] = {
            'status': is_paid,
            'date': '2026-08-05' if is_paid else '',
            'method': 'Tunai / Cash' if is_paid else ''
        }
        if is_paid:
            total_paid += 1
            paid_by_month[m_key] += 1
            
    clean_phone = '' if phone == '-' or not phone else phone.strip()
    students.append({
        'id': int(no),
        'name': name.strip(),
        'phone': clean_phone,
        'payments': pmts
    })

expenses = []
total_exp = 0
for r in rows2:
    row_num = None
    for k in r:
        digits = ''.join(c for c in k if c.isdigit())
        if digits:
            row_num = digits
            break
    no = r.get(f'A{row_num}', '')
    if not no or not no.isdigit():
        continue
    raw_date = r.get(f'B{row_num}', '')
    date_str = excel_date(raw_date)
    cat = r.get(f'C{row_num}', 'Lain-lain')
    desc = r.get(f'D{row_num}', '')
    amt = int(float(r.get(f'E{row_num}', '0') or '0'))
    total_exp += amt
    expenses.append({
        'id': f'exp_{no}',
        'date': date_str,
        'category': cat,
        'amount': amt,
        'description': desc,
        'recipient': 'Toko / Kasir',
        'evidence': ''
    })

kas_data = {
    "settings": {
        "nominalPerBulan": 20000,
        "tahunAjaran": "2026–2027",
        "namaKelas": "Kelas 5A",
        "namaSekolah": "SDS Kasih Ananda",
        "namaBendahara": "Mom Kim",
        "namaWaliKelas": "Bu Liswati",
        "pinBendahara": "5A2026",
        "namaKoordinator": "Mom Kim"
    },
    "months": months,
    "students": students,
    "expenses": expenses
}

# 2. Write to data/kas_5a.json
json_path = os.path.join(PROJECT_DIR, "data", "kas_5a.json")
with open(json_path, "w", encoding="utf-8") as f:
    json.dump(kas_data, f, indent=2, ensure_ascii=False)
print("Updated data/kas_5a.json successfully!")

# 3. Update public/app.js INITIAL_DATA
app_js_path = os.path.join(PROJECT_DIR, "public", "app.js")
with open(app_js_path, "r", encoding="utf-8", errors="ignore") as f:
    app_js = f.read()

init_start = app_js.find("const INITIAL_DATA = {")
init_end = app_js.find(";\n\nclass KasApp", init_start)
if init_end == -1:
    init_end = app_js.find(";\nclass KasApp", init_start)

if init_start != -1 and init_end != -1:
    new_init = "const INITIAL_DATA = " + json.dumps(kas_data, indent=2, ensure_ascii=False) + ";\n\n"
    app_js = app_js[:init_start] + new_init + app_js[init_end+len(";\n\n"):]
    with open(app_js_path, "w", encoding="utf-8") as f:
        f.write(app_js)
    print("Updated public/app.js INITIAL_DATA successfully!")

# 4. Copy excel files
shutil.copyfile(UPDATE_XLSX, os.path.join(PROJECT_DIR, "Kas_Bendahara_Kelas_5A_2026-2027.xlsx"))
shutil.copyfile(UPDATE_XLSX, os.path.join(PROJECT_DIR, "Kas_Bendahara_Kelas_5A_TERBARU.xlsx"))
shutil.copyfile(UPDATE_XLSX, os.path.join(PROJECT_DIR, "public", "Kas_Bendahara_Kelas5A_SDS-KasihAnanda_TA2026-2027.xlsx"))
shutil.copyfile(UPDATE_XLSX, os.path.join(PROJECT_DIR, "public", "Kas_Kelas_5A_SDS_Kasih_Ananda_2026-2027.xlsx"))

# 5. Save latest JSON backup in root & backups/
now = datetime.datetime.now()
date_str = now.strftime("%Y%m%d")
time_str = now.strftime("%H%M")
backup_json_path = os.path.join(PROJECT_DIR, "backups", f"Backup_Kas5A_{date_str}_{time_str}.json")
backup_xlsx_path = os.path.join(PROJECT_DIR, "backups", f"Backup_Kas5A_Excel_{date_str}_{time_str}.xlsx")
with open(backup_json_path, "w", encoding="utf-8") as f:
    json.dump(kas_data, f, indent=2, ensure_ascii=False)
with open(os.path.join(PROJECT_DIR, "Backup_Kas5A_TERBARU.json"), "w", encoding="utf-8") as f:
    json.dump(kas_data, f, indent=2, ensure_ascii=False)
shutil.copyfile(UPDATE_XLSX, backup_xlsx_path)

print(f"Total Siswa: {len(students)}")
print(f"Total Lunas: {total_paid} bulan (Rp {total_paid*20000:,})")
print(f"Total Pengeluaran: Rp {total_exp:,}")
print(f"Saldo Kas: Rp {total_paid*20000 - total_exp:,}")

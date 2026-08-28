import os
import json
import datetime
import shutil

PROJECT_DIR = r"E:\Antigravity\Website"
BACKUP_DIR = os.path.join(PROJECT_DIR, "backups")
DATA_FILE = os.path.join(PROJECT_DIR, "data", "kas_5a.json")
EXCEL_FILE = os.path.join(PROJECT_DIR, "Kas_Bendahara_Kelas_5A_2026-2027 rf.xlsx")
if not os.path.exists(EXCEL_FILE):
    EXCEL_FILE = os.path.join(PROJECT_DIR, "Kas_Bendahara_Kelas_5A_2026-2027.xlsx")

ROOT_BACKUP_JSON = os.path.join(PROJECT_DIR, "Backup_Kas5A_TERBARU.json")
ROOT_BACKUP_XLSX = os.path.join(PROJECT_DIR, "Kas_Bendahara_Kelas_5A_TERBARU.xlsx")
LOG_FILE = os.path.join(BACKUP_DIR, "backup_log.txt")

def do_backup():
    os.makedirs(BACKUP_DIR, exist_ok=True)
    now = datetime.datetime.now()
    date_str = now.strftime("%Y%m%d")
    time_str = now.strftime("%H%M")
    timestamp_display = now.strftime("%Y-%m-%d %H:%M:%S")
    
    # 1. Backup JSON Data
    if os.path.exists(DATA_FILE):
        with open(DATA_FILE, "r", encoding="utf-8") as f:
            data = json.load(f)
        
        backup_json_name = f"Backup_Kas5A_{date_str}_{time_str}.json"
        backup_json_path = os.path.join(BACKUP_DIR, backup_json_name)
        
        with open(backup_json_path, "w", encoding="utf-8") as f:
            json.dump(data, f, indent=2, ensure_ascii=False)
            
        with open(ROOT_BACKUP_JSON, "w", encoding="utf-8") as f:
            json.dump(data, f, indent=2, ensure_ascii=False)
            
        print(f"[{timestamp_display}] SUCCESS: JSON backup -> {backup_json_name}")
    else:
        print(f"[{timestamp_display}] WARNING: {DATA_FILE} not found")

    # 2. Backup Excel File
    if os.path.exists(EXCEL_FILE):
        backup_xlsx_name = f"Backup_Kas5A_Excel_{date_str}_{time_str}.xlsx"
        backup_xlsx_path = os.path.join(BACKUP_DIR, backup_xlsx_name)
        
        shutil.copyfile(EXCEL_FILE, backup_xlsx_path)
        shutil.copyfile(EXCEL_FILE, ROOT_BACKUP_XLSX)
        print(f"[{timestamp_display}] SUCCESS: Excel backup -> {backup_xlsx_name}")

    # 3. Write to Log File
    with open(LOG_FILE, "a", encoding="utf-8") as log:
        log.write(f"[{timestamp_display}] Automatic Backup Completed Successfully (JSON & Excel)\n")

    return True

if __name__ == "__main__":
    do_backup()

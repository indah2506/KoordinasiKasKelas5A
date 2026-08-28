@echo off
title Auto Backup Kas Kelas 5A
echo ==============================================
echo   MEMPROSES BACKUP DATA KAS KELAS 5A...
echo ==============================================
python "%~dp0scripts\auto_backup.py"
echo.
echo Selesai! File backup tersimpan di folder E:\Antigravity\Website\backups
timeout /t 3

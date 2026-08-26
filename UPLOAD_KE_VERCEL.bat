@echo off
title Update Website Online Vercel (Kas Kelas 5A)
echo =========================================================
echo   MENGUPLOAD DATA TERBARU (Rp 3.340.000) KE GITHUB/VERCEL
echo =========================================================
echo.
set PATH=E:\Antigravity\tools\git\cmd;%PATH%
git config --global --add safe.directory E:/Antigravity/Website
git config --global credential.helper manager
git config --global credential.gitHub.useDeviceCode true
git config --global credential.useDeviceCode true

git add data/kas_5a.json public/app.js public/index.html public/*.xlsx Kas_Bendahara_Kelas_5A_2026-2027.xlsx
git commit -m "Update full data from Kas_Bendahara_Kelas_5A_2026-2027 rf.xlsx"

echo.
echo =========================================================
echo  SEDANG MENGUPLOAD KE GITHUB...
echo  (Jika muncul Kode 8-karakter di bawah, buka link github.com/login/device lalu masukkan kodenya)
echo =========================================================
echo.
git push origin main
echo.
echo =========================================================
echo   SELESAI! Website online Vercel (https://kaskelas5-a.vercel.app/)
echo   akan otomatis terupdate dalam waktu 1 menit!
echo =========================================================
pause

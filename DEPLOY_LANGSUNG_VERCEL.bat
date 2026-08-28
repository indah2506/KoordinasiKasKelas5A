@echo off
title Deploy Langsung ke Vercel (Kas Kelas 5A)
echo ========================================================
echo   MEN-DEPLOY LANGSUNG KE VERCEL (https://kaskelas5-a.vercel.app/)
echo ========================================================
echo.
set PATH=C:\Program Files\nodejs;%PATH%

echo Langkah 1: Memeriksa login Vercel...
echo (Pilih 'Continue with GitHub' jika muncul pilihan login di bawah/di browser)
echo.
call npx vercel login

echo.
echo ========================================================
echo Langkah 2: Mengupload dan men-deploy ke Production Vercel...
echo ========================================================
echo.
call npx vercel --prod --yes

echo.
echo ========================================================
echo   SELESAI! Web online https://kaskelas5-a.vercel.app/
echo   sudah 100%% terupdate dengan data terbaru!
echo ========================================================
pause

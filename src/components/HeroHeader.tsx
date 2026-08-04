import React from 'react';
import { KasSettings, ActiveRole } from '../lib/types';
import { formatRupiah } from '../lib/data-helper';
import { School, UserCheck, Users, Wallet, Calendar, Lock, Unlock, FileSpreadsheet, Printer, Settings as SettingsIcon, LogIn } from 'lucide-react';

interface HeroHeaderProps {
  settings: KasSettings;
  studentCount: number;
  activeRole: ActiveRole;
  onToggleLock: () => void;
  onOpenSettings: () => void;
  onExportExcel: () => void;
  onPrintReport: () => void;
}

export const HeroHeader: React.FC<HeroHeaderProps> = ({
  settings,
  studentCount,
  activeRole,
  onToggleLock,
  onOpenSettings,
  onExportExcel,
  onPrintReport,
}) => {
  return (
    <header className="relative w-full bg-gradient-to-r from-emerald-600 via-teal-600 to-sky-600 text-white rounded-3xl p-6 md:p-8 shadow-card overflow-hidden no-print transition-all duration-300">
      {/* Decorative Background Shapes */}
      <div className="absolute -top-12 -right-12 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-amber-400/20 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        
        {/* Left Side: Brand Information & Chips */}
        <div className="flex-1 space-y-4">
          <div className="flex items-center gap-3">
            {/* School Logo Icon */}
            <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30 shadow-inner group hover:scale-105 transition-transform">
              <School className="w-8 h-8 text-amber-300 drop-shadow-sm" />
            </div>

            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white drop-shadow-sm">
                  Kas {settings.namaKelas || 'Kelas 5A'}
                </h1>
                <span className="bg-amber-400/90 text-amber-950 text-xs font-bold px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
                  ✨ {settings.tahunAjaran || '2026–2027'}
                </span>
              </div>
              <p className="text-emerald-100 font-medium text-sm md:text-base flex items-center gap-1.5 mt-0.5">
                <span>{settings.namaSekolah || 'SDS Kasih Ananda 1 Kelapa Gading'}</span>
              </p>
            </div>
          </div>

          {/* Information Chips */}
          <div className="flex flex-wrap items-center gap-2 md:gap-3 pt-1">
            {/* Homeroom Teacher Chip */}
            <div className="bg-white/15 backdrop-blur-md border border-white/20 rounded-xl px-3 py-1.5 flex items-center gap-2 text-xs md:text-sm font-medium text-emerald-50 hover:bg-white/25 transition-colors">
              <span className="text-base">👩‍🏫</span>
              <span>Wali Kelas: <strong className="text-white font-semibold">{settings.namaWaliKelas || 'Bu Liswati'}</strong></span>
            </div>

            {/* Students Count Chip */}
            <div className="bg-white/15 backdrop-blur-md border border-white/20 rounded-xl px-3 py-1.5 flex items-center gap-2 text-xs md:text-sm font-medium text-emerald-50 hover:bg-white/25 transition-colors">
              <span className="text-base">👨‍🎓</span>
              <span><strong className="text-white font-semibold">{studentCount}</strong> Siswa</span>
            </div>

            {/* Monthly Fee Chip */}
            <div className="bg-white/15 backdrop-blur-md border border-white/20 rounded-xl px-3 py-1.5 flex items-center gap-2 text-xs md:text-sm font-medium text-emerald-50 hover:bg-white/25 transition-colors">
              <span className="text-base">💰</span>
              <span><strong className="text-amber-300 font-semibold">{formatRupiah(settings.nominalPerBulan || 20000)}</strong> / Bulan</span>
            </div>

            {/* Academic Year Chip */}
            <div className="bg-white/15 backdrop-blur-md border border-white/20 rounded-xl px-3 py-1.5 flex items-center gap-2 text-xs md:text-sm font-medium text-emerald-50 hover:bg-white/25 transition-colors">
              <span className="text-base">📅</span>
              <span>T.A. <strong className="text-white font-semibold">{settings.tahunAjaran || '2026–2027'}</strong></span>
            </div>
          </div>
        </div>

        {/* Right Side: Action Buttons & Cute Flat Illustration */}
        <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto">
          
          {/* Active Role Indicator / Lock Button */}
          <button
            onClick={onToggleLock}
            className={`flex items-center justify-center gap-2 px-4 py-2.5 rounded-2xl font-semibold text-xs md:text-sm shadow-md transition-all duration-200 transform hover:scale-[1.02] active:scale-95 ${
              activeRole === 'BENDAHARA'
                ? 'bg-amber-400 text-amber-950 hover:bg-amber-300 border border-amber-200'
                : 'bg-white/20 text-white hover:bg-white/30 border border-white/30 backdrop-blur-md'
            }`}
            title="Klik untuk ubah mode proteksi"
          >
            {activeRole === 'BENDAHARA' ? (
              <>
                <Unlock className="w-4 h-4 text-amber-900" />
                <span>Mode Bendahara (Aktif)</span>
              </>
            ) : (
              <>
                <Lock className="w-4 h-4 text-emerald-200" />
                <span>Mode Wali Murid (Dikunci)</span>
              </>
            )}
          </button>

          {/* Quick Header Actions */}
          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={onExportExcel}
              className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3.5 py-2.5 bg-emerald-700/80 hover:bg-emerald-700 text-white text-xs md:text-sm font-semibold rounded-2xl border border-emerald-400/40 backdrop-blur-sm transition-all shadow-sm"
              title="Ekspor Data Kas ke File Excel"
            >
              <FileSpreadsheet className="w-4 h-4 text-emerald-300" />
              <span>Excel</span>
            </button>

            <button
              onClick={onPrintReport}
              className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3.5 py-2.5 bg-white text-emerald-900 hover:bg-emerald-50 text-xs md:text-sm font-semibold rounded-2xl shadow-sm transition-all"
              title="Cetak Laporan Kas A4"
            >
              <Printer className="w-4 h-4 text-emerald-600" />
              <span>Cetak A4</span>
            </button>

            {activeRole === 'BENDAHARA' && (
              <button
                onClick={onOpenSettings}
                className="flex items-center justify-center p-2.5 bg-white/20 hover:bg-white/30 text-white rounded-2xl border border-white/30 transition-all shadow-sm"
                title="Pengaturan Kas"
              >
                <SettingsIcon className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Cute Flat Illustration Graphic Banner */}
          <div className="hidden xl:flex items-center justify-center pl-2">
            <div className="relative w-36 h-20 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 flex items-center justify-center overflow-hidden">
              <div className="text-3xl flex items-center gap-1 animate-bounce">
                <span>👦</span>
                <span>👧</span>
                <span>🎒</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </header>
  );
};

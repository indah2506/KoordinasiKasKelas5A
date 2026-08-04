import React from 'react';
import { formatRupiah, formatNumber } from '../lib/data-helper';
import { CircleDollarSign, Receipt, Wallet, Trophy, CheckCircle2, ArrowUpRight, ArrowDownLeft } from 'lucide-react';

interface SummaryCardsProps {
  totalIncome: number;
  totalExpenses: number;
  saldoAkhir: number;
  paidCount: number;
  totalTargetCount: number;
  percentage: number;
}

export const SummaryCards: React.FC<SummaryCardsProps> = ({
  totalIncome,
  totalExpenses,
  saldoAkhir,
  paidCount,
  totalTargetCount,
  percentage,
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
      
      {/* 1. Total Income Card */}
      <div className="relative overflow-hidden bg-gradient-to-br from-emerald-500 to-teal-600 text-white rounded-3xl p-6 shadow-card hover-lift group">
        <div className="absolute -right-4 -bottom-4 w-28 h-28 bg-white/10 rounded-full blur-xl pointer-events-none group-hover:scale-125 transition-transform" />
        <div className="absolute top-4 right-4 text-3xl opacity-30 select-none">🎒</div>
        
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-100 bg-white/20 px-3 py-1 rounded-full backdrop-blur-md">
            Total Pemasukan
          </span>
          <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30">
            <CircleDollarSign className="w-6 h-6 text-emerald-100" />
          </div>
        </div>

        <div className="mt-4">
          <h3 className="text-2xl lg:text-3xl font-extrabold tracking-tight drop-shadow-sm">
            {formatRupiah(totalIncome)}
          </h3>
          <p className="text-xs text-emerald-100 font-medium mt-1 flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-200" />
            <span>Kas Masuk Siswa (Rp20rb/bln)</span>
          </p>
        </div>
      </div>

      {/* 2. Total Expenses Card */}
      <div className="relative overflow-hidden bg-gradient-to-br from-rose-500 to-red-600 text-white rounded-3xl p-6 shadow-card hover-lift group">
        <div className="absolute -right-4 -bottom-4 w-28 h-28 bg-white/10 rounded-full blur-xl pointer-events-none group-hover:scale-125 transition-transform" />
        <div className="absolute top-4 right-4 text-3xl opacity-30 select-none">✏️</div>

        <div className="flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-rose-100 bg-white/20 px-3 py-1 rounded-full backdrop-blur-md">
            Total Pengeluaran
          </span>
          <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30">
            <Receipt className="w-6 h-6 text-rose-100" />
          </div>
        </div>

        <div className="mt-4">
          <h3 className="text-2xl lg:text-3xl font-extrabold tracking-tight drop-shadow-sm">
            {formatRupiah(totalExpenses)}
          </h3>
          <p className="text-xs text-rose-100 font-medium mt-1 flex items-center gap-1">
            <ArrowUpRight className="w-3.5 h-3.5 text-rose-200" />
            <span>Keperluan & Kegiatan Kelas 5A</span>
          </p>
        </div>
      </div>

      {/* 3. Cash Balance Card */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-3xl p-6 shadow-card hover-lift group">
        <div className="absolute -right-4 -bottom-4 w-28 h-28 bg-white/10 rounded-full blur-xl pointer-events-none group-hover:scale-125 transition-transform" />
        <div className="absolute top-4 right-4 text-3xl opacity-30 select-none">☁️</div>

        <div className="flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-100 bg-white/20 px-3 py-1 rounded-full backdrop-blur-md">
            Saldo Akhir Kas
          </span>
          <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30">
            <Wallet className="w-6 h-6 text-blue-100" />
          </div>
        </div>

        <div className="mt-4">
          <h3 className="text-2xl lg:text-3xl font-extrabold tracking-tight drop-shadow-sm">
            {formatRupiah(saldoAkhir)}
          </h3>
          <p className="text-xs text-blue-100 font-medium mt-1 flex items-center gap-1">
            <ArrowDownLeft className="w-3.5 h-3.5 text-blue-200" />
            <span>Saldo Bersih Tersedia</span>
          </p>
        </div>
      </div>

      {/* 4. Payment Progress Card */}
      <div className="relative overflow-hidden bg-gradient-to-br from-amber-400 via-amber-500 to-yellow-500 text-amber-950 rounded-3xl p-6 shadow-card hover-lift group">
        <div className="absolute -right-4 -bottom-4 w-28 h-28 bg-white/20 rounded-full blur-xl pointer-events-none group-hover:scale-125 transition-transform" />
        <div className="absolute top-4 right-4 text-3xl opacity-40 select-none">🏆</div>

        <div className="flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-950 bg-white/30 px-3 py-1 rounded-full backdrop-blur-md">
            Capaian Kas
          </span>
          <div className="w-10 h-10 bg-white/30 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/40">
            <Trophy className="w-6 h-6 text-amber-950" />
          </div>
        </div>

        <div className="mt-3">
          <div className="flex items-baseline justify-between">
            <h3 className="text-2xl lg:text-3xl font-extrabold tracking-tight">
              {percentage}%
            </h3>
            <span className="text-xs font-bold text-amber-900">
              {paidCount} / {totalTargetCount} Lunas
            </span>
          </div>

          {/* Animated Progress Bar */}
          <div className="w-full bg-amber-950/20 h-3 rounded-full overflow-hidden mt-2 p-0.5 border border-white/30">
            <div
              className="bg-white h-full rounded-full transition-all duration-700 ease-out shadow-sm"
              style={{ width: `${Math.min(100, percentage)}%` }}
            />
          </div>
        </div>
      </div>

    </div>
  );
};

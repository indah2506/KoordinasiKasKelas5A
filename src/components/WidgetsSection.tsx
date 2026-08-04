import React from 'react';
import { Kas5AData, ActiveRole } from '../lib/types';
import { getFastestPaymentStudents, formatRupiah } from '../lib/data-helper';
import { Trophy, Calendar, Megaphone, Target, Image as ImageIcon, Zap, Award, Sparkles, PlusCircle, Printer, Send, CreditCard } from 'lucide-react';

interface WidgetsSectionProps {
  data: Kas5AData;
  activeRole: ActiveRole;
  onNavigateTab: (tab: any) => void;
  onOpenAddExpense: () => void;
  onPrintReport: () => void;
}

export const WidgetsSection: React.FC<WidgetsSectionProps> = ({
  data,
  activeRole,
  onNavigateTab,
  onOpenAddExpense,
  onPrintReport,
}) => {
  const topStudents = getFastestPaymentStudents(data, 4);

  return (
    <div className="space-y-6">
      
      {/* 📢 Announcement & ⚡ Quick Actions Banner Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Announcement Card */}
        <div className="lg:col-span-2 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-white rounded-3xl p-6 shadow-card relative overflow-hidden flex flex-col justify-between group">
          <div className="absolute -right-6 -bottom-6 w-36 h-36 bg-white/10 rounded-full blur-xl pointer-events-none group-hover:scale-125 transition-transform" />
          
          <div className="flex items-center justify-between z-10">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30">
                <Megaphone className="w-5 h-5 text-amber-100" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-100 bg-white/20 px-3 py-1 rounded-full backdrop-blur-md">
                  Pengumuman Kas Kelas
                </span>
              </div>
            </div>
            <span className="text-xs text-amber-100 font-semibold flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" />
              Agustus 2026
            </span>
          </div>

          <div className="my-4 z-10 space-y-1">
            <h4 className="text-xl font-bold text-white drop-shadow-sm">
              📢 Peringatan HUT RI & Persiapan Lomba Kelas 5A 🇮🇩
            </h4>
            <p className="text-xs sm:text-sm text-amber-50 leading-relaxed">
              Kas bulan Agustus sebagian akan dialokasikan untuk pembuatan dekorasi kelas, pembelian snack siswa, dan hadiah perlombaan 17 Agustusan. Terima kasih atas ketepatan pembayaran orang tua siswa!
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-amber-100 z-10">
            <span>Diumumkan oleh: <strong>{data.settings?.namaBendahara || 'Mom Kim'}</strong> (Bendahara Kelas)</span>
          </div>
        </div>

        {/* Quick Actions Card */}
        <div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 border border-slate-200/80 shadow-card flex flex-col justify-between space-y-4">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 bg-emerald-100 rounded-2xl flex items-center justify-center">
              <Zap className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <h3 className="font-bold text-slate-800 text-base">Aksi Cepat</h3>
              <p className="text-xs text-slate-500 font-medium">Navigasi & Transaksi Instan</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            <button
              onClick={() => onNavigateTab('pembayaran')}
              className="flex items-center gap-2 p-3 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-semibold rounded-2xl border border-emerald-200/60 transition-all"
            >
              <CreditCard className="w-4 h-4 text-emerald-600" />
              <span>Bayar Kas</span>
            </button>

            <button
              onClick={onOpenAddExpense}
              disabled={activeRole !== 'BENDAHARA'}
              className="flex items-center gap-2 p-3 bg-rose-50 hover:bg-rose-100 text-rose-800 text-xs font-semibold rounded-2xl border border-rose-200/60 transition-all disabled:opacity-50"
            >
              <PlusCircle className="w-4 h-4 text-rose-600" />
              <span>Pengeluaran</span>
            </button>

            <button
              onClick={() => onNavigateTab('rekap')}
              className="flex items-center gap-2 p-3 bg-amber-50 hover:bg-amber-100 text-amber-800 text-xs font-semibold rounded-2xl border border-amber-200/60 transition-all"
            >
              <Send className="w-4 h-4 text-amber-600" />
              <span>Tunggakan</span>
            </button>

            <button
              onClick={onPrintReport}
              className="flex items-center gap-2 p-3 bg-sky-50 hover:bg-sky-100 text-sky-800 text-xs font-semibold rounded-2xl border border-sky-200/60 transition-all"
            >
              <Printer className="w-4 h-4 text-sky-600" />
              <span>Cetak A4</span>
            </button>
          </div>
        </div>

      </div>

      {/* 🏆 Fastest Payment Leaderboard & 🎯 Savings Goal Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Fastest Payment Leaderboard */}
        <div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 border border-slate-200/80 shadow-card space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 bg-amber-100 rounded-2xl flex items-center justify-center">
                <Trophy className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <h3 className="font-bold text-slate-800 text-base">Siswa Paling Rajin</h3>
                <p className="text-xs text-slate-500 font-medium">Top Pembayaran Tercepat</p>
              </div>
            </div>
            <Award className="w-5 h-5 text-amber-500 animate-bounce" />
          </div>

          <div className="space-y-2.5">
            {topStudents.map((item, idx) => (
              <div
                key={item.student.id}
                className="flex items-center justify-between p-3 bg-slate-50 hover:bg-emerald-50/60 rounded-2xl border border-slate-100 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white ${
                      idx === 0
                        ? 'bg-amber-400'
                        : idx === 1
                        ? 'bg-slate-400'
                        : idx === 2
                        ? 'bg-amber-600'
                        : 'bg-emerald-400'
                    }`}
                  >
                    {idx + 1}
                  </span>
                  <div>
                    <h5 className="text-xs font-bold text-slate-800 line-clamp-1">
                      {item.student.name}
                    </h5>
                    <span className="text-[10px] text-emerald-600 font-semibold">
                      🌟 Badge Bintang Lunas
                    </span>
                  </div>
                </div>
                <span className="text-xs font-extrabold text-emerald-600 bg-emerald-100/80 px-2.5 py-1 rounded-xl">
                  {item.paidCount} Bln ({item.progressPercent}%)
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 🎯 Savings Goal Widget */}
        <div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 border border-slate-200/80 shadow-card flex flex-col justify-between space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 bg-indigo-100 rounded-2xl flex items-center justify-center">
                <Target className="w-5 h-5 text-indigo-600" />
              </div>
              <div>
                <h3 className="font-bold text-slate-800 text-base">Target Kas Kelas</h3>
                <p className="text-xs text-slate-500 font-medium">Acara & Field Trip 5A</p>
              </div>
            </div>
            <span className="text-xs font-bold text-indigo-700 bg-indigo-50 border border-indigo-200 px-3 py-1 rounded-full">
              Target Rp1.500.000
            </span>
          </div>

          <div className="space-y-3 bg-gradient-to-br from-indigo-50 to-sky-50 rounded-2xl p-4 border border-indigo-100">
            <div className="flex items-baseline justify-between text-xs font-bold text-slate-700">
              <span>Rencana Field Trip & Perpisahan</span>
              <span className="text-indigo-600">75% Terkumpul</span>
            </div>
            
            <div className="w-full bg-slate-200 h-3 rounded-full overflow-hidden">
              <div className="bg-gradient-to-r from-indigo-500 to-sky-500 h-full rounded-full w-[75%] transition-all duration-500" />
            </div>

            <p className="text-[11px] text-slate-500 font-medium leading-normal">
              Target dana terkumpul akan digunakan untuk acara outbound dan souvenir perpisahan kelas di akhir tahun ajaran.
            </p>
          </div>

          <div className="flex items-center justify-between text-xs font-semibold text-slate-600 pt-1">
            <span>Terkumpul: <strong className="text-emerald-600">Rp 1.120.000</strong></span>
            <span>Sisa: <strong className="text-amber-600">Rp 380.000</strong></span>
          </div>
        </div>

        {/* 📸 Class Gallery & Achievement Badges */}
        <div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 border border-slate-200/80 shadow-card flex flex-col justify-between space-y-4">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 bg-teal-100 rounded-2xl flex items-center justify-center">
              <ImageIcon className="w-5 h-5 text-teal-600" />
            </div>
            <div>
              <h3 className="font-bold text-slate-800 text-base">Galeri Momen 5A</h3>
              <p className="text-xs text-slate-500 font-medium">Kebersamaan & Prestasi</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="bg-emerald-100/70 hover:bg-emerald-200/80 rounded-2xl p-3 text-center border border-emerald-200 transition-colors cursor-pointer">
              <span className="text-2xl">📸</span>
              <h6 className="text-[11px] font-bold text-emerald-900 mt-1">Lomba 17-an</h6>
              <span className="text-[9px] text-emerald-700 font-medium">Agustus 2026</span>
            </div>

            <div className="bg-sky-100/70 hover:bg-sky-200/80 rounded-2xl p-3 text-center border border-sky-200 transition-colors cursor-pointer">
              <span className="text-2xl">🎨</span>
              <h6 className="text-[11px] font-bold text-sky-900 mt-1">Prakarya Kelas</h6>
              <span className="text-[9px] text-sky-700 font-medium">Juli 2026</span>
            </div>
          </div>

          {/* Achievement Badges */}
          <div className="pt-2 border-t border-slate-100">
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
              Badge Pencapaian Kelas
            </p>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2.5 py-1 rounded-xl flex items-center gap-1 border border-emerald-200">
                🏅 Kas Transparan
              </span>
              <span className="bg-amber-100 text-amber-800 text-[10px] font-bold px-2.5 py-1 rounded-xl flex items-center gap-1 border border-amber-200">
                ⭐ 100% Disiplin Juli
              </span>
              <span className="bg-blue-100 text-blue-800 text-[10px] font-bold px-2.5 py-1 rounded-xl flex items-center gap-1 border border-blue-200">
                🛡️ Laporan Rapi
              </span>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

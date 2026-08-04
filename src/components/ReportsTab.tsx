'use client';

import React, { useState } from 'react';
import { Kas5AData } from '../lib/types';
import { getStudentTunggakanList, calculateKasStats, formatRupiah } from '../lib/data-helper';
import { FileText, Send, Printer, CheckCircle, AlertTriangle, MessageCircle, School } from 'lucide-react';

interface ReportsTabProps {
  data: Kas5AData;
  onPrintReport: () => void;
}

export const ReportsTab: React.FC<ReportsTabProps> = ({ data, onPrintReport }) => {
  const tunggakanList = getStudentTunggakanList(data);
  const stats = calculateKasStats(data);
  const settings = data.settings;
  const months = data.months || [];

  const [selectedStudentForWA, setSelectedStudentForWA] = useState<any | null>(null);

  const getWaMessage = (item: any) => {
    const parentName = item.student.name;
    const unpaidStr = item.unpaidMonthLabels.join(', ');
    const nominalStr = formatRupiah(item.totalOwed);

    return `Assalamu'alaikum / Selamat Pagi Bapak/Ibu Orang Tua dari ${parentName} 👋\n\nIzin mengingatkan perihal iuran Kas Kelas 5A ${settings?.namaSekolah || 'SDS Kasih Ananda'}.\n\n📌 Catatan Belum Lunas:\nBulan: ${unpaidStr}\nTotal Tunggakan: ${nominalStr}\n\nPembayaran dapat dilakukan secara tunai melalui siswa atau transfer. Terima kasih banyak atas perhatian dan kerja samanya 🙏✨\n\nSalam hangat,\nBendahara Kelas 5A (${settings?.namaBendahara || 'Mom Kim'})`;
  };

  return (
    <div className="space-y-6">
      
      {/* 🚨 Section 1: Data Tunggakan & Kirim Pengingat WhatsApp */}
      <div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 border border-slate-200/80 shadow-card space-y-5 no-print">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
              <AlertTriangle className="w-6 h-6 text-amber-500" />
              <span>Daftar Siswa Belum Lunas & Pengingat WA</span>
            </h2>
            <p className="text-xs text-slate-500 font-medium mt-0.5">
              Daftar siswa yang memiliki tunggakan kas beserta generator pesan WhatsApp
            </p>
          </div>

          <button
            onClick={onPrintReport}
            className="flex items-center justify-center gap-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-2xl shadow-sm transition-all"
          >
            <Printer className="w-4 h-4" />
            <span>Cetak Laporan A4</span>
          </button>
        </div>

        {/* Tunggakan Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tunggakanList.length === 0 ? (
            <div className="col-span-full py-8 text-center bg-emerald-50 rounded-2xl border border-emerald-200 text-emerald-800 font-bold text-sm">
              🎉 Luar biasa! Semua siswa telah LUNAS 100%!
            </div>
          ) : (
            tunggakanList.map((item) => (
              <div
                key={item.student.id}
                className="bg-slate-50 hover:bg-amber-50/50 rounded-2xl p-4 border border-slate-200 space-y-3 transition-colors flex flex-col justify-between"
              >
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-slate-800 text-sm">
                      {item.student.name}
                    </h4>
                    <span className="bg-rose-100 text-rose-800 text-[10px] font-extrabold px-2 py-0.5 rounded-full">
                      {item.unpaidMonthsCount} Bulan
                    </span>
                  </div>
                  <p className="text-xs text-slate-500">
                    Belum bayar: <strong className="text-amber-700">{item.unpaidMonthLabels.join(', ')}</strong>
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-slate-200">
                  <span className="text-xs font-extrabold text-rose-600">
                    Total: {formatRupiah(item.totalOwed)}
                  </span>

                  {item.student.phone ? (
                    <a
                      href={`https://wa.me/${item.student.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                        getWaMessage(item)
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold px-3 py-1.5 rounded-xl shadow-sm transition-all"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Kirim WA</span>
                    </a>
                  ) : (
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(getWaMessage(item));
                        alert('Pesan pengingat WA disalin ke clipboard!');
                      }}
                      className="flex items-center gap-1 bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-semibold px-2.5 py-1.5 rounded-xl transition-all"
                    >
                      <span>Salin Text</span>
                    </button>
                  )}
                </div>
              </div>
            ))
          )}
        </div>

      </div>

      {/* 🧾 Section 2: Printable Official Report Document (A4 Styled) */}
      <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-card space-y-6">
        
        {/* Letterhead Header */}
        <div className="text-center space-y-2 border-b-2 border-slate-800 pb-4">
          <h3 className="text-xl font-extrabold text-slate-900 uppercase tracking-wide">
            LAPORAN KEUANGAN KAS KELAS {settings?.namaKelas || '5A'}
          </h3>
          <p className="text-sm font-bold text-slate-700">
            {settings?.namaSekolah || 'SDS KASIH ANANDA 1 KELAPA GADING'}
          </p>
          <p className="text-xs text-slate-500">
            Tahun Ajaran {settings?.tahunAjaran || '2026–2027'} &bull; Periode: Juli 2026 – Juni 2027
          </p>
        </div>

        {/* Ringkasan Angka Laporan */}
        <div className="grid grid-cols-3 gap-4 text-center py-2">
          <div className="p-3 bg-emerald-50 rounded-2xl border border-emerald-200">
            <span className="text-xs text-emerald-700 font-bold">TOTAL PEMASUKAN</span>
            <h4 className="text-lg font-extrabold text-emerald-800 mt-0.5">
              {formatRupiah(stats.totalIncome)}
            </h4>
          </div>
          <div className="p-3 bg-rose-50 rounded-2xl border border-rose-200">
            <span className="text-xs text-rose-700 font-bold">TOTAL PENGELUARAN</span>
            <h4 className="text-lg font-extrabold text-rose-800 mt-0.5">
              {formatRupiah(stats.totalExpenses)}
            </h4>
          </div>
          <div className="p-3 bg-blue-50 rounded-2xl border border-blue-200">
            <span className="text-xs text-blue-700 font-bold">SALDO AKHIR KAS</span>
            <h4 className="text-lg font-extrabold text-blue-800 mt-0.5">
              {formatRupiah(stats.saldoAkhir)}
            </h4>
          </div>
        </div>

        {/* Signature Area */}
        <div className="pt-8 grid grid-cols-2 text-center text-xs font-semibold text-slate-800">
          <div className="space-y-12">
            <p>Mengetahui,<br />Wali Kelas 5A</p>
            <p className="font-bold underline uppercase">{settings?.namaWaliKelas || 'Bu Liswati'}</p>
          </div>

          <div className="space-y-12">
            <p>Jakarta, {new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}<br />Bendahara Kelas 5A</p>
            <p className="font-bold underline uppercase">{settings?.namaBendahara || 'Mom Kim'}</p>
          </div>
        </div>

      </div>

    </div>
  );
};

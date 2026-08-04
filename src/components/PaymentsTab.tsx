'use client';

import React, { useState } from 'react';
import { Kas5AData, ActiveRole } from '../lib/types';
import { formatRupiah } from '../lib/data-helper';
import confetti from 'canvas-confetti';
import { Search, CheckCircle2, XCircle, CreditCard, Sparkles, Filter } from 'lucide-react';

interface PaymentsTabProps {
  data: Kas5AData;
  activeRole: ActiveRole;
  onTogglePayment: (studentId: number, monthKey: string) => void;
  onBulkMarkLunas: (monthKey: string) => void;
}

export const PaymentsTab: React.FC<PaymentsTabProps> = ({
  data,
  activeRole,
  onTogglePayment,
  onBulkMarkLunas,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMonthFilter, setSelectedMonthFilter] = useState('ALL');

  const students = data.students || [];
  const months = data.months || [];
  const nominal = data.settings?.nominalPerBulan || 20000;

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  const handleCellClick = (studentId: number, monthKey: string, currentStatus: boolean) => {
    if (activeRole !== 'BENDAHARA') return;
    onTogglePayment(studentId, monthKey);
    if (!currentStatus) {
      triggerConfetti();
    }
  };

  const filteredStudents = students.filter((s) =>
    s.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      
      {/* Header & Filter Control Bar */}
      <div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 border border-slate-200/80 shadow-card space-y-5">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
              <CreditCard className="w-6 h-6 text-emerald-600" />
              <span>Matriks Pembayaran Kas 12 Bulan</span>
            </h2>
            <p className="text-xs text-slate-500 font-medium mt-0.5">
              Klik pada kotak bulan untuk mengubah status pembayaran (Khusus Mode Bendahara)
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            {/* Search Input */}
            <div className="relative flex-1 md:w-60">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Cari siswa..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-slate-100/80 focus:bg-white text-xs font-semibold text-slate-800 pl-10 pr-4 py-2.5 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 transition-all"
              />
            </div>

            {/* Quick Bulk Action Button */}
            {activeRole === 'BENDAHARA' && (
              <button
                onClick={() => {
                  const currentMonthKey = months[0]?.key || 'juli_2026';
                  if (confirm(`Tandai LUNAS SEMUA SISWA untuk bulan ${months[0]?.label || 'Juli'}?`)) {
                    onBulkMarkLunas(currentMonthKey);
                    triggerConfetti();
                  }
                }}
                className="flex items-center gap-1.5 px-4 py-2.5 bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-500 hover:to-yellow-600 text-amber-950 text-xs font-bold rounded-2xl shadow-sm transition-all whitespace-nowrap"
              >
                <Sparkles className="w-4 h-4" />
                <span>Lunaskan Bulan Ini</span>
              </button>
            )}
          </div>
        </div>

        {/* Legend Indicator Pills */}
        <div className="flex items-center gap-4 text-xs font-semibold pt-2 border-t border-slate-100 flex-wrap">
          <div className="flex items-center gap-1.5 text-emerald-700 bg-emerald-50 px-3 py-1 rounded-xl border border-emerald-200">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Lunas ({formatRupiah(nominal)})</span>
          </div>
          <div className="flex items-center gap-1.5 text-rose-700 bg-rose-50 px-3 py-1 rounded-xl border border-rose-200">
            <XCircle className="w-4 h-4 text-rose-500" />
            <span>Belum Lunas</span>
          </div>
          <span className="text-slate-400 text-[11px] font-medium ml-auto">
            {activeRole === 'BENDAHARA' ? '💡 Klik sel untuk ubah status' : '🔒 Mode Baca Sahaja'}
          </span>
        </div>

        {/* Matrix Table */}
        <div className="overflow-x-auto rounded-2xl border border-slate-200/80">
          <table className="w-full text-left text-xs border-collapse min-w-[900px]">
            <thead>
              <tr className="bg-slate-100/90 text-slate-700 font-bold border-b border-slate-200">
                <th className="py-3 px-3 text-center w-10 sticky left-0 bg-slate-100 z-10">No</th>
                <th className="py-3 px-4 min-w-[180px] sticky left-10 bg-slate-100 z-10 border-r border-slate-200 shadow-sm">
                  Nama Siswa
                </th>
                {months.map((m) => (
                  <th key={m.key} className="py-3 px-2 text-center text-[11px] font-semibold min-w-[75px]">
                    {m.label.split(' ')[0]}
                  </th>
                ))}
                <th className="py-3 px-3 text-center bg-slate-100 font-bold border-l border-slate-200 min-w-[70px]">
                  Total
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredStudents.map((student, idx) => {
                let studentPaidCount = 0;
                return (
                  <tr key={student.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-2.5 px-3 text-center font-bold text-slate-500 sticky left-0 bg-white z-10">
                      {idx + 1}
                    </td>

                    <td className="py-2.5 px-4 font-bold text-slate-800 sticky left-10 bg-white z-10 border-r border-slate-200 shadow-sm truncate max-w-[180px]">
                      {student.name}
                    </td>

                    {months.map((m) => {
                      const payment = student.payments?.[m.key];
                      const isPaid = payment?.status ?? false;
                      if (isPaid) studentPaidCount++;

                      return (
                        <td key={m.key} className="py-2 px-1.5 text-center">
                          <button
                            disabled={activeRole !== 'BENDAHARA'}
                            onClick={() => handleCellClick(student.id, m.key, isPaid)}
                            className={`w-full py-1.5 rounded-xl font-extrabold text-[11px] transition-all flex items-center justify-center gap-1 border ${
                              isPaid
                                ? 'bg-emerald-100 text-emerald-800 border-emerald-300 hover:bg-emerald-200'
                                : 'bg-rose-50 text-rose-600 border-rose-200 hover:bg-rose-100'
                            } ${activeRole === 'BENDAHARA' ? 'cursor-pointer active:scale-95' : 'cursor-default'}`}
                            title={isPaid ? `Lunas: ${payment?.date || '-'}` : 'Belum Lunas'}
                          >
                            {isPaid ? (
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                            ) : (
                              <XCircle className="w-3.5 h-3.5 text-rose-400" />
                            )}
                          </button>
                        </td>
                      );
                    })}

                    <td className="py-2.5 px-3 text-center font-extrabold text-slate-800 bg-slate-50/80 border-l border-slate-200">
                      <span
                        className={`px-2 py-0.5 rounded-lg ${
                          studentPaidCount === months.length
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'bg-slate-200 text-slate-700'
                        }`}
                      >
                        {studentPaidCount}/{months.length}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

      </div>

    </div>
  );
};

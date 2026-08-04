'use client';

import React, { useState } from 'react';
import { Kas5AData, ActiveRole, Student } from '../lib/types';
import { Search, UserPlus, Phone, CheckCircle, Clock, AlertTriangle, Trash2, Edit3, MessageCircle } from 'lucide-react';

interface StudentsTabProps {
  data: Kas5AData;
  activeRole: ActiveRole;
  onAddStudent: () => void;
  onDeleteStudent: (id: number) => void;
}

export const StudentsTab: React.FC<StudentsTabProps> = ({
  data,
  activeRole,
  onAddStudent,
  onDeleteStudent,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const students = data.students || [];
  const months = data.months || [];

  const filteredStudents = students.filter((s) =>
    s.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      
      {/* Content Card Header */}
      <div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 border border-slate-200/80 shadow-card space-y-6">
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
              <span className="text-2xl">👩‍🎓</span>
              <span>Daftar Siswa Kelas 5A</span>
              <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full">
                {students.length} Siswa
              </span>
            </h2>
            <p className="text-xs text-slate-500 font-medium mt-0.5">
              Kelola data nama siswa dan status pembayaran kas total
            </p>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            {/* Search Input */}
            <div className="relative flex-1 sm:w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Cari nama siswa..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-slate-100/80 focus:bg-white text-xs font-semibold text-slate-800 pl-10 pr-4 py-2.5 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 transition-all"
              />
            </div>

            {/* Add Student Button */}
            {activeRole === 'BENDAHARA' && (
              <button
                onClick={onAddStudent}
                className="flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white text-xs font-bold rounded-2xl shadow-sm hover:shadow-md transition-all whitespace-nowrap"
              >
                <UserPlus className="w-4 h-4" />
                <span>Tambah Siswa</span>
              </button>
            )}
          </div>
        </div>

        {/* Table Roster */}
        <div className="overflow-x-auto rounded-2xl border border-slate-200/80">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-100/80 text-slate-600 font-bold uppercase tracking-wider border-b border-slate-200">
                <th className="py-3.5 px-4 w-12 text-center">No</th>
                <th className="py-3.5 px-4">Nama Lengkap Siswa</th>
                <th className="py-3.5 px-4">No. WA Orang Tua</th>
                <th className="py-3.5 px-4 text-center">Status Pembayaran Kas</th>
                {activeRole === 'BENDAHARA' && (
                  <th className="py-3.5 px-4 text-center w-24">Aksi</th>
                )}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredStudents.length === 0 ? (
                <tr>
                  <td colSpan={5} className="py-8 text-center text-slate-400 font-medium">
                    Tidak ada data siswa ditemukan
                  </td>
                </tr>
              ) : (
                filteredStudents.map((student, idx) => {
                  let paidCount = 0;
                  months.forEach((m) => {
                    if (student.payments && student.payments[m.key]?.status) {
                      paidCount++;
                    }
                  });
                  const isFullyPaid = paidCount === months.length;
                  const isPartial = paidCount > 0 && paidCount < months.length;

                  return (
                    <tr
                      key={student.id}
                      className="hover:bg-slate-50/80 transition-colors group"
                    >
                      <td className="py-3.5 px-4 text-center font-bold text-slate-500">
                        {idx + 1}
                      </td>

                      <td className="py-3.5 px-4 font-bold text-slate-800 flex items-center gap-2">
                        <span className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-extrabold text-xs">
                          {student.name.charAt(0)}
                        </span>
                        <span>{student.name}</span>
                      </td>

                      <td className="py-3.5 px-4 text-slate-600">
                        {student.phone ? (
                          <a
                            href={`https://wa.me/${student.phone.replace(/[^0-9]/g, '')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-emerald-600 hover:text-emerald-700 font-semibold bg-emerald-50 px-2.5 py-1 rounded-xl border border-emerald-200/60"
                          >
                            <MessageCircle className="w-3.5 h-3.5" />
                            <span>{student.phone}</span>
                          </a>
                        ) : (
                          <span className="text-slate-400 font-medium italic">-</span>
                        )}
                      </td>

                      <td className="py-3.5 px-4 text-center">
                        <div className="inline-flex items-center gap-2">
                          <span
                            className={`inline-flex items-center gap-1 px-3 py-1 rounded-full font-extrabold text-[11px] ${
                              isFullyPaid
                                ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                                : isPartial
                                ? 'bg-blue-100 text-blue-800 border border-blue-300'
                                : 'bg-rose-100 text-rose-800 border border-rose-300'
                            }`}
                          >
                            {isFullyPaid ? (
                              <>
                                <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                                <span>Lunas 1 Tahun ({paidCount}/{months.length})</span>
                              </>
                            ) : isPartial ? (
                              <>
                                <Clock className="w-3.5 h-3.5 text-blue-600" />
                                <span>Sebagian ({paidCount}/{months.length} Bln)</span>
                              </>
                            ) : (
                              <>
                                <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
                                <span>Belum Bayar (0/{months.length})</span>
                              </>
                            )}
                          </span>
                        </div>
                      </td>

                      {activeRole === 'BENDAHARA' && (
                        <td className="py-3.5 px-4 text-center">
                          <button
                            onClick={() => onDeleteStudent(student.id)}
                            className="p-1.5 text-rose-500 hover:text-rose-700 hover:bg-rose-50 rounded-xl transition-colors"
                            title="Hapus Siswa"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </td>
                      )}
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

      </div>

    </div>
  );
};

'use client';

import React, { useState } from 'react';
import { Kas5AData, ActiveRole, Expense } from '../lib/types';
import { formatRupiah } from '../lib/data-helper';
import { Receipt, PlusCircle, Search, Trash2, Calendar, Tag, User, FileText, ArrowUpRight } from 'lucide-react';

interface ExpensesTabProps {
  data: Kas5AData;
  activeRole: ActiveRole;
  onOpenAddExpense: () => void;
  onDeleteExpense: (id: string) => void;
}

export const ExpensesTab: React.FC<ExpensesTabProps> = ({
  data,
  activeRole,
  onOpenAddExpense,
  onDeleteExpense,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  const expenses = data.expenses || [];
  const totalExpenses = expenses.reduce((acc, curr) => acc + (Number(curr.amount) || 0), 0);

  const categories = Array.from(new Set(expenses.map((e) => e.category).filter(Boolean)));

  const filteredExpenses = expenses.filter((exp) => {
    const matchSearch =
      exp.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      exp.recipient.toLowerCase().includes(searchTerm.toLowerCase());
    const matchCat = selectedCategory === 'ALL' || exp.category === selectedCategory;
    return matchSearch && matchCat;
  });

  return (
    <div className="space-y-6">
      
      {/* Top Banner Card */}
      <div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 border border-slate-200/80 shadow-card space-y-5">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-rose-100 rounded-2xl flex items-center justify-center border border-rose-200">
              <Receipt className="w-6 h-6 text-rose-600" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-800">Daftar Pengeluaran Kas Kelas</h2>
              <p className="text-xs text-slate-500 font-medium mt-0.5">
                Total Terpakai: <strong className="text-rose-600 font-bold">{formatRupiah(totalExpenses)}</strong> ({expenses.length} Transaksi)
              </p>
            </div>
          </div>

          {activeRole === 'BENDAHARA' && (
            <button
              onClick={onOpenAddExpense}
              className="flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-rose-500 to-red-600 hover:from-rose-600 hover:to-red-700 text-white text-xs font-bold rounded-2xl shadow-sm hover:shadow-md transition-all whitespace-nowrap"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Tambah Pengeluaran</span>
            </button>
          )}
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-slate-100">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Cari keperluan / penerima..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-100/80 focus:bg-white text-xs font-semibold text-slate-800 pl-10 pr-4 py-2.5 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-rose-500/40 transition-all"
            />
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-500">Kategori:</span>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-slate-100/80 text-xs font-semibold text-slate-800 px-3 py-2.5 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-rose-500/40 cursor-pointer"
            >
              <option value="ALL">Semua Kategori</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Table Roster */}
        <div className="overflow-x-auto rounded-2xl border border-slate-200/80">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-100/80 text-slate-600 font-bold uppercase tracking-wider border-b border-slate-200">
                <th className="py-3.5 px-4 w-12 text-center">No</th>
                <th className="py-3.5 px-4">Tanggal</th>
                <th className="py-3.5 px-4">Keperluan / Deskripsi</th>
                <th className="py-3.5 px-4">Kategori</th>
                <th className="py-3.5 px-4">Penerima</th>
                <th className="py-3.5 px-4 text-right">Nominal</th>
                {activeRole === 'BENDAHARA' && (
                  <th className="py-3.5 px-4 text-center w-20">Aksi</th>
                )}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredExpenses.length === 0 ? (
                <tr>
                  <td colSpan={7} className="py-8 text-center text-slate-400 font-medium">
                    Belum ada data pengeluaran dicatat
                  </td>
                </tr>
              ) : (
                filteredExpenses.map((exp, idx) => (
                  <tr key={exp.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 text-center font-bold text-slate-500">
                      {idx + 1}
                    </td>

                    <td className="py-3.5 px-4 font-semibold text-slate-700 whitespace-nowrap">
                      {exp.date}
                    </td>

                    <td className="py-3.5 px-4 font-bold text-slate-800">
                      {exp.description}
                      {exp.note && (
                        <p className="text-[11px] font-normal text-slate-400 mt-0.5">
                          Note: {exp.note}
                        </p>
                      )}
                    </td>

                    <td className="py-3.5 px-4">
                      <span className="bg-rose-100 text-rose-800 text-[11px] font-bold px-2.5 py-1 rounded-xl border border-rose-200 whitespace-nowrap">
                        {exp.category || 'Umum'}
                      </span>
                    </td>

                    <td className="py-3.5 px-4 font-medium text-slate-700">
                      {exp.recipient || '-'}
                    </td>

                    <td className="py-3.5 px-4 text-right font-extrabold text-rose-600 whitespace-nowrap">
                      {formatRupiah(exp.amount)}
                    </td>

                    {activeRole === 'BENDAHARA' && (
                      <td className="py-3.5 px-4 text-center">
                        <button
                          onClick={() => onDeleteExpense(exp.id)}
                          className="p-1.5 text-rose-500 hover:text-rose-700 hover:bg-rose-50 rounded-xl transition-colors"
                          title="Hapus Pengeluaran"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    )}
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

      </div>

    </div>
  );
};

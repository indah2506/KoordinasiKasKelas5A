'use client';

import React, { useState } from 'react';
import { PlusCircle, X } from 'lucide-react';

interface AddExpenseModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddExpense: (expense: {
    description: string;
    category: string;
    amount: number;
    recipient: string;
    date: string;
    note?: string;
  }) => void;
}

export const AddExpenseModal: React.FC<AddExpenseModalProps> = ({
  isOpen,
  onClose,
  onAddExpense,
}) => {
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Kegiatan Kelas');
  const [amount, setAmount] = useState('');
  const [recipient, setRecipient] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [note, setNote] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!description.trim() || !amount) return;

    onAddExpense({
      description: description.trim(),
      category: category.trim(),
      amount: parseFloat(amount),
      recipient: recipient.trim() || '-',
      date,
      note: note.trim(),
    });

    setDescription('');
    setAmount('');
    setRecipient('');
    setNote('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm no-print">
      <div className="relative w-full max-w-lg bg-white rounded-3xl p-6 shadow-2xl border border-slate-200 space-y-5">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-rose-100 rounded-2xl flex items-center justify-center border border-rose-200">
            <PlusCircle className="w-6 h-6 text-rose-600" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-800">Catat Pengeluaran Kas</h3>
            <p className="text-xs text-slate-500 font-medium">
              Masukkan rincian transaksi pengeluaran kas kelas 5A
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <div className="sm:col-span-2 space-y-1">
              <label className="text-xs font-bold text-slate-700">Keperluan / Deskripsi Pengeluaran</label>
              <input
                type="text"
                required
                placeholder="Contoh: Pembelian Spidol & Kertas Karton HVS"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full bg-slate-100 focus:bg-white text-xs font-semibold text-slate-800 px-4 py-2.5 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-rose-500/40 focus:outline-none"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700">Nominal (Rp)</label>
              <input
                type="number"
                required
                placeholder="Contoh: 50000"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full bg-slate-100 focus:bg-white text-xs font-semibold text-slate-800 px-4 py-2.5 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-rose-500/40 focus:outline-none"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700">Kategori</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full bg-slate-100 focus:bg-white text-xs font-semibold text-slate-800 px-4 py-2.5 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-rose-500/40 focus:outline-none cursor-pointer"
              >
                <option value="Kegiatan Kelas">Kegiatan Kelas</option>
                <option value="Perlengkapan Kelas">Perlengkapan Kelas</option>
                <option value="Lomba & Event">Lomba & Event</option>
                <option value="Konsumsi & Snack">Konsumsi & Snack</option>
                <option value="Sosial & Kasih">Sosial & Kasih</option>
                <option value="Lainnya">Lainnya</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700">Penerima / Toko</label>
              <input
                type="text"
                placeholder="Contoh: Toko Buku Gramedia"
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
                className="w-full bg-slate-100 focus:bg-white text-xs font-semibold text-slate-800 px-4 py-2.5 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-rose-500/40 focus:outline-none"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700">Tanggal Pengeluaran</label>
              <input
                type="date"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full bg-slate-100 focus:bg-white text-xs font-semibold text-slate-800 px-4 py-2.5 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-rose-500/40 focus:outline-none"
              />
            </div>

            <div className="sm:col-span-2 space-y-1">
              <label className="text-xs font-bold text-slate-700">Catatan Tambahan (Opsional)</label>
              <input
                type="text"
                placeholder="Contoh: Nota disimpan oleh Bendahara"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className="w-full bg-slate-100 focus:bg-white text-xs font-semibold text-slate-800 px-4 py-2.5 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-rose-500/40 focus:outline-none"
              />
            </div>

          </div>

          <div className="flex items-center gap-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-2xl transition-colors"
            >
              Batal
            </button>
            <button
              type="submit"
              className="flex-1 py-2.5 bg-gradient-to-r from-rose-500 to-red-600 hover:from-rose-600 hover:to-red-700 text-white text-xs font-bold rounded-2xl shadow-md transition-all"
            >
              Simpan Pengeluaran
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};

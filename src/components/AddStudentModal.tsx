'use client';

import React, { useState } from 'react';
import { UserPlus, X } from 'lucide-react';

interface AddStudentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddStudent: (name: string, phone: string) => void;
}

export const AddStudentModal: React.FC<AddStudentModalProps> = ({
  isOpen,
  onClose,
  onAddStudent,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    onAddStudent(name.trim(), phone.trim());
    setName('');
    setPhone('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm no-print">
      <div className="relative w-full max-w-md bg-white rounded-3xl p-6 shadow-2xl border border-slate-200 space-y-5">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center border border-emerald-200">
            <UserPlus className="w-6 h-6 text-emerald-600" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-800">Tambah Siswa Baru</h3>
            <p className="text-xs text-slate-500 font-medium">
              Tambahkan siswa baru ke dalam roster Kas Kelas 5A
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-700">Nama Lengkap Siswa</label>
            <input
              type="text"
              required
              placeholder="Contoh: Muhammad Bintang"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-slate-100 focus:bg-white text-xs font-semibold text-slate-800 px-4 py-2.5 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-emerald-500/40 focus:outline-none"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-700">No. WhatsApp Orang Tua (Opsional)</label>
            <input
              type="text"
              placeholder="Contoh: 08123456789"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full bg-slate-100 focus:bg-white text-xs font-semibold text-slate-800 px-4 py-2.5 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-emerald-500/40 focus:outline-none"
            />
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
              className="flex-1 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white text-xs font-bold rounded-2xl shadow-md transition-all"
            >
              Simpan Siswa
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};

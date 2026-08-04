'use client';

import React, { useState } from 'react';
import { Lock, KeyRound, X, CheckCircle } from 'lucide-react';

interface PinModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  correctPin: string;
}

export const PinModal: React.FC<PinModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
  correctPin,
}) => {
  const [inputPin, setInputPin] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputPin === correctPin || inputPin === '5A2026') {
      onSuccess();
      setInputPin('');
      setErrorMsg('');
      onClose();
    } else {
      setErrorMsg('PIN Salah! PIN default adalah: 5A2026');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in no-print">
      <div className="relative w-full max-w-sm bg-white rounded-3xl p-6 shadow-2xl border border-slate-200 space-y-5">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center space-y-2">
          <div className="w-14 h-14 bg-amber-100 rounded-2xl mx-auto flex items-center justify-center border border-amber-200">
            <KeyRound className="w-7 h-7 text-amber-600" />
          </div>
          <h3 className="text-lg font-bold text-slate-800">Login Bendahara Kelas 5A</h3>
          <p className="text-xs text-slate-500 font-medium">
            Masukkan PIN Keamanan untuk membuka Mode Edit Kas
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <input
              type="password"
              placeholder="Masukkan PIN (Default: 5A2026)..."
              value={inputPin}
              onChange={(e) => {
                setInputPin(e.target.value);
                setErrorMsg('');
              }}
              autoFocus
              className="w-full text-center text-lg font-bold tracking-widest bg-slate-100 focus:bg-white text-slate-800 py-3 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-amber-500/40 focus:outline-none"
            />
            {errorMsg && (
              <p className="text-[11px] font-semibold text-rose-600 text-center mt-1">
                {errorMsg}
              </p>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-2xl transition-colors"
            >
              Batal
            </button>
            <button
              type="submit"
              className="flex-1 py-2.5 bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-500 hover:to-yellow-600 text-amber-950 text-xs font-bold rounded-2xl shadow-md transition-all"
            >
              Masuk Mode Edit
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};

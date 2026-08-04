'use client';

import React, { useState } from 'react';
import { Kas5AData, ActiveRole, KasSettings } from '../lib/types';
import { Settings as SettingsIcon, Save, Lock, School, User, Calendar, ShieldCheck, Download, RefreshCw } from 'lucide-react';

interface SettingsTabProps {
  data: Kas5AData;
  activeRole: ActiveRole;
  onSaveSettings: (newSettings: KasSettings) => void;
  onResetData?: () => void;
}

export const SettingsTab: React.FC<SettingsTabProps> = ({
  data,
  activeRole,
  onSaveSettings,
  onResetData,
}) => {
  const currentSettings = data.settings || {
    nominalPerBulan: 20000,
    tahunAjaran: '2026–2027',
    namaKelas: 'Kelas 5A',
    namaSekolah: 'SDS Kasih Ananda 1 Kelapa Gading',
    namaBendahara: 'Mom Kim',
    namaWaliKelas: 'Bu Liswati',
    pinBendahara: '5A2026',
    namaKoordinator: 'Mom Kim',
  };

  const [formData, setFormData] = useState<KasSettings>(currentSettings);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (activeRole !== 'BENDAHARA') {
      alert('Hanya Bendahara yang dapat mengubah pengaturan!');
      return;
    }
    onSaveSettings(formData);
    alert('Pengaturan kas kelas berhasil disimpan!');
  };

  return (
    <div className="space-y-6">
      
      <div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 border border-slate-200/80 shadow-card space-y-6">
        
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center border border-slate-200">
            <SettingsIcon className="w-6 h-6 text-slate-700" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-800">Pengaturan Sistem Kas Kelas 5A</h2>
            <p className="text-xs text-slate-500 font-medium mt-0.5">
              Atur nominal kas, identitas sekolah, nama bendahara, wali kelas & PIN proteksi
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            
            {/* Nama Kelas */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700">Nama Kelas</label>
              <input
                type="text"
                disabled={activeRole !== 'BENDAHARA'}
                value={formData.namaKelas}
                onChange={(e) => setFormData({ ...formData, namaKelas: e.target.value })}
                className="w-full bg-slate-100/80 focus:bg-white text-xs font-semibold text-slate-800 px-4 py-2.5 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-emerald-500/40 focus:outline-none"
              />
            </div>

            {/* Nama Sekolah */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700">Nama Sekolah</label>
              <input
                type="text"
                disabled={activeRole !== 'BENDAHARA'}
                value={formData.namaSekolah}
                onChange={(e) => setFormData({ ...formData, namaSekolah: e.target.value })}
                className="w-full bg-slate-100/80 focus:bg-white text-xs font-semibold text-slate-800 px-4 py-2.5 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-emerald-500/40 focus:outline-none"
              />
            </div>

            {/* Nominal Kas Per Bulan */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700">Nominal Kas (Rp / Siswa / Bulan)</label>
              <input
                type="number"
                disabled={activeRole !== 'BENDAHARA'}
                value={formData.nominalPerBulan}
                onChange={(e) => setFormData({ ...formData, nominalPerBulan: Number(e.target.value) })}
                className="w-full bg-slate-100/80 focus:bg-white text-xs font-semibold text-slate-800 px-4 py-2.5 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-emerald-500/40 focus:outline-none"
              />
            </div>

            {/* Tahun Ajaran */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700">Tahun Ajaran</label>
              <input
                type="text"
                disabled={activeRole !== 'BENDAHARA'}
                value={formData.tahunAjaran}
                onChange={(e) => setFormData({ ...formData, tahunAjaran: e.target.value })}
                className="w-full bg-slate-100/80 focus:bg-white text-xs font-semibold text-slate-800 px-4 py-2.5 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-emerald-500/40 focus:outline-none"
              />
            </div>

            {/* Nama Bendahara */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700">Nama Bendahara</label>
              <input
                type="text"
                disabled={activeRole !== 'BENDAHARA'}
                value={formData.namaBendahara}
                onChange={(e) => setFormData({ ...formData, namaBendahara: e.target.value })}
                className="w-full bg-slate-100/80 focus:bg-white text-xs font-semibold text-slate-800 px-4 py-2.5 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-emerald-500/40 focus:outline-none"
              />
            </div>

            {/* Nama Wali Kelas */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700">Nama Wali Kelas</label>
              <input
                type="text"
                disabled={activeRole !== 'BENDAHARA'}
                value={formData.namaWaliKelas}
                onChange={(e) => setFormData({ ...formData, namaWaliKelas: e.target.value })}
                className="w-full bg-slate-100/80 focus:bg-white text-xs font-semibold text-slate-800 px-4 py-2.5 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-emerald-500/40 focus:outline-none"
              />
            </div>

            {/* PIN Bendahara */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700">PIN Login Bendahara</label>
              <input
                type="password"
                disabled={activeRole !== 'BENDAHARA'}
                value={formData.pinBendahara}
                onChange={(e) => setFormData({ ...formData, pinBendahara: e.target.value })}
                className="w-full bg-slate-100/80 focus:bg-white text-xs font-semibold text-slate-800 px-4 py-2.5 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-emerald-500/40 focus:outline-none"
              />
            </div>

            {/* Nama Koordinator */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700">Nama Koordinator Kelas</label>
              <input
                type="text"
                disabled={activeRole !== 'BENDAHARA'}
                value={formData.namaKoordinator}
                onChange={(e) => setFormData({ ...formData, namaKoordinator: e.target.value })}
                className="w-full bg-slate-100/80 focus:bg-white text-xs font-semibold text-slate-800 px-4 py-2.5 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-emerald-500/40 focus:outline-none"
              />
            </div>

          </div>

          {activeRole === 'BENDAHARA' && (
            <div className="pt-3 flex items-center justify-end gap-3">
              <button
                type="submit"
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white text-xs font-bold rounded-2xl shadow-md transition-all"
              >
                <Save className="w-4 h-4" />
                <span>Simpan Pengaturan</span>
              </button>
            </div>
          )}
        </form>

      </div>

    </div>
  );
};

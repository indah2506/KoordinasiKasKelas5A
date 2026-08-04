import React from 'react';
import { ActiveRole } from '../lib/types';
import { LayoutDashboard, Users, CreditCard, Receipt, FileText, Settings, ShieldAlert, Sparkles, LogOut, KeyRound } from 'lucide-react';

export type TabType = 'dashboard' | 'siswa' | 'pembayaran' | 'pengeluaran' | 'rekap' | 'settings';

interface SidebarProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  activeRole: ActiveRole;
  onToggleLock: () => void;
  studentCount: number;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeTab,
  setActiveTab,
  activeRole,
  onToggleLock,
  studentCount,
}) => {
  const navItems = [
    {
      id: 'dashboard' as TabType,
      label: 'Dashboard',
      icon: LayoutDashboard,
      badge: null,
      color: 'text-emerald-600',
    },
    {
      id: 'siswa' as TabType,
      label: 'Data Siswa',
      icon: Users,
      badge: `${studentCount}`,
      color: 'text-blue-600',
    },
    {
      id: 'pembayaran' as TabType,
      label: 'Pembayaran Kas',
      icon: CreditCard,
      badge: 'Matrix',
      color: 'text-amber-500',
    },
    {
      id: 'pengeluaran' as TabType,
      label: 'Pengeluaran',
      icon: Receipt,
      badge: null,
      color: 'text-red-500',
    },
    {
      id: 'rekap' as TabType,
      label: 'Rekap & Tunggakan',
      icon: FileText,
      badge: 'Laporan',
      color: 'text-indigo-600',
    },
    {
      id: 'settings' as TabType,
      label: 'Pengaturan',
      icon: Settings,
      badge: null,
      color: 'text-slate-600',
    },
  ];

  return (
    <aside className="w-full lg:w-72 flex-shrink-0 space-y-5 no-print">
      
      {/* Floating Card Wrapper */}
      <div className="bg-white/90 backdrop-blur-md rounded-3xl p-5 border border-slate-200/80 shadow-card space-y-6">
        
        {/* Mascot & Greeting Header Card */}
        <div className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-teal-50 to-sky-50 rounded-2xl p-4 border border-emerald-100/80 text-center space-y-3">
          <div className="absolute top-2 right-2 text-amber-400 text-sm animate-pulse">✨</div>
          
          {/* Mascot Illustration Badge */}
          <div className="relative w-20 h-20 mx-auto bg-gradient-to-tr from-emerald-400 to-teal-300 rounded-full p-1 shadow-md flex items-center justify-center">
            <div className="w-full h-full bg-white rounded-full flex items-center justify-center text-4xl shadow-inner">
              🐻‍❄️
            </div>
            <span className="absolute bottom-0 right-0 bg-amber-400 text-amber-950 text-[10px] font-bold px-1.5 py-0.5 rounded-full border border-white">
              5A
            </span>
          </div>

          {/* Greeting Text */}
          <div>
            <h3 className="font-bold text-slate-800 text-base flex items-center justify-center gap-1.5">
              <span>{activeRole === 'BENDAHARA' ? 'Halo Bendahara 👋' : 'Wali Murid 👨‍👩‍👧'}</span>
            </h3>
            <p className="text-xs text-slate-500 mt-0.5 font-medium flex items-center justify-center gap-1">
              <Sparkles className="w-3 h-3 text-amber-500" />
              <span>Semangat hari ini!</span>
            </p>
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="space-y-1.5">
          <p className="px-3 text-[11px] font-bold uppercase tracking-wider text-slate-400">
            Menu Utama
          </p>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl font-semibold text-sm transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-md shadow-emerald-500/20 scale-[1.02]'
                    : 'text-slate-600 hover:bg-slate-100/80 hover:text-slate-900'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-5 h-5 ${isActive ? 'text-white' : item.color}`} />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span
                    className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                      isActive
                        ? 'bg-white/20 text-white'
                        : 'bg-slate-100 text-slate-600 group-hover:bg-slate-200'
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Divider */}
        <hr className="border-slate-100" />

        {/* Mode Switch Footer Card */}
        <div className="space-y-2">
          <p className="px-3 text-[11px] font-bold uppercase tracking-wider text-slate-400">
            Akses & Otoritas
          </p>
          <button
            onClick={onToggleLock}
            className={`w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-2xl font-semibold text-xs transition-all border ${
              activeRole === 'BENDAHARA'
                ? 'bg-amber-50 text-amber-800 border-amber-200 hover:bg-amber-100'
                : 'bg-emerald-50 text-emerald-800 border-emerald-200 hover:bg-emerald-100'
            }`}
          >
            {activeRole === 'BENDAHARA' ? (
              <>
                <LogOut className="w-4 h-4 text-amber-700" />
                <span>Kunci (Mode Wali Murid)</span>
              </>
            ) : (
              <>
                <KeyRound className="w-4 h-4 text-emerald-700" />
                <span>Login Bendahara</span>
              </>
            )}
          </button>
        </div>

      </div>
    </aside>
  );
};

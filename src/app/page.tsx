'use client';

import React, { useState, useEffect } from 'react';
import { Kas5AData, ActiveRole, KasSettings, Expense } from '../lib/types';
import { calculateKasStats } from '../lib/data-helper';
import { HeroHeader } from '../components/HeroHeader';
import { Sidebar, TabType } from '../components/Sidebar';
import { SummaryCards } from '../components/SummaryCards';
import { AnalyticsSection } from '../components/AnalyticsSection';
import { WidgetsSection } from '../components/WidgetsSection';
import { StudentsTab } from '../components/StudentsTab';
import { PaymentsTab } from '../components/PaymentsTab';
import { ExpensesTab } from '../components/ExpensesTab';
import { ReportsTab } from '../components/ReportsTab';
import { SettingsTab } from '../components/SettingsTab';
import { PinModal } from '../components/PinModal';
import { AddStudentModal } from '../components/AddStudentModal';
import { AddExpenseModal } from '../components/AddExpenseModal';
import { BackgroundDoodles } from '../components/BackgroundDoodles';
import * as XLSX from 'xlsx';
import initialKasData from '../../data/kas_5a.json';

const DEFAULT_INITIAL_DATA: Kas5AData = initialKasData as unknown as Kas5AData;

export default function Home() {
  const [kasData, setKasData] = useState<Kas5AData>(DEFAULT_INITIAL_DATA);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<TabType>('dashboard');
  const [activeRole, setActiveRole] = useState<ActiveRole>('WALIMURID');

  // Modals state
  const [isPinModalOpen, setIsPinModalOpen] = useState(false);
  const [isAddStudentModalOpen, setIsAddStudentModalOpen] = useState(false);
  const [isAddExpenseModalOpen, setIsAddExpenseModalOpen] = useState(false);

  // Fetch initial data from API
  useEffect(() => {
    async function loadData() {
      try {
        const res = await fetch('/api/kas_5a');
        if (res.ok) {
          const result = await res.json();
          if (result.success && result.data) {
            setKasData(result.data);
          }
        }
      } catch (err) {
        console.error('Gagal membaca data Kas 5A:', err);
      } finally {
        setIsLoading(false);
      }
    }
    loadData();
  }, []);

  // Save updated data to API
  const saveDataToBackend = async (newData: Kas5AData) => {
    setKasData(newData);
    try {
      await fetch('/api/kas_5a/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: newData }),
      });
    } catch (err) {
      console.error('Gagal menyimpan data:', err);
    }
  };

  // Toggle role / lock
  const handleToggleLock = () => {
    if (activeRole === 'BENDAHARA') {
      setActiveRole('WALIMURID');
    } else {
      setIsPinModalOpen(true);
    }
  };

  // Actions
  const handleTogglePayment = (studentId: number, monthKey: string) => {
    const updatedStudents = kasData.students.map((s) => {
      if (s.id === studentId) {
        const currentPay = s.payments?.[monthKey] || { status: false, date: '', method: '' };
        const newStatus = !currentPay.status;
        return {
          ...s,
          payments: {
            ...s.payments,
            [monthKey]: {
              status: newStatus,
              date: newStatus ? new Date().toISOString().split('T')[0] : '',
              method: newStatus ? 'Tunai / Cash' : '',
            },
          },
        };
      }
      return s;
    });

    const updated = { ...kasData, students: updatedStudents };
    saveDataToBackend(updated);
  };

  const handleBulkMarkLunas = (monthKey: string) => {
    const updatedStudents = kasData.students.map((s) => ({
      ...s,
      payments: {
        ...s.payments,
        [monthKey]: {
          status: true,
          date: new Date().toISOString().split('T')[0],
          method: 'Tunai / Cash',
        },
      },
    }));

    const updated = { ...kasData, students: updatedStudents };
    saveDataToBackend(updated);
  };

  const handleAddStudent = (name: string, phone: string) => {
    const newId = kasData.students.length > 0 ? Math.max(...kasData.students.map((s) => s.id)) + 1 : 1;
    const initialPayments: Record<string, any> = {};
    kasData.months.forEach((m) => {
      initialPayments[m.key] = { status: false, date: '', method: '' };
    });

    const newStudent = {
      id: newId,
      name,
      phone,
      payments: initialPayments,
    };

    const updated = { ...kasData, students: [...kasData.students, newStudent] };
    saveDataToBackend(updated);
  };

  const handleDeleteStudent = (id: number) => {
    if (!confirm('Apakah Anda yakin ingin menghapus data siswa ini?')) return;
    const updated = { ...kasData, students: kasData.students.filter((s) => s.id !== id) };
    saveDataToBackend(updated);
  };

  const handleAddExpense = (exp: {
    description: string;
    category: string;
    amount: number;
    recipient: string;
    date: string;
    note?: string;
  }) => {
    const newExpense: Expense = {
      id: 'exp_' + Date.now(),
      ...exp,
    };

    const updated = { ...kasData, expenses: [newExpense, ...kasData.expenses] };
    saveDataToBackend(updated);
  };

  const handleDeleteExpense = (id: string) => {
    if (!confirm('Hapus transaksi pengeluaran ini?')) return;
    const updated = { ...kasData, expenses: kasData.expenses.filter((e) => e.id !== id) };
    saveDataToBackend(updated);
  };

  const handleSaveSettings = (newSettings: KasSettings) => {
    const updated = { ...kasData, settings: newSettings };
    saveDataToBackend(updated);
  };

  // Export to Excel
  const handleExportExcel = () => {
    const months = kasData.months || [];
    const rows = kasData.students.map((s, idx) => {
      const rowData: any = {
        No: idx + 1,
        'Nama Siswa': s.name,
        'No. WA': s.phone || '-',
      };
      months.forEach((m) => {
        rowData[m.label] = s.payments?.[m.key]?.status ? 'LUNAS' : 'BELUM';
      });
      return rowData;
    });

    const worksheet = XLSX.utils.json_to_sheet(rows);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Laporan Kas 5A');
    XLSX.writeFile(workbook, `Laporan_Kas_Kelas_5A_${new Date().toISOString().split('T')[0]}.xlsx`);
  };

  // Print Report
  const handlePrintReport = () => {
    window.print();
  };

  const stats = calculateKasStats(kasData);

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center space-y-3 bg-slate-50 text-slate-600">
        <div className="w-12 h-12 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin" />
        <p className="font-bold text-sm">Memuat Dashboard Kas Kelas 5A...</p>
      </div>
    );
  }

  return (
    <main className="relative min-h-screen p-4 sm:p-6 lg:p-8 space-y-6 max-w-7xl mx-auto">
      {/* Subtle Floating Doodles Background */}
      <BackgroundDoodles />

      {/* Hero Header */}
      <HeroHeader
        settings={kasData.settings}
        studentCount={kasData.students?.length || 35}
        activeRole={activeRole}
        onToggleLock={handleToggleLock}
        onOpenSettings={() => setActiveTab('settings')}
        onExportExcel={handleExportExcel}
        onPrintReport={handlePrintReport}
      />

      {/* Main Content Layout Grid */}
      <div className="flex flex-col lg:flex-row items-start gap-6">
        {/* Sidebar Navigation */}
        <Sidebar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          activeRole={activeRole}
          onToggleLock={handleToggleLock}
          studentCount={kasData.students?.length || 35}
        />

        {/* Tab Content Display Area */}
        <div className="flex-1 w-full space-y-6">
          {activeTab === 'dashboard' && (
            <>
              {/* 4 Premium KPI Summary Cards */}
              <SummaryCards
                totalIncome={stats.totalIncome}
                totalExpenses={stats.totalExpenses}
                saldoAkhir={stats.saldoAkhir}
                paidCount={stats.paidCount}
                totalTargetCount={stats.totalTargetCount}
                percentage={stats.percentage}
              />

              {/* Analytics Section (Bar Chart & Donut Chart) */}
              <AnalyticsSection data={kasData} />

              {/* Widgets Section (Leaderboard, Savings, Announcement, Actions, Gallery) */}
              <WidgetsSection
                data={kasData}
                activeRole={activeRole}
                onNavigateTab={(tab) => setActiveTab(tab)}
                onOpenAddExpense={() => setIsAddExpenseModalOpen(true)}
                onPrintReport={handlePrintReport}
              />
            </>
          )}

          {activeTab === 'siswa' && (
            <StudentsTab
              data={kasData}
              activeRole={activeRole}
              onAddStudent={() => setIsAddStudentModalOpen(true)}
              onDeleteStudent={handleDeleteStudent}
            />
          )}

          {activeTab === 'pembayaran' && (
            <PaymentsTab
              data={kasData}
              activeRole={activeRole}
              onTogglePayment={handleTogglePayment}
              onBulkMarkLunas={handleBulkMarkLunas}
            />
          )}

          {activeTab === 'pengeluaran' && (
            <ExpensesTab
              data={kasData}
              activeRole={activeRole}
              onOpenAddExpense={() => setIsAddExpenseModalOpen(true)}
              onDeleteExpense={handleDeleteExpense}
            />
          )}

          {activeTab === 'rekap' && (
            <ReportsTab data={kasData} onPrintReport={handlePrintReport} />
          )}

          {activeTab === 'settings' && (
            <SettingsTab
              data={kasData}
              activeRole={activeRole}
              onSaveSettings={handleSaveSettings}
            />
          )}
        </div>
      </div>

      {/* Modals */}
      <PinModal
        isOpen={isPinModalOpen}
        onClose={() => setIsPinModalOpen(false)}
        onSuccess={() => setActiveRole('BENDAHARA')}
        correctPin={kasData.settings?.pinBendahara || '5A2026'}
      />

      <AddStudentModal
        isOpen={isAddStudentModalOpen}
        onClose={() => setIsAddStudentModalOpen(false)}
        onAddStudent={handleAddStudent}
      />

      <AddExpenseModal
        isOpen={isAddExpenseModalOpen}
        onClose={() => setIsAddExpenseModalOpen(false)}
        onAddExpense={handleAddExpense}
      />
    </main>
  );
}

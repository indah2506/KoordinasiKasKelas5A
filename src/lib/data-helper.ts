import { Kas5AData, Student } from './types';

export function formatRupiah(num: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(num);
}

export function formatNumber(num: number): string {
  return new Intl.NumberFormat('id-ID').format(num);
}

export function calculateKasStats(data: Kas5AData) {
  const nominal = data.settings?.nominalPerBulan || 20000;
  const students = data.students || [];
  const months = data.months || [];
  const expenses = data.expenses || [];

  let paidCount = 0;
  students.forEach((student) => {
    months.forEach((m) => {
      if (student.payments && student.payments[m.key]?.status) {
        paidCount++;
      }
    });
  });

  const totalIncome = paidCount * nominal;

  const totalExpenses = expenses.reduce((acc, curr) => acc + (Number(curr.amount) || 0), 0);

  const saldoAkhir = totalIncome - totalExpenses;
  const totalTargetCount = students.length * months.length;
  const percentage = totalTargetCount > 0 ? Math.round((paidCount / totalTargetCount) * 1000) / 10 : 0;

  return {
    totalIncome,
    totalExpenses,
    saldoAkhir,
    paidCount,
    totalTargetCount,
    percentage,
    studentCount: students.length,
    monthCount: months.length,
    nominalPerBulan: nominal,
  };
}

export function getMonthlyBreakdown(data: Kas5AData) {
  const nominal = data.settings?.nominalPerBulan || 20000;
  const students = data.students || [];
  const months = data.months || [];
  const expenses = data.expenses || [];

  return months.map((m) => {
    let incomeCount = 0;
    students.forEach((s) => {
      if (s.payments && s.payments[m.key]?.status) {
        incomeCount++;
      }
    });

    const monthIncome = incomeCount * nominal;

    // Filter expenses matching this month (by date substring or key)
    const monthExpenses = expenses
      .filter((exp) => {
        if (!exp.date) return false;
        // Simple check: compare year-month if format YYYY-MM-DD
        const dateObj = new Date(exp.date);
        if (isNaN(dateObj.getTime())) return false;
        const expMonthName = dateObj.toLocaleString('id-ID', { month: 'long' }).toLowerCase();
        return m.label.toLowerCase().includes(expMonthName);
      })
      .reduce((acc, curr) => acc + (Number(curr.amount) || 0), 0);

    return {
      monthKey: m.key,
      monthLabel: m.label.split(' ')[0], // Short name e.g. "Juli"
      fullLabel: m.label,
      Pemasukan: monthIncome,
      Pengeluaran: monthExpenses,
    };
  });
}

export function getPaymentStatusDistribution(data: Kas5AData) {
  const students = data.students || [];
  const months = data.months || [];
  const totalMonths = months.length;

  let lunasSemua = 0;
  let bayarSebagian = 0;
  let belumBayar = 0;

  students.forEach((student) => {
    let paidMonths = 0;
    months.forEach((m) => {
      if (student.payments && student.payments[m.key]?.status) {
        paidMonths++;
      }
    });

    if (paidMonths === totalMonths) {
      lunasSemua++;
    } else if (paidMonths > 0) {
      bayarSebagian++;
    } else {
      belumBayar++;
    }
  });

  return [
    { name: 'Lunas 1 Tahun', value: lunasSemua, color: '#22C55E' },
    { name: 'Bayar Sebagian', value: bayarSebagian, color: '#3B82F6' },
    { name: 'Belum Bayar', value: belumBayar, color: '#EF4444' },
  ];
}

export interface StudentTunggakan {
  student: Student;
  paidMonthsCount: number;
  unpaidMonthsCount: number;
  unpaidMonthLabels: string[];
  totalOwed: number;
}

export function getStudentTunggakanList(data: Kas5AData): StudentTunggakan[] {
  const nominal = data.settings?.nominalPerBulan || 20000;
  const students = data.students || [];
  const months = data.months || [];

  const result: StudentTunggakan[] = [];

  students.forEach((student) => {
    let paidCount = 0;
    const unpaidLabels: string[] = [];

    months.forEach((m) => {
      if (student.payments && student.payments[m.key]?.status) {
        paidCount++;
      } else {
        unpaidLabels.push(m.label);
      }
    });

    const unpaidCount = months.length - paidCount;

    if (unpaidCount > 0) {
      result.push({
        student,
        paidMonthsCount: paidCount,
        unpaidMonthsCount: unpaidCount,
        unpaidMonthLabels: unpaidLabels,
        totalOwed: unpaidCount * nominal,
      });
    }
  });

  // Sort by highest unpaid months first
  return result.sort((a, b) => b.unpaidMonthsCount - a.unpaidMonthsCount);
}

export function getFastestPaymentStudents(data: Kas5AData, limit = 5) {
  const months = data.months || [];
  const students = data.students || [];

  const ranked = students.map((s) => {
    let paidCount = 0;
    months.forEach((m) => {
      if (s.payments && s.payments[m.key]?.status) {
        paidCount++;
      }
    });
    return {
      student: s,
      paidCount,
      progressPercent: Math.round((paidCount / months.length) * 100),
    };
  });

  return ranked.sort((a, b) => b.paidCount - a.paidCount).slice(0, limit);
}

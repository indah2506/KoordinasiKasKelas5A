export interface KasSettings {
  nominalPerBulan: number;
  tahunAjaran: string;
  namaKelas: string;
  namaSekolah: string;
  namaBendahara: string;
  namaWaliKelas: string;
  pinBendahara: string;
  namaKoordinator: string;
}

export interface MonthKey {
  key: string;
  label: string;
}

export interface StudentPayment {
  status: boolean;
  date: string;
  method: string;
}

export interface Student {
  id: number;
  name: string;
  phone: string;
  payments: Record<string, StudentPayment>;
}

export interface Expense {
  id: string;
  date: string;
  description: string;
  category: string;
  amount: number;
  recipient: string;
  note?: string;
  receiptUrl?: string;
}

export interface Kas5AData {
  settings: KasSettings;
  months: MonthKey[];
  students: Student[];
  expenses: Expense[];
}

export type ActiveRole = 'WALIMURID' | 'BENDAHARA';

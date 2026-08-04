'use client';

import React from 'react';
import { Kas5AData } from '../lib/types';
import { getMonthlyBreakdown, getPaymentStatusDistribution, formatRupiah } from '../lib/data-helper';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import { BarChart3, PieChart as PieChartIcon } from 'lucide-react';

interface AnalyticsSectionProps {
  data: Kas5AData;
}

export const AnalyticsSection: React.FC<AnalyticsSectionProps> = ({ data }) => {
  const monthlyData = getMonthlyBreakdown(data);
  const statusData = getPaymentStatusDistribution(data);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      
      {/* Section 1: Monthly Income vs Expenses Bar Chart (2 columns width) */}
      <div className="lg:col-span-2 bg-white/90 backdrop-blur-md rounded-3xl p-6 border border-slate-200/80 shadow-card space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 bg-emerald-100 rounded-2xl flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <h3 className="font-bold text-slate-800 text-lg">
                Tren Pemasukan vs Pengeluaran
              </h3>
              <p className="text-xs text-slate-500 font-medium">
                Grafik perbandingan kas masuk dan keluar per bulan
              </p>
            </div>
          </div>
          <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
            12 Bulan T.A 2026–2027
          </span>
        </div>

        <div className="w-full h-72 pt-2">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={monthlyData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
              <XAxis dataKey="monthLabel" tick={{ fontSize: 12, fill: '#64748B' }} axisLine={false} tickLine={false} />
              <YAxis
                tickFormatter={(val) => `Rp${val / 1000}k`}
                tick={{ fontSize: 11, fill: '#64748B' }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip
                formatter={(value: any) => [formatRupiah(Number(value)), '']}
                contentStyle={{
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  borderRadius: '16px',
                  boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
                  border: '1px solid #E2E8F0',
                  fontSize: '12px',
                  fontWeight: 600,
                }}
              />
              <Legend iconType="circle" wrapperStyle={{ paddingTop: '10px', fontSize: '12px' }} />
              <Bar dataKey="Pemasukan" fill="#22C55E" radius={[6, 6, 0, 0]} maxBarSize={32} />
              <Bar dataKey="Pengeluaran" fill="#EF4444" radius={[6, 6, 0, 0]} maxBarSize={32} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Section 2: Student Payment Status Donut Chart (1 column width) */}
      <div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 border border-slate-200/80 shadow-card flex flex-col justify-between space-y-4">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 bg-blue-100 rounded-2xl flex items-center justify-center">
            <PieChartIcon className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <h3 className="font-bold text-slate-800 text-lg">
              Status Pembayaran
            </h3>
            <p className="text-xs text-slate-500 font-medium">
              Persentase kelunasan 35 siswa
            </p>
          </div>
        </div>

        <div className="relative w-full h-56 flex items-center justify-center">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={statusData}
                cx="50%"
                cy="50%"
                innerRadius={55}
                outerRadius={80}
                paddingAngle={4}
                dataKey="value"
              >
                {statusData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                formatter={(val: any) => [`${val} Siswa`, '']}
                contentStyle={{
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  borderRadius: '12px',
                  border: '1px solid #E2E8F0',
                  fontSize: '12px',
                }}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <span className="text-2xl font-extrabold text-slate-800">
              {data.students?.length || 35}
            </span>
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Total Siswa
            </span>
          </div>
        </div>

        {/* Legend Pills */}
        <div className="space-y-2 pt-2 border-t border-slate-100">
          {statusData.map((item, idx) => (
            <div key={idx} className="flex items-center justify-between text-xs font-semibold text-slate-600">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                <span>{item.name}</span>
              </div>
              <span className="font-bold text-slate-800 bg-slate-100 px-2 py-0.5 rounded-lg">
                {item.value} siswa
              </span>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
};

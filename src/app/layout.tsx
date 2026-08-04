import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Kas Kelas 5A | SDS Kasih Ananda 1 Kelapa Gading',
  description: 'Aplikasi Pengelolaan Kas Kelas 5A SDS Kasih Ananda 1 Kelapa Gading - Sistem Informasi Kas Sekolah',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="notebook-doodle-bg min-h-screen font-sans text-slate-800 antialiased selection:bg-emerald-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}

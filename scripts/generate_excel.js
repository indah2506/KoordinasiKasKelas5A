/**
 * Excel Workbook Generator - Kas Bendahara Kelas 5A
 * FUNGSIONAL: bisa dipakai langsung untuk input data pembayaran
 * Semua rumus (SUM, COUNTIF, IF, dll) otomatis dihitung Excel
 *
 * Run: node scripts/generate_excel.js
 */

const XLSX = require('xlsx');
const path = require('path');
const fs   = require('fs');

// ── DATA SISWA & PEMBAYARAN ───────────────────────────────────────────────────
const SETTINGS = {
  nominal       : 20000,
  tahunAjaran   : '2026–2027',
  namaKelas     : 'Kelas 5A',
  namaSekolah   : 'SDS Kasih Ananda',
  namaBendahara : 'Mom Kim',
  namaWaliKelas : 'Bu Liswati',
};

const MONTHS = [
  'Juli 2026','Agustus 2026','September 2026','Oktober 2026',
  'November 2026','Desember 2026','Januari 2027','Februari 2027',
  'Maret 2027','April 2027','Mei 2027','Juni 2027',
];
const MONTH_KEYS = [
  'juli_2026','agustus_2026','september_2026','oktober_2026',
  'november_2026','desember_2026','januari_2027','februari_2027',
  'maret_2027','april_2027','mei_2027','juni_2027',
];

// Status pembayaran siswa (true=Lunas, false=Belum)
const STUDENTS = [
  { id: 1,  name:'Adiara Zahwa Aprella',          p:[1,1,1,1,1,1,1,1,1,1,1,1] },
  { id: 2,  name:'Alesha Fitria Khairunnisa',      p:[1,1,1,1,1,1,1,1,1,1,1,1] },
  { id: 3,  name:'Alicia Alverina Carter',         p:[1,1,1,1,1,1,0,0,0,0,0,0] },
  { id: 4,  name:'Allesya Alvera Meina Lengkong',  p:[0,0,0,0,0,0,0,0,0,0,0,0] },
  { id: 5,  name:'Allysia Leilanie Yasmine',       p:[0,0,0,0,0,0,0,0,0,0,0,0] },
  { id: 6,  name:'Ar Kenzie Kiaka Putra',          p:[0,0,0,0,0,0,0,0,0,0,0,0] },
  { id: 7,  name:'Cathy Charissa Hutauruk',        p:[0,0,0,0,0,0,0,0,0,0,0,0] },
  { id: 8,  name:'Cavello Vincenzo Pratama',       p:[1,1,1,1,1,1,1,1,1,1,1,1] },
  { id: 9,  name:'Chelsea Vebian',                 p:[1,1,1,1,1,1,1,1,1,1,1,1] },
  { id: 10, name:'Cleo Vennya Donita',             p:[1,1,1,0,0,0,0,0,0,0,0,0] },
  { id: 11, name:'Cleona Uli Malau',               p:[0,0,0,0,0,0,0,0,0,0,0,0] },
  { id: 12, name:'Cleva Anastasya Tanjung',        p:[0,0,0,0,0,0,0,0,0,0,0,0] },
  { id: 13, name:'Darrell Gavriel Oliver',         p:[0,0,0,0,0,0,0,0,0,0,0,0] },
  { id: 14, name:'Diandra Sapta Pratama',          p:[0,0,0,0,0,0,0,0,0,0,0,0] },
  { id: 15, name:'Favian Maheswara Syahputra',     p:[1,1,1,1,1,1,0,0,0,0,0,0] },
  { id: 16, name:'Fionani Amara Shaffa Putri',     p:[0,0,0,0,0,0,0,0,0,0,0,0] },
  { id: 17, name:'Hessa Meilani Putri',            p:[1,1,1,1,1,1,1,1,1,1,1,1] },
  { id: 18, name:'Husyaini Putri Yasmine',         p:[1,1,1,1,1,1,1,1,1,1,1,1] },
  { id: 19, name:'Jefri Sania Putra',              p:[1,1,1,0,0,0,0,0,0,0,0,0] },
  { id: 20, name:'Keanu Wira Hizqia',              p:[1,1,1,1,1,1,0,0,0,0,0,0] },
  { id: 21, name:'Kevin Eka Pratama',              p:[1,1,1,1,1,1,0,0,0,0,0,0] },
  { id: 22, name:'Kiana Febrianti',                p:[1,1,1,1,1,1,0,0,0,0,0,0] },
  { id: 23, name:'Lutfi Khoirul Nur Ramadhan',     p:[1,1,1,1,1,1,1,1,1,1,1,1] },
  { id: 24, name:'Marco Alejandro Mendoza Retno',  p:[1,1,1,1,1,1,0,0,0,0,0,0] },
  { id: 25, name:'Maryam Audra Milly',             p:[1,1,0,0,0,0,0,0,0,0,0,0] },
  { id: 26, name:'Muhammad Danish Ali Haidari',    p:[0,0,0,0,0,0,0,0,0,0,0,0] },
  { id: 27, name:'Muhammad Raja El Firdaus',       p:[1,1,1,1,1,1,0,0,0,0,0,0] },
  { id: 28, name:'Muhammad Rifat Ramadhan',        p:[1,1,1,0,0,0,0,0,0,0,0,0] },
  { id: 29, name:'Muhammad Zlatan Alkhalifi',      p:[0,0,0,0,0,0,0,0,0,0,0,0] },
  { id: 30, name:'Nathaniel Raphael',              p:[1,1,1,0,0,0,0,0,0,0,0,0] },
  { id: 31, name:'Naura Alvy Zahya',               p:[1,1,1,1,1,1,1,1,1,1,1,1] },
  { id: 32, name:'Nayla Zahra',                    p:[1,1,1,1,1,1,1,1,1,1,1,1] },
  { id: 33, name:'Nizar El Fariez',               p:[1,1,1,1,1,1,0,0,0,0,0,0] },
  { id: 34, name:'Siva Ananda Putri',              p:[1,1,1,0,0,0,0,0,0,0,0,0] },
  { id: 35, name:'Zivanna Aurellia',               p:[1,1,1,0,0,0,0,0,0,0,0,0] },
];

const EXPENSES = [
  { date:'04-Aug-2026', category:'Kebersihan & Sanitasi',  desc:'Tissue 2 Ply A Basics 600gram 2pcs',                              amount: 48735 },
  { date:'04-Aug-2026', category:'Kebersihan & Sanitasi',  desc:'Stella Aerosol Balinese Jasmine Pengharum Ruangan 350ml 2pcs',   amount: 58600 },
  { date:'31-Jul-2026', category:'Lain-lain',              desc:'Air galon 2 @22000',                                              amount: 44000 },
  { date:'31-Jul-2026', category:'Kebersihan & Sanitasi',  desc:'Tisue',                                                           amount: 35000 },
  { date:'31-Jul-2026', category:'Fotokopi & Cetak',       desc:'FC jadwal 35 @500',                                               amount: 17500 },
  { date:'31-Jul-2026', category:'Fotokopi & Cetak',       desc:'LKPD MPLS 20 @500',                                              amount: 10000 },
  { date:'31-Jul-2026', category:'Fotokopi & Cetak',       desc:'LKPD Wali kelas 35 @500',                                        amount: 17500 },
];

// ── WARNA ─────────────────────────────────────────────────────────────────────
const CLR = {
  navyDark : '1A3A5C',
  navyMid  : '2563EB',
  navyLight: 'DBEAFE',
  green    : '15803D',
  greenBg  : 'DCFCE7',
  greenCell: '86EFAC',
  red      : 'B91C1C',
  redBg    : 'FEE2E2',
  redCell  : 'FCA5A5',
  orange   : 'B45309',
  orangeBg : 'FEF3C7',
  white    : 'FFFFFF',
  dark     : '1E293B',
  gray     : 'F1F5F9',
  border   : 'CBD5E1',
  gold     : 'CA8A04',
  goldBg   : 'FEF9C3',
};

// ── STYLE HELPERS ─────────────────────────────────────────────────────────────
function s(fill, fontColor, bold, sz, halign, border, numFmt, italic, wrap) {
  const st = {
    fill: { patternType:'solid', fgColor:{ rgb: fill || CLR.white } },
    font: { name:'Calibri', sz: sz || 10, bold: !!bold, italic: !!italic,
            color:{ rgb: fontColor || CLR.dark } },
    alignment: { horizontal: halign || 'left', vertical:'center', wrapText: !!wrap },
    border: border === false ? {} : {
      top   :{ style:'thin', color:{ rgb: CLR.border } },
      bottom:{ style:'thin', color:{ rgb: CLR.border } },
      left  :{ style:'thin', color:{ rgb: CLR.border } },
      right :{ style:'thin', color:{ rgb: CLR.border } },
    }
  };
  if (numFmt) st.numFmt = numFmt;
  return st;
}

function setC(ws, c, r, v, style, type, formula) {
  const addr = XLSX.utils.encode_cell({ c, r });
  const t = type || (typeof v === 'number' ? 'n' : typeof v === 'boolean' ? 'b' : 's');
  ws[addr] = { v, t, s: style };
  if (formula) { ws[addr].f = formula; ws[addr].t = 'n'; }
}

function merge(ws, r1, c1, r2, c2) {
  if (!ws['!merges']) ws['!merges'] = [];
  ws['!merges'].push({ s:{r:r1,c:c1}, e:{r:r2,c:c2} });
}

function enc(c, r) { return XLSX.utils.encode_cell({c,r}); }

// ══════════════════════════════════════════════════════════════════════════════
// SHEET 1: DASHBOARD (Ringkasan Otomatis)
// ══════════════════════════════════════════════════════════════════════════════
function buildDashboard() {
  const ws = {};

  // ── Header utama ────────────────────────────────────────────────────────
  merge(ws, 0,0, 0,7);
  setC(ws,0,0, `WORKBOOK KAS BENDAHARA ${SETTINGS.namaKelas} — ${SETTINGS.namaSekolah}`,
    s(CLR.navyDark, CLR.white, true, 16, 'center'));

  merge(ws, 1,0, 1,7);
  setC(ws,0,1, `Tahun Ajaran ${SETTINGS.tahunAjaran}  |  Nominal: Rp ${SETTINGS.nominal.toLocaleString('id-ID')}/Siswa/Bulan  |  Wali Kelas: ${SETTINGS.namaWaliKelas}  |  Bendahara: ${SETTINGS.namaBendahara}`,
    s(CLR.navyMid, CLR.white, false, 10, 'center'));

  // ── KPI Section Header ───────────────────────────────────────────────────
  merge(ws,3,0,3,7);
  setC(ws,0,3,'📊 RINGKASAN KEUANGAN (Otomatis dari Sheet Pembayaran & Pengeluaran)',
    s(CLR.navyDark, CLR.white, true, 11, 'center'));

  // ── KPI Boxes ────────────────────────────────────────────────────────────
  // Baris 4-6: 4 KPI cards
  const kpiHeaders = [
    ['💰 TOTAL PEMASUKAN', CLR.green,   CLR.greenBg],
    ['📤 TOTAL PENGELUARAN', CLR.red,   CLR.redBg],
    ['🏦 SALDO AKHIR KAS', CLR.navyMid, CLR.navyLight],
    ['📊 CAPAIAN BAYAR (%)', CLR.gold,  CLR.goldBg],
  ];

  // KPI columns: 0-1, 2-3, 4-5, 6-7
  kpiHeaders.forEach(([label, fg, bg], i) => {
    const c = i * 2;
    merge(ws, 4, c, 4, c+1);
    setC(ws, c, 4, label, s(bg, fg, true, 11, 'center'));
    merge(ws, 5, c, 6, c+1);
    // formulas reference other sheets
    let formula = '';
    if (i === 0) formula = `='📋 Pembayaran'!P39`;          // total pemasukan
    if (i === 1) formula = `='📤 Pengeluaran'!E${9+EXPENSES.length}`;  // total pengeluaran
    if (i === 2) formula = `='📊 Dashboard'!C6-'📊 Dashboard'!E6`; // saldo
    if (i === 3) formula = `=ROUND(('📋 Pembayaran'!P39/('📋 Pembayaran'!P38*${SETTINGS.nominal}))*100,1)`;
    setC(ws, c, 5, 0, {
      fill:{ patternType:'solid', fgColor:{ rgb: bg } },
      font:{ name:'Calibri', sz:18, bold:true, color:{ rgb:fg } },
      numFmt: i<2 ? '"Rp "#,##0' : i===2 ? '"Rp "#,##0' : '0.0"%"',
      alignment:{ horizontal:'center', vertical:'center' },
      border: { top:{style:'medium',color:{rgb:fg}}, bottom:{style:'medium',color:{rgb:fg}},
                left:{style:'medium',color:{rgb:fg}}, right:{style:'medium',color:{rgb:fg}} }
    }, 'n', formula);
  });

  // Fix saldo formula after setting cells
  const saldoAddr = enc(4,5);
  ws[saldoAddr].f = `='📋 Pembayaran'!P39-'📤 Pengeluaran'!E${9+EXPENSES.length}`;

  // ── Per-month table ──────────────────────────────────────────────────────
  merge(ws, 8,0, 8,7);
  setC(ws,0,8,'📅 PEMASUKAN PER BULAN (Tarik Otomatis dari Sheet Pembayaran)',
    s(CLR.navyDark, CLR.white, true, 11, 'center'));

  const tblHdrs = ['No','Bulan','Jumlah Siswa Lunas','Jumlah Siswa Belum','Pemasukan Bulan Ini','Sisa Potensi','% Lunas','Status'];
  tblHdrs.forEach((h, ci) => {
    setC(ws, ci, 9, h, s(CLR.navyMid, CLR.white, true, 10, 'center'));
  });

  MONTHS.forEach((mLabel, mi) => {
    const r = 10 + mi;
    const bg = mi % 2 === 0 ? CLR.white : CLR.gray;
    const pmtCol = String.fromCharCode(68 + mi); // col D onward in Pembayaran sheet

    // In Pembayaran sheet: row 4=header, rows 5..39 = students (35 rows), row 40=totals
    // Countif LUNAS = count of cells == "LUNAS" in that month column
    const pmbColLetter = String.fromCharCode(67 + mi); // C=Juli, D=Agustus...
    const lunasFormula = `=COUNTIF('📋 Pembayaran'!${pmbColLetter}5:${pmbColLetter}39,"LUNAS")`;
    const belumFormula = `=COUNTIF('📋 Pembayaran'!${pmbColLetter}5:${pmbColLetter}39,"Belum Bayar")`;
    const pemasukanFormula = `=COUNTIF('📋 Pembayaran'!${pmbColLetter}5:${pmbColLetter}39,"LUNAS")*${SETTINGS.nominal}`;
    const sisaFormula = `=COUNTIF('📋 Pembayaran'!${pmbColLetter}5:${pmbColLetter}39,"Belum Bayar")*${SETTINGS.nominal}`;
    const pctFormula = `=IFERROR(ROUND(COUNTIF('📋 Pembayaran'!${pmbColLetter}5:${pmbColLetter}39,"LUNAS")/35*100,1),0)`;
    const statusFormula = `=IF(COUNTIF('📋 Pembayaran'!${pmbColLetter}5:${pmbColLetter}39,"LUNAS")=35,"✅ LUNAS SEMUA",IF(COUNTIF('📋 Pembayaran'!${pmbColLetter}5:${pmbColLetter}39,"LUNAS")>0,"⏳ Sebagian","❌ Belum Ada"))`;

    setC(ws,0,r, mi+1, s(bg,CLR.dark,false,10,'center'));
    setC(ws,1,r, mLabel, s(bg));
    setC(ws,2,r, 0, s(bg,CLR.green,true,10,'center'), 'n', lunasFormula);
    setC(ws,3,r, 0, s(bg,CLR.red,true,10,'center'), 'n', belumFormula);
    setC(ws,4,r, 0, { fill:{patternType:'solid',fgColor:{rgb:CLR.greenBg}}, font:{name:'Calibri',sz:10,bold:true,color:{rgb:CLR.green}},
      numFmt:'"Rp "#,##0', alignment:{horizontal:'right',vertical:'center'}, border:{top:{style:'thin',color:{rgb:CLR.border}},bottom:{style:'thin',color:{rgb:CLR.border}},left:{style:'thin',color:{rgb:CLR.border}},right:{style:'thin',color:{rgb:CLR.border}}}
    }, 'n', pemasukanFormula);
    setC(ws,5,r, 0, { fill:{patternType:'solid',fgColor:{rgb:CLR.redBg}}, font:{name:'Calibri',sz:10,bold:false,color:{rgb:CLR.red}},
      numFmt:'"Rp "#,##0', alignment:{horizontal:'right',vertical:'center'}, border:{top:{style:'thin',color:{rgb:CLR.border}},bottom:{style:'thin',color:{rgb:CLR.border}},left:{style:'thin',color:{rgb:CLR.border}},right:{style:'thin',color:{rgb:CLR.border}}}
    }, 'n', sisaFormula);
    setC(ws,6,r, 0, s(bg,CLR.dark,false,10,'center'), 'n', pctFormula);
    setC(ws,7,r, '', s(bg,CLR.dark,true,10,'center'), 's', statusFormula);
  });

  // Total row
  const totR = 10 + MONTHS.length;
  merge(ws, totR, 0, totR, 1);
  setC(ws,0,totR,'TOTAL KESELURUHAN', s(CLR.navyDark, CLR.white, true, 11, 'center'));
  setC(ws,2,totR, 0, s(CLR.navyDark,CLR.white,true,11,'center'), 'n', `=SUM(C11:C${totR})`);
  setC(ws,3,totR, 0, s(CLR.navyDark,CLR.white,true,11,'center'), 'n', `=SUM(D11:D${totR})`);
  setC(ws,4,totR, 0, { fill:{patternType:'solid',fgColor:{rgb:CLR.navyDark}}, font:{name:'Calibri',sz:11,bold:true,color:{rgb:CLR.white}},
    numFmt:'"Rp "#,##0', alignment:{horizontal:'right',vertical:'center'}, border:{top:{style:'medium',color:{rgb:'000000'}},bottom:{style:'medium',color:{rgb:'000000'}},left:{style:'thin',color:{rgb:CLR.border}},right:{style:'thin',color:{rgb:CLR.border}}}
  }, 'n', `=SUM(E11:E${totR})`);
  setC(ws,5,totR, 0, { fill:{patternType:'solid',fgColor:{rgb:CLR.navyDark}}, font:{name:'Calibri',sz:11,bold:true,color:{rgb:CLR.white}},
    numFmt:'"Rp "#,##0', alignment:{horizontal:'right',vertical:'center'}, border:{top:{style:'medium',color:{rgb:'000000'}},bottom:{style:'medium',color:{rgb:'000000'}},left:{style:'thin',color:{rgb:CLR.border}},right:{style:'thin',color:{rgb:CLR.border}}}
  }, 'n', `=SUM(F11:F${totR})`);
  merge(ws, totR, 6, totR, 7);
  setC(ws,6,totR,'', s(CLR.navyDark,CLR.white,true,11,'center'));

  ws['!cols'] = [{wch:5},{wch:20},{wch:18},{wch:18},{wch:22},{wch:22},{wch:12},{wch:18}];
  ws['!rows'] = [{hpx:36},{hpx:22},{hpx:8},{hpx:26},...Array(30).fill({hpx:24})];
  ws['!ref'] = XLSX.utils.encode_range({s:{r:0,c:0},e:{r:totR+2,c:7}});
  return ws;
}

// ══════════════════════════════════════════════════════════════════════════════
// SHEET 2: INPUT PEMBAYARAN (bisa diedit langsung)
// ══════════════════════════════════════════════════════════════════════════════
function buildPaymentSheet() {
  const ws = {};

  // Title
  merge(ws,0,0,0,16);
  setC(ws,0,0,`DAFTAR PEMBAYARAN KAS KELAS — ${SETTINGS.namaKelas}  |  ${SETTINGS.namaSekolah}  |  TA ${SETTINGS.tahunAjaran}`,
    s(CLR.navyDark, CLR.white, true, 14, 'center'));

  merge(ws,1,0,1,16);
  setC(ws,0,1,`💡 CARA PAKAI: Ketik "LUNAS" jika sudah bayar, ketik "Belum Bayar" jika belum. Nominal: Rp ${SETTINGS.nominal.toLocaleString('id-ID')}/bulan/siswa`,
    s(CLR.goldBg, CLR.gold, true, 10, 'center'));

  merge(ws,2,0,2,16);
  setC(ws,0,2,'',s(CLR.white, CLR.white, false, 6,'center', false));

  // Column headers
  const hdR = 3;
  // A=No, B=Nama, C..N=Bulan (12), O=Jml Lunas, P=Total Dibayar, Q=Sisa
  setC(ws,0,hdR,'No', s(CLR.navyDark,CLR.white,true,10,'center'));
  setC(ws,1,hdR,'Nama Siswa', s(CLR.navyDark,CLR.white,true,10,'center'));
  MONTHS.forEach((m,mi) => {
    setC(ws, 2+mi, hdR, m, s(CLR.navyMid,CLR.white,true,9,'center'));
  });
  setC(ws,14,hdR,'Jml Lunas', s(CLR.navyDark,CLR.white,true,10,'center'));
  setC(ws,15,hdR,'Total Dibayar', s(CLR.navyDark,CLR.white,true,10,'center'));
  setC(ws,16,hdR,'Sisa Bayar', s(CLR.navyDark,CLR.white,true,10,'center'));

  // Student rows
  const dataStartR = 4; // row index 4 = Excel row 5
  STUDENTS.forEach((st, si) => {
    const r = dataStartR + si;
    const bg = si % 2 === 0 ? CLR.white : CLR.gray;

    setC(ws,0,r, si+1, s(bg,CLR.dark,false,10,'center'));
    setC(ws,1,r, st.name, s(bg,CLR.dark,false,10,'left'));

    // Month cells - INPUT CELLS with color coding
    st.p.forEach((paid, mi) => {
      const val = paid ? 'LUNAS' : 'Belum Bayar';
      setC(ws, 2+mi, r, val, s(
        paid ? CLR.greenBg : CLR.redBg,
        paid ? CLR.green   : CLR.red,
        true, 10, 'center'
      ));
    });

    // Formula: Count LUNAS for this student
    const firstCol = 'C'; // C=Juli
    const lastCol  = 'N'; // N=Juni
    const exRow    = r + 1; // Excel 1-based row
    const lunasCountFormula = `=COUNTIF(C${exRow}:N${exRow},"LUNAS")`;
    const totalFormula      = `=O${exRow}*${SETTINGS.nominal}`;
    const sisaFormula       = `=(12-O${exRow})*${SETTINGS.nominal}`;

    setC(ws,14,r, 0, { fill:{patternType:'solid',fgColor:{rgb:CLR.navyLight}},
      font:{name:'Calibri',sz:10,bold:true,color:{rgb:CLR.navyMid}},
      alignment:{horizontal:'center',vertical:'center'},
      border:{top:{style:'thin',color:{rgb:CLR.border}},bottom:{style:'thin',color:{rgb:CLR.border}},left:{style:'thin',color:{rgb:CLR.border}},right:{style:'thin',color:{rgb:CLR.border}}}
    }, 'n', lunasCountFormula);

    setC(ws,15,r, 0, { fill:{patternType:'solid',fgColor:{rgb:CLR.greenBg}},
      font:{name:'Calibri',sz:10,bold:true,color:{rgb:CLR.green}},
      numFmt:'"Rp "#,##0',
      alignment:{horizontal:'right',vertical:'center'},
      border:{top:{style:'thin',color:{rgb:CLR.border}},bottom:{style:'thin',color:{rgb:CLR.border}},left:{style:'thin',color:{rgb:CLR.border}},right:{style:'thin',color:{rgb:CLR.border}}}
    }, 'n', totalFormula);

    setC(ws,16,r, 0, { fill:{patternType:'solid',fgColor:{rgb:CLR.redBg}},
      font:{name:'Calibri',sz:10,bold:false,color:{rgb:CLR.red}},
      numFmt:'"Rp "#,##0',
      alignment:{horizontal:'right',vertical:'center'},
      border:{top:{style:'thin',color:{rgb:CLR.border}},bottom:{style:'thin',color:{rgb:CLR.border}},left:{style:'thin',color:{rgb:CLR.border}},right:{style:'thin',color:{rgb:CLR.border}}}
    }, 'n', sisaFormula);
  });

  // TOTALS row (row index 39 = Excel row 40)
  const totR = dataStartR + STUDENTS.length;
  merge(ws, totR, 0, totR, 1);
  setC(ws,0,totR,'TOTAL PER BULAN', s(CLR.navyDark, CLR.white, true, 10, 'center'));

  MONTHS.forEach((_, mi) => {
    const colLetter = String.fromCharCode(67+mi); // C,D,E...N
    setC(ws, 2+mi, totR, 0, {
      fill:{patternType:'solid',fgColor:{rgb:CLR.navyDark}},
      font:{name:'Calibri',sz:10,bold:true,color:{rgb:CLR.white}},
      numFmt:'"Rp "#,##0',
      alignment:{horizontal:'right',vertical:'center'},
      border:{top:{style:'medium',color:{rgb:'000000'}},bottom:{style:'medium',color:{rgb:'000000'}},left:{style:'thin',color:{rgb:CLR.border}},right:{style:'thin',color:{rgb:CLR.border}}}
    }, 'n', `=COUNTIF(${colLetter}5:${colLetter}39,"LUNAS")*${SETTINGS.nominal}`);
  });

  // Total pemasukan
  const totExRow = totR + 1;
  setC(ws,14,totR, 0, s(CLR.navyDark, CLR.white, true, 11,'center'), 'n',
    `=SUM(O5:O${totExRow-1})`);
  setC(ws,15,totR, 0, {
    fill:{patternType:'solid',fgColor:{rgb:CLR.navyDark}},
    font:{name:'Calibri',sz:11,bold:true,color:{rgb:CLR.white}},
    numFmt:'"Rp "#,##0',
    alignment:{horizontal:'right',vertical:'center'},
    border:{top:{style:'medium',color:{rgb:'000000'}},bottom:{style:'medium',color:{rgb:'000000'}},left:{style:'medium',color:{rgb:'000000'}},right:{style:'medium',color:{rgb:'000000'}}}
  }, 'n', `=SUM(P5:P${totExRow-1})`);
  setC(ws,16,totR, 0, {
    fill:{patternType:'solid',fgColor:{rgb:CLR.redBg}},
    font:{name:'Calibri',sz:11,bold:true,color:{rgb:CLR.red}},
    numFmt:'"Rp "#,##0',
    alignment:{horizontal:'right',vertical:'center'},
    border:{top:{style:'medium',color:{rgb:CLR.red}},bottom:{style:'medium',color:{rgb:CLR.red}},left:{style:'medium',color:{rgb:CLR.red}},right:{style:'medium',color:{rgb:CLR.red}}}
  }, 'n', `=SUM(Q5:Q${totExRow-1})`);

  // Keterangan warna
  const noteR = totR + 2;
  merge(ws, noteR, 0, noteR, 16);
  setC(ws,0,noteR,
    '🟢 LUNAS = Hijau (ketik "LUNAS")     🔴 Belum Bayar = Merah (ketik "Belum Bayar")     ⚠️ Kolom O, P, Q adalah RUMUS OTOMATIS — JANGAN DIHAPUS',
    s(CLR.goldBg, CLR.gold, true, 9, 'center'));

  ws['!cols'] = [
    {wch:5},{wch:33},
    ...MONTHS.map(()=>({wch:14})),
    {wch:12},{wch:18},{wch:16}
  ];
  ws['!rows'] = [{hpx:32},{hpx:24},{hpx:8},{hpx:28},...Array(40).fill({hpx:22})];
  ws['!ref'] = XLSX.utils.encode_range({s:{r:0,c:0},e:{r:noteR+2,c:16}});
  return ws;
}

// ══════════════════════════════════════════════════════════════════════════════
// SHEET 3: PENGELUARAN (bisa tambah baris)
// ══════════════════════════════════════════════════════════════════════════════
function buildExpenseSheet() {
  const ws = {};

  merge(ws,0,0,0,5);
  setC(ws,0,0,'📤 CATATAN PENGELUARAN KAS KELAS',
    s(CLR.red, CLR.white, true, 14, 'center'));

  merge(ws,1,0,1,5);
  setC(ws,0,1,`${SETTINGS.namaKelas}  |  ${SETTINGS.namaSekolah}  |  TA ${SETTINGS.tahunAjaran}`,
    s('EF4444', CLR.white, false, 10, 'center'));

  merge(ws,2,0,2,5);
  setC(ws,0,2,'💡 CARA PAKAI: Isi baris kosong di bawah untuk tambah pengeluaran baru. Kolom Total akan terhitung otomatis.',
    s(CLR.goldBg, CLR.gold, true, 10, 'center'));

  const hdR = 4;
  ['No','Tanggal','Kategori','Keterangan / Deskripsi','Jumlah (Rp)','Kumulatif'].forEach((h,ci)=>{
    setC(ws,ci,hdR,h,s(CLR.red,CLR.white,true,10,'center'));
  });

  const dataStart = 5;
  EXPENSES.forEach((e,ei)=>{
    const r = dataStart + ei;
    const bg = ei % 2 === 0 ? CLR.white : CLR.gray;
    setC(ws,0,r, ei+1, s(bg,CLR.dark,false,10,'center'));
    setC(ws,1,r, e.date, s(bg,CLR.dark,false,10,'center'));
    setC(ws,2,r, e.category, s(bg,CLR.dark,false,10,'left'));
    setC(ws,3,r, e.desc, s(bg,CLR.dark,false,10,'left'));
    setC(ws,4,r, e.amount, {
      fill:{patternType:'solid',fgColor:{rgb:bg}},
      font:{name:'Calibri',sz:10,bold:false,color:{rgb:CLR.dark}},
      numFmt:'"Rp "#,##0', alignment:{horizontal:'right',vertical:'center'},
      border:{top:{style:'thin',color:{rgb:CLR.border}},bottom:{style:'thin',color:{rgb:CLR.border}},left:{style:'thin',color:{rgb:CLR.border}},right:{style:'thin',color:{rgb:CLR.border}}}
    });
    // Kumulatif
    const exRow = r + 1;
    setC(ws,5,r, 0, {
      fill:{patternType:'solid',fgColor:{rgb:CLR.redBg}},
      font:{name:'Calibri',sz:10,bold:true,color:{rgb:CLR.red}},
      numFmt:'"Rp "#,##0', alignment:{horizontal:'right',vertical:'center'},
      border:{top:{style:'thin',color:{rgb:CLR.border}},bottom:{style:'thin',color:{rgb:CLR.border}},left:{style:'thin',color:{rgb:CLR.border}},right:{style:'thin',color:{rgb:CLR.border}}}
    }, 'n', `=SUM($E$6:E${exRow})`);
  });

  // Baris kosong untuk tambah (10 baris)
  for (let i = 0; i < 10; i++) {
    const r = dataStart + EXPENSES.length + i;
    const no = EXPENSES.length + i + 1;
    const bg = (EXPENSES.length+i) % 2 === 0 ? CLR.white : CLR.gray;
    setC(ws,0,r, no, s(bg,CLR.dark,false,10,'center'));
    setC(ws,1,r, '', s(bg,CLR.dark,false,10,'center'));
    setC(ws,2,r, '', s(bg,CLR.dark,false,10,'left'));
    setC(ws,3,r, '', s(bg,CLR.dark,false,10,'left'));
    setC(ws,4,r, 0, {
      fill:{patternType:'solid',fgColor:{rgb:bg}},
      font:{name:'Calibri',sz:10,bold:false,color:{rgb:CLR.dark}},
      numFmt:'"Rp "#,##0', alignment:{horizontal:'right',vertical:'center'},
      border:{top:{style:'thin',color:{rgb:CLR.border}},bottom:{style:'thin',color:{rgb:CLR.border}},left:{style:'thin',color:{rgb:CLR.border}},right:{style:'thin',color:{rgb:CLR.border}}}
    });
    const exRow = r + 1;
    setC(ws,5,r, 0, {
      fill:{patternType:'solid',fgColor:{rgb:CLR.redBg}},
      font:{name:'Calibri',sz:10,bold:true,color:{rgb:CLR.red}},
      numFmt:'"Rp "#,##0', alignment:{horizontal:'right',vertical:'center'},
      border:{top:{style:'thin',color:{rgb:CLR.border}},bottom:{style:'thin',color:{rgb:CLR.border}},left:{style:'thin',color:{rgb:CLR.border}},right:{style:'thin',color:{rgb:CLR.border}}}
    }, 'n', `=IF(E${exRow}>0,SUM($E$6:E${exRow}),"—")`);
  }

  // Total row
  const totR = dataStart + EXPENSES.length + 10;
  merge(ws, totR, 0, totR, 3);
  setC(ws,0,totR,'🔴 TOTAL PENGELUARAN KESELURUHAN', s(CLR.red,CLR.white,true,12,'right'));
  const lastExpRow = dataStart + EXPENSES.length + 10; // row index = totR, Excel = totR+1
  setC(ws,4,totR, 0, {
    fill:{patternType:'solid',fgColor:{rgb:CLR.redBg}},
    font:{name:'Calibri',sz:14,bold:true,color:{rgb:CLR.red}},
    numFmt:'"Rp "#,##0', alignment:{horizontal:'right',vertical:'center'},
    border:{top:{style:'medium',color:{rgb:CLR.red}},bottom:{style:'medium',color:{rgb:CLR.red}},left:{style:'medium',color:{rgb:CLR.red}},right:{style:'medium',color:{rgb:CLR.red}}}
  }, 'n', `=SUMIF(E6:E${totR},">"&0)`);
  setC(ws,5,totR, '', s(CLR.white));

  ws['!cols'] = [{wch:5},{wch:16},{wch:25},{wch:50},{wch:18},{wch:18}];
  ws['!rows'] = [{hpx:32},{hpx:20},{hpx:24},{},{hpx:26},...Array(30).fill({hpx:22})];
  ws['!ref'] = XLSX.utils.encode_range({s:{r:0,c:0},e:{r:totR+2,c:5}});
  return ws;
}

// ══════════════════════════════════════════════════════════════════════════════
// SHEET 4: REKAP KEUANGAN (Laporan resmi dengan tanda tangan)
// ══════════════════════════════════════════════════════════════════════════════
function buildRekapSheet() {
  const ws = {};

  merge(ws,0,0,0,4);
  setC(ws,0,0,'LAPORAN REKAP KEUANGAN KAS KELAS',
    s(CLR.navyDark,CLR.white,true,16,'center'));
  merge(ws,1,0,1,4);
  setC(ws,0,1,`${SETTINGS.namaKelas}  •  ${SETTINGS.namaSekolah}  •  Tahun Ajaran ${SETTINGS.tahunAjaran}`,
    s(CLR.navyMid,CLR.white,false,11,'center'));
  merge(ws,2,0,2,4);
  setC(ws,0,2,`Wali Kelas: ${SETTINGS.namaWaliKelas}   |   Bendahara/Koordinator: ${SETTINGS.namaBendahara}`,
    s(CLR.navyLight,CLR.navyMid,false,10,'center'));

  const hdR = 4;
  ['No','Uraian','Jumlah (Rp)','Keterangan','Referensi'].forEach((h,ci)=>{
    setC(ws,ci,hdR,h,s(CLR.navyDark,CLR.white,true,10,'center'));
  });

  const totalExpRows = 9 + EXPENSES.length; // excel row of total in expense sheet

  const rows = [
    { no:'A', uraian:'PEMASUKAN', jumlah: null, ket:'', ref:'', isHeader:true, bg:CLR.greenBg, fg:CLR.green },
    { no:'1', uraian:'  Kas dari siswa (pembayaran bulanan)', jumlah:null, ket:`${SETTINGS.nominal.toLocaleString('id-ID')} × siswa × bulan`, ref:"='📋 Pembayaran'!P39", bg:CLR.white, fg:CLR.dark },
    { no:'',  uraian:'TOTAL PEMASUKAN (A)', jumlah:null, ket:'', ref:"='📋 Pembayaran'!P39", bg:CLR.greenBg, fg:CLR.green, bold:true },
    { no:'B', uraian:'PENGELUARAN', jumlah: null, ket:'', ref:'', isHeader:true, bg:CLR.redBg, fg:CLR.red },
    ...EXPENSES.map((e, ei) => ({
      no: String(ei+1),
      uraian: `  ${e.desc}`,
      jumlah: e.amount,
      ket: e.category,
      ref: '',
      bg: CLR.white, fg:CLR.dark
    })),
    { no:'', uraian:'TOTAL PENGELUARAN (B)', jumlah:null, ket:'', ref:`='📤 Pengeluaran'!E${totalExpRows}`, bg:CLR.redBg, fg:CLR.red, bold:true },
    { no:'C', uraian:'SALDO AKHIR KAS  (A − B)', jumlah:null, ket:'Kas tersedia', ref:`='📋 Pembayaran'!P39-'📤 Pengeluaran'!E${totalExpRows}`, bg:CLR.navyLight, fg:CLR.navyDark, bold:true, big:true },
  ];

  rows.forEach((row, ri) => {
    const r = hdR + 1 + ri;
    const bg = row.bg || CLR.white;
    const fg = row.fg || CLR.dark;

    setC(ws,0,r, row.no, s(bg, fg, row.bold||false, row.big?12:10, 'center'));
    setC(ws,1,r, row.uraian, s(bg, fg, row.bold||row.isHeader||false, row.big?12:10, 'left'));
    if (row.ref) {
      setC(ws,2,r, 0, {
        fill:{patternType:'solid',fgColor:{rgb:bg}},
        font:{name:'Calibri',sz:row.big?14:10,bold:row.bold||false,color:{rgb:fg}},
        numFmt:'"Rp "#,##0',
        alignment:{horizontal:'right',vertical:'center'},
        border:{top:{style:'thin',color:{rgb:CLR.border}},bottom:{style:row.bold?'medium':'thin',color:{rgb:row.bold?fg:CLR.border}},left:{style:'thin',color:{rgb:CLR.border}},right:{style:'thin',color:{rgb:CLR.border}}}
      }, 'n', row.ref);
    } else if (row.jumlah !== null) {
      setC(ws,2,r, row.jumlah, {
        fill:{patternType:'solid',fgColor:{rgb:bg}},
        font:{name:'Calibri',sz:10,bold:false,color:{rgb:fg}},
        numFmt:'"Rp "#,##0',
        alignment:{horizontal:'right',vertical:'center'},
        border:{top:{style:'thin',color:{rgb:CLR.border}},bottom:{style:'thin',color:{rgb:CLR.border}},left:{style:'thin',color:{rgb:CLR.border}},right:{style:'thin',color:{rgb:CLR.border}}}
      });
    } else {
      setC(ws,2,r, '', s(bg));
    }
    setC(ws,3,r, row.ket || '', s(bg, fg, false, 10));
    setC(ws,4,r, row.ref ? 'Otomatis' : row.jumlah !== null ? 'Input manual' : '', s(bg, CLR.border, false, 9, 'center'));
  });

  // Tanda tangan section
  const sigStartR = hdR + 2 + rows.length + 2;
  merge(ws,sigStartR,0,sigStartR,4);
  setC(ws,0,sigStartR,`Jakarta, ${new Date().toLocaleDateString('id-ID',{day:'numeric',month:'long',year:'numeric'})}`,
    s(CLR.white,CLR.dark,false,10,'right'));

  const sigCols = [
    { label:'Mengetahui, Wali Kelas', name: SETTINGS.namaWaliKelas },
    { label:'Bendahara / Koordinator', name: SETTINGS.namaBendahara },
    { label:'Diketahui, Kepala Sekolah', name: '( ________________________ )' },
  ];
  sigCols.forEach((sig, si) => {
    const c = si + 1;
    if (si < 2) {
      setC(ws, c, sigStartR+1, sig.label, s(CLR.navyLight, CLR.navyDark, true, 10, 'center'));
      setC(ws, c, sigStartR+2, '', s(CLR.white));
      setC(ws, c, sigStartR+3, '', s(CLR.white));
      setC(ws, c, sigStartR+4, '', s(CLR.white));
      setC(ws, c, sigStartR+5, sig.name, s(CLR.white, CLR.dark, true, 10, 'center'));
    } else {
      setC(ws, c+1, sigStartR+1, sig.label, s(CLR.navyLight, CLR.navyDark, true, 10, 'center'));
      setC(ws, c+1, sigStartR+2, '', s(CLR.white));
      setC(ws, c+1, sigStartR+3, '', s(CLR.white));
      setC(ws, c+1, sigStartR+4, '', s(CLR.white));
      setC(ws, c+1, sigStartR+5, sig.name, s(CLR.white, CLR.dark, true, 10, 'center'));
    }
  });

  ws['!cols'] = [{wch:5},{wch:45},{wch:20},{wch:22},{wch:12}];
  ws['!rows'] = [{hpx:36},{hpx:24},{hpx:22},{},{hpx:26},...Array(40).fill({hpx:22})];
  ws['!ref'] = XLSX.utils.encode_range({s:{r:0,c:0},e:{r:sigStartR+8,c:4}});
  return ws;
}

// ══════════════════════════════════════════════════════════════════════════════
// MAIN
// ══════════════════════════════════════════════════════════════════════════════
function generate() {
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, buildDashboard(),    '📊 Dashboard');
  XLSX.utils.book_append_sheet(wb, buildPaymentSheet(), '📋 Pembayaran');
  XLSX.utils.book_append_sheet(wb, buildExpenseSheet(), '📤 Pengeluaran');
  XLSX.utils.book_append_sheet(wb, buildRekapSheet(),   '📑 Rekap Laporan');

  const outFile = path.join(__dirname, '..', 'public',
    'Kas_Bendahara_Kelas5A_SDS-KasihAnanda_TA2026-2027.xlsx');

  XLSX.writeFile(wb, outFile, { bookType:'xlsx', type:'binary' });
  console.log('✅ Excel berhasil dibuat!');
  console.log('📂 Lokasi:', outFile);
  console.log('📊 4 Sheet: Dashboard, Pembayaran (Input), Pengeluaran, Rekap Laporan');
}

generate();

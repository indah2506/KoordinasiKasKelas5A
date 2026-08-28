const fs = require('fs');
let js = fs.readFileSync('g:/Antigravity/Website/public/app.js', 'utf8');

const months = ['juli_2026','agustus_2026','september_2026','oktober_2026','november_2026','desember_2026','januari_2027','februari_2027','maret_2027','april_2027','mei_2027','juni_2027'];

function makePayments(paidCount) {
  const p = {};
  months.forEach((m, i) => {
    p[m] = { status: i < paidCount, date: i < paidCount ? '2026-08-05' : '', method: i < paidCount ? 'Tunai / Cash' : '' };
  });
  return p;
}

const newStudents = [
  { id:1,  name:'Adiara Zahwa Aprella',         phone:'082125470951', payments: makePayments(2)  },
  { id:2,  name:'Alesha Fitria Khairunnisa',     phone:'081281920272', payments: makePayments(6)  },
  { id:3,  name:'Alicia Alverina Carter',        phone:'',             payments: makePayments(6)  },
  { id:4,  name:'Allesya Alvera Meina Lengkong', phone:'',             payments: makePayments(0)  },
  { id:5,  name:'Allysia Leilanie Yasmine',      phone:'',             payments: makePayments(0)  },
  { id:6,  name:'Ar Kenzie Kiaka Putra',         phone:'',             payments: makePayments(0)  },
  { id:7,  name:'Cathy Charissa Hutauruk',       phone:'',             payments: makePayments(0)  },
  { id:8,  name:'Cavello Vincenzo Pratama',      phone:'082130355514', payments: makePayments(12) },
  { id:9,  name:'Chelsea Vebian',                phone:'087894587966', payments: makePayments(12) },
  { id:10, name:'Cleo Vennya Donita',            phone:'08111742629',  payments: makePayments(3)  },
  { id:11, name:'Cleona Uli Malau',              phone:'',             payments: makePayments(0)  },
  { id:12, name:'Cleva Anastasya Tanjung',       phone:'',             payments: makePayments(0)  },
  { id:13, name:'Darrell Gavriel Oliver',        phone:'',             payments: makePayments(5)  },
  { id:14, name:'Diandra Sapta Pratama',         phone:'',             payments: makePayments(6)  },
  { id:15, name:'Fahira Anindita Nurhakim',      phone:'',             payments: makePayments(12) },
  { id:16, name:'Fazila Azzahra',                phone:'',             payments: makePayments(0)  },
  { id:17, name:'Fransisca',                     phone:'',             payments: makePayments(0)  },
  { id:18, name:'Josua Hamonangan Slahaan',      phone:'',             payments: makePayments(6)  },
  { id:19, name:'Jusuf Habibi Muchtar',          phone:'',             payments: makePayments(0)  },
  { id:20, name:'Khaerul Basyar Rukmana',        phone:'085710401552', payments: makePayments(2)  },
  { id:21, name:'Khairunnisa Dwi Kurniawan',     phone:'',             payments: makePayments(5)  },
  { id:22, name:'Kim Reynand Andah Pranaja',     phone:'085117070159', payments: makePayments(6)  },
  { id:23, name:'Lutfi Khoirul Nur Ramadhan',    phone:'081283016613', payments: makePayments(12) },
  { id:24, name:'Marco Alejandro Mendoza Retno', phone:'081808251119', payments: makePayments(6)  },
  { id:25, name:'Maryam Audra Milly',            phone:'085176651200', payments: makePayments(2)  },
  { id:26, name:'Muhammad Danish Ali Haidari',   phone:'',             payments: makePayments(0)  },
  { id:27, name:'Muhammad Raja El Firdaus',      phone:'087745525749', payments: makePayments(6)  },
  { id:28, name:'Muhammad Rifat Ramadhan',       phone:'081212855837', payments: makePayments(3)  },
  { id:29, name:'Muhammad Zlatan Alkhalifi',     phone:'081216100160', payments: makePayments(0)  },
  { id:30, name:'Nathaniel Raphael',             phone:'',             payments: makePayments(3)  },
  { id:31, name:'Naura Alvy Zahya',              phone:'081291890142', payments: makePayments(12) },
  { id:32, name:'Queenzha Aqila',                phone:'081288071004', payments: makePayments(12) },
  { id:33, name:'Satya Akbar Putra',             phone:'',             payments: makePayments(0)  },
  { id:34, name:'Syafhia Nazruliza',             phone:'',             payments: makePayments(0)  },
  { id:35, name:'Viola Callista Donita',         phone:'08111742629',  payments: makePayments(3)  },
];

// Verify totals
let totalPaid = 0;
newStudents.forEach(st => { months.forEach(m => { if(st.payments[m].status) totalPaid++; }); });
console.log('Verifying: Total Paid =', totalPaid, '| Nominal = Rp', (totalPaid*20000).toLocaleString('id-ID'));

// Build the new students JSON block
const studentsJson = JSON.stringify(newStudents, null, 2);

// Find and replace students section using regex
const studentsStart = js.indexOf('"students": [');
const expensesStart = js.indexOf('"expenses": [');

if (studentsStart === -1 || expensesStart === -1) {
  console.error('Cannot find markers. students:', studentsStart, 'expenses:', expensesStart);
  process.exit(1);
}

// Find the closing ], of students (just before expenses)
const beforeStudents = js.substring(0, studentsStart);
const afterStudents = js.substring(expensesStart);

const newJs = beforeStudents + '"students": ' + studentsJson + ',\n  ' + afterStudents;

fs.writeFileSync('g:/Antigravity/Website/public/app.js', newJs, 'utf8');
console.log('Updated app.js successfully. File size:', Math.round(newJs.length/1024), 'KB');

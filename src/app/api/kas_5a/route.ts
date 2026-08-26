import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

function countPaidEntries(data: any): number {
  if (!data || !data.students) return 0;
  let count = 0;
  data.students.forEach((s: any) => {
    if (!s || !s.payments) return;
    Object.values(s.payments).forEach((p: any) => {
      if (p === true || (p && (p.status === true || p.status === 'true' || p.status === 'LUNAS' || p.status === 1 || p.status === '1'))) count++;
    });
  });
  return count;
}

function getWritablePath(filename: string): string {
  const localPath = path.join(process.cwd(), 'data', filename);
  const tmpPath = path.join('/tmp', filename);

  if (process.env.VERCEL) {
    let localData: any = null;
    let tmpData: any = null;

    if (fs.existsSync(localPath)) {
      try { localData = JSON.parse(fs.readFileSync(localPath, 'utf8')); } catch(e){}
    }
    if (fs.existsSync(tmpPath)) {
      try { tmpData = JSON.parse(fs.readFileSync(tmpPath, 'utf8')); } catch(e){}
    }

    const localPaid = countPaidEntries(localData);
    const tmpPaid = countPaidEntries(tmpData);

    if (!fs.existsSync(tmpPath) || localPaid >= tmpPaid) {
      if (fs.existsSync(localPath)) {
        try {
          fs.writeFileSync(tmpPath, fs.readFileSync(localPath));
        } catch (e) {
          console.warn('[Vercel] Error copying to /tmp:', e);
        }
      }
    }
    return tmpPath;
  }
  return localPath;
}

export async function GET() {
  try {
    const filePath = getWritablePath('kas_5a.json');
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf8');
      const data = JSON.parse(content);
      return NextResponse.json({ success: true, data });
    }
    return NextResponse.json({ success: false, message: 'File kas_5a.json tidak ditemukan' }, { status: 404 });
  } catch (err: any) {
    return NextResponse.json({ success: false, message: err.message }, { status: 500 });
  }
}

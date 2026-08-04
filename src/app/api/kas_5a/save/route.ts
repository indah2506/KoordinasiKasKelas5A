import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

function getWritablePath(filename: string): string {
  const localPath = path.join(process.cwd(), 'data', filename);
  const tmpPath = path.join('/tmp', filename);

  if (process.env.VERCEL) {
    if (!fs.existsSync(tmpPath) && fs.existsSync(localPath)) {
      try {
        fs.writeFileSync(tmpPath, fs.readFileSync(localPath));
      } catch (e) {
        console.warn('[Vercel] Error copying to /tmp:', e);
      }
    }
    return tmpPath;
  }
  return localPath;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { data } = body;

    if (!data) {
      return NextResponse.json({ success: false, message: 'Data tidak boleh kosong' }, { status: 400 });
    }

    const filePath = getWritablePath('kas_5a.json');
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');

    return NextResponse.json({ success: true, message: 'Data Kas 5A berhasil disimpan!' });
  } catch (err: any) {
    return NextResponse.json({ success: false, message: err.message }, { status: 500 });
  }
}

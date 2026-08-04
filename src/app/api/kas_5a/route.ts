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

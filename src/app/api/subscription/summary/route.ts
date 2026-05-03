import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const apiBase = String(process.env.KEDY_API_BASE_URL || '').trim().replace(/\/+$/, '');
  if (!apiBase) {
    return NextResponse.json({ message: 'Server billing integration is not configured.' }, { status: 500 });
  }
  const auth = req.headers.get('authorization') || '';
  if (!auth) {
    return NextResponse.json({ message: 'Authorization header is required.' }, { status: 401 });
  }

  const response = await fetch(`${apiBase}/api/billing/subscription/summary`, {
    method: 'GET',
    headers: { authorization: auth },
  });
  const payload = await response.json().catch(() => ({}));
  return NextResponse.json(payload, { status: response.status });
}


import { NextRequest, NextResponse } from 'next/server';

function getApiBase(): string {
  return String(process.env.KEDY_API_BASE_URL || '').trim().replace(/\/+$/, '');
}

function getInternalKey(): string {
  return String(process.env.KEDY_INTERNAL_API_KEY || '').trim();
}

export async function POST(req: NextRequest) {
  const apiBase = getApiBase();
  const internalKey = getInternalKey();
  if (!apiBase || !internalKey) {
    return NextResponse.json({ message: 'Server billing integration is not configured.' }, { status: 500 });
  }

  const body = await req.json();
  const origin = req.nextUrl.origin;
  const locale = String(body?.locale || 'tr').trim().toLowerCase();
  const successUrl = `${origin}/${locale}/checkout/success`;
  const cancelUrl = `${origin}/${locale}/checkout/cancel`;

  const response = await fetch(`${apiBase}/api/internal/billing/checkout/session`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-internal-api-key': internalKey,
    },
    body: JSON.stringify({
      planKey: body?.planKey,
      ownerName: body?.ownerName,
      ownerEmail: body?.ownerEmail,
      ownerPhone: body?.ownerPhone,
      salonNameDraft: body?.salonNameDraft,
      referralCode: body?.referralCode,
      locale,
      successUrl,
      cancelUrl,
    }),
  });

  const payload = await response.json().catch(() => ({}));
  if (!response.ok) {
    return NextResponse.json({ message: payload?.message || 'Checkout session could not be created.' }, { status: response.status });
  }
  return NextResponse.json(payload);
}

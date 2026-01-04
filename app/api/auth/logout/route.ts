import { NextRequest, NextResponse } from 'next/server';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const locale = searchParams.get('locale') || 'ja';

  const response = NextResponse.redirect(`${BASE_URL}/${locale}?logout=success`);
  response.cookies.delete('session');

  return response;
}

export async function POST() {
  const response = NextResponse.json({ success: true });
  response.cookies.delete('session');

  return response;
}

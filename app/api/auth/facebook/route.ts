import { NextRequest, NextResponse } from 'next/server';
import { getFacebookLoginUrl } from '@/lib/auth';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const locale = searchParams.get('locale') || 'ja';

  const loginUrl = getFacebookLoginUrl(locale);

  return NextResponse.redirect(loginUrl);
}

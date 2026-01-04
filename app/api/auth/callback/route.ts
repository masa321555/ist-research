import { NextRequest, NextResponse } from 'next/server';
import {
  exchangeCodeForToken,
  getFacebookUser,
  getInstagramAccountId,
  createSessionToken
} from '@/lib/auth';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const code = searchParams.get('code');
  const error = searchParams.get('error');
  const stateParam = searchParams.get('state');

  let locale = 'ja';
  try {
    if (stateParam) {
      const state = JSON.parse(stateParam);
      locale = state.locale || 'ja';
    }
  } catch {
    // Use default locale
  }

  if (error) {
    return NextResponse.redirect(`${BASE_URL}/${locale}?error=auth_denied`);
  }

  if (!code) {
    return NextResponse.redirect(`${BASE_URL}/${locale}?error=no_code`);
  }

  try {
    // Exchange code for access token
    const accessToken = await exchangeCodeForToken(code);

    // Get user info
    const user = await getFacebookUser(accessToken);

    // Get Instagram account ID if available
    const instagramAccountId = await getInstagramAccountId(accessToken);
    if (instagramAccountId) {
      user.instagramAccountId = instagramAccountId;
    }

    // Create session token
    const sessionToken = createSessionToken(user);

    // Set cookie and redirect
    const response = NextResponse.redirect(`${BASE_URL}/${locale}?login=success`);
    response.cookies.set('session', sessionToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60 // 7 days
    });

    return response;
  } catch (err) {
    console.error('Auth callback error:', err);
    return NextResponse.redirect(`${BASE_URL}/${locale}?error=auth_failed`);
  }
}

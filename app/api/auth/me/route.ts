import { NextRequest, NextResponse } from 'next/server';
import { verifySessionToken } from '@/lib/auth';

export async function GET(request: NextRequest) {
  const sessionToken = request.cookies.get('session')?.value;

  if (!sessionToken) {
    return NextResponse.json({ user: null, isAuthenticated: false });
  }

  const user = verifySessionToken(sessionToken);

  if (!user) {
    const response = NextResponse.json({ user: null, isAuthenticated: false });
    response.cookies.delete('session');
    return response;
  }

  // Remove sensitive data before sending to client
  const safeUser = {
    id: user.id,
    name: user.name,
    email: user.email,
    picture: user.picture,
    instagramAccountId: user.instagramAccountId
  };

  return NextResponse.json({ user: safeUser, isAuthenticated: true });
}

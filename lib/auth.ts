import { User } from '@/types';

const FACEBOOK_APP_ID = process.env.FACEBOOK_APP_ID || process.env.NEXT_PUBLIC_FACEBOOK_APP_ID;
const FACEBOOK_APP_SECRET = process.env.FACEBOOK_APP_SECRET;
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

// Basic Facebook Login scopes (no additional products required)
// Instagram-specific scopes can be added after Instagram Graph API product is set up
const SCOPES = [
  'public_profile',
  'email'
].join(',');

export function getFacebookLoginUrl(locale: string = 'ja'): string {
  const redirectUri = `${BASE_URL}/api/auth/callback`;
  const state = JSON.stringify({ locale });

  const params = new URLSearchParams({
    client_id: FACEBOOK_APP_ID || '',
    redirect_uri: redirectUri,
    scope: SCOPES,
    response_type: 'code',
    state: state
  });

  return `https://www.facebook.com/v18.0/dialog/oauth?${params.toString()}`;
}

export async function exchangeCodeForToken(code: string): Promise<string> {
  const redirectUri = `${BASE_URL}/api/auth/callback`;

  const params = new URLSearchParams({
    client_id: FACEBOOK_APP_ID || '',
    client_secret: FACEBOOK_APP_SECRET || '',
    redirect_uri: redirectUri,
    code: code
  });

  const response = await fetch(
    `https://graph.facebook.com/v18.0/oauth/access_token?${params.toString()}`
  );

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error?.message || 'Failed to exchange code for token');
  }

  const data = await response.json();
  return data.access_token;
}

export async function getFacebookUser(accessToken: string): Promise<User> {
  const response = await fetch(
    `https://graph.facebook.com/v18.0/me?fields=id,name,email,picture&access_token=${accessToken}`
  );

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error?.message || 'Failed to get user info');
  }

  const data = await response.json();

  return {
    id: data.id,
    name: data.name,
    email: data.email,
    picture: data.picture?.data?.url,
    accessToken: accessToken
  };
}

export async function getInstagramAccountId(accessToken: string): Promise<string | null> {
  try {
    // Get pages
    const pagesResponse = await fetch(
      `https://graph.facebook.com/v18.0/me/accounts?access_token=${accessToken}`
    );

    if (!pagesResponse.ok) {
      return null;
    }

    const pagesData = await pagesResponse.json();

    if (!pagesData.data || pagesData.data.length === 0) {
      return null;
    }

    // Get Instagram account for the first page
    const pageId = pagesData.data[0].id;
    const igResponse = await fetch(
      `https://graph.facebook.com/v18.0/${pageId}?fields=instagram_business_account&access_token=${accessToken}`
    );

    if (!igResponse.ok) {
      return null;
    }

    const igData = await igResponse.json();
    return igData.instagram_business_account?.id || null;
  } catch {
    return null;
  }
}

// Simple JWT-like token functions (for demo purposes)
// In production, use a proper JWT library
export function createSessionToken(user: User): string {
  const payload = {
    user,
    exp: Date.now() + 7 * 24 * 60 * 60 * 1000 // 7 days
  };
  return Buffer.from(JSON.stringify(payload)).toString('base64');
}

export function verifySessionToken(token: string): User | null {
  try {
    const payload = JSON.parse(Buffer.from(token, 'base64').toString());
    if (payload.exp < Date.now()) {
      return null;
    }
    return payload.user;
  } catch {
    return null;
  }
}

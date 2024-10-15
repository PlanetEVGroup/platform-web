import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import type { NextRequest } from 'next/server';
import { cookies } from 'next/headers';


interface Token {
  exp?: number;
  role?: string;
  accessToken?: any;
}

export async function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  // const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET }) as Token | null;
  const cookieStore = cookies();
  const token =  cookieStore.get('access_token')?.value;

  const isProtectedRoute = url.pathname.startsWith('/platform');
  if (isProtectedRoute) {

  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/platform/:path*'],
};

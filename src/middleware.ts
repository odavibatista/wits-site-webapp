import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'
import { actions } from './actions'

export async function middleware(request: NextRequest) {
  const token = cookies().get('wits-app-session')?.value
  const baseUrl = String(process.env.BASE_URL)

  if (!token) {
    if (request.nextUrl.pathname !== '/') {
      return NextResponse.redirect(baseUrl)
    } else {
      return NextResponse.next()
    }
  }

  const canActivate = await actions.user.canActivate(token)

  if (canActivate) {
    if (request.nextUrl.pathname === '/admin' && canActivate[1] !== 'admin') {
      return NextResponse.redirect(baseUrl)
    }

    if (canActivate[1] === 'admin' && request.nextUrl.pathname === '/') {
      return NextResponse.redirect(`${baseUrl}/admin`)
    }

    return request.nextUrl.pathname !== '/'
      ? NextResponse.next()
      : NextResponse.redirect(`${baseUrl}/dashboard`)
  } else {
    return NextResponse.redirect(baseUrl)
  }
}

export const config = {
  matcher: [
    '/',
    '/admin/:path*',
    '/course/:path*',
    '/dashboard/:path*',
    '/profile/:path*',
    '/ranking/:path*',
  ],
}

import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
  const path = request.nextUrl.pathname;
  const isPublicPath = path==="/login" || path==="/signup";
  const token = request.cookies.get('token')?.value||''
  const protectedPath = path==="/about" || path=== "/service" ||path==="/contact"||path==="/profile";

  if(isPublicPath && token){
    return NextResponse.redirect(new URL('/',request.nextUrl));
  }
  
  if(protectedPath && !token){
    return NextResponse.redirect(new URL('/login',request.nextUrl));
  }
  

  if(!isPublicPath && !token){
    return NextResponse.redirect(new URL('/login',request.nextUrl));
  }

  
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/',
    '/login',
    '/signup',
    '/about',
    '/service',
    '/contact',
    '/profile',
  ]
}
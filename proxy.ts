import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const locales = ['es', 'en', 'pt']
const defaultLocale = 'es'

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  
  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const acceptLanguage = request.headers.get('accept-language') || ''
    
    // Detect preferred language from Accept-Language header
    let detectedLocale = defaultLocale
    
    for (const locale of locales) {
      if (acceptLanguage.includes(locale)) {
        detectedLocale = locale
        break
      }
    }
    
    // Redirect to the detected locale
    const url = request.nextUrl.clone()
    url.pathname = `/${detectedLocale}${pathname}`
    return NextResponse.redirect(url)
  }
  
  return NextResponse.next()
}

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
}

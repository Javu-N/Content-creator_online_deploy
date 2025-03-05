import createMiddleware from "next-intl/middleware";
import { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const handleI18nRouting = createMiddleware({
    locales: ["en", "vi"], // Add your supported locales
    defaultLocale: "en",
  });

  const response = handleI18nRouting(request);
  // const locale = request.cookies.get("NEXT_LOCALE")?.value || "en"; // Default to "en"

  // If the user visits "/", redirect them to their locale-specific home page
  // if (
  //   request.nextUrl.pathname === "/" ||
  //   request.nextUrl.pathname === `/${locale}`
  // ) {
  //   return NextResponse.redirect(new URL(`/${locale}/home`, request.url));
  // }

  return response;
}

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(vi|en)/:path*"],
};

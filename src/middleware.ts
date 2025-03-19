import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";
import { Logger } from "./utils/Logger";

const intlMiddleware = createMiddleware({
  locales: ["en", "vi"], // Add your supported locales
  defaultLocale: "en",
});

const publicUrl = ["/auth/login", "/register", "/"];

const verifyJwtToken = async (token: string) => {
  const secretKey = new Uint8Array(
    Buffer.from(process.env.JWT_SECRET || "", "base64")
  );

  try {
    const { payload } = await jwtVerify(token, secretKey);
    console.log("Token is valid:", payload);

    return true;
  } catch (error) {
    if (error instanceof Error) {
      console.log("Token verification failed:", error.message);
    } else {
      console.log("Token verification failed:", error);
    }

    return false;
  }
};

const redirectToLogin = (request: NextRequest) => {
  const locale = request.cookies.get("NEXT_LOCALE")?.value;
  return NextResponse.redirect(
    new URL(`/${locale}/auth/login`, request.nextUrl)
  );
};

export const middleware = async (request: NextRequest) => {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("token")?.value;

  const pathWithoutLocale = "/" + pathname.split("/").slice(2).join("/");

  // By pass public route
  if (publicUrl.includes(pathWithoutLocale)) {
    Logger.debug("Public Route", "Server");
    return intlMiddleware(request);
  }

  // No token found
  if (!token) {
    console.log("NO JWT TOKEN");
    return redirectToLogin(request);
  }

  const verifyJwtResult = await verifyJwtToken(token);

  if (!verifyJwtResult) {
    return redirectToLogin(request);
  }

  const response = intlMiddleware(request);

  return response;
};

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(vi|en)/:path*"],
};

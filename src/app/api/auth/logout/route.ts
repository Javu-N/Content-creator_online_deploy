import { Logger } from "@/utils/Logger";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const POST = async () => {
  cookies().delete("token");
  Logger.debug("User logged out", "Server");
  return NextResponse.json({ success: true });
};

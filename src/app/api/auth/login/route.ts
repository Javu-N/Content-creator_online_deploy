import { API_AUTH_LOGIN, generateApi } from "@/constants/api";
import { Logger } from "@/utils/Logger";
import axios, { AxiosError } from "axios";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  try {
    const { email, password } = await request.json();
    const response = await axios.post(generateApi(API_AUTH_LOGIN), {
      email,
      password,
    });

    const { token } = response.data;

    if (response.status !== 200) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    cookies().set({
      name: "token",
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: Number(process.env.COOKIE_MAX_AGE),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof AxiosError) {
      const message =
        "Axios Error " + JSON.stringify(error.response?.data, null, 2);
      Logger.error(message, "server");
    } else if (error instanceof Error) {
      const message = "General Error " + error;
      Logger.error(message, "server");
    } else {
      const message = "Unknown Error " + error;
      Logger.error(message, "server");
    }
    return NextResponse.json({ error: "Login failed" }, { status: 401 });
  }
};

import { NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";
import { jwtVerify } from "jose";
import { Logger } from "@/utils/Logger";

const verifyToken = async (request: Request) => {
  const authHeader = request.headers.get("Authorization");
  if (!authHeader || !authHeader.includes("Bearer")) {
    return false;
  }

  const token = authHeader.split(" ")[1];
  try {
    const secretKey = new Uint8Array(
      Buffer.from(process.env.JWT_SECRET || "", "base64")
    );
    const { payload } = await jwtVerify(token, secretKey);
    console.log("Token is valid:", payload);
  } catch (error) {
    console.error("Token verification failed:", error);
    return false;
  }

  return true;
};

export const POST = async (request: Request) => {
  const verified = await verifyToken(request);

  if (!verified) {
    return NextResponse.json(
      { status: 401, error: "Unauthorized" },
      { status: 401 }
    );
  }
  try {
    // Create uploads directory if it doesn't exist
    const uploadsDir = path.join(process.cwd(), "uploads");
    try {
      await mkdir(uploadsDir, { recursive: true });
    } catch (error) {
      Logger.error(
        `Failed to create uploads directory ${error}`,
        "upload/route.ts"
      );
      return NextResponse.json(
        { status: 500, error: "Failed to create uploads directory" },
        { status: 500 }
      );
    }

    // Parse the form data from the request
    const formData = await request.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json(
        { status: 400, error: "File is required" },
        { status: 400 }
      );
    }

    // Read the file contents
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Create a safe filename with timestamp to prevent duplicates
    const timestamp = Date.now();
    const originalName = file.name.replace(/\s+/g, "-").toLowerCase();
    const filename = `${timestamp}-${originalName}`;
    const filepath = path.join(uploadsDir, filename);

    // Write the file to the server
    await writeFile(filepath, buffer);

    // Return a success response
    return NextResponse.json({
      message: "File uploaded successfully!",
      filename,
      originalName: file.name,
      size: file.size,
      path: `/uploads/${filename}`,
    });
  } catch (error) {
    console.error("Error uploading file:", error);
    return NextResponse.json(
      { status: 500, error: "Failed to upload file" },
      { status: 500 }
    );
  }
};

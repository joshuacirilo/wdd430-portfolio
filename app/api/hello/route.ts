import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    message: "Hello from the WDD 430 portfolio API!",
  });
}

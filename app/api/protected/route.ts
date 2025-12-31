import { verifyAuth } from "@/lib/auth";
import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
   const payload = verifyAuth(request);
    if (!payload) {
    return NextResponse.json(
      { message: "Unauthorized" },
      { status: 401 }
    );
  }
  return NextResponse.json(
    { message: "Accuess Granted", user: payload },
    { status: 200 }
  )
}
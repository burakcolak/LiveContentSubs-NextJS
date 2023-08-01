import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function GET(request: Request) {
  const session = await getServerSession(authOptions);
  return NextResponse.json({
    authenticated: !!session,
    session,
  });
}

import { NextResponse } from "next/server";

export async function POST(req: Request) {
    return new NextResponse(
        "0ad63891-0dc7-4f8c-8b42-e3e26dde465d",
        { status: 200 }
    );
}
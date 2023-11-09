import { NextResponse } from "next/server";

export async function POST(req: Request) {
    return new NextResponse(
        JSON.stringify({
            token: "example-token"
        }),
        { status: 200 }
    );
}
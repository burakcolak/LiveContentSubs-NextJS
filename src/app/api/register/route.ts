import { RegisterMemberRequest, register } from "@/lib/services/MemberService";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const request = await req.json() as RegisterMemberRequest;

    try {
        const result = await register(request);

        if (result?.status !== 200) {
            return new NextResponse(
                JSON.stringify(result),
                { status: result?.status || 500 }
            );
        }

        return new NextResponse(
            JSON.stringify({
                status: 200,
                title: "User registered",
            }),
            { status: 200 }
        );

    } catch (error: any) {
        return new NextResponse(
            JSON.stringify({
                status: "error",
                message: error.message,
            }),
            { status: 500 }
        );
    }
}
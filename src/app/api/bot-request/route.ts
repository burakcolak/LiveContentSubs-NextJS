import { createBotRequest } from "@/lib/services/BotRequestService";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const request = await req.json();
    const { viewerCount, utilityIdentifier } = request;

    if (!viewerCount || !utilityIdentifier) {
        return new NextResponse(
            JSON.stringify({
                status: "error",
                message: "Invalid request.",
            }),
            { status: 400 }
        );
    }

    try {
        const result = await createBotRequest({
            count: viewerCount,
            utilityIdentifier: utilityIdentifier,
        });

        if (!result) {
            return new NextResponse(
                JSON.stringify(result),
                { status: 500 }
            );
        }

        return new NextResponse(
            JSON.stringify({
                status: 200,
                title: "Bot request created successfully.",
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
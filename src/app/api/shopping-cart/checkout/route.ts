import { NextRequest, NextResponse } from "next/server";
import { checkout } from "@/lib/services/OrderService";

export async function POST(req: NextRequest) {

    try {
        const result = await checkout();
        if (!result) {
            return new NextResponse(
                JSON.stringify({
                    title: "Failed to checkout order."
                }),
                { status: 500 }
            );
        }
        return new NextResponse(
            JSON.stringify(result),
            { status: 200 }
        );

    } catch (error: any) {
        console.log("Error on checkout route: ", error)
        if (error === 401)
            return new NextResponse(
                JSON.stringify({
                    status: "unauthorized",
                    message: "You are not logged in.",
                }),
                { status: 401 }
            );

        return new NextResponse(
            JSON.stringify({
                status: "error",
                message: error.message,
            }),
            { status: 500 }
        );
    }
}
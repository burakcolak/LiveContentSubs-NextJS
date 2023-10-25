import { NextResponse } from "next/server";
import { NextApiRequest } from "next";
import { emptyShoppingCart, purchaseProduct } from "@/lib/services/ShoppingCartService";


export async function POST(req: NextApiRequest) {
    try {

        const result = await emptyShoppingCart();

        console.log('result next api', result)

        if (!result) {
            return new NextResponse(
                JSON.stringify({
                    title: "Failed to empty cart.",
                    status: 500,
                }),
                { status: 500 }
            );
        }

        return new NextResponse(
            JSON.stringify(result),
            { status: 200 }
        );

    } catch (error: any) {
        console.log(error)
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
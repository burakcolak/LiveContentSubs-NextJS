import { NextResponse } from "next/server";
import { NextApiRequest } from "next";
import { purchaseProduct } from "@/lib/services/ShoppingCartService";


export async function POST(req: NextApiRequest) {
    const url = new URL(req.url || "");
    const productID = url.searchParams.get("productId")
    if (!productID)
        return new NextResponse(
            JSON.stringify({
                title: "Failed to purchase product.",
                status: 500,
            }),
            { status: 500 }
        );

    try {
        const result = await purchaseProduct(productID);
        if (!result) {
            return new NextResponse(
                JSON.stringify({
                    title: "Failed to purchase product 2.",
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
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    return new NextResponse(
        JSON.stringify({
            "sessionId": "5744161d-bae7-4e04-b511-8eba71ee0ab3",
            "totalAmount": 35,
            "shoppingCartItems": [
                {
                    "product": {
                        "identifier": "e794f9da-3657-4338-8285-01e96ceab8d8",
                        "title": "Small+ Plan",
                        "subtitle": "for Beginners",
                        "price": 35,
                        "durationType": "Month",
                        "durationFactor": 1,
                        "type": 0,
                        "utilities": []
                    }
                }
            ]
        }),
        { status: 200 }
    );
}
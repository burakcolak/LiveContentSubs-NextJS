import { NextResponse } from "next/server";

export async function GET(req: Request) {
    return new NextResponse(
        JSON.stringify({
            "clientSecret": "pi_3OATvqHkexAMMdmv0HoNy5ZE_secret_lA1y9VFSo6zgM78E734tlTG2b",
            "totalAmount": 35,
            "type": 0,
            "status": 0
        }),
        { status: 200 }
    );
}
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    return new NextResponse(
        JSON.stringify({
            "orders": [
                {
                    "identifier": "8378a5aa-0e63-49aa-9446-fd2d5c23dcc9",
                    "orderNo": "8DBDA1EB5879BCE5915",
                    "paymentType": 0,
                    "totalAmount": 35,
                    "currency": "USD",
                    "checkoutDate": "2023-10-31T14:36:25.47",
                    "createdDate": "2023-10-31T14:36:03.25",
                    "status": 4,
                    "orderItems": [
                        {
                            "productId": 17,
                            "price": 35,
                            "quantity": 1
                        }
                    ]
                },
                {
                    "identifier": "cbdac57a-ad0b-4daf-88cc-fd70ae73e183",
                    "orderNo": "8DBD9799E69898D9766",
                    "paymentType": 0,
                    "totalAmount": 30,
                    "currency": "USD",
                    "checkoutDate": "2023-10-30T18:54:35.79",
                    "createdDate": "2023-10-30T18:54:17.507",
                    "status": 4,
                    "orderItems": [
                        {
                            "productId": 34,
                            "price": 30,
                            "quantity": 1
                        }
                    ]
                },
                {
                    "identifier": "5760ff7f-c7dc-49b6-8fae-fbac75c72d97",
                    "orderNo": "8DBD9756D7E2BD21742",
                    "paymentType": 0,
                    "totalAmount": 50,
                    "currency": "USD",
                    "checkoutDate": "2023-10-30T18:24:39.16",
                    "createdDate": "2023-10-30T18:24:17.443",
                    "status": 4,
                    "orderItems": [
                        {
                            "productId": 9,
                            "price": 50,
                            "quantity": 1
                        }
                    ]
                },
                {
                    "identifier": "1514886b-18cd-44ca-9cb4-362c0867ab2d",
                    "orderNo": "8DBD973C67D82571952",
                    "paymentType": 0,
                    "totalAmount": 20,
                    "currency": "USD",
                    "checkoutDate": "2023-10-30T18:13:15.803",
                    "createdDate": "2023-10-30T18:12:27.763",
                    "status": 4,
                    "orderItems": [
                        {
                            "productId": 5,
                            "price": 20,
                            "quantity": 1
                        }
                    ]
                },
                {
                    "identifier": "4daecb63-898b-4108-8253-f308740047f0",
                    "orderNo": "8DBD9739E392A0F7013",
                    "paymentType": 0,
                    "totalAmount": 35,
                    "currency": "USD",
                    "checkoutDate": "2023-10-30T18:12:05.54",
                    "createdDate": "2023-10-30T18:11:20.207",
                    "status": 4,
                    "orderItems": [
                        {
                            "productId": 17,
                            "price": 35,
                            "quantity": 1
                        }
                    ]
                },
                {
                    "identifier": "041bbd42-49c3-451f-bb8d-c42363b63a68",
                    "orderNo": "8DBD973290D22A98123",
                    "paymentType": 0,
                    "totalAmount": 5,
                    "currency": "USD",
                    "checkoutDate": "2023-10-30T18:09:33.09",
                    "createdDate": "2023-10-30T18:08:03.627",
                    "status": 4,
                    "orderItems": [
                        {
                            "productId": 4,
                            "price": 5,
                            "quantity": 1
                        }
                    ]
                },
                {
                    "identifier": "80ebc3f2-b41c-49e3-803f-f7a09567e9b5",
                    "orderNo": "8DBD972D8C4DA326921",
                    "paymentType": 0,
                    "totalAmount": 125,
                    "currency": "USD",
                    "checkoutDate": "2023-10-30T18:06:07.96",
                    "createdDate": "2023-10-30T18:05:48.937",
                    "status": 4,
                    "orderItems": [
                        {
                            "productId": 11,
                            "price": 125,
                            "quantity": 1
                        }
                    ]
                }
            ],
            "totalCount": 17,
            "pageSize": 10,
            "currentPage": 1
        }),
        { status: 200 }
    );
}
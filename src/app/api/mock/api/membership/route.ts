import { NextResponse } from "next/server";

export async function GET(req: Request) {
    return new NextResponse(
        JSON.stringify([
            {
                "identifier": "51316cb3-7dd7-4549-8a3f-062e1e089b9f",
                "utilityId": 17,
                "startDate": "2023-10-30T13:17:10.363",
                "endDate": "2023-11-30T13:17:10.397",
                "utility": {
                    "identifier": "a14db22c-06e0-4826-b454-fb35ba59f655",
                    "utilityType": 0,
                    "minCount": 0,
                    "maxCount": 10,
                    "name": "Twitch 10 Live Viewer"
                }
            },
            {
                "identifier": "b06e402d-f3ab-4f81-b04d-11b684b2d74f",
                "utilityId": 29,
                "startDate": "2023-10-30T16:07:17.02",
                "endDate": "2023-12-30T14:23:32.93",
                "utility": {
                    "identifier": "dc4d7ee6-9621-4b4c-8c46-8db0962c9374",
                    "utilityType": 7,
                    "minCount": 0,
                    "maxCount": 25,
                    "name": "Trovo 25 Live Viewer"
                }
            },
            {
                "identifier": "79cd7242-c953-40b6-8500-a81cc9572759",
                "utilityId": 11,
                "startDate": "2023-10-30T18:06:08.057",
                "endDate": "2023-11-30T18:06:08.057",
                "utility": {
                    "identifier": "f0526021-9c84-412d-a463-fc0a47dac08e",
                    "utilityType": 0,
                    "minCount": 0,
                    "maxCount": 200,
                    "name": "Twitch 200 Live Viewer"
                }
            },
            {
                "identifier": "53e75d07-679c-4555-ae10-be7c2257cbbf",
                "utilityId": 12,
                "startDate": "2023-10-30T18:06:08.14",
                "endDate": "2023-11-30T18:06:08.14",
                "utility": {
                    "identifier": "5c24266a-bff4-405b-9196-30d17c4c409f",
                    "utilityType": 1,
                    "minCount": 0,
                    "maxCount": 200,
                    "name": "Twitch 200 Chatlist"
                }
            },
            {
                "identifier": "ca20fc33-d08c-4c93-9735-62fcd416eee2",
                "utilityId": 2,
                "startDate": "2023-10-30T18:13:16.133",
                "endDate": "2023-12-21T13:13:22.517",
                "utility": {
                    "identifier": "9cce34a5-68c4-4db1-968a-a55fff37e6da",
                    "utilityType": 0,
                    "minCount": 0,
                    "maxCount": 25,
                    "name": "Twitch 25 Live Viewer"
                }
            },
            {
                "identifier": "59a0b4ae-2224-40d4-b4bf-843d45e8e5d8",
                "utilityId": 4,
                "startDate": "2023-10-30T18:13:16.233",
                "endDate": "2023-12-21T13:13:29.907",
                "utility": {
                    "identifier": "3ba855d2-b946-4ba4-96b5-8d9ea7a8af57",
                    "utilityType": 1,
                    "minCount": 0,
                    "maxCount": 25,
                    "name": "Twitch 25 Chatlist"
                }
            },
            {
                "identifier": "9ea3679e-7052-4520-8b84-9f334bb4d3f9",
                "utilityId": 6,
                "startDate": "2023-10-30T18:24:39.2",
                "endDate": "2023-11-30T18:24:39.2",
                "utility": {
                    "identifier": "7e31f176-fc81-4460-8ce0-0aafa1995b40",
                    "utilityType": 0,
                    "minCount": 0,
                    "maxCount": 50,
                    "name": "Twitch 50 Live Viewer"
                }
            },
            {
                "identifier": "0f7d7a1b-3f8c-4ad8-890f-8f3be11c1e91",
                "utilityId": 7,
                "startDate": "2023-10-30T18:24:39.223",
                "endDate": "2023-11-30T18:24:39.223",
                "utility": {
                    "identifier": "960cbf07-3cfb-4adb-b5f4-4cd6137cec77",
                    "utilityType": 1,
                    "minCount": 0,
                    "maxCount": 50,
                    "name": "Twitch 50 Chatlist"
                }
            },
            {
                "identifier": "6a395f5a-6731-4827-9c15-a679f359044c",
                "utilityId": 8,
                "startDate": "2023-10-30T18:24:39.23",
                "endDate": "2023-12-30T18:06:08.17",
                "utility": {
                    "identifier": "b7e2571a-496f-4414-9d20-ca661dfcad1f",
                    "utilityType": 3,
                    "minCount": 0,
                    "maxCount": 0,
                    "name": "Twitch Chat Bot"
                }
            },
            {
                "identifier": "144ee115-5b68-4509-8cd2-a05b7b21d024",
                "utilityId": 18,
                "startDate": "2023-10-31T14:36:26.087",
                "endDate": "2023-12-30T18:12:05.567",
                "utility": {
                    "identifier": "9a451874-6d54-4625-8bd5-046cade6e502",
                    "utilityType": 4,
                    "minCount": 0,
                    "maxCount": 25,
                    "name": "Youtube 25 Live Viewer"
                }
            },
            {
                "identifier": "ec5488fe-b4da-47de-9506-4dfbbd68f742",
                "utilityId": 19,
                "startDate": "2023-10-31T14:36:26.137",
                "endDate": "2023-12-30T18:12:05.573",
                "utility": {
                    "identifier": "08476d32-0c9f-4034-840e-b30e6261269b",
                    "utilityType": 5,
                    "minCount": 0,
                    "maxCount": 25,
                    "name": "Youtube 25 Video View"
                }
            },
            {
                "identifier": "642d2d85-5cae-4696-90bd-ec6fdc3ba4b5",
                "utilityId": 20,
                "startDate": "2023-10-31T14:36:26.163",
                "endDate": "2023-12-30T18:12:05.58",
                "utility": {
                    "identifier": "b1d88f10-1962-4310-85fd-bbf56c2a93ec",
                    "utilityType": 6,
                    "minCount": 0,
                    "maxCount": 0,
                    "name": "Youtube Real Statistic"
                }
            }
        ]),
        { status: 200 }
    );
}
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    return new NextResponse(
        JSON.stringify([
            {
                "identifier": "b5f0cb96-ce73-498f-a2b8-7333f3a27a42",
                "title": "Trial Plan",
                "subtitle": "For your confidence",
                "price": 1,
                "durationType": "Hour",
                "durationFactor": 1,
                "type": 0,
                "utilities": [
                    {
                        "name": "Twitch 25 Live Viewer",
                        "title": "25 Live Viewer"
                    },
                    {
                        "name": "Realistic View",
                        "title": "Realistic View"
                    }
                ]
            },
            {
                "identifier": "21101774-744c-4a87-b678-a0105c195451",
                "title": "Daily Plan",
                "subtitle": "Just try and observe",
                "price": 5,
                "durationType": "Day",
                "durationFactor": 1,
                "type": 0,
                "utilities": [
                    {
                        "name": "Twitch 25 Live Viewer",
                        "title": "25 Live Viewer"
                    },
                    {
                        "name": "Twitch 25 Chatlist",
                        "title": "25 Chatlist"
                    }
                ]
            },
            {
                "identifier": "285322c9-5b19-4a52-8886-9ca63c581798",
                "title": "Weekly Plan",
                "subtitle": "for Periodic needs",
                "price": 20,
                "durationType": "Week",
                "durationFactor": 1,
                "type": 0,
                "utilities": [
                    {
                        "name": "Twitch 25 Live Viewer",
                        "title": "25 Live Viewer"
                    },
                    {
                        "name": "Twitch 25 Chatlist",
                        "title": "25 Chatlist"
                    }
                ]
            },
            {
                "identifier": "6d43f268-4cb2-4394-a6e9-28c562c5ce46",
                "title": "Mini+ Plan",
                "subtitle": "for A little help",
                "price": 25,
                "durationType": "Month",
                "durationFactor": 1,
                "type": 0,
                "utilities": [
                    {
                        "name": "Twitch 10 Live Viewer",
                        "title": "10 Live Viewer"
                    },
                    {
                        "name": "Realistic View",
                        "title": "Realistic View"
                    }
                ]
            },
            {
                "identifier": "e794f9da-3657-4338-8285-01e96ceab8d8",
                "title": "Small+ Plan",
                "subtitle": "for Beginners",
                "price": 35,
                "durationType": "Month",
                "durationFactor": 1,
                "type": 0,
                "utilities": [
                    {
                        "name": "Twitch 25 Live Viewer",
                        "title": "25 Live Viewer"
                    },
                    {
                        "name": "Twitch 25 Chatlist",
                        "title": "25 Chatlist"
                    },
                    {
                        "name": "Realistic View",
                        "title": "Realistic View"
                    }
                ]
            },
            {
                "identifier": "b1816175-d9fd-436d-9374-66e4733cf7a8",
                "title": "Starter+ Plan",
                "subtitle": "Quick introduction\r\n\r\n",
                "price": 50,
                "durationType": "Month",
                "durationFactor": 1,
                "type": 0,
                "utilities": [
                    {
                        "name": "Twitch 50 Live Viewer",
                        "title": "50 Live Viewer"
                    },
                    {
                        "name": "Twitch 50 Chatlist",
                        "title": "50 Chatlist"
                    },
                    {
                        "name": "Realistic View",
                        "title": "Realistic View"
                    },
                    {
                        "name": "Twitch Chat Bot",
                        "title": "Chat Bot"
                    }
                ]
            },
            {
                "identifier": "81434573-e060-4bc5-b080-8aadff680e52",
                "title": "Partner+ Plan",
                "subtitle": "Be popular!",
                "price": 75,
                "durationType": "Month",
                "durationFactor": 1,
                "type": 0,
                "utilities": [
                    {
                        "name": "Twitch 100 Live Viewer",
                        "title": "100 Live Viewer"
                    },
                    {
                        "name": "Twitch 100 Chatlist",
                        "title": "100 Chatlist"
                    },
                    {
                        "name": "Realistic View",
                        "title": "Realistic View"
                    },
                    {
                        "name": "Twitch Chat Bot",
                        "title": "Chat Bot"
                    }
                ]
            },
            {
                "identifier": "94d0d64a-ccf0-497b-9133-a31820a979b8",
                "title": "Hype+ Plan",
                "subtitle": "Raise Your Rank",
                "price": 125,
                "durationType": "Month",
                "durationFactor": 1,
                "type": 0,
                "utilities": [
                    {
                        "name": "Twitch 200 Live Viewer",
                        "title": "200 Live Viewer"
                    },
                    {
                        "name": "Twitch 200 Chatlist",
                        "title": "200 Chatlist"
                    },
                    {
                        "name": "Realistic View",
                        "title": "Realistic View"
                    },
                    {
                        "name": "Twitch Chat Bot",
                        "title": "Chat Bot"
                    }
                ]
            },
            {
                "identifier": "39ec48ef-a1ed-4a68-836c-6f093ba1870d",
                "title": "Boost+ Plan",
                "subtitle": "Stand out other streamers",
                "price": 255,
                "durationType": "Month",
                "durationFactor": 1,
                "type": 0,
                "utilities": [
                    {
                        "name": "Twitch 300 Live Viewer",
                        "title": "300 Live Viewer"
                    },
                    {
                        "name": "Twitch 300 Chatlist",
                        "title": "300 Chatlist"
                    },
                    {
                        "name": "Realistic View",
                        "title": "Realistic View"
                    },
                    {
                        "name": "Twitch Chat Bot",
                        "title": "Chat Bot"
                    }
                ]
            },
            {
                "identifier": "181f9bfa-3937-4f5b-84ce-0e0d6e1b9153",
                "title": "Deluxe+ Plan",
                "subtitle": "Take to the Top",
                "price": 350,
                "durationType": "Month",
                "durationFactor": 1,
                "type": 0,
                "utilities": [
                    {
                        "name": "Twitch 500 Live Viewer",
                        "title": "500 Live Viewer"
                    },
                    {
                        "name": "Twitch 500 Chatlist",
                        "title": "500 Chatlist"
                    },
                    {
                        "name": "Realistic View",
                        "title": "Realistic View"
                    },
                    {
                        "name": "Twitch Chat Bot",
                        "title": "Chat Bot"
                    }
                ]
            }
        ]),
        { status: 200 }
    );
}
import { getBearerToken } from "@/utils/authUtils";
const baseUrl = process.env.API_URL ?? '';

export interface BotRequestRequest {
    utilityIdentifier: string;
    count: number;
    chatBot?: {
        chatCategoryId: number;
        messagePerSecond: number;
    };
    youtubeViewer?: {
        streamId: string;
    };
}

export async function createBotRequest(botRequest: BotRequestRequest): Promise<boolean> {
    const bearerToken = await getBearerToken();
    if (!bearerToken) return false;

    try {
        const response = await fetch(`${baseUrl}/api/botrequest`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${bearerToken}`,
            },
            body: JSON.stringify(botRequest),
            cache: 'no-cache'
        });

        if (!response.ok) {
            console.log(`Failed to create bot request (Status: ${response.status})`);
            return false;
        }

        return true;
    } catch (error) {
        console.error('Error creating bot request:', error);
        return false;
    }
}
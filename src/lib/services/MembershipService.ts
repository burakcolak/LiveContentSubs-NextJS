import { getServerSession } from "next-auth";
const baseUrl = process.env.API_URL ?? '';

export interface MembershipListResponse {
    identifier: string;
    utilityId: number;
    startDate: string;
    endDate: string;
    utility: UtilityResponse | null;
}

export interface UtilityResponse {
    identifier: string;
    utilityType: UtilityType;
    minCount: number;
    maxCount: number;
    name: string;
}

export async function getMembershipList(): Promise<MembershipListResponse[] | null> {
    const session = await getServerSession();
    const bearerToken = session?.user?.email;
    if (!bearerToken) return null;

    try {
        const response = await fetch(`${baseUrl}/api/membership`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${bearerToken}`,
            },
        });

        if (!response.ok) {
            console.log(`Failed to get membership list (Status: ${response.status})`);
            return null;
        }

        const membershipListResponseData = await response.json();
        return membershipListResponseData as MembershipListResponse[];
    } catch (error) {
        console.error('Error fetching membership list:', error);
        return null;
    }
}
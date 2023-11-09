import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";

export async function getBearerToken() {
    const session = await getServerSession(authOptions);
    const bearerToken = session?.user?.token;
    return bearerToken;
}
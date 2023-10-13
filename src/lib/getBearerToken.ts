import { getServerSession } from "next-auth/next";

export async function getBearerToken() {
    const session = await getServerSession();
    if (!session) {
        throw new Error("Session is null");
    }
    return session.user?.token ?? '';
}
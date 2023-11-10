// nextauth.d.ts
declare module "next-auth" {
    interface Session extends DefaultSession {
        user?: User;
    }

    interface User {
        token: string;
        isTokenExpired: boolean;
        id: number;
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        accessToken: string;
        expireDate?: number;
    }
}

export enum Role {
    user = "user",
    admin = "admin",
}
import type { DefaultUser } from 'next-auth';

declare module 'next-auth' {
    interface Session {
        user?: DefaultUser & {
            id: string;
            token: string;
        };
    }
}

declare module 'next-auth/jwt/types' {
    interface JWT {
        uid: string;
    }
}

// declare module "next-auth" {
//     interface Session extends DefaultSession {
//         user?: User;
//     }

//     interface User {
//         //role?: Role;
//         //subscribed?: boolean;
//         token: string;
//         id: number;
//     }


// }

// declare module "next-auth/jwt" {
//     interface JWT {
//         //role?: Role;
//         //subscribed: boolean;
//         accessToken: string;
//     }
// }

export enum Role {
    user = "user",
    admin = "admin",
}
import axios from "axios";
import type { Account, NextAuthOptions, Profile, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { Session } from 'next-auth';
import { JWT } from "next-auth/jwt";

export const API_URL = process.env.API_URL;

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Sign in",
      credentials: {
        email: {
          label: "Username",
          type: "text",
          placeholder: "example@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const { data } = await axios<{ token: string }>({
            method: "post",
            baseURL: API_URL,
            url: "/api/authentication",
            data: {
              loginName: credentials?.email,
              password: credentials?.password,
            },
          });
          // TODO: return proper user info
          // TODO: http://localhost:3000/session

          const user: User = { id: 1, name: "Admins", email: data.token, token: data.token };
          //TODO: Check user null

          return user;
        } catch (e) {
          console.log({ e });
          return null;
          //          throw e;
        }
      },
    }),

  ],
  callbacks: {
    async jwt(params: { token: JWT, user: User | any, account: Account | null, profile?: Profile, isNewUser?: boolean }): Promise<JWT> {
      const { token, user, account, profile, isNewUser } = params;
      // console.log("user", user);
      if (user) {
        token.accessToken = user.token;
      }
      //console.log("jwt", token);
      return token;
    },
    async session(params: { session: Session, token: JWT }): Promise<Session> {
      const { session, token } = params;
      if (session.user)
        session.user.token = token.accessToken;

      return session;
    }
  },
  pages: {
    signIn: "/login",
    signOut: "/logout",
  },
};

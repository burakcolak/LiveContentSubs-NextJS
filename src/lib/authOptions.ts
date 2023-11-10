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

          if (!data.token)
            return null;

          const user: User = { id: 1, name: "Admins", email: "Email", token: data.token, isTokenExpired: false };

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
      const { token, user } = params;

      if (!token.expireDate)
        token.expireDate = new Date().getTime() + (60 * 60 * 1000); //TODO: get from env file

      if (user) {
        token.accessToken = user.token;
      }
      return token;
    },
    async session(params: { session: Session, token: JWT }): Promise<Session> {
      const { session, token } = params;
      if (session.user) {
        session.user.token = token.accessToken;
      }

      const currentDateTimeStamp = new Date().getTime();

      if (token.expireDate && token.expireDate < currentDateTimeStamp && session.user) {
        session.user.isTokenExpired = true;
      }

      return session;
    }
  },
  pages: {
    signIn: "/login",
  },
  theme: {
    brandColor: "#0d9488",
  },
  // events: {
  //   signIn(message) {
  //     console.log('signin message', message)
  //   },
  //   session(message) {
  //     console.log('session message', message)
  //   },
  //   signOut(message) {
  //     console.log('signOut message', message)
  //   },
  // },


};

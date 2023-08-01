import axios from "axios";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

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
          const { data } = await axios<{token: string}>({
            method: "post",
            baseURL: API_URL,
            url: "/authentication",
            data: {
              loginName: credentials?.email,
              password: credentials?.password,
            },
          });
          console.log({ data });
          // TODO: return proper user info
          // TODO: http://localhost:3000/session

          const user = { id: "1", name: "Admin", email: "admin@admin.com" };
          return user;
        } catch (e) {
          console.log({ e });
          throw e;
        }
      },
    }),
  ],
};

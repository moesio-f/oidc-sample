import type { JwtCallback, SessionCallback } from "@/types/callbacks";
import { NextAuthOptions } from "next-auth";
import KeycloakProvider from "next-auth/providers/keycloak";

export const authOptions: NextAuthOptions = {
    providers: [
        KeycloakProvider({
            clientId: process.env.KEYCLOAK_ID as string,
            clientSecret: process.env.KEYCLOAK_SECRET as string,
            issuer: process.env.KEYCLOAK_ISSUER,
        })
    ],
    callbacks: {
        async jwt({ token, account, profile }: JwtCallback) {
            if (account) {
                token.access_token = account.access_token
                token.id_token = account.id_token
                token.id = profile?.sub
            }

            return token
        },
        async session({ session, token, user }: SessionCallback) {
            session.tokens = {
                access: token.access_token as string,
                id: token.id_token as string
            }
            session.user.id = token.id as string

            return session
        }
    },
    secret: process.env.NEXTAUTH_SECRET as string,
}
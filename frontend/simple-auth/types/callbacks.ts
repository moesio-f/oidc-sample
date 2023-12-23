import type { Account, Profile, Session, TokenSet, User } from "next-auth/core/types";
import type { Adapter, AdapterUser } from "next-auth/adapters"
import type { JWT, JWTOptions } from "next-auth/jwt"


export type JwtCallback = {
    token: JWT
    user: User | AdapterUser
    account: Account | null
    profile?: Profile
    trigger?: "signIn" | "signUp" | "update"
    isNewUser?: boolean
    session?: any
};


export type SessionCallback = {
    session: Session
    token: JWT
    user: AdapterUser
};
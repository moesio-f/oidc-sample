"use client";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { signIn, signOut, useSession } from "next-auth/react";


export default function Login() {
    const { data: session, status } = useSession();

    if (session && session.user) {
        // User signed in
        return (
            <div className="flex gap-3">
                <Link
                    className={buttonStyles({ color: "danger", radius: "full", variant: "shadow" })}
                    onPress={() => signOut({ callbackUrl: "/" })}
                >
                    Sign Out
                </Link>
            </div>
        );
    }

    return (
        <div className="flex gap-3">
            <Link
                className={buttonStyles({ color: "primary", radius: "full", variant: "shadow" })}
                onPress={() => signIn("keycloak", { callbackUrl: "/logged" })}
            >
                Sign In
            </Link>
        </div>
    );
};

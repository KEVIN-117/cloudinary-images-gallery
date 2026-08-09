import Link from "next/link";
import { AuthMessage } from "@/components/atoms/AuthMessage";
import { FormLogin } from "./Form/FormLogin";
import { FormRegister } from "./Form/FormRegister";

interface AuthProps {
    isLogin: boolean;
    message?: string;
}

export function Auth({ isLogin, message }: AuthProps) {
    return (
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
                <h1 className="font-semibold text-2xl tracking-tight">
                    {isLogin ? "Welcome back" : "Create account"}
                </h1>
                <p className="text-muted-foreground text-sm">
                    {isLogin
                        ? "Sign in to access your vault"
                        : "Initialize your secure visual legacy"}
                </p>
            </div>

            {/* System message from auth callback (e.g. expired token) */}
            {message && <AuthMessage message={message} variant="error" />}

            {isLogin ? <FormLogin /> : <FormRegister />}

            <div className="text-center">
                <Link
                    href={isLogin ? "/register" : "/login"}
                    className="text-muted-foreground text-sm transition-colors hover:text-white hover:underline"
                >
                    {isLogin ? "No account yet? Sign up" : "Already have an account? Sign in"}
                </Link>
            </div>
        </div>
    );
}

import { UserAuthLogin } from "@/components/organisms/auth/Form/FormLogin";
import Link from "next/link";
import { UserAuthRegister } from "@/components/organisms/auth/Form/FormRegister";

export function Auth({ isLogin }: { isLogin: boolean }) {
    return (
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
                <h1 className="text-2xl font-semibold tracking-tight">
                    {isLogin ? "Welcome back!" : "Create an account"}
                </h1>
                <p className="text-muted-foreground">
                    {isLogin ? "Sign in to your account" : "Sign up for a new account"}
                </p>
            </div>
            {isLogin ? (<UserAuthLogin className='flex flex-col' />) : (<UserAuthRegister />)}
            <p className="px-8 text-center text-sm text-muted-foreground">
                By clicking continue, you agree to our{" "}
                <Link
                    href="/terms"
                    className="underline underline-offset-4 hover:text-primary"
                >
                    Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                    href="/privacy"
                    className="underline underline-offset-4 hover:text-primary"
                >
                    Privacy Policy
                </Link>
                .
            </p>
        </div>
    )
}

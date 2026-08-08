import Link from "next/link";
import { FormLogin } from "./Form/FormLogin";
import { FormRegister } from "./Form/FormRegister";

export function Auth({ isLogin }: { isLogin: boolean }) {
    return (
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
                <h1 className="text-2xl font-semibold tracking-tight">
                    {isLogin ? "Welcome back!" : "Create an account"}
                </h1>
                <p className="text-muted-foreground text-sm">
                    {isLogin ? "Sign in to access your vault" : "Initialize your secure visual legacy"}
                </p>
            </div>
            
            {isLogin ? <FormLogin /> : <FormRegister />}
            
            <p className="px-8 text-center text-sm text-muted-foreground">
                By clicking continue, you agree to our{" "}
                <Link
                    href="/terms"
                    className="underline underline-offset-4 hover:text-primary transition-colors"
                >
                    Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                    href="/privacy"
                    className="underline underline-offset-4 hover:text-primary transition-colors"
                >
                    Privacy Policy
                </Link>
                .
            </p>
            
            <div className="text-center mt-4">
               <Link 
                 href={isLogin ? "/register" : "/login"} 
                 className="text-sm font-medium hover:text-primary hover:underline transition-colors"
               >
                 {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Sign In"}
               </Link>
            </div>
        </div>
    )
}

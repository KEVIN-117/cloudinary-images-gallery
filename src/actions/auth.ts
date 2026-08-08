'use server'

import { IuserForgotPassword, IuserLogin, IuserRegistration } from "@/types/user";
import { createClient } from "@/utils/supabase/server";
import { envValidator } from "@/utils/env";
import { cookies } from "next/headers";

export interface IResponseAuth {
    message: string;
    data: any;
    error?: Error | null;
}


export async function loginUser(params: IuserLogin): Promise<IResponseAuth> {
    try {
        const cookiesStore = await cookies()
        const supabase = createClient(cookiesStore)
        const { data, error } = await supabase.auth.signInWithPassword({
            email: params.email,
            password: params.password,
        });

        if (error) {
            console.error("Error", error)
            return {
                message: "Error logging in user",
                data: null,
                error: error
            }
        }

        return {
            message: "User logged in successfully",
            data: data,
            error: null
        }
    } catch (error: any) {
        console.log(error);

        return {
            message: "Error logging in user",
            data: null,
            error: error
        }
    }
}


export async function registerUser(params: IuserRegistration): Promise<IResponseAuth> {
    try {
        const cookiesStore = await cookies()
        const supabase = createClient(cookiesStore)
        const { data, error } = await supabase.auth.signUp({
            email: params.email,
            password: params.password,
            options: {
                data: {
                    user_name: params.username,
                    profile_image: '',
                }
            }
        });

        if (error) {
            console.error("Error", error)
            return {
                message: "Error registering user",
                data: null,
                error: error
            }
        }

        return {
            message: "User registered successfully",
            data: data,
            error: null
        }
    } catch (error: any) {
        console.log(error);

        return {
            message: "Error registering user",
            data: null,
            error: error
        }
    }
}


export async function forgotPassword(params: IuserForgotPassword): Promise<IResponseAuth> {
    try {
        const cookiesStore = await cookies()
        const supabase = createClient(cookiesStore)
        const { data, error } = await supabase.auth.resetPasswordForEmail(params.email)

        if (error) {
            console.error("Error", error)
            return {
                message: "Error resetting password",
                data: null,
                error: error
            }
        }

        return {
            message: "Password reset successfully",
            data: data,
            error: null
        }
    } catch (error: any) {
        console.log(error);

        return {
            message: "Error resetting password",
            data: null,
            error: error
        }
    }
}


export async function signInWithGithub(): Promise<IResponseAuth & { data: { url: string } } | IResponseAuth & { data: null }> {
    try {
        const cookiesStore = await cookies()
        const supabase = createClient(cookiesStore)
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: 'github',
            options: {
                scopes: 'user:email',
                redirectTo: envValidator.server.REDIRECT_URL_PROVIDER,
            }
        })

        if (error) {
            console.error("Error", error)
            return {
                message: "Error logging in user",
                data: null,
                error: error
            }
        }

        return {
            message: "User logged in successfully",
            data: data,
            error: null
        }
    } catch (error: any) {
        console.log(error);

        return {
            message: "Error logging in user",
            data: null,
            error: error
        }
    }
}

export async function signOut() {
    const cookiesStore = await cookies()
    const supabase = createClient(cookiesStore)
    const { error } = await supabase.auth.signOut()

    if (error) {
        console.error("Error", error)
        return {
            message: "Error signing out user",
            data: null,
            error: error
        }
    }

    return {
        message: "User signed out successfully",
        data: null,
        error: null
    }
}
import { z } from "zod";

export const userRegistrationSchema = z.object({
    username: z.string().min(3, { message: "Username must be at least 3 characters long" }).max(12, { message: "Username must be at most 12 characters long" }),
    email: z.email({ message: "Please enter a valid email address" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters long" }),
})

export const userLoginSchema = z.object({
    email: z.email({ message: "Please enter a valid email address" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters long" }),
})

export const userForgotPasswordSchema = z.object({
    email: z.email({ message: "Please enter a valid email address" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters long" }),
    confirmPassword: z.string().min(6, { message: "Confirm Password must be at least 6 characters long" }),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
})

export type IuserRegistration = z.infer<typeof userRegistrationSchema>
export type IuserLogin = z.infer<typeof userLoginSchema>
export type IuserForgotPassword = z.infer<typeof userForgotPasswordSchema>

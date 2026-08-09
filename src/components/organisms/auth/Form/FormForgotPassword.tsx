"use client";

import * as React from "react";
import { Button } from "@/components/atoms/button";
import { Input } from "@/components/atoms/input";
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/components/atoms/input-otp";
import { Label } from "@/components/atoms/label";
import { cn } from "@/lib/utils";

type Step = 1 | 2 | 3;

export function FormForgotPassword() {
    const [step, setStep] = React.useState<Step>(1);
    const [isLoading, setIsLoading] = React.useState<boolean>(false);

    const handleNext = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate API Call
        setTimeout(() => {
            setIsLoading(false);
            setStep((prev) => (prev < 3 ? ((prev + 1) as Step) : prev));
        }, 1000);
    };

    return (
        <div className="fade-in slide-in-from-bottom-4 mx-auto grid w-full animate-in gap-6 duration-1000 sm:w-[350px]">
            {/* Timeline Header */}
            <div className="mb-2 flex flex-col space-y-4">
                <div className="flex flex-col space-y-2 text-center">
                    <h1 className="font-semibold text-2xl tracking-tight">
                        {step === 1 && "Recover Vault"}
                        {step === 2 && "Verify Identity"}
                        {step === 3 && "Secure Core"}
                    </h1>
                    <p className="text-muted-foreground text-sm">
                        {step === 1 && "Enter your email to request an access token."}
                        {step === 2 && "Enter the cryptographic code sent to you."}
                        {step === 3 && "Establish a new secure passphrase."}
                    </p>
                </div>

                {/* Timeline Progress */}
                <div className="relative flex items-center justify-between px-2">
                    <div className="absolute top-1/2 left-0 -z-10 h-[1px] w-full -translate-y-1/2 bg-white/10" />
                    <div
                        className="absolute top-1/2 left-0 -z-10 h-[1px] -translate-y-1/2 bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-all duration-700"
                        style={{ width: step === 1 ? "0%" : step === 2 ? "50%" : "100%" }}
                    />

                    {[1, 2, 3].map((i) => (
                        <div
                            key={i}
                            className={cn(
                                "flex h-6 w-6 items-center justify-center rounded-full border font-mono text-[10px] transition-all duration-700",
                                step >= i
                                    ? "border-cyan-400 bg-black/50 text-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.4)] backdrop-blur-md"
                                    : "border-white/10 bg-black/20 text-muted-foreground backdrop-blur-md",
                            )}
                        >
                            {i}
                        </div>
                    ))}
                </div>
            </div>

            <form onSubmit={handleNext}>
                <div className="grid gap-4">
                    {/* STEP 1: EMAIL */}
                    {step === 1 && (
                        <div className="group fade-in slide-in-from-right-4 relative grid animate-in gap-2 duration-500">
                            <Label
                                htmlFor="email"
                                className="text-muted-foreground transition-colors group-focus-within:text-cyan-400"
                            >
                                Email
                            </Label>
                            <Input
                                id="email"
                                placeholder="name@example.com"
                                type="email"
                                autoCapitalize="none"
                                autoComplete="email"
                                autoCorrect="off"
                                disabled={isLoading}
                                required
                                className="border-white/10 bg-black/20 backdrop-blur-md transition-all duration-300 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50"
                            />
                        </div>
                    )}

                    {/* STEP 2: OTP */}
                    {step === 2 && (
                        <div className="group fade-in slide-in-from-right-4 relative flex animate-in flex-col items-center justify-center gap-3 py-2 duration-500">
                            <Label
                                htmlFor="otp"
                                className="self-start text-muted-foreground transition-colors"
                            >
                                Access Token
                            </Label>
                            <InputOTP maxLength={6} disabled={isLoading} className="gap-2">
                                <InputOTPGroup>
                                    <InputOTPSlot
                                        index={0}
                                        className="glass h-14 w-12 border-white/10 bg-black/20 text-lg"
                                    />
                                    <InputOTPSlot
                                        index={1}
                                        className="glass h-14 w-12 border-white/10 bg-black/20 text-lg"
                                    />
                                    <InputOTPSlot
                                        index={2}
                                        className="glass h-14 w-12 border-white/10 bg-black/20 text-lg"
                                    />
                                </InputOTPGroup>
                                <InputOTPSeparator />
                                <InputOTPGroup>
                                    <InputOTPSlot
                                        index={3}
                                        className="glass h-14 w-12 border-white/10 bg-black/20 text-lg"
                                    />
                                    <InputOTPSlot
                                        index={4}
                                        className="glass h-14 w-12 border-white/10 bg-black/20 text-lg"
                                    />
                                    <InputOTPSlot
                                        index={5}
                                        className="glass h-14 w-12 border-white/10 bg-black/20 text-lg"
                                    />
                                </InputOTPGroup>
                            </InputOTP>
                        </div>
                    )}

                    {/* STEP 3: NEW PASSWORD */}
                    {step === 3 && (
                        <div className="fade-in slide-in-from-right-4 grid animate-in gap-4 duration-500">
                            <div className="group relative grid gap-2">
                                <Label
                                    htmlFor="new-password"
                                    className="text-muted-foreground transition-colors group-focus-within:text-fuchsia-400"
                                >
                                    New Password
                                </Label>
                                <Input
                                    id="new-password"
                                    type="password"
                                    placeholder="••••••••"
                                    disabled={isLoading}
                                    required
                                    className="border-white/10 bg-black/20 backdrop-blur-md transition-all duration-300 focus:border-fuchsia-400 focus:ring-1 focus:ring-fuchsia-400/50"
                                />
                            </div>
                            <div className="group relative grid gap-2">
                                <Label
                                    htmlFor="confirm-password"
                                    className="text-muted-foreground transition-colors group-focus-within:text-fuchsia-400"
                                >
                                    Confirm Password
                                </Label>
                                <Input
                                    id="confirm-password"
                                    type="password"
                                    placeholder="••••••••"
                                    disabled={isLoading}
                                    required
                                    className="border-white/10 bg-black/20 backdrop-blur-md transition-all duration-300 focus:border-fuchsia-400 focus:ring-1 focus:ring-fuchsia-400/50"
                                />
                            </div>
                        </div>
                    )}

                    <Button
                        disabled={isLoading}
                        className="group relative mt-4 overflow-hidden border border-cyan-500/50 shadow-[0_0_15px_rgba(34,211,238,0.2)] transition-all duration-500 hover:shadow-[0_0_25px_rgba(34,211,238,0.5)]"
                    >
                        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/30 to-violet-500/0 transition-transform duration-1000 group-hover:translate-x-full" />
                        <span className="relative z-10 flex items-center">
                            {isLoading && (
                                <svg
                                    className="mr-2 h-4 w-4 animate-spin text-white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                    ></circle>
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                    ></path>
                                </svg>
                            )}
                            {step === 1
                                ? "Send Token"
                                : step === 2
                                  ? "Verify Token"
                                  : "Confirm Core Reboot"}
                        </span>
                    </Button>
                </div>
            </form>
        </div>
    );
}

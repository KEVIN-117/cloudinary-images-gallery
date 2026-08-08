"use client";

import * as React from "react";
import { Button } from "@/components/atoms/button";
import { Input } from "@/components/atoms/input";
import { Label } from "@/components/atoms/label";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/atoms/input-otp";
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
    <div className="grid gap-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 w-full sm:w-[350px] mx-auto">

      {/* Timeline Header */}
      <div className="flex flex-col space-y-4 mb-2">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
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
        <div className="flex items-center justify-between relative px-2">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[1px] bg-white/10 -z-10" />
          <div
            className="absolute left-0 top-1/2 -translate-y-1/2 h-[1px] bg-cyan-400 -z-10 transition-all duration-700 shadow-[0_0_8px_rgba(34,211,238,0.8)]"
            style={{ width: step === 1 ? '0%' : step === 2 ? '50%' : '100%' }}
          />

          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className={cn(
                "w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-mono transition-all duration-700 border",
                step >= i
                  ? "bg-black/50 border-cyan-400 text-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.4)] backdrop-blur-md"
                  : "bg-black/20 border-white/10 text-muted-foreground backdrop-blur-md"
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
            <div className="grid gap-2 relative group animate-in fade-in slide-in-from-right-4 duration-500">
              <Label htmlFor="email" className="text-muted-foreground group-focus-within:text-cyan-400 transition-colors">Email</Label>
              <Input
                id="email"
                placeholder="name@example.com"
                type="email"
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect="off"
                disabled={isLoading}
                required
                className="bg-black/20 border-white/10 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 transition-all duration-300 backdrop-blur-md"
              />
            </div>
          )}

          {/* STEP 2: OTP */}
          {step === 2 && (
            <div className="flex flex-col gap-3 items-center justify-center relative group animate-in fade-in slide-in-from-right-4 duration-500 py-2">
              <Label htmlFor="otp" className="text-muted-foreground transition-colors self-start">Access Token</Label>
              <InputOTP maxLength={6} disabled={isLoading} className="gap-2">
                <InputOTPGroup>
                  <InputOTPSlot index={0} className="w-12 h-14 bg-black/20 border-white/10 glass text-lg" />
                  <InputOTPSlot index={1} className="w-12 h-14 bg-black/20 border-white/10 glass text-lg" />
                  <InputOTPSlot index={2} className="w-12 h-14 bg-black/20 border-white/10 glass text-lg" />
                </InputOTPGroup>
                <InputOTPSeparator />
                <InputOTPGroup>
                  <InputOTPSlot index={3} className="w-12 h-14 bg-black/20 border-white/10 glass text-lg" />
                  <InputOTPSlot index={4} className="w-12 h-14 bg-black/20 border-white/10 glass text-lg" />
                  <InputOTPSlot index={5} className="w-12 h-14 bg-black/20 border-white/10 glass text-lg" />
                </InputOTPGroup>
              </InputOTP>
            </div>
          )}

          {/* STEP 3: NEW PASSWORD */}
          {step === 3 && (
            <div className="grid gap-4 animate-in fade-in slide-in-from-right-4 duration-500">
              <div className="grid gap-2 relative group">
                <Label htmlFor="new-password" className="text-muted-foreground group-focus-within:text-fuchsia-400 transition-colors">New Password</Label>
                <Input
                  id="new-password"
                  type="password"
                  placeholder="••••••••"
                  disabled={isLoading}
                  required
                  className="bg-black/20 border-white/10 focus:border-fuchsia-400 focus:ring-1 focus:ring-fuchsia-400/50 transition-all duration-300 backdrop-blur-md"
                />
              </div>
              <div className="grid gap-2 relative group">
                <Label htmlFor="confirm-password" className="text-muted-foreground group-focus-within:text-fuchsia-400 transition-colors">Confirm Password</Label>
                <Input
                  id="confirm-password"
                  type="password"
                  placeholder="••••••••"
                  disabled={isLoading}
                  required
                  className="bg-black/20 border-white/10 focus:border-fuchsia-400 focus:ring-1 focus:ring-fuchsia-400/50 transition-all duration-300 backdrop-blur-md"
                />
              </div>
            </div>
          )}

          <Button disabled={isLoading} className="mt-4 relative overflow-hidden group shadow-[0_0_15px_rgba(34,211,238,0.2)] hover:shadow-[0_0_25px_rgba(34,211,238,0.5)] transition-all duration-500 border border-cyan-500/50">
            <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/30 to-violet-500/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <span className="relative z-10 flex items-center">
              {isLoading && (
                <svg className="mr-2 h-4 w-4 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              )}
              {step === 1 ? "Send Token" : step === 2 ? "Verify Token" : "Confirm Core Reboot"}
            </span>
          </Button>
        </div>
      </form>
    </div>
  );
}

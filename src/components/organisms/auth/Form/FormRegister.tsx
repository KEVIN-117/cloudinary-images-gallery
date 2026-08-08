"use client";

import * as React from "react";
import { Button } from "@/components/atoms/button";
import { Input } from "@/components/atoms/input";
import { Label } from "@/components/atoms/label";

export function FormRegister() {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }

  return (
    <div className="grid gap-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
      <form onSubmit={onSubmit}>
        <div className="grid gap-4">
          <div className="grid gap-2 relative group">
            <Label htmlFor="username" className="text-muted-foreground group-focus-within:text-cyan-400 transition-colors">Username</Label>
            <Input
              id="username"
              placeholder="NeonCipher"
              type="text"
              autoCapitalize="none"
              autoCorrect="off"
              disabled={isLoading}
              className="bg-black/20 border-white/10 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 transition-all duration-300 backdrop-blur-md"
            />
          </div>
          <div className="grid gap-2 relative group">
            <Label htmlFor="email" className="text-muted-foreground group-focus-within:text-cyan-400 transition-colors">Email</Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              className="bg-black/20 border-white/10 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 transition-all duration-300 backdrop-blur-md"
            />
          </div>
          <div className="grid gap-2 relative group">
            <Label htmlFor="password" className="text-muted-foreground group-focus-within:text-cyan-400 transition-colors">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              disabled={isLoading}
              className="bg-black/20 border-white/10 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 transition-all duration-300 backdrop-blur-md"
            />
          </div>
          <Button disabled={isLoading} className="mt-4 relative overflow-hidden group shadow-[0_0_15px_rgba(217,70,239,0.3)] hover:shadow-[0_0_25px_rgba(217,70,239,0.6)] transition-all duration-500 border border-fuchsia-500/50">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-400/30 to-violet-500/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <span className="relative z-10 flex items-center">
              {isLoading && (
                <svg className="mr-2 h-4 w-4 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              )}
              Mint Identity
            </span>
          </Button>
        </div>
      </form>
    </div>
  );
}

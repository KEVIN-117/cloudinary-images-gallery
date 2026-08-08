"use client";

import * as React from "react";
import { Button } from "@/components/atoms/button";
import { Input } from "@/components/atoms/input";
import { Label } from "@/components/atoms/label";
import { useForm } from "@tanstack/react-form-nextjs"
import { userRegistrationSchema } from "@/types/user";
import { registerUser } from "@/actions/auth";
import { ErrorFieldInfo } from "@/components/atoms/core/ErrorFieldInfo";
import { Loader2 } from "lucide-react";
import { Toaster } from "@/components/atoms/toaster"
import { notify } from "@/components/molecules/Notification/notify";
import { redirect } from "next/navigation";
export function FormRegister() {

  const loginForm = useForm({
    defaultValues: {
      username: '',
      email: '',
      password: '',
    },
    validators: {
      onChange: userRegistrationSchema,
    },
    onSubmit: async ({ value }) => {
      const result = await registerUser(value);
      if (result.error) {
        notify.error(result.error.message)
      } else {
        notify.success(result.message)
        redirect("/welcome")
      }
    }
  })

  return (
    <div className="grid gap-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
      <form onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        loginForm.handleSubmit();
      }}>
        <div className="grid gap-4">
          <loginForm.Field
            name="username"
            children={(field) => {
              const isValid = field.state.meta.isTouched && !field.state.meta.isValid
              return (
                <div data-invalid={isValid} className="grid gap-2 relative group">
                  <Label htmlFor={field.name} className="text-muted-foreground group-focus-within:text-cyan-400 transition-colors">Username</Label>
                  <Input
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    placeholder="NeonCipher"
                    type="text"
                    autoCapitalize="none"
                    autoCorrect="off"
                    className="bg-black/20 border-white/10 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 transition-all duration-300 backdrop-blur-md"
                  />
                  <ErrorFieldInfo field={field} />
                </div>
              )
            }}
          />
          <loginForm.Field
            name="email"
            children={(field) => {
              const isValid = field.state.meta.isTouched && !field.state.meta.isValid
              return (
                <div data-invalid={isValid} className="grid gap-2 relative group">
                  <Label htmlFor={field.name} className="text-muted-foreground group-focus-within:text-cyan-400 transition-colors">Email</Label>
                  <Input
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    placeholder="name@example.com"
                    type="email"
                    autoCapitalize="none"
                    autoComplete="email"
                    autoCorrect="off"
                    className="bg-black/20 border-white/10 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 transition-all duration-300 backdrop-blur-md"
                  />
                  <ErrorFieldInfo field={field} />
                </div>
              )
            }}
          />
          <loginForm.Field
            name="password"
            children={(field) => {
              const isValid = field.state.meta.isTouched && !field.state.meta.isValid
              return (
                <div data-invalid={isValid} className="grid gap-2 relative group">
                  <Label htmlFor={field.name} className="text-muted-foreground group-focus-within:text-cyan-400 transition-colors">Password</Label>
                  <Input
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    placeholder="••••••••"
                    type="password"
                    autoCapitalize="none"
                    autoComplete="new-password"
                    autoCorrect="off"
                    className="bg-black/20 border-white/10 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 transition-all duration-300 backdrop-blur-md"
                  />
                  <ErrorFieldInfo field={field} />
                </div>
              )
            }}
          />
          <loginForm.Subscribe
            selector={(state) => [state.canSubmit, state.isSubmitting]}
            children={([canSubmit, isSubmitting]) => (
              <Button
                type="submit"
                disabled={!canSubmit || isSubmitting}
                className="mt-4 relative overflow-hidden group shadow-[0_0_15px_rgba(217,70,239,0.3)] hover:shadow-[0_0_25px_rgba(217,70,239,0.6)] transition-all duration-500 border border-fuchsia-500/50"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-400/30 to-violet-500/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <span className="relative z-10 flex items-center">
                  {isSubmitting && (
                    <Loader2
                      className="mr-2 h-4 w-4 animate-spin"
                    />
                  )}
                  Mint Identity
                </span>
              </Button>
            )}
          />
        </div>
      </form>
    </div>
  );
}

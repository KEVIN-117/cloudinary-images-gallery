"use client";

import * as React from "react";
import { Button } from "@/components/atoms/button";
import { Input } from "@/components/atoms/input";
import { Label } from "@/components/atoms/label";
import Link from "next/link";
import { useForm } from "@tanstack/react-form-nextjs"
import { userLoginSchema } from "@/types/user";
import { loginUser, signInWithGithub } from "@/actions/auth";
import { notify } from "@/components/molecules/Notification/notify";
import { redirect } from "next/navigation";
import { ErrorFieldInfo } from "@/components/atoms/core/ErrorFieldInfo";
import { Loader2 } from "lucide-react";

export function FormLogin() {

  const loginForm = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    validators: {
      onChange: userLoginSchema,
    },
    onSubmit: async ({ value }) => {
      const result = await loginUser(value);
      if (result.error) {
        notify.error(result.error.message)
      } else {
        notify.success(result.message)
        redirect("/dashboard/gallery")
      }
    }
  })

  const handleLoginWithGithub = async () => {
    const result = await signInWithGithub();
    if (result.error) {
      notify.error(result.error.message)
    } else {
      notify.success(result.message)
      redirect(result.data?.url as string)
    }
  }

  return (
    <div className="grid gap-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
      <form onSubmit={(event) => {
        event.preventDefault()
        event.stopPropagation()
        loginForm.handleSubmit()
      }}>
        <div className="grid gap-4">
          <loginForm.Field name="email"
            children={(field) => {
              const isValid = field.state.meta.isTouched && !field.state.meta.isValid
              const { name, handleChange } = field
              return (
                <div data-invalid={isValid} className="grid gap-2 relative group">
                  <Label htmlFor="email" className="text-muted-foreground group-focus-within:text-cyan-400 transition-colors">Email</Label>
                  <Input
                    id={name}
                    name={name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => handleChange(e.target.value)}
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
          <loginForm.Field name="password"
            children={(field) => {
              const isValid = field.state.meta.isTouched && !field.state.meta.isValid
              const { name, handleChange } = field
              return (
                <div data-invalid={isValid} className="grid gap-2 relative group">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password" className="text-muted-foreground group-focus-within:text-cyan-400 transition-colors">Password</Label>
                    <Link href="/forgot-password" className="text-xs font-medium text-muted-foreground hover:text-cyan-400 hover:underline transition-colors">
                      Forgot password?
                    </Link>
                  </div>
                  <Input
                    id={name}
                    name={name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => handleChange(e.target.value)}
                    type="password"
                    placeholder="••••••••"
                    autoCapitalize="none"
                    autoComplete="password"
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
            children={([canSubmit, isSubmitting]) => {
              return (
                <Button disabled={!canSubmit || isSubmitting} className="mt-4 relative overflow-hidden group shadow-[0_0_15px_rgba(217,70,239,0.3)] hover:shadow-[0_0_25px_rgba(217,70,239,0.6)] transition-all duration-500 border border-fuchsia-500/50">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-400/30 to-violet-500/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  <span className="relative z-10 flex items-center">
                    {isSubmitting && (
                      <Loader2
                        className="mr-2 h-4 w-4 animate-spin"
                      />
                    )}
                    Initialize Access
                  </span>
                </Button>
              )
            }}
          />
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-border" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background/80 px-2 text-muted-foreground backdrop-blur-md rounded-md">
            Or continue with
          </span>
        </div>
      </div>
      <Button variant="outline" type="button" onClick={handleLoginWithGithub} className="glass text-foreground">
        GitHub
      </Button>
    </div>
  );
}

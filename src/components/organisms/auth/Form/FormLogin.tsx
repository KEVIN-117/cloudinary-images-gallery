"use client";

import { useForm } from "@tanstack/react-form-nextjs";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { loginUser, signInWithGithub } from "@/actions/auth";
import { Button } from "@/components/atoms/button";
import { ErrorFieldInfo } from "@/components/atoms/core/ErrorFieldInfo";
import { Input } from "@/components/atoms/input";
import { Label } from "@/components/atoms/label";
import { notify } from "@/components/molecules/Notification/notify";
import { userLoginSchema } from "@/types/user";

export function FormLogin() {
    const loginForm = useForm({
        defaultValues: {
            email: "",
            password: "",
        },
        validators: {
            onChange: userLoginSchema,
        },
        onSubmit: async ({ value, formApi }) => {
            const result = await loginUser(value);
            if (result.error) {
                notify.error(result.error.message);
            } else {
                notify.success(result.message);
                formApi.reset();
                redirect("/dashboard/gallery");
            }
        },
    });

    const handleLoginWithGithub = async () => {
        const result = await signInWithGithub();
        if (result.error) {
            notify.error(result.error.message);
        } else {
            notify.success(result.message);
            redirect(result.data?.url as string);
        }
    };

    return (
        <div className="fade-in slide-in-from-bottom-4 grid animate-in gap-6 duration-1000">
            <form
                onSubmit={(event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    loginForm.handleSubmit();
                }}
            >
                <div className="grid gap-4">
                    <loginForm.Field
                        name="email"
                        children={(field) => {
                            const isValid = field.state.meta.isTouched && !field.state.meta.isValid;
                            const { name, handleChange } = field;
                            return (
                                <div data-invalid={isValid} className="group relative grid gap-2">
                                    <Label
                                        htmlFor="email"
                                        className="text-muted-foreground transition-colors group-focus-within:text-cyan-400"
                                    >
                                        Email
                                    </Label>
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
                                        className="border-white/10 bg-black/20 backdrop-blur-md transition-all duration-300 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50"
                                    />
                                    <ErrorFieldInfo field={field} />
                                </div>
                            );
                        }}
                    />
                    <loginForm.Field
                        name="password"
                        children={(field) => {
                            const isValid = field.state.meta.isTouched && !field.state.meta.isValid;
                            const { name, handleChange } = field;
                            return (
                                <div data-invalid={isValid} className="group relative grid gap-2">
                                    <div className="flex items-center justify-between">
                                        <Label
                                            htmlFor="password"
                                            className="text-muted-foreground transition-colors group-focus-within:text-cyan-400"
                                        >
                                            Password
                                        </Label>
                                        <Link
                                            href="/forgot-password"
                                            className="font-medium text-muted-foreground text-xs transition-colors hover:text-cyan-400 hover:underline"
                                        >
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
                                        className="border-white/10 bg-black/20 backdrop-blur-md transition-all duration-300 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50"
                                    />
                                    <ErrorFieldInfo field={field} />
                                </div>
                            );
                        }}
                    />
                    <loginForm.Subscribe
                        selector={(state) => [state.canSubmit, state.isSubmitting]}
                        children={([canSubmit, isSubmitting]) => {
                            return (
                                <Button
                                    type="submit"
                                    disabled={!canSubmit || isSubmitting}
                                    className="group relative mt-4 overflow-hidden border border-fuchsia-500/50 shadow-[0_0_15px_rgba(217,70,239,0.3)] transition-all duration-500 hover:shadow-[0_0_25px_rgba(217,70,239,0.6)]"
                                >
                                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-cyan-500/0 via-cyan-400/30 to-violet-500/0 transition-transform duration-1000 group-hover:translate-x-full" />
                                    <span className="relative z-10 flex items-center">
                                        {isSubmitting && (
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        )}
                                        Initialize Access
                                    </span>
                                </Button>
                            );
                        }}
                    />
                </div>
            </form>
            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-border border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                    <span className="rounded-md bg-background/80 px-2 text-muted-foreground backdrop-blur-md">
                        Or continue with
                    </span>
                </div>
            </div>
            <Button
                variant="outline"
                type="button"
                onClick={handleLoginWithGithub}
                className="glass text-foreground"
            >
                GitHub
            </Button>
        </div>
    );
}

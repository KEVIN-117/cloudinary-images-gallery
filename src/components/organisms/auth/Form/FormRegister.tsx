"use client";

import { useForm } from "@tanstack/react-form-nextjs";
import { Loader2 } from "lucide-react";
import { redirect } from "next/navigation";
import { registerUser } from "@/actions/auth";
import { Button } from "@/components/atoms/button";
import { ErrorFieldInfo } from "@/components/atoms/core/ErrorFieldInfo";
import { Input } from "@/components/atoms/input";
import { Label } from "@/components/atoms/label";
import { notify } from "@/components/molecules/Notification/notify";
import { userRegistrationSchema } from "@/types/user";
export function FormRegister() {
    const loginForm = useForm({
        defaultValues: {
            username: "",
            email: "",
            password: "",
        },
        validators: {
            onChange: userRegistrationSchema,
        },
        onSubmit: async ({ value, formApi }) => {
            const result = await registerUser(value);
            if (result.error) {
                notify.error(result.error);
            } else {
                notify.success(result.message);
                formApi.reset();
                redirect("/confirm-email");
            }
        },
    });

    return (
        <div className="fade-in slide-in-from-bottom-4 grid animate-in gap-6 duration-1000">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    loginForm.handleSubmit();
                }}
            >
                <div className="grid gap-4">
                    <loginForm.Field
                        name="username"
                        children={(field) => {
                            const isValid = field.state.meta.isTouched && !field.state.meta.isValid;
                            return (
                                <div data-invalid={isValid} className="group relative grid gap-2">
                                    <Label
                                        htmlFor={field.name}
                                        className="text-muted-foreground transition-colors group-focus-within:text-cyan-400"
                                    >
                                        Username
                                    </Label>
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
                                        className="border-white/10 bg-black/20 backdrop-blur-md transition-all duration-300 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50"
                                    />
                                    <ErrorFieldInfo field={field} />
                                </div>
                            );
                        }}
                    />
                    <loginForm.Field
                        name="email"
                        children={(field) => {
                            const isValid = field.state.meta.isTouched && !field.state.meta.isValid;
                            return (
                                <div data-invalid={isValid} className="group relative grid gap-2">
                                    <Label
                                        htmlFor={field.name}
                                        className="text-muted-foreground transition-colors group-focus-within:text-cyan-400"
                                    >
                                        Email
                                    </Label>
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
                            return (
                                <div data-invalid={isValid} className="group relative grid gap-2">
                                    <Label
                                        htmlFor={field.name}
                                        className="text-muted-foreground transition-colors group-focus-within:text-cyan-400"
                                    >
                                        Password
                                    </Label>
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
                                        className="border-white/10 bg-black/20 backdrop-blur-md transition-all duration-300 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50"
                                    />
                                    <ErrorFieldInfo field={field} />
                                </div>
                            );
                        }}
                    />
                    <loginForm.Subscribe
                        selector={(state) => [state.canSubmit, state.isSubmitting]}
                        children={([canSubmit, isSubmitting]) => (
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

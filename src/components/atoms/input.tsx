import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const inputVariants = cva(
    "flex w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 font-medium text-foreground text-sm shadow-sm outline-none ring-offset-background transition-all transition-shadow duration-300 ease-in-out file:border-0 file:bg-transparent file:font-medium file:text-sm placeholder:text-muted-foreground/60 disabled:cursor-not-allowed disabled:opacity-50",
    {
        variants: {
            variant: {
                default:
                    "backdrop-blur-md hover:border-white/20 hover:bg-white/10 focus-visible:border-[#00b4db]/50 focus-visible:bg-white/10 focus-visible:ring-4 focus-visible:ring-[#006f87]/20",
                purple: "backdrop-blur-md hover:border-white/20 hover:bg-white/10 focus-visible:border-[#b30077]/50 focus-visible:bg-white/10 focus-visible:ring-4 focus-visible:ring-[#72004c]/30",
                destructive:
                    "border-destructive/50 bg-destructive/10 text-destructive backdrop-blur-md placeholder:text-destructive/60 focus-visible:border-destructive focus-visible:ring-4 focus-visible:ring-destructive/20",
                ghost: "border-transparent bg-transparent shadow-none hover:bg-white/5 focus-visible:border-white/20 focus-visible:bg-white/5 focus-visible:ring-4 focus-visible:ring-white/10",
            },
            size: {
                default: "h-11",
                sm: "h-9 rounded-lg px-3 text-xs",
                lg: "h-14 rounded-2xl px-5 text-base",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    },
);

export interface InputProps
    extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
        VariantProps<typeof inputVariants> {
    error?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, variant, size, type, error, "aria-invalid": ariaInvalid, ...props }, ref) => {
        // Improve accessibility by automatically using the destructive variant if aria-invalid is true
        const appliedVariant = error && !variant ? "destructive" : variant;

        return (
            <input
                type={type}
                className={cn(inputVariants({ variant: appliedVariant, size, className }))}
                ref={ref}
                aria-invalid={!!(error || ariaInvalid)}
                {...props}
            />
        );
    },
);
Input.displayName = "Input";

export { Input, inputVariants };

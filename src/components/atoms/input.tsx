import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const inputVariants = cva(
  "flex w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-foreground shadow-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground/60 outline-none transition-all transition-shadow duration-300 ease-in-out disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "hover:border-white/20 hover:bg-white/10 focus-visible:border-[#00b4db]/50 focus-visible:bg-white/10 focus-visible:ring-4 focus-visible:ring-[#006f87]/20 backdrop-blur-md",
        purple:
          "hover:border-white/20 hover:bg-white/10 focus-visible:border-[#b30077]/50 focus-visible:bg-white/10 focus-visible:ring-4 focus-visible:ring-[#72004c]/30 backdrop-blur-md",
        destructive:
          "border-destructive/50 bg-destructive/10 text-destructive placeholder:text-destructive/60 focus-visible:border-destructive focus-visible:ring-4 focus-visible:ring-destructive/20 backdrop-blur-md",
        ghost:
          "border-transparent bg-transparent shadow-none hover:bg-white/5 focus-visible:bg-white/5 focus-visible:border-white/20 focus-visible:ring-4 focus-visible:ring-white/10",
      },
      size: {
        default: "h-11",
        sm: "h-9 px-3 text-xs rounded-lg",
        lg: "h-14 px-5 text-base rounded-2xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, size, type, "aria-invalid": ariaInvalid, ...props }, ref) => {
    // Improve accessibility by automatically using the destructive variant if aria-invalid is true
    const appliedVariant = (ariaInvalid === true || ariaInvalid === "true") && !variant 
      ? "destructive" 
      : variant;

    return (
      <input
        type={type}
        className={cn(inputVariants({ variant: appliedVariant, size, className }))}
        ref={ref}
        aria-invalid={ariaInvalid}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input, inputVariants }

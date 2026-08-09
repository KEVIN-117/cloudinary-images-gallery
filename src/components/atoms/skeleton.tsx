import { cn } from "@/lib/utils";

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="skeleton"
            className={cn(
                "animate-pulse rounded-2xl border border-white/5 bg-black/40 shadow-[inset_0_0_30px_rgba(34,211,238,0.03)]",
                className,
            )}
            {...props}
        />
    );
}

export { Skeleton };

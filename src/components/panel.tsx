import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

/** The one card on the site: thin navy-tint border, white fill, a soft shadow, 32px padding. */
export function Surface({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("rounded-2xl border border-border bg-card p-8 shadow-[0_1px_2px_color-mix(in_srgb,var(--navy)_6%,transparent),0_20px_40px_-24px_color-mix(in_srgb,var(--navy)_18%,transparent)]", className)} {...props} />;
}

/** Page width and gutters, shared by every section. */
export function Container({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("mx-auto w-full max-w-[1240px] px-4 sm:px-6", className)} {...props} />;
}

import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

/** The one card on the site: thin border, near-black fill, 10px radius, 32px padding. */
export function Surface({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("rounded-[10px] border border-border bg-card p-8", className)} {...props} />;
}

/** Page width and gutters, shared by every section. */
export function Container({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("mx-auto w-full max-w-[1240px] px-4 sm:px-6", className)} {...props} />;
}

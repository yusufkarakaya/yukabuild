import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

/** The one card on the site: the raised navy surface with a thin border. */
export function Surface({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("rounded-xl border border-border bg-card p-6", className)} {...props} />;
}

/** Page width and gutters, shared by every section. */
export function Container({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("mx-auto w-full max-w-[1040px] px-4 sm:px-6", className)} {...props} />;
}

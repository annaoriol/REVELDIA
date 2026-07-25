import type { ButtonHTMLAttributes, ReactNode } from "react";
import { forwardRef } from "react";

import { cn } from "@/app/lib/cn";

export interface IconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  children: ReactNode;
}

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ children, className, label, type = "button", ...props }, ref) => (
    <button
      ref={ref}
      type={type}
      aria-label={label}
      title={label}
      className={cn(
        "inline-flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.035] text-white/70 transition-colors duration-200 hover:bg-white/[0.075] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--revela-accent)] disabled:pointer-events-none disabled:opacity-45",
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
);

IconButton.displayName = "IconButton";

export default IconButton;

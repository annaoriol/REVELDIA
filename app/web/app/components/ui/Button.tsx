import type { ButtonHTMLAttributes, ReactNode } from "react";
import { forwardRef } from "react";

import { cn } from "@/app/lib/cn";

type ButtonVariant = "primary" | "ghost" | "quiet";

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
}

const variantClassName: Record<ButtonVariant, string> = {
  primary:
    "border-transparent bg-[var(--revela-accent)] text-black hover:bg-[var(--revela-accent-strong)]",
  ghost:
    "border-white/12 bg-white/[0.035] text-white hover:border-white/24 hover:bg-white/[0.07]",
  quiet:
    "border-transparent bg-transparent text-[var(--revela-accent)] hover:text-white",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      type = "button",
      variant = "ghost",
      ...props
    },
    ref
  ) => (
    <button
      ref={ref}
      type={type}
      className={cn(
        "inline-flex min-h-10 items-center justify-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--revela-accent)] disabled:pointer-events-none disabled:opacity-45",
        variantClassName[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
);

Button.displayName = "Button";

export default Button;

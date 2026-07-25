import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/app/lib/cn";

export interface CardProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

export default function Card({
  children,
  className,
  ...props
}: CardProps) {
  return (
    <section
      className={cn(
        "rounded-[var(--revela-radius-md)] border border-[var(--revela-border)] bg-[var(--revela-surface)]",
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}

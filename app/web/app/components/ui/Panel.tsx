import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/app/lib/cn";

export interface PanelProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

export default function Panel({
  children,
  className,
  ...props
}: PanelProps) {
  return (
    <section
      className={cn(
        "rounded-[var(--revela-radius-lg)] border border-[var(--revela-border)] bg-[var(--revela-surface-raised)] shadow-[var(--revela-shadow-panel)]",
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}

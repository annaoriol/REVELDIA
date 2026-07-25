import type { HTMLAttributes } from "react";

import { cn } from "@/app/lib/cn";

export interface SectionTitleProps
  extends HTMLAttributes<HTMLDivElement> {
  eyebrow: string;
  title: string;
  description?: string;
}

export default function SectionTitle({
  eyebrow,
  title,
  description,
  className,
  ...props
}: SectionTitleProps) {
  return (
    <div className={cn("min-w-0", className)} {...props}>
      <p className="text-[0.68rem] uppercase tracking-[0.34em] text-[var(--revela-text-subtle)]">
        {eyebrow}
      </p>

      <h1 className="mt-3 font-[var(--font-space)] text-[clamp(1.8rem,3.4vw,4.5rem)] font-light leading-none tracking-[0.08em] text-[var(--revela-text)]">
        {title}
      </h1>

      {description && (
        <p className="mt-5 max-w-2xl text-[clamp(0.95rem,1vw,1.1rem)] leading-7 text-[var(--revela-text-muted)]">
          {description}
        </p>
      )}
    </div>
  );
}

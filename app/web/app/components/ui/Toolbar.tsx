import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/app/lib/cn";

export interface ToolbarProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export default function Toolbar({
  children,
  className,
  ...props
}: ToolbarProps) {
  return (
    <div
      role="toolbar"
      className={cn(
        "flex items-center gap-2 rounded-full border border-white/10 bg-black/20 p-1",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

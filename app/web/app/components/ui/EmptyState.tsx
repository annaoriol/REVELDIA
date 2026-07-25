import type { ReactNode } from "react";

import Card from "./Card";

export interface EmptyStateProps {
  title: string;
  description: string;
  action?: ReactNode;
}

export default function EmptyState({
  title,
  description,
  action,
}: EmptyStateProps) {
  return (
    <Card className="flex min-h-48 flex-col items-start justify-center p-8">
      <p className="font-[var(--font-space)] text-xl font-light text-white">
        {title}
      </p>

      <p className="mt-4 max-w-md text-sm leading-6 text-white/48">
        {description}
      </p>

      {action && <div className="mt-6">{action}</div>}
    </Card>
  );
}

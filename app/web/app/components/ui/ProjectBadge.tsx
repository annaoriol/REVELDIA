import type { ProjectStatus } from "@/app/types";

type ProjectBadgeProps = {
  status: ProjectStatus;
};

const labelByStatus: Record<ProjectStatus, string> = {
  draft: "Borrador",
  active: "Activo",
  "ready-for-review": "Revisión",
  exported: "Exportado",
};

export default function ProjectBadge({ status }: ProjectBadgeProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-[var(--revela-accent)]/35 bg-[var(--revela-accent)]/10 px-3 py-1 text-xs font-medium text-[var(--revela-accent)]">
      {labelByStatus[status]}
    </span>
  );
}

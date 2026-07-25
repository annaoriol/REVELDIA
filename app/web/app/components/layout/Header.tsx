"use client";

import { Download, Save } from "lucide-react";
import { memo } from "react";

import Button from "@/app/components/ui/Button";
import IconButton from "@/app/components/ui/IconButton";
import ProjectBadge from "@/app/components/ui/ProjectBadge";
import { useRevealStore } from "@/app/stores/useRevealStore";

function Header() {
  const project = useRevealStore((state) => state.project);
  const sceneTitle = useRevealStore((state) => state.scene.sceneTitle);

  return (
    <header className="z-20 shrink-0 border-b border-[var(--revela-border)] bg-[var(--revela-background)]/92 px-[clamp(1rem,2vw,2rem)] py-3 backdrop-blur-xl">
      <div className="flex min-h-14 items-center justify-between gap-4">
        <div className="flex min-w-0 items-center gap-[clamp(1rem,2vw,2.25rem)]">
          <div className="shrink-0">
            <p className="font-[var(--font-space)] text-xl font-light tracking-[0.18em] text-white">
              R<span className="text-[var(--revela-accent)]">Ǝ</span>VELA
            </p>
          </div>

          <div className="hidden h-8 w-px bg-white/10 sm:block" />

          <div className="min-w-0">
            <p className="truncate text-sm font-medium text-white/80">
              {project.name}
            </p>
            <p className="mt-1 truncate text-xs text-white/38">
              {sceneTitle}
            </p>
          </div>

          <div className="hidden md:block">
            <ProjectBadge status={project.status} />
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <Button className="hidden md:inline-flex" variant="quiet">
            Guardar
          </Button>
          <Button className="hidden md:inline-flex" variant="ghost">
            Exportar
          </Button>

          <IconButton label="Guardar" className="md:hidden">
            <Save size={16} aria-hidden="true" />
          </IconButton>
          <IconButton label="Exportar" className="md:hidden">
            <Download size={16} aria-hidden="true" />
          </IconButton>
        </div>
      </div>
    </header>
  );
}

export default memo(Header);

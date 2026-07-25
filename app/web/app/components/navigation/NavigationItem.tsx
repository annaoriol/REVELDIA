"use client";

import type { Scene } from "@/app/types";
import { cn } from "@/app/lib/cn";

export interface NavigationItemProps {
  scene: Scene;
  active: boolean;
  onSelect: (sceneId: Scene["id"]) => void;
}

export default function NavigationItem({
  scene,
  active,
  onSelect,
}: NavigationItemProps) {
  const disabled = scene.status === "locked";

  return (
    <button
      type="button"
      disabled={disabled}
      aria-current={active ? "page" : undefined}
      onClick={() => onSelect(scene.id)}
      className={cn(
        "group flex w-full gap-3 rounded-[var(--revela-radius-sm)] px-3 py-3 text-left transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--revela-accent)]",
        {
          "bg-white/[0.06] text-white": active,
          "text-white/54 hover:bg-white/[0.035] hover:text-white":
            !active && !disabled,
          "cursor-not-allowed text-white/22": disabled,
        }
      )}
    >
      <span
        className={cn(
          "mt-0.5 w-7 shrink-0 font-[var(--font-space)] text-xs tracking-[0.16em]",
          active
            ? "text-[var(--revela-accent)]"
            : "text-white/32"
        )}
      >
        {String(scene.order).padStart(2, "0")}
      </span>

      <span className="min-w-0">
        <span className="block truncate text-sm font-medium">
          {scene.title}
        </span>

        <span className="mt-1 block text-xs leading-5 text-white/36">
          {scene.description}
        </span>
      </span>
    </button>
  );
}

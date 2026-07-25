"use client";

import { memo } from "react";

import EmptyState from "@/app/components/ui/EmptyState";
import { useRevealStore } from "@/app/stores/useRevealStore";

function Inspector() {
  const activeScene = useRevealStore((state) =>
    state.navigation.items.find(
      (item) => item.id === state.scene.activeSceneId
    )
  );
  const selection = useRevealStore((state) => state.selection);
  const future = useRevealStore((state) => state.future);

  return (
    <aside className="min-h-0 overflow-y-auto border-t border-[var(--revela-border)] bg-[var(--revela-background)] px-[clamp(1rem,1.6vw,1.75rem)] py-[clamp(1rem,1.8vw,2rem)] lg:border-l lg:border-t-0">
      <section>
        <p className="text-[0.68rem] uppercase tracking-[0.34em] text-[var(--revela-text-subtle)]">
          Inspector
        </p>

        <h2 className="mt-3 font-[var(--font-space)] text-2xl font-light tracking-[0.08em] text-white">
          Contexto
        </h2>
      </section>

      <div className="mt-6 space-y-5">
        <EmptyState
          title={activeScene?.title ?? "Sin escena"}
          description={
            activeScene?.description ??
            "El panel contextual queda preparado para propiedades, ayuda y acciones."
          }
        />

        <section className="rounded-[var(--revela-radius-md)] border border-white/10 bg-white/[0.025] p-5">
          <p className="text-[0.68rem] uppercase tracking-[0.28em] text-white/35">
            Selección
          </p>
          <p className="mt-3 text-sm text-white/54">
            {selection.id
              ? `${selection.type}: ${selection.id}`
              : "Sin selección activa"}
          </p>
        </section>

        <section className="rounded-[var(--revela-radius-md)] border border-white/10 bg-white/[0.025] p-5">
          <p className="text-[0.68rem] uppercase tracking-[0.28em] text-white/35">
            Preparado para
          </p>
          <ul className="mt-4 space-y-3 text-sm text-white/50">
            {future.map((feature) => (
              <li
                key={feature.id}
                className="flex items-center justify-between gap-3"
              >
                <span>{feature.label}</span>
                <span className="text-xs uppercase tracking-[0.18em] text-white/28">
                  {feature.enabled ? "Activo" : "Plan"}
                </span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </aside>
  );
}

export default memo(Inspector);

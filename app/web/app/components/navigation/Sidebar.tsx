"use client";

import { memo } from "react";

import { useSceneNavigation } from "@/app/hooks/useSceneNavigation";

import NavigationItem from "./NavigationItem";

function Sidebar() {
  const { activeSceneId, items, setScene } = useSceneNavigation();

  return (
    <aside className="min-h-0 overflow-y-auto border-b border-white/10 bg-[var(--revela-background)] px-[clamp(1rem,1.6vw,1.75rem)] py-[clamp(1rem,1.8vw,2rem)] lg:border-b-0 lg:border-r">
      <div className="flex items-end justify-between gap-4 lg:block">
        <div>
        <h2 className="font-[var(--font-space)] text-[clamp(1.55rem,1.75vw,2.15rem)] font-light tracking-[0.16em]">
          R<span className="text-[#0391A1]">Ǝ</span>VELA
        </h2>

        <p className="mt-3 text-[clamp(0.68rem,0.65vw,0.82rem)] uppercase tracking-[0.32em] text-white/40">
          Laboratorio Creativo
        </p>
        </div>

        <p className="hidden text-right text-xs uppercase tracking-[0.28em] text-white/30 sm:block lg:hidden">
          Método
        </p>
      </div>

      <section className="mt-[clamp(1.5rem,2.2vw,2.4rem)] border-t border-white/10 pt-[clamp(1rem,1.4vw,1.5rem)]">
        <p className="text-[11px] uppercase tracking-[0.35em] text-white/35">
          Recorrido
        </p>

        <nav
          aria-label="Recorrido del metodo RƎVELA"
          className="mt-4"
        >
          <ul className="grid gap-1 sm:grid-cols-2 lg:grid-cols-1">
            {items.map((scene) => (
              <li key={scene.id}>
                <NavigationItem
                  scene={scene}
                  active={activeSceneId === scene.id}
                  onSelect={setScene}
                />
              </li>
            ))}
          </ul>
        </nav>
      </section>
    </aside>
  );
}

export default memo(Sidebar);

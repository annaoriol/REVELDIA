"use client";

import { memo } from "react";

import { useRevealStore } from "@/app/stores/useRevealStore";

function Footer() {
  const loading = useRevealStore((state) => state.loading);
  const memory = useRevealStore((state) => state.memory);
  const errors = useRevealStore((state) => state.errors);

  return (
    <footer className="grid shrink-0 grid-cols-2 gap-3 border-t border-[var(--revela-border)] bg-[var(--revela-background)] px-[clamp(1rem,2vw,2rem)] py-2 text-[0.72rem] text-white/42 md:grid-cols-4">
      <span>Estado: {errors.length > 0 ? "Revisar" : "Estable"}</span>
      <span>
        Sincronización:{" "}
        {memory.lastSyncedAt ? "Actualizada" : "Local"}
      </span>
      <span>Sesión: Activa</span>
      <span>Motor: {loading.scene ? "Cargando" : "Preparado"}</span>
    </footer>
  );
}

export default memo(Footer);

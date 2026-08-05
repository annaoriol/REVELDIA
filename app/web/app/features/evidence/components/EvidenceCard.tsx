"use client";

import type { Evidence } from "../types/Evidence";

interface EvidenceCardProps {
  evidence: Evidence;
  onToggle?: (id: string) => void;
  onInspect?: (evidence: Evidence) => void;
}

export default function EvidenceCard({
  evidence,
  onToggle,
  onInspect,
}: EvidenceCardProps) {
  return (
    <article
      className="
        flex
        h-full
        flex-col
        rounded-2xl
        border
        border-white/10
        bg-black/20
        p-6
        transition-all
        duration-300
        hover:border-cyan-300/40
      "
    >
      {/* Tipo */}

      <p className="text-[11px] uppercase tracking-[0.32em] text-cyan-300">
        {evidence.type}
      </p>

      {/* Título */}

      <h3 className="mt-3 text-2xl font-light text-white">
        {evidence.title}
      </h3>

      {/* Resumen */}

      <p className="mt-4 flex-1 text-sm leading-7 text-white/70">
        {evidence.summary}
      </p>

      {/* Acciones */}

      <div className="mt-8 space-y-3">

        <button
          type="button"
          onClick={() => onToggle?.(evidence.id)}
          className={[
            "w-full rounded-xl border px-4 py-3 text-sm transition",
            evidence.selected
              ? "border-cyan-300 bg-cyan-300/10 text-cyan-300"
              : "border-white/10 text-white hover:border-cyan-300",
          ].join(" ")}
        >
          {evidence.selected
            ? "✓ En Mesa de Luz"
            : "+ Mesa de Luz"}
        </button>

        <button
          type="button"
          onClick={() => onInspect?.(evidence)}
          className="
            w-full
            rounded-xl
            border
            border-white/10
            px-4
            py-3
            text-sm
            text-white/70
            transition
            hover:border-cyan-300
            hover:text-cyan-300
          "
        >
          Examinar →
        </button>

      </div>
    </article>
  );
}
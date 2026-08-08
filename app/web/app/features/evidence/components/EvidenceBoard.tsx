"use client";

import type { Evidence } from "../types/Evidence";
import EvidenceCard from "./EvidenceCard";

interface EvidenceBoardProps {
  items: Evidence[];
  onToggle?: (id: string) => void;
  onInspect?: (evidence: Evidence) => void;
}

export default function EvidenceBoard({
  items,
  onToggle,
  onInspect,
}: EvidenceBoardProps) {
  if (!items.length) {
    return (
      <div className="rounded-2xl border border-white/10 p-10 text-center text-white/50">
        No hay referencias disponibles.
      </div>
    );
  }

  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {items.map((evidence) => (
        <EvidenceCard
          key={evidence.id}
          evidence={evidence}
          onToggle={onToggle}
          onInspect={onInspect}
        />
      ))}
    </div>
  );
}
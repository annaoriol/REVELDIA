"use client";

import type { Reference } from "./data";
import ReferenceCard from "./ReferenceCard";

interface ReferenceGridProps {
  items: Reference[];
  onSelect: (reference: Reference) => void;
  onToggleLightTable: (reference: Reference) => void;
  lightTableIds: Set<string>;
}

export default function ReferenceGrid({
  items,
  onSelect,
  onToggleLightTable,
  lightTableIds,
}: ReferenceGridProps) {
  if (!items.length) {
    return (
      <div className="rounded-2xl border border-white/10 bg-black/20 px-6 py-12 text-center">
        <p className="text-sm text-white/45">
          No hemos encontrado referencias para esta búsqueda.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((reference) => (
        <ReferenceCard
          key={reference.id}
          reference={reference}
          isInLightTable={lightTableIds.has(reference.id)}
          onSelect={onSelect}
          onToggleLightTable={onToggleLightTable}
        />
      ))}
    </div>
  );
}
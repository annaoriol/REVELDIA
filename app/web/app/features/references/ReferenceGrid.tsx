import type { Reference } from "./data";
import ReferenceCard from "./ReferenceCard";

interface ReferenceGridProps {
  items: Reference[];
  onSelect?: (reference: Reference) => void;
  lightTableIds?: ReadonlySet<string>;
}

export default function ReferenceGrid({
  items,
  onSelect,
  lightTableIds,
}: ReferenceGridProps) {
  if (!items.length) {
    return (
      <div className="mt-12 rounded-2xl border border-white/10 bg-white/[0.02] p-16 text-center">
        <p className="text-white/50">
          No se han encontrado evidencias.
        </p>
      </div>
    );
  }

  return (
    <div
      className="
        mt-8
        grid
        grid-cols-1
        gap-6
        md:grid-cols-2
        xl:grid-cols-3
      "
    >
      {items.map((item) => (
        <div
          key={item.id}
          className="flex h-full"
        >
          <ReferenceCard
            item={item}
            onSelect={onSelect}
            isInLightTable={lightTableIds?.has(item.id) ?? false}
          />
        </div>
      ))}
    </div>
  );
}
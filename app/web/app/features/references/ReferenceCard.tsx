import Card from "@/app/components/ui/Card";
import type { Reference } from "./data";

interface ReferenceCardProps {
  item: Reference;
  onSelect?: (reference: Reference) => void;
  isInLightTable?: boolean;
}

export default function ReferenceCard({
  item,
  onSelect,
  isInLightTable = false,
}: ReferenceCardProps) {
  const aspect =
    item.orientation === "portrait"
      ? "aspect-[3/4]"
      : item.orientation === "square"
      ? "aspect-square"
      : "aspect-[4/3]";

  function handleSelect() {
    onSelect?.(item);
  }

  return (
    <Card
      role="button"
      tabIndex={0}
      aria-label={`Examinar evidencia ${item.title}`}
      onClick={handleSelect}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          handleSelect();
        }
      }}
      className={[
        "group overflow-hidden rounded-2xl bg-black/30 p-0 cursor-pointer transition-all duration-300",
        "hover:-translate-y-1 hover:border-cyan-300/40",
        isInLightTable
          ? "border border-cyan-300/60"
          : "border border-white/10",
      ].join(" ")}
    >
      <div className={`relative ${aspect}`}>
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/10" />

        {item.featured && (
          <div className="absolute right-4 top-4 rounded-full bg-cyan-400/15 border border-cyan-300/30 px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-cyan-300 backdrop-blur">
            Destacada
          </div>
        )}

        <div className="absolute inset-x-0 bottom-0 p-5">

          <div className="mb-4 flex items-center justify-between">

            <span className="rounded-full border border-cyan-300/20 bg-black/40 px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-cyan-300">
              ✨ RƎVELA
            </span>

            <span className="text-[10px] uppercase tracking-[0.24em] text-white/50">
              {item.category}
            </span>

          </div>

          <h3 className="text-3xl font-light text-white">
            {item.title}
          </h3>

          <p className="mt-3 line-clamp-3 text-sm leading-6 text-white/75">
            {item.description}
          </p>

          <div className="mt-6 flex items-center justify-between">

            <span className="text-xs uppercase tracking-[0.25em] text-cyan-300 transition-opacity group-hover:opacity-100">
              Examinar →
            </span>

            {isInLightTable && (
              <span className="text-xs uppercase tracking-[0.25em] text-cyan-300">
                ✓ Mesa de Luz
              </span>
            )}

          </div>

        </div>
      </div>
    </Card>
  );
}
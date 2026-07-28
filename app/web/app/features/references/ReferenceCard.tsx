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

  const handleSelect = () => {
    onSelect?.(item);
  };

  return (
    <Card
      role="button"
      tabIndex={0}
      aria-label={`Abrir referencia ${item.title}`}
      onClick={handleSelect}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          handleSelect();
        }
      }}
      className={[
        "group cursor-pointer overflow-hidden rounded-2xl bg-black/30 p-0 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300",
        isInLightTable
          ? "border border-cyan-300/45 shadow-[0_0_0_1px_rgba(103,232,249,0.16)] hover:border-cyan-300/65"
          : "border border-white/10 hover:border-cyan-400/40",
      ].join(" ")}
    >
      <div className={`relative overflow-hidden ${aspect}`}>
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Overlay editorial REVELA */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/45 to-black/10" />

        {/* Badge */}
        {item.featured && (
          <div className="absolute right-4 top-4 z-20 rounded-full border border-cyan-400/25 bg-black/45 px-3 py-1 backdrop-blur-sm transition-all duration-300 group-hover:bg-black/60">
            <span className="text-[10px] font-medium uppercase tracking-[0.34em] text-cyan-300/95">
              DESTACADA
            </span>
          </div>
        )}

        {isInLightTable && (
          <div className="absolute left-4 top-4 z-20 h-1.5 w-8 rounded-full bg-cyan-300/80" />
        )}

        {/* Información */}
        <div className="absolute inset-x-0 bottom-0 z-10 p-5">
          <p className="text-[10px] uppercase tracking-[0.35em] text-white/60">
            {item.category}
          </p>

          <h3 className="mt-2 text-[2rem] font-light leading-none text-white">
            {item.title}
          </h3>

          <p className="mt-3 line-clamp-2 max-w-sm text-sm leading-6 text-white/78">
            {item.description}
          </p>
        </div>
      </div>
    </Card>
  );
}

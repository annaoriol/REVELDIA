interface Props {
  current: string;
  onChange: (filter: string) => void;
}

const filters = [
  "Todas",
  "Fotografía",
  "Publicidad",
  "Branding",
  "Marketing",
  "Editorial",
  "Arquitectura",
];

export default function ReferenceFilters({
  current,
  onChange,
}: Props) {
  return (
    <nav className="mt-6 border-b border-white/10 pb-3">
      <div className="flex items-center gap-6 text-sm">

        <span className="shrink-0 text-[11px] font-medium uppercase tracking-[0.28em] text-white/35">
          DISCIPLINAS
        </span>

        <div
          className="
            flex-1
            overflow-x-auto
            whitespace-nowrap
            scroll-smooth
            [-ms-overflow-style:none]
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
          "
        >
          <div className="flex w-max items-center gap-6">
            {filters.map((filter) => {
              const active = current === filter;

              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => onChange(filter)}
                  className={[
                    "relative shrink-0 pb-2 text-sm transition-colors duration-200",
                    active
                      ? "text-cyan-300"
                      : "text-white/45 hover:text-white/80",
                  ].join(" ")}
                >
                  {filter}

                  {active && (
                    <span className="absolute inset-x-0 -bottom-[1px] h-[2px] rounded-full bg-cyan-300" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </nav>
  );
}
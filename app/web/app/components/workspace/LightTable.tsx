type LightCardProps = {
  title: string;
  label: string;
  body: string;
  className?: string;
};

type InsightCardProps = {
  title: string;
  className?: string;
};

type VisualReferenceCardProps = {
  label: string;
  className?: string;
};

type ConnectionCardProps = {
  from: string;
  to: string;
  className?: string;
};

export function LightCard({
  title,
  label,
  body,
  className = "",
}: LightCardProps) {
  return (
    <article
      className={`rounded-[1.35rem] border border-white/[0.1] bg-[#111111] p-[clamp(1.5rem,2vw,2.4rem)] ${className}`}
    >
      <p className="text-[11px] uppercase tracking-[0.32em] text-white/35">
        {label}
      </p>

      <h3 className="mt-6 font-[var(--font-space)] text-[clamp(1.7rem,2vw,2.75rem)] font-light tracking-[0.06em] text-white">
        {title}
      </h3>

      <p className="mt-6 max-w-md text-[clamp(0.9rem,0.82vw,1rem)] leading-7 text-white/48">
        {body}
      </p>
    </article>
  );
}

export function InsightCard({
  title,
  className = "",
}: InsightCardProps) {
  return (
    <article
      className={`rounded-[1rem] border border-white/[0.09] bg-[#0F0F0F] p-5 ${className}`}
    >
      <p className="text-[10px] uppercase tracking-[0.28em] text-white/30">
        Insight
      </p>

      <p className="mt-4 text-sm leading-6 text-white/58">
        {title}
      </p>
    </article>
  );
}

export function VisualReferenceCard({
  label,
  className = "",
}: VisualReferenceCardProps) {
  return (
    <article
      className={`overflow-hidden rounded-[1.1rem] border border-white/[0.08] bg-[#101010] ${className}`}
    >
      <div className="aspect-[4/5] bg-white/[0.055]" />

      <div className="border-t border-white/[0.07] px-4 py-3">
        <p className="text-[10px] uppercase tracking-[0.24em] text-white/36">
          {label}
        </p>
      </div>
    </article>
  );
}

export function ConnectionCard({
  from,
  to,
  className = "",
}: ConnectionCardProps) {
  return (
    <article
      className={`rounded-[1rem] border border-white/[0.08] bg-[#0D0D0D] p-5 ${className}`}
    >
      <p className="text-[10px] uppercase tracking-[0.28em] text-white/30">
        Conexión
      </p>

      <div className="mt-5 flex items-center gap-3">
        <span className="text-sm text-white/58">{from}</span>
        <span className="h-px flex-1 bg-white/12" />
        <span className="text-sm text-white/58">{to}</span>
      </div>
    </article>
  );
}

export default function LightTable() {
  return (
    <section className="relative min-h-[min(74dvh,860px)] overflow-hidden rounded-[1.45rem] border border-white/[0.08] bg-white/[0.012] p-[clamp(1.5rem,2.6vw,3.4rem)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.045),transparent_58%)]" />

      <div className="relative h-full min-h-[680px]">
        <LightCard
          label="Idea central"
          title="Corazón del proyecto"
          body="Placeholder de la idea que ordena el laboratorio y mantiene unida la dirección creativa."
          className="absolute left-[28%] top-[24%] z-20 w-[min(42vw,520px)] -rotate-1"
        />

        <div className="absolute left-[2%] top-[8%] z-10 w-[min(28vw,320px)] space-y-4">
          <p className="text-[11px] uppercase tracking-[0.32em] text-white/35">
            Insights
          </p>

          <InsightCard
            title="Hallazgo editorial placeholder."
            className="translate-x-3 rotate-[-2deg]"
          />
          <InsightCard
            title="Observación de tono placeholder."
            className="-translate-x-1 rotate-[1deg]"
          />
          <InsightCard
            title="Descubrimiento visual placeholder."
            className="translate-x-6 rotate-[-1deg]"
          />
        </div>

        <div className="absolute right-[4%] top-[10%] z-10 w-[min(25vw,300px)]">
          <p className="text-[11px] uppercase tracking-[0.32em] text-white/35">
            Conexiones
          </p>

          <div className="mt-5 space-y-4">
            <ConnectionCard
              from="Insight"
              to="Idea"
              className="rotate-[1deg]"
            />
            <ConnectionCard
              from="Visual"
              to="Tono"
              className="-translate-x-4 rotate-[-1deg]"
            />
          </div>
        </div>

        <div className="absolute bottom-[3%] left-[7%] right-[5%] z-10">
          <p className="text-[11px] uppercase tracking-[0.32em] text-white/35">
            Elementos visuales
          </p>

          <div className="mt-5 flex items-end gap-4">
            <VisualReferenceCard
              label="Fotografía"
              className="w-[min(18vw,210px)] rotate-[-2deg]"
            />
            <VisualReferenceCard
              label="Recorte"
              className="w-[min(15vw,180px)] translate-y-4 rotate-[1deg]"
            />
            <div className="mb-3 w-[min(16vw,190px)] rotate-[-1deg] rounded-[1rem] border border-white/[0.08] bg-[#F1EFE7] p-5 text-sm leading-6 text-black/60">
              Post-it placeholder.
            </div>
            <VisualReferenceCard
              label="Nota"
              className="w-[min(14vw,170px)] -translate-y-2 rotate-[2deg]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

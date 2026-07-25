export default function ReferencesPanel() {
  return (
    <aside className="min-h-0 max-h-[28dvh] overflow-y-auto border-t border-white/10 bg-[#090909] px-[clamp(1.25rem,2vw,2rem)] py-[clamp(1.25rem,2vw,2.5rem)] xl:max-h-none xl:border-l xl:border-t-0">
      <section>
        <p className="text-[11px] uppercase tracking-[0.35em] text-white/35">
          References
        </p>

        <h2 className="mt-3 font-[var(--font-space)] text-[clamp(1.35rem,1.5vw,2rem)] font-light tracking-[0.08em] text-white">
          Moodboard
        </h2>
      </section>

      <section className="mt-[clamp(2rem,3vw,3rem)] space-y-[clamp(1.5rem,2vw,2.3rem)]">
        <div>
          <p className="text-[11px] uppercase tracking-[0.35em] text-white/35">
            Moodboard
          </p>

          <div className="mt-4 grid grid-cols-3 gap-2">
            <div className="aspect-[4/5] rounded-lg bg-white/[0.09]" />
            <div className="aspect-[4/5] rounded-lg bg-white/[0.055]" />
            <div className="aspect-[4/5] rounded-lg bg-white/[0.075]" />
            <div className="aspect-[4/5] rounded-lg bg-white/[0.04]" />
            <div className="aspect-[4/5] rounded-lg bg-white/[0.08]" />
            <div className="aspect-[4/5] rounded-lg border border-dashed border-white/12" />
          </div>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.35em] text-white/35">
            Referencias
          </p>

          <div className="mt-4 space-y-3">
            <div className="h-px w-full bg-white/12" />
            <div className="h-px w-4/5 bg-white/10" />
            <div className="h-px w-2/3 bg-white/10" />
          </div>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.35em] text-white/35">
            Documentos
          </p>

          <div className="mt-4 space-y-2">
            <div className="rounded-lg border border-white/10 px-3 py-2 text-xs text-white/40">
              Documento placeholder
            </div>
            <div className="rounded-lg border border-white/10 px-3 py-2 text-xs text-white/40">
              Nota editorial placeholder
            </div>
          </div>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.35em] text-white/35">
            IA
          </p>

          <div className="mt-4 rounded-xl border border-white/[0.08] bg-white/[0.025] p-4 text-sm leading-6 text-white/42">
            Resultados recientes placeholder.
          </div>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.35em] text-white/35">
            Paleta
          </p>

          <div className="mt-4 flex gap-2">
            <span className="h-10 flex-1 rounded-full bg-[#F1EFE7]" />
            <span className="h-10 flex-1 rounded-full bg-[#6F7778]" />
            <span className="h-10 flex-1 rounded-full bg-[#222222]" />
            <span className="h-10 flex-1 rounded-full bg-[#0391A1]" />
          </div>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.35em] text-white/35">
            Tipografía
          </p>

          <div className="mt-4 space-y-3">
            <p className="font-[var(--font-space)] text-3xl font-light text-white/70">
              Aa
            </p>
            <p className="text-sm leading-6 text-white/42">
              Muestra tipográfica placeholder.
            </p>
          </div>
        </div>
      </section>
    </aside>
  );
}

export default function ReferencesPanel() {
  return (
    <aside className="min-h-0 border-t border-white/10 bg-[#090909] px-6 py-8 md:px-10 lg:overflow-y-auto lg:border-l lg:border-t-0 lg:px-8 lg:py-10">
      <section>
        <p className="text-[11px] uppercase tracking-[0.35em] text-white/35">
          References
        </p>

        <h2 className="mt-3 font-[var(--font-space)] text-2xl font-light tracking-[0.08em] text-white">
          Moodboard
        </h2>
      </section>

      <section className="mt-10 space-y-6">
        <div>
          <p className="text-[11px] uppercase tracking-[0.35em] text-white/35">
            Moodboard
          </p>

          <div className="mt-4 rounded-2xl border border-dashed border-white/10 p-5 text-sm text-white/45">
            Placeholder de referencias visuales.
          </div>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.35em] text-white/35">
            Evidencias
          </p>

          <div className="mt-4 rounded-2xl border border-dashed border-white/10 p-5 text-sm text-white/45">
            Placeholder de evidencias.
          </div>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.35em] text-white/35">
            Recursos
          </p>

          <div className="mt-4 rounded-2xl border border-dashed border-white/10 p-5 text-sm text-white/45">
            Placeholder de recursos.
          </div>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.35em] text-white/35">
            IA
          </p>

          <div className="mt-4 rounded-2xl border border-dashed border-white/10 p-5 text-sm text-white/45">
            Placeholder de asistencia futura.
          </div>
        </div>
      </section>
    </aside>
  );
}

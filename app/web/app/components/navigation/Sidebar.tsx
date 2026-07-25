export default function Sidebar() {
  return (
    <aside className="min-h-0 border-b border-white/10 bg-[#090909] px-6 py-6 lg:overflow-y-auto lg:border-b-0 lg:border-r lg:px-8 lg:py-10">
      <div>
        <h2 className="font-[var(--font-space)] text-3xl font-light tracking-[0.16em]">
          R<span className="text-[#0391A1]">Ǝ</span>VELA
        </h2>

        <p className="mt-3 text-sm uppercase tracking-[0.35em] text-white/40">
          Laboratorio Creativo
        </p>
      </div>

      <section className="mt-10 border-t border-white/10 pt-8">
        <p className="text-[11px] uppercase tracking-[0.35em] text-white/35">
          Método
        </p>

        <nav aria-label="Metodo" className="mt-6">
          <ul className="space-y-4 text-sm text-white/55">
            <li>Intención</li>
            <li>Referencias</li>
            <li>Estilo</li>
            <li>Síntesis</li>
            <li>Revelación</li>
          </ul>
        </nav>
      </section>

      <section className="mt-10 border-t border-white/10 pt-8">
        <p className="text-[11px] uppercase tracking-[0.35em] text-white/35">
          Estado
        </p>

        <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
          <p className="text-sm text-white/70">
            Placeholder de progreso del laboratorio.
          </p>
        </div>
      </section>

      <section className="mt-10 border-t border-white/10 pt-8">
        <p className="text-[11px] uppercase tracking-[0.35em] text-white/35">
          Especialista
        </p>

        <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
          <p className="text-sm text-white/70">
            Placeholder del especialista activo.
          </p>
        </div>
      </section>
    </aside>
  );
}

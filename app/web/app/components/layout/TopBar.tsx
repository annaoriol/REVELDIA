export default function TopBar() {
  return (
    <header className="flex h-20 items-center justify-between border-b border-white/10 bg-[#090909] px-14">

      {/* Proyecto */}

      <div className="min-w-0">

        <p className="text-[11px] uppercase tracking-[0.35em] text-white/35">
          Proyecto
        </p>

        <h2 className="mt-2 truncate text-xl font-light tracking-[0.03em] text-white">
          Sin título
        </h2>

      </div>

      {/* Estado */}

      <div className="hidden xl:flex items-center gap-4">

        <div className="h-px w-12 bg-white/10" />

        <span className="text-xs uppercase tracking-[0.28em] text-[#0391A1]">
          R
          <span>Ǝ</span>
          VELANDO
        </span>

        <div className="h-px w-12 bg-white/10" />

      </div>

      {/* Acciones */}

      <div className="flex items-center gap-8">

        <button className="text-sm text-white/60 transition hover:text-white">
          Guardar
        </button>

        <button className="text-sm text-white/60 transition hover:text-white">
          Compartir
        </button>

        <button className="rounded-full border border-[#0391A1]/30 px-5 py-2 text-sm text-[#0391A1] transition hover:border-[#0391A1] hover:bg-[#0391A1]/10">
          Exportar
        </button>

      </div>

    </header>
  );
}
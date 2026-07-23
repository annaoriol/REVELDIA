export default function StatusBar() {
  return (
    <footer className="flex h-14 items-center justify-between border-t border-white/10 bg-[#090909] px-14">

      {/* Contexto */}

      <div className="flex items-center gap-8">

        <div>
          <p className="text-[10px] uppercase tracking-[0.30em] text-white/30">
            Fase
          </p>

          <p className="mt-1 text-sm text-white">
            R<span className="text-[#0391A1]">Ǝ</span>VELAR
          </p>
        </div>

        <div className="h-6 w-px bg-white/10" />

        <div>
          <p className="text-[10px] uppercase tracking-[0.30em] text-white/30">
            Hallazgos
          </p>

          <p className="mt-1 text-sm text-white">
            12
          </p>
        </div>

        <div className="h-6 w-px bg-white/10" />

        <div>
          <p className="text-[10px] uppercase tracking-[0.30em] text-white/30">
            Referencias
          </p>

          <p className="mt-1 text-sm text-white">
            3
          </p>
        </div>

      </div>

      {/* Progreso */}

      <div className="flex items-center gap-5">

        <span className="text-[10px] uppercase tracking-[0.30em] text-white/35">
          Progreso
        </span>

        <div className="h-[2px] w-40 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-[14%] rounded-full bg-[#0391A1]" />
        </div>

        <span className="text-xs text-white/50">
          14 %
        </span>

      </div>

      {/* Motor */}

      <div className="flex items-center gap-8">

        <div>
          <p className="text-[10px] uppercase tracking-[0.30em] text-white/30">
            Motor
          </p>

          <p className="mt-1 text-sm text-white">
            RƎVELA Core
          </p>
        </div>

        <div className="h-6 w-px bg-white/10" />

        <div>
          <p className="text-[10px] uppercase tracking-[0.30em] text-white/30">
            Sesión
          </p>

          <p className="mt-1 text-sm text-white">
            00:12
          </p>
        </div>

      </div>

    </footer>
  );
}
const processItems = [
  {
    title: "IDEAR",
    active: false,
    completed: true,
  },
  {
    title: "RƎVELAR",
    active: true,
    completed: false,
  },
  {
    title: "MESA DE LUZ",
    active: false,
    completed: false,
  },
  {
    title: "POSITIVAR",
    active: false,
    completed: false,
  },
  {
    title: "TRANSMITIR",
    active: false,
    completed: false,
  },
];

export default function Sidebar() {
  return (
    <aside className="flex h-screen flex-col border-r border-white/10 bg-[#090909] px-10 py-12">

      {/* Marca */}

      <div>
        <h1 className="font-[var(--font-space)] text-4xl font-light tracking-[0.16em]">
          R<span className="text-[#0391A1]">Ǝ</span>VELA
        </h1>

        <p className="mt-3 text-sm uppercase tracking-[0.35em] text-white/40">
          Laboratorio Creativo
        </p>
      </div>

      {/* Proyecto */}

      <div className="mt-14 border-t border-white/10 pt-8">
        <p className="text-[11px] uppercase tracking-[0.35em] text-white/35">
          Proyecto
        </p>

        <h2 className="mt-4 text-2xl font-extralight">
          Sin título
        </h2>

        <p className="mt-2 text-sm text-white/40">
          Descubriendo la esencia de la marca
        </p>
      </div>

      {/* Proceso */}

      <div className="mt-12">
        <p className="text-[11px] uppercase tracking-[0.35em] text-white/35">
          Proceso
        </p>

        <nav aria-label="Proceso" className="mt-8">
          <ul className="space-y-7">
            {processItems.map((item) => (
              <li key={item.title}>
                <button className="group flex items-center gap-4 transition-all duration-300">

                  <span
                    className={`
                      h-2.5
                      w-2.5
                      rounded-full
                      transition-all
                      ${
                        item.active
                          ? "bg-[#0391A1] shadow-[0_0_12px_#0391A1]"
                          : item.completed
                          ? "bg-[#0391A1]"
                          : "bg-white/15 group-hover:bg-white/40"
                      }
                    `}
                  />

                  <span
                    className={`
                      font-[var(--font-space)]
                      text-lg
                      tracking-[0.08em]
                      ${
                        item.active
                          ? "text-white"
                          : "text-white/45 group-hover:text-white"
                      }
                    `}
                  >
                    {item.title === "RƎVELAR" ? (
                      <>
                        R
                        <span className="text-[#0391A1]">Ǝ</span>
                        VELAR
                      </>
                    ) : (
                      item.title
                    )}
                  </span>

                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Referencias */}

      <div className="mt-14 border-t border-white/10 pt-8">

        <p className="text-[11px] uppercase tracking-[0.35em] text-white/35">
          Referencias
        </p>

        <div className="mt-5 space-y-3 text-sm">

          <div className="flex items-center justify-between">
            <span className="text-white/80">
              Aportadas
            </span>

            <span className="text-[#0391A1]">
              3
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-white/80">
              Sugeridas
            </span>

            <span className="text-white/35">
              —
            </span>
          </div>

        </div>

      </div>

      {/* Sesión */}

      <div className="mt-auto border-t border-white/10 pt-8">

        <p className="text-[11px] uppercase tracking-[0.35em] text-white/35">
          Sesión
        </p>

        <div className="mt-5 space-y-3 text-sm">

          <div className="flex items-center justify-between">
            <span className="text-white/80">
              Tiempo
            </span>

            <span className="text-white/40">
              00:12
            </span>
          </div>

          <button className="block text-white/80 transition hover:text-white">
            Guardar
          </button>

          <button className="block text-white/80 transition hover:text-white">
            Exportar
          </button>

        </div>

      </div>

    </aside>
  );
}
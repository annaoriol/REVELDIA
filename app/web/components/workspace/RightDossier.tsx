"use client";

export default function RightDossier() {
  return (
    <aside
      className="
        h-full
        overflow-y-auto
        rounded-2xl
        border
        border-white/10
        bg-black/45
        backdrop-blur-2xl
        shadow-[0_12px_40px_rgba(0,0,0,.45)]
        workspace-scroll
      "
    >
      <div
        className="
          space-y-10
          p-8
          xl:p-10
          bg-gradient-to-b
          from-white/[0.03]
          to-transparent
        "
      >

        {/* DOSSIER */}

        <section>

          <p className="text-xs uppercase tracking-[0.35em] text-white/45">
            Dossier creativo
          </p>

          <h2 className="mt-5 text-4xl font-extralight tracking-[0.08em]">
            RƎVELA
          </h2>

          <p className="mt-4 text-lg leading-8 text-white/70">
            Todo el conocimiento generado durante el proceso queda registrado
            para construir la identidad de la marca.
          </p>

        </section>

        {/* PROGRESO */}

        <section className="border-t border-white/10 pt-8">

          <div className="flex items-center justify-between">

            <span className="text-xs uppercase tracking-[0.35em] text-white/45">
              Progreso
            </span>

            <span className="text-cyan-300 text-sm">
              18%
            </span>

          </div>

          <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10">

            <div className="h-full w-[18%] rounded-full bg-cyan-400 transition-all duration-700" />

          </div>

        </section>

        {/* INSIGHTS */}

        <section className="border-t border-white/10 pt-8">

          <p className="text-xs uppercase tracking-[0.35em] text-white/45">
            Insights
          </p>

          <div className="mt-6 space-y-4">

            {[
              "Autenticidad",
              "Coherencia",
              "Propósito",
              "Narrativa",
              "Universo Visual",
            ].map((item) => (

              <div
                key={item}
                className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.035]
                  backdrop-blur-md
                  px-5
                  py-4
                  transition-all
                  duration-300
                  hover:border-cyan-400/30
                "
              >

                <p className="text-base text-white/80">
                  {item}
                </p>

              </div>

            ))}

          </div>

        </section>

        {/* NOTAS */}

        <section className="border-t border-white/10 pt-8">

          <p className="text-xs uppercase tracking-[0.35em] text-white/45">
            Observaciones
          </p>

          <textarea
            placeholder="Escribe tus notas..."
            className="
              mt-6
              h-56
              w-full
              resize-none
              rounded-2xl
              border
              border-white/10
              bg-black/20
              p-5
              text-base
              text-white
              outline-none
              transition-all
              duration-300
              placeholder:text-white/25
              focus:border-cyan-400/40
            "
          />

        </section>

      </div>

    </aside>
  );
}
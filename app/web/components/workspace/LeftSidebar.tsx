"use client";

export default function LeftSidebar() {
  return (
    <aside
      className="
        relative
        h-full
        overflow-hidden
        rounded-2xl
        border
        border-white/10
        bg-black/35
        backdrop-blur-[28px]
        shadow-[0_18px_50px_rgba(0,0,0,.45)]
      "
    >
      {/* Capa para oscurecer el fondo sin perder transparencia */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-br
          from-black/45
          via-black/25
          to-black/45
        "
      />

      <div
        className="
          relative
          z-10
          h-full
          overflow-y-auto
          workspace-scroll
        "
      >
        <div className="space-y-10 p-8 xl:p-10">

          {/* PERSPECTIVA */}

          <section>

            <div className="flex items-center justify-between">

              <p className="text-xs uppercase tracking-[0.35em] text-white/45">
                Perspectiva
              </p>

              <span
                className="
                  rounded-full
                  bg-cyan-400/20
                  px-4
                  py-1
                  text-sm
                  text-cyan-300
                "
              >
                Activa
              </span>

            </div>

            <h1 className="mt-5 text-5xl font-extralight tracking-[0.06em] text-white">
              ESENCIA
            </h1>

            <p className="mt-6 text-lg leading-8 text-white/85">
              Descubrir quién eres antes de decidir cómo comunicar.
              Toda gran marca nace de una identidad clara.
            </p>

          </section>

          {/* REFERENCIAS */}

          <section className="border-t border-white/10 pt-8">

            <p className="text-xs uppercase tracking-[0.35em] text-white/45">
              Referencias visuales
            </p>

            <div className="mt-6 grid grid-cols-2 gap-4">

              {[1, 2, 3, 4].map((item) => (

                <div
                  key={item}
                  className="
                    aspect-[4/3]
                    overflow-hidden
                    rounded-2xl
                    border
                    border-white/10
                    bg-black/20
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    hover:border-cyan-400/40
                  "
                >

                  <img
                    src={`/workspace/ref-${item}.jpg`}
                    alt=""
                    className="
                      h-full
                      w-full
                      object-cover
                      grayscale
                      opacity-90
                    "
                  />

                </div>

              ))}

            </div>

          </section>

          {/* IDEA CENTRAL */}

          <section className="border-t border-white/10 pt-8">

            <p className="text-xs uppercase tracking-[0.35em] text-white/45">
              Idea central
            </p>

            <div
              className="
                mt-6
                rounded-2xl
                border
                border-white/10
                bg-black/20
                backdrop-blur-xl
                p-6
              "
            >

              <p className="text-base leading-8 text-white/80">
                Revelar antes de comunicar.
                Toda decisión visual nace de una comprensión profunda
                de la identidad de la marca.
              </p>

            </div>

          </section>

        </div>
      </div>
    </aside>
  );
}
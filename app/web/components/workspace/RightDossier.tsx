"use client";

import { useProject } from "@/context/ProjectContext";
import { CreativeDirector } from "@/core/CreativeDirector";

export default function RightDossier() {
  const { project } = useProject();

  const director = new CreativeDirector(project);

  const area = director.revealArea();
  const specialist = director.specialist();

  const observations = project.dossier.observations.length;
  const revelations = project.dossier.revelations.length;

  const lastObservation =
    project.dossier.observations.at(-1);

  const stage = director.stage();

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
            {area?.title ?? "RƎVELA"}
          </h2>

          <p className="mt-4 text-lg leading-8 text-white/70">
            {area?.description ??
              "Todo el conocimiento generado durante el proceso queda registrado para construir la identidad de la marca."}
          </p>
        </section>

        {/* ESPECIALISTA */}

        {specialist && (
          <section className="border-t border-white/10 pt-8">
            <p className="text-xs uppercase tracking-[0.35em] text-white/45">
              Especialista activo
            </p>

            <h3 className="mt-5 text-2xl font-light">
              {specialist.name}
            </h3>

            <p className="mt-3 text-base leading-7 text-white/70">
              {specialist.mission}
            </p>
          </section>
        )}

        {/* ESTADO */}

        <section className="border-t border-white/10 pt-8">
          <div className="space-y-5">
            <div
              className="
                min-h-[112px]
                rounded-2xl
                border
                border-white/10
                bg-white/[0.03]
                px-6
                py-5
                flex
                flex-col
                justify-center
              "
            >
              <p className="text-xs uppercase tracking-[0.35em] text-white/45">
                Etapa
              </p>

              <p className="mt-4 text-3xl font-light tracking-[0.04em]">
                {stage.toUpperCase()}
              </p>
            </div>

            <div
              className="
                min-h-[112px]
                rounded-2xl
                border
                border-white/10
                bg-white/[0.03]
                px-6
                py-5
                flex
                flex-col
                justify-center
              "
            >
              <p className="text-xs uppercase tracking-[0.35em] text-white/45">
                Área
              </p>

              <p className="mt-4 text-2xl font-light leading-tight">
                {area?.title ?? "-"}
              </p>
            </div>
          </div>
        </section>

        {/* ACTIVIDAD */}

        <section className="border-t border-white/10 pt-8">
          <p className="text-xs uppercase tracking-[0.35em] text-white/45">
            Actividad
          </p>

          <div className="mt-6 space-y-4">
            <div
              className="
                flex
                items-center
                justify-between
                rounded-2xl
                border
                border-white/10
                bg-white/[0.035]
                px-5
                py-4
              "
            >
              <span className="text-white/75">
                Observaciones
              </span>

              <span className="text-cyan-300 text-lg">
                {observations}
              </span>
            </div>

            <div
              className="
                flex
                items-center
                justify-between
                rounded-2xl
                border
                border-white/10
                bg-white/[0.035]
                px-5
                py-4
              "
            >
              <span className="text-white/75">
                Revelaciones
              </span>

              <span className="text-cyan-300 text-lg">
                {revelations}
              </span>
            </div>
          </div>
        </section>

        {/* ÚLTIMA OBSERVACIÓN */}

        <section className="border-t border-white/10 pt-8">
          <p className="text-xs uppercase tracking-[0.35em] text-white/45">
            Última observación
          </p>

          {lastObservation ? (
            <div
              className="
                mt-6
                rounded-2xl
                border
                border-white/10
                bg-white/[0.03]
                p-5
                space-y-5
              "
            >
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">
                  Pregunta
                </p>

                <p className="mt-2 leading-7 text-white/80">
                  {lastObservation.question}
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">
                  Respuesta
                </p>

                <p className="mt-2 leading-7 text-white">
                  {lastObservation.answer}
                </p>
              </div>

              <div className="flex items-center justify-between text-xs text-white/45">
                <span>
                  {lastObservation.laboratory}
                </span>

                <span>
                  Confianza{" "}
                  {Math.round(
                    lastObservation.confidence * 100
                  )}
                  %
                </span>
              </div>

              {lastObservation.keywords.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {lastObservation.keywords.map(
                    (keyword) => (
                      <span
                        key={keyword}
                        className="
                          rounded-full
                          border
                          border-cyan-400/20
                          bg-cyan-400/10
                          px-3
                          py-1
                          text-xs
                          text-cyan-200
                        "
                      >
                        {keyword}
                      </span>
                    )
                  )}
                </div>
              )}
            </div>
          ) : (
            <div
              className="
                mt-6
                rounded-2xl
                border
                border-dashed
                border-white/10
                p-6
                text-white/40
                leading-7
              "
            >
              Aún no hay observaciones registradas.
            </div>
          )}
        </section>
      </div>
    </aside>
  );
}
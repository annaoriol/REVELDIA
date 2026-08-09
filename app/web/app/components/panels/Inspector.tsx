"use client";

import { memo } from "react";

import EmptyState from "@/app/components/ui/EmptyState";
import { useRevealStore } from "@/app/stores/useRevealStore";

function Inspector() {
  const project = useRevealStore(
    (state) => state.project
  );

  const activeSceneId = useRevealStore(
    (state) => state.scene.activeSceneId
  );

  const activeScene = useRevealStore(
    (state) =>
      state.navigation.items.find(
        (item) => item.id === activeSceneId
      ) ?? null
  );

  const intention =
    project.dna.identity;

  const creativeDirector =
    project.dna.creativeDirector;

  const lightTable = useRevealStore(
    (state) => state.lightTable
  );

  const observations = useRevealStore(
    (state) =>
      state.project.dna.observations
  );

  const relationships = useRevealStore(
    (state) =>
      state.project.dna.relationships
  );

  const selection = useRevealStore(
    (state) => state.selection
  );

  const future = useRevealStore(
    (state) => state.future
  );

  const exploreCreativeDirector =
    useRevealStore(
      (state) =>
        state.exploreCreativeDirector
    );

  const isWelcome =
    activeScene?.id === "welcome";

  const isCreativeDirector =
    activeScene?.id ===
    "creative-director";

  const isReferences =
    activeScene?.id === "references";

const isLightTable =
  activeScene?.id === "light-table";

  const methodItems =
    useRevealStore(
      (state) =>
        state.navigation.items
    );

  const currentIndex = Math.max(
    0,
    methodItems.findIndex(
      (item) =>
        item.id === activeScene?.id
    )
  );

  const visibleMethodItems =
    methodItems.slice(0, 6);

  const proposalNumber =
    creativeDirector.proposalNumber;

  const exploredCount =
    creativeDirector
      .exploredReferenceIds.length;

  const selectedCount =
    lightTable.length;

  const creativeDirectorStatus =
    creativeDirector.status ===
    "sufficient"
      ? "Material suficiente"
      : "Explorando";

  const decision =
    creativeDirector.decision;

  const handleProposeMore =
    () => {
      exploreCreativeDirector();
    };

  return (
    <aside className="flex h-full min-h-0 flex-col overflow-y-auto border-l border-white/10 bg-black/20 px-5 py-6">

      {/* CABECERA */}

      <section>
        <p className="text-[0.68rem] uppercase tracking-[0.28em] text-white/35">
          Inspector
        </p>

        <h2 className="mt-3 font-[var(--font-space)] text-2xl font-light tracking-[0.08em] text-white">
          {isReferences
            ? "Dirección"
            : "Contexto"}
        </h2>
      </section>

      {/* =================================================
          PROYECTO ACTIVO
      ================================================= */}

      {!isWelcome && (
        <section className="mt-7 rounded-[var(--revela-radius-md)] border border-cyan-300/15 bg-cyan-300/[0.025] p-5">

          <div className="flex items-center justify-between gap-3">

            <p className="text-[0.68rem] uppercase tracking-[0.28em] text-white/35">
              Proyecto
            </p>

            <span className="text-[0.58rem] uppercase tracking-[0.22em] text-cyan-300/70">
              Activo
            </span>

          </div>

          <h3 className="mt-3 text-xl font-light text-white">
            {project.name}
          </h3>

          <div className="mt-5 border-t border-white/10 pt-5">

            <p className="text-[0.62rem] uppercase tracking-[0.24em] text-white/30">
              RƎVELAR
            </p>

            <p className="mt-2 text-sm leading-6 text-white/65">
              {intention.whatToReveal ||
                "Intención pendiente"}
            </p>

          </div>

          <div className="mt-4">

            <p className="text-[0.62rem] uppercase tracking-[0.24em] text-white/30">
              Transmitir
            </p>

            <p className="mt-2 text-sm leading-6 text-white/55">
              {intention.whatToTransmit ||
                "Pendiente"}
            </p>

          </div>

          <div className="mt-4">

            <p className="text-[0.62rem] uppercase tracking-[0.24em] text-white/30">
              Contexto
            </p>

            <p className="mt-2 text-sm leading-6 text-white/55">
              {intention.context ||
                "Pendiente"}
            </p>

          </div>

        </section>
      )}

      {/* =================================================
          HOME
      ================================================= */}

      {isWelcome && (
        <div className="mt-7 space-y-5">

          <section className="rounded-[var(--revela-radius-md)] border border-white/10 bg-white/[0.025] p-5">

            <p className="text-[0.68rem] uppercase tracking-[0.28em] text-white/35">
              Proyecto
            </p>

            <h3 className="mt-3 text-xl font-light text-white">
              {project.name}
            </h3>

            <p className="mt-2 text-sm text-white/45">
              {project.status === "draft"
                ? "Borrador"
                : project.status}
            </p>

          </section>

          <section className="rounded-[var(--revela-radius-md)] border border-white/10 bg-white/[0.025] p-5">

            <p className="text-[0.68rem] uppercase tracking-[0.28em]">

              El VELADO

            </p>

            <div className="mt-5 space-y-4">

              {visibleMethodItems.map(
                (item, index) => {

                  const isCurrent =
                    index ===
                    currentIndex;

                  const isPast =
                    index <
                    currentIndex;

                  const textState =
                    isCurrent
                      ? "text-white"
                      : isPast
                        ? "text-white/55"
                        : "text-white/30";

                  return (
                    <div
                      key={item.id}
                      className="flex items-center gap-3"
                    >

                      <span
                        className={[
                          "flex h-5 w-5 shrink-0 items-center justify-center rounded-full border text-[9px]",
                          isCurrent
                            ? "border-cyan-300 text-cyan-300"
                            : isPast
                              ? "border-cyan-300/50 text-cyan-300/70"
                              : "border-white/15 text-white/25",
                        ].join(" ")}
                      >
                        {isPast
                          ? "✓"
                          : String(
                              index + 1
                            ).padStart(
                              2,
                              "0"
                            )}
                      </span>

                      <span
                        className={[
                          "text-sm",
                          textState,
                        ].join(" ")}
                      >

                        {item.id ===
                        "revelation" ? (
                          "VELACIÓN"
                        ) : item.id ===
                          "welcome" ? (
                          "Bienvenida"
                        ) : (
                          item.title
                        )}

                      </span>

                    </div>
                  );
                }
              )}

            </div>

          </section>

          <section className="rounded-[var(--revela-radius-md)] border border-white/10 bg-white/[0.025] p-5">

            <p className="text-[0.68rem] uppercase tracking-[0.28em] text-white/35">
              Material
            </p>

            <div className="mt-4 space-y-3 text-sm">

              <div className="flex items-center justify-between">

                <span className="text-white/45">
                  Intención
                </span>

                <span className="text-white/30">
                  {intention.whatToReveal
                    ? "Definida"
                    : "Pendiente"}
                </span>

              </div>

              <div className="flex items-center justify-between">

                <span className="text-white/45">
                  Referencias
                </span>

                <span className="text-white/60">
                  {lightTable.length}
                </span>

              </div>

              <div className="flex items-center justify-between">

                <span className="text-white/45">
                  Observaciones
                </span>

                <span className="text-white/60">
                  {observations.length}
                </span>

              </div>

              <div className="flex items-center justify-between">

                <span className="text-white/45">
                  Conexiones
                </span>

                <span className="text-white/60">
                  {relationships.length}
                </span>

              </div>

            </div>

          </section>

        </div>
      )}

      {/* =================================================
          DIRECTOR CREATIVO
      ================================================= */}

      {isCreativeDirector && (
        <div className="mt-7 space-y-5">

          <section className="rounded-[var(--revela-radius-md)] border border-cyan-300/15 bg-cyan-300/[0.035] p-5">

            <p className="text-[0.68rem] uppercase tracking-[0.28em] text-white/35">
              Intención
            </p>

            <div className="mt-5 space-y-5">

              <div>

                <p className="text-[0.65rem] uppercase tracking-[0.22em] text-white/30">
                  Qué queremos revelar
                </p>

                <p className="mt-2 text-sm leading-6 text-white/60">
                  {intention.whatToReveal ||
                    "Pendiente"}
                </p>

              </div>

              <div>

                <p className="text-[0.65rem] uppercase tracking-[0.22em] text-white/30">
                  Qué queremos transmitir
                </p>

                <p className="mt-2 text-sm leading-6 text-white/60">
                  {intention.whatToTransmit ||
                    "Pendiente"}
                </p>

              </div>

              <div>

                <p className="text-[0.65rem] uppercase tracking-[0.22em] text-white/30">
                  Contexto
                </p>

                <p className="mt-2 text-sm leading-6 text-white/60">
                  {intention.context ||
                    "Pendiente"}
                </p>

              </div>

            </div>

          </section>

          <section className="rounded-[var(--revela-radius-md)] border border-white/10 bg-white/[0.025] p-5">

            <p className="text-[0.68rem] uppercase tracking-[0.28em] text-white/35">
              Siguiente paso
            </p>

            <p className="mt-4 text-sm leading-6 text-white/55">
              Construir el campo de referencias
              a partir de la intención del proyecto.
            </p>

            <p className="mt-4 text-xs uppercase tracking-[0.2em] text-white/60">
              → Ir a Referencias
            </p>

          </section>

          <section className="rounded-[var(--revela-radius-md)] border border-white/10 bg-white/[0.025] p-5">

            <p className="text-[0.68rem] uppercase tracking-[0.28em] text-white/35">
              Material
            </p>

            <div className="mt-4 space-y-3 text-sm">

              <div className="flex items-center justify-between">

                <span className="text-white/45">
                  Referencias
                </span>

                <span className="text-white/60">
                  {lightTable.length}
                </span>

              </div>

              <div className="flex items-center justify-between">

                <span className="text-white/45">
                  Observaciones
                </span>

                <span className="text-white/60">
                  {observations.length}
                </span>

              </div>

            </div>

          </section>

        </div>
      )}
{/* =================================================
    MESA DE LUZ
================================================= */}

{isLightTable && (
  <div className="mt-7 space-y-5">

    <section className="rounded-[var(--revela-radius-md)] border border-cyan-300/15 bg-cyan-300/[0.035] p-5">

      <p className="text-[0.68rem] uppercase tracking-[0.28em] text-white/35">
        Mesa de Luz
      </p>

      <h3 className="mt-3 text-xl font-light text-white">
        Selección del proyecto
      </h3>

      <p className="mt-3 text-sm leading-6 text-white/50">
        Aquí organizas las referencias que has
        decidido conservar para continuar
        observando, relacionando y revelando.
      </p>

      <div className="mt-5 border-t border-white/10 pt-5">

        <div className="flex items-center justify-between">

          <span className="text-[0.65rem] uppercase tracking-[0.22em] text-white/30">
            Referencias
          </span>

          <span className="text-sm text-cyan-300">
            {lightTable.length}
          </span>

        </div>

      </div>

    </section>

    <section className="rounded-[var(--revela-radius-md)] border border-white/10 bg-white/[0.025] p-5">

      <p className="text-[0.68rem] uppercase tracking-[0.28em] text-white/35">
        Intención
      </p>

      <div className="mt-4 space-y-4">

        <div>

          <p className="text-[0.62rem] uppercase tracking-[0.22em] text-white/30">
            RƎVELAR
          </p>

          <p className="mt-2 text-sm leading-6 text-white/60">
            {intention.whatToReveal ||
              "Pendiente"}
          </p>

        </div>

        <div>

          <p className="text-[0.62rem] uppercase tracking-[0.22em] text-white/30">
            Transmitir
          </p>

          <p className="mt-2 text-sm leading-6 text-white/50">
            {intention.whatToTransmit ||
              "Pendiente"}
          </p>

        </div>

      </div>

    </section>

    <section className="rounded-[var(--revela-radius-md)] border border-white/10 bg-white/[0.025] p-5">

      <p className="text-[0.68rem] uppercase tracking-[0.28em] text-white/35">
        Director Creativo
      </p>

      <div className="mt-4 flex items-center justify-between">

        <span className="text-sm text-white/50">
          Exploración
        </span>

        <span className="text-sm text-white/70">
          Propuesta{" "}
          {creativeDirector.proposalNumber}
        </span>

      </div>

      <div className="mt-3 flex items-center justify-between">

        <span className="text-sm text-white/50">
          Referencias exploradas
        </span>

        <span className="text-sm text-white/70">
          {
            creativeDirector
              .exploredReferenceIds
              .length
          }
        </span>

      </div>

    </section>

  </div>
)}
      {/* =================================================
          REFERENCIAS
      ================================================= */}

      {isReferences && (
        <div className="mt-7 space-y-5">

          <section className="rounded-[var(--revela-radius-md)] border border-cyan-300/15 bg-cyan-300/[0.035] p-5">

            <div className="flex items-center gap-3">

              <p className="text-[0.68rem] uppercase tracking-[0.28em] text-white/35">
                Director Creativo IA
              </p>

              <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />

              <span className="text-xs text-white/45">
                {creativeDirectorStatus}
              </span>

            </div>

            <div className="mt-5">

              <p className="text-[0.68rem] uppercase tracking-[0.24em] text-white/30">
                Exploración
              </p>

              <div className="mt-2 flex items-baseline justify-between gap-3">

                <p className="text-lg font-light text-white">
                  Propuesta{" "}
                  {proposalNumber}
                </p>

                <span className="text-xs text-white/35">
                  {exploredCount} exploradas
                </span>

              </div>

            </div>

            <div className="mt-5 border-t border-white/10 pt-5">

              <div className="flex items-center justify-between">

                <span className="text-[0.68rem] uppercase tracking-[0.24em] text-white/30">
                  Material reunido
                </span>

                <span className="text-sm text-white/60">
                  {selectedCount}
                </span>

              </div>

            </div>

            <div className="mt-5 border-t border-white/10 pt-5">

              <div className="flex items-center justify-between">

                <span className="text-[0.68rem] uppercase tracking-[0.24em] text-white/30">
                  Estado
                </span>

                <span className="text-xs text-white/45">
                  {creativeDirectorStatus}
                </span>

              </div>

              <div className="mt-3 h-px bg-white/10">

                <div
                  className={[
                    "h-px transition-all duration-500",
                    creativeDirectorStatus ===
                    "Material suficiente"
                      ? "w-full bg-cyan-300"
                      : exploredCount > 0
                        ? "w-1/2 bg-cyan-300/60"
                        : "w-[12%] bg-cyan-300/40",
                  ].join(" ")}
                />

              </div>

            </div>

            {/* ACCIÓN DEL DIRECTOR */}

            <div className="mt-5 border-t border-white/10 pt-5">

              <button
                type="button"
                onClick={
                  handleProposeMore
                }
                className="group w-full rounded-xl border border-cyan-300/25 bg-cyan-300/[0.04] px-4 py-4 text-left transition-all duration-300 hover:border-cyan-300/60 hover:bg-cyan-300/[0.08]"
              >

                <div className="flex items-center justify-between gap-4">

                  <div>

                    <p className="font-[var(--font-space)] text-sm tracking-[0.08em] text-white">

                      <span className="text-white">
                        R
                      </span>

                      <span className="text-cyan-300">
                        Ǝ
                      </span>

                      <span className="text-white">
                        VELA
                      </span>

                    </p>

                    <p className="mt-2 text-xs leading-5 text-white/45">
                      Proponer más referencias
                      para continuar la exploración.
                    </p>

                  </div>

                  <span className="text-lg text-cyan-300 transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>

                </div>

              </button>

            </div>

            {decision && (
              <div className="mt-5 rounded-xl border border-cyan-300/10 bg-black/20 px-4 py-3">

                <p className="text-[0.62rem] uppercase tracking-[0.24em] text-white/30">
                  Decisión
                </p>

                <p className="mt-2 text-sm text-white/70">
                  {decision ===
                  "sufficient"
                    ? "Preparado para avanzar"
                    : "Continuar explorando"}
                </p>

              </div>
            )}

          </section>

        </div>
      )}

      {/* =================================================
          CONTEXTO GENERAL
      ================================================= */}

      {!isWelcome &&
        !isCreativeDirector &&
        !isReferences && (
          <div className="mt-6 space-y-5">

            <EmptyState
              title={
                activeScene?.title ??
                "Sin escena"
              }
              description={
                activeScene?.description ??
                "El panel contextual acompaña el estado del proceso."
              }
            />

            <section className="rounded-[var(--revela-radius-md)] border border-white/10 bg-white/[0.025] p-5">

              <p className="text-[0.68rem] uppercase tracking-[0.28em] text-white/35">
                Material
              </p>

              <div className="mt-4 space-y-3 text-sm">

                <div className="flex items-center justify-between">

                  <span className="text-white/45">
                    Referencias
                  </span>

                  <span className="text-white/60">
                    {lightTable.length}
                  </span>

                </div>

                <div className="flex items-center justify-between">

                  <span className="text-white/45">
                    Observaciones
                  </span>

                  <span className="text-white/60">
                    {observations.length}
                  </span>

                </div>

                <div className="flex items-center justify-between">

                  <span className="text-white/45">
                    Conexiones
                  </span>

                  <span className="text-white/60">
                    {relationships.length}
                  </span>

                </div>

              </div>

            </section>

            <section className="rounded-[var(--revela-radius-md)] border border-white/10 bg-white/[0.025] p-5">

              <p className="text-[0.68rem] uppercase tracking-[0.28em] text-white/35">
                Selección
              </p>

              <p className="mt-3 text-sm text-white/54">
                {selection.id
                  ? `${selection.type}: ${selection.id}`
                  : "Sin selección activa"}
              </p>

            </section>

            <section className="rounded-[var(--revela-radius-md)] border border-white/10 bg-white/[0.025] p-5">

              <p className="text-[0.68rem] uppercase tracking-[0.28em] text-white/35">
                Preparado para
              </p>

              <ul className="mt-4 space-y-3 text-sm text-white/50">

                {future.map(
                  (feature) => (
                    <li
                      key={feature.id}
                      className="flex items-center justify-between gap-3"
                    >

                      <span>
                        {feature.label}
                      </span>

                      <span className="text-xs uppercase tracking-[0.18em] text-white/28">
                        {feature.enabled
                          ? "Activo"
                          : "Plan"}
                      </span>

                    </li>
                  )
                )}

              </ul>

            </section>

          </div>
        )}

    </aside>
  );
}

export default memo(Inspector);
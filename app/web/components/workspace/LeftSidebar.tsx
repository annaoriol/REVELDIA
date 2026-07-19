"use client";

import { useProject } from "@/context/ProjectContext";
import { CreativeDirector } from "@/core/CreativeDirector";

export default function LeftSidebar() {
  const { project } = useProject();

  const director = new CreativeDirector(project);

  const area = director.revealArea();
  const specialist = director.specialist();

  const stageLabels: Record<string, string> = {
    welcome: "Inicio",
    observing: "Observación",
    revealing: "Revelación",
    "light-table": "Mesa de luz",
    ideating: "Ideación",
    transmitting: "Transmisión",
    positivating: "Positivado",
    completed: "Completado",
  };

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

          {/* PROYECTO */}

          <section>

            <div className="flex items-center justify-between">

              <p className="text-xs uppercase tracking-[0.35em] text-white/45">
                Proyecto
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
                {stageLabels[project.stage]}
              </span>

            </div>

            <h1 className="mt-5 text-4xl font-extralight tracking-[0.06em] text-white">
              {project.title}
            </h1>

            <p className="mt-6 text-base leading-8 text-white/80">
              Creado el{" "}
              {new Date(project.createdAt).toLocaleDateString("es-ES")}
            </p>

          </section>

          {/* ÁREA */}

          {area && (
            <section className="border-t border-white/10 pt-8">

              <p className="text-xs uppercase tracking-[0.35em] text-white/45">
                Área activa
              </p>

              <h2 className="mt-5 text-2xl font-light tracking-[0.06em]">
                {area.title}
              </h2>

              <p className="mt-4 text-base leading-8 text-white/70">
                {area.description}
              </p>

            </section>
          )}

          {/* ESPECIALISTA */}

          {specialist && (
            <section className="border-t border-white/10 pt-8">

              <p className="text-xs uppercase tracking-[0.35em] text-white/45">
                Especialista
              </p>

              <h2 className="mt-5 text-2xl font-light">
                {specialist.name}
              </h2>

              <p className="mt-4 text-base leading-8 text-white/70">
                {specialist.role}
              </p>

              <div
                className="
                  mt-6
                  rounded-2xl
                  border
                  border-cyan-400/20
                  bg-cyan-400/5
                  p-5
                "
              >
                <p className="text-sm leading-7 text-cyan-100/90">
                  {specialist.mission}
                </p>
              </div>

            </section>
          )}

        </div>
      </div>

    </aside>
  );
}
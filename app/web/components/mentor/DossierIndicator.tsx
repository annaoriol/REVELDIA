"use client";

import { useProject } from "@/context/ProjectContext";

export default function DossierIndicator() {

  const { project } = useProject();

  const observations =
    project.dossier.observations.length;

  const revelations =
    project.dossier.revelations.length;

  const identity =
    revelations > 0 ? 1 : 0;

  function dots(
    active: number,
    total = 3
  ) {

    return Array.from({
      length: total,
    }).map((_, index) => (

      <span
        key={index}
        className={`h-2 w-2 rounded-full ${
          index < active
            ? "bg-[#00B5CC]"
            : "bg-neutral-700"
        }`}
      />

    ));

  }

  return (

    <aside
      className="
        fixed
        right-12
        top-10
        z-50
      "
    >

      <div
        className="
          rounded-sm
          border
          border-neutral-800
          bg-black/40
          px-6
          py-5
          backdrop-blur-sm
        "
      >

        <p
          className="
            text-xs
            uppercase
            tracking-[0.35em]
            text-[#00B5CC]
          "
        >
          DOSSIER VIVO
        </p>

        <div className="mt-6 space-y-5">

          <div>

            <p
              className="
                text-xs
                uppercase
                tracking-[0.15em]
                text-neutral-500
              "
            >
              Observaciones
            </p>

            <div className="mt-2 flex gap-2">

              {dots(
                Math.min(
                  observations,
                  3
                )
              )}

            </div>

          </div>

          <div>

            <p
              className="
                text-xs
                uppercase
                tracking-[0.15em]
                text-neutral-500
              "
            >
              Revelaciones
            </p>

            <div className="mt-2 flex gap-2">

              {dots(
                Math.min(
                  revelations,
                  3
                )
              )}

            </div>

          </div>

          <div>

            <p
              className="
                text-xs
                uppercase
                tracking-[0.15em]
                text-neutral-500
              "
            >
              Identidad
            </p>

            <div className="mt-2 flex gap-2">

              {dots(identity)}

            </div>

          </div>

        </div>

      </div>

    </aside>

  );

}
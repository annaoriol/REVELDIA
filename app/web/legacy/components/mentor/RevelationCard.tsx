"use client";

import { useProject } from "@/context/ProjectContext";

type RevelationCardProps = {
  onContinue: () => void;
};

export default function RevelationCard({
  onContinue,
}: RevelationCardProps) {

  const { project } = useProject();

  const revelation =
    project.dossier.revelations.at(-1);

  if (!revelation) return null;

  return (

    <section className="min-h-screen bg-[#090909] text-white">

      <div className="mx-auto flex min-h-screen max-w-[980px] flex-col justify-center px-12 py-24">

        <p
          className="
            text-[13px]
            uppercase
            tracking-[0.55em]
            text-[#00B5CC]
          "
        >
          DOSSIER VIVO · REVELACIÓN {project.dossier.revelations.length}
        </p>

        <div
          className="
            mt-12
            border-l
            border-[#00B5CC]
            pl-10
          "
        >

          <h1
            className="
              font-[var(--font-space)]
              text-7xl
              font-light
              leading-[0.95]
              tracking-[-0.03em]
            "
          >
            {revelation.title}
          </h1>

        </div>

        <div className="mt-20 max-w-[760px]">

          <p
            className="
              whitespace-pre-line
              text-[25px]
              leading-[2]
              text-neutral-300
            "
          >
            {revelation.text}
          </p>

        </div>

        <div
          className="
            mt-24
            rounded-sm
            border
            border-neutral-800
            bg-[#0d0d0d]
            p-8
          "
        >

          <p
            className="
              text-[13px]
              uppercase
              tracking-[0.40em]
              text-[#00B5CC]
            "
          >
            CONSEJO CREATIVO
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2">

            {revelation.council.map((item) => (

              <div
                key={item.specialist}
                className="
                  border-b
                  border-neutral-800
                  pb-4
                "
              >

                <div className="flex items-center justify-between">

                  <span className="text-neutral-300">

                    {item.specialist}

                  </span>

                  <span className="text-[#00B5CC]">

                    {Math.round(
                      item.confidence * 100
                    )}
                    %

                  </span>

                </div>

                <p
                  className="
                    mt-3
                    text-sm
                    leading-7
                    text-neutral-500
                  "
                >
                  {item.summary}
                </p>

              </div>

            ))}

          </div>

        </div>

        <div
          className="
            mt-20
            flex
            items-center
            justify-between
          "
        >

          <div>

            <p
              className="
                text-[13px]
                uppercase
                tracking-[0.35em]
                text-neutral-500
              "
            >
              CONSENSO
            </p>

            <p
              className="
                mt-4
                text-5xl
                font-light
                text-[#00B5CC]
              "
            >
              {revelation.confidence}%
            </p>

          </div>

          <button
            onClick={onContinue}
            className="
              group
              flex
              flex-col
              items-end
            "
          >

            <span
              className="
                text-base
                uppercase
                tracking-[0.40em]
                text-[#00B5CC]
              "
            >
              CONTINUAR →
            </span>

            <span
              className="
                mt-3
                h-px
                w-40
                bg-neutral-700
                transition-all
                duration-700
                group-hover:w-56
                group-hover:bg-[#00B5CC]
              "
            />

          </button>

        </div>

      </div>

    </section>

  );

}
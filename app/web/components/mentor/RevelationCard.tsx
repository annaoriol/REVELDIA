"use client";

type Observation = {
  id: string;
  revelation: string;
};

type RevelationCardProps = {
  observation: Observation;
  onContinue: () => void;
};

export default function RevelationCard({
  observation,
  onContinue,
}: RevelationCardProps) {
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
          DOSSIER · REVELACIÓN 001
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
            Empieza a
            <br />
            emerger un
            <br />
            patrón.
          </h1>

        </div>

        <div className="mt-20 max-w-[760px]">

          <p
            className="
              text-[25px]
              leading-[2]
              text-neutral-300
            "
          >
            {observation.revelation}
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

            <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
              <span className="text-neutral-400">
                Mentor Creativo
              </span>

              <span className="text-[#00B5CC]">
                ✓
              </span>
            </div>

            <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
              <span className="text-neutral-400">
                Identidad
              </span>

              <span className="text-[#00B5CC]">
                ✓
              </span>
            </div>

            <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
              <span className="text-neutral-400">
                Narrativa
              </span>

              <span className="text-[#00B5CC]">
                ✓
              </span>
            </div>

            <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
              <span className="text-neutral-400">
                Visual
              </span>

              <span className="text-[#00B5CC]">
                ✓
              </span>
            </div>

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

            <div className="mt-4 flex gap-2">

              <div className="h-2 w-14 bg-[#00B5CC]" />
              <div className="h-2 w-14 bg-[#00B5CC]" />
              <div className="h-2 w-14 bg-[#00B5CC]" />
              <div className="h-2 w-14 bg-neutral-700" />
              <div className="h-2 w-14 bg-neutral-700" />

            </div>

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
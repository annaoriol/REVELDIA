"use client";

export default function DossierIndicator() {
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
          DOSSIER
        </p>

        <div className="mt-6 space-y-4">

          <div>

            <p className="text-xs uppercase tracking-[0.15em] text-neutral-500">
              Observaciones
            </p>

            <div className="mt-2 flex gap-2">
              <span className="h-2 w-2 rounded-full bg-[#00B5CC]" />
              <span className="h-2 w-2 rounded-full bg-neutral-700" />
              <span className="h-2 w-2 rounded-full bg-neutral-700" />
            </div>

          </div>

          <div>

            <p className="text-xs uppercase tracking-[0.15em] text-neutral-500">
              Revelaciones
            </p>

            <div className="mt-2 flex gap-2">
              <span className="h-2 w-2 rounded-full bg-neutral-700" />
              <span className="h-2 w-2 rounded-full bg-neutral-700" />
              <span className="h-2 w-2 rounded-full bg-neutral-700" />
            </div>

          </div>

          <div>

            <p className="text-xs uppercase tracking-[0.15em] text-neutral-500">
              Identidad
            </p>

            <div className="mt-2 flex gap-2">
              <span className="h-2 w-2 rounded-full bg-neutral-700" />
              <span className="h-2 w-2 rounded-full bg-neutral-700" />
              <span className="h-2 w-2 rounded-full bg-neutral-700" />
            </div>

          </div>

        </div>

      </div>

    </aside>
  );
}
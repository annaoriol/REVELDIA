"use client";

export default function UserEvidencePanel() {
  return (
    <section className="rounded-2xl border border-dashed border-white/10 bg-black/20 p-8">

      <p className="text-[11px] uppercase tracking-[0.32em] text-cyan-300">
        TÚ APORTAS
      </p>

      <h2 className="mt-3 text-3xl font-light text-white">
        Añade tus evidencias
      </h2>

      <p className="mt-4 max-w-xl text-white/60 leading-7">
        Incorpora enlaces, imágenes, PDF, vídeos, libros,
        Pinterest, Notion o cualquier material que forme
        parte de tu investigación.
      </p>

      <div
        className="
          mt-8
          flex
          h-44
          items-center
          justify-center
          rounded-2xl
          border
          border-dashed
          border-white/10
          bg-black/20
        "
      >
        <div className="text-center">

          <p className="text-white/40">
            Arrastra aquí tus evidencias
          </p>

          <button
            className="
              mt-5
              rounded-xl
              border
              border-cyan-300/40
              px-5
              py-3
              text-cyan-300
              transition
              hover:bg-cyan-300/10
            "
          >
            ＋ Aportar evidencia
          </button>

        </div>
      </div>

    </section>
  );
}
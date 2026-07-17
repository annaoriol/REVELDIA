"use client";

export default function BottomToolbar() {
  return (
    <footer
      className="
        flex
        h-full
        items-center
        justify-between
        border-t
        border-white/10
        bg-[#151515]
        px-8
      "
    >
      <div className="flex items-center gap-8 text-sm uppercase tracking-[0.25em] text-white/45">

        <button className="transition hover:text-white">
          Importar
        </button>

        <button className="transition hover:text-white">
          Moodboard
        </button>

        <button className="transition hover:text-white">
          Referencias
        </button>

        <button className="transition hover:text-white">
          IA
        </button>

      </div>

      <div className="text-sm uppercase tracking-[0.30em] text-cyan-300">
        RƎVELA · Laboratorio Creativo
      </div>

      <div className="text-sm text-white/45">
        v0.1
      </div>
    </footer>
  );
}
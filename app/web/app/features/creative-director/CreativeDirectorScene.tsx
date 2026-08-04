"use client";

import { useRevealStore } from "@/app/stores/useRevealStore";

export default function CreativeDirectorScene() {
  const setScene = useRevealStore((state) => state.setScene);

  return (
    <section className="mx-auto flex max-w-5xl flex-col gap-8">

      <header>
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
          Director Creativo
        </p>

        <h1 className="mt-3 text-5xl font-light">
          Dirección Creativa
        </h1>

        <p className="mt-4 max-w-2xl text-white/70">
          El Director Creativo sintetiza todo lo descubierto en el
          laboratorio y decide qué especialista debe intervenir.
        </p>
      </header>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
        <h2 className="text-2xl font-light">
          Especialista activo
        </h2>

        <p className="mt-4 text-white/70">
          (Aquí conectaremos el CreativeDirector del dominio.)
        </p>
      </div>

      <button
        onClick={() => setScene("specialists")}
        className="w-fit rounded-xl bg-cyan-500 px-6 py-3 text-black"
      >
        Continuar
      </button>

    </section>
  );
}
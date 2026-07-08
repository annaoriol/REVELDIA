"use client";

import { useState } from "react";
import RevealCards from "./RevealCards";
import SpecialistsLoader from "./SpecialistsLoader";

type Props = {
  onComplete?: () => void;
};

export default function LaboratorioScreen({
  onComplete,
}: Props) {
  const [selected, setSelected] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  function handleContinue() {
    if (!selected) return;

    setLoading(true);

    setTimeout(() => {
      if (onComplete) {
        onComplete();
      }
    }, 2200);
  }

  if (loading) {
    return (
      <SpecialistsLoader
        category={selected ?? "identity"}
      />
    );
  }

  return (
    <main className="min-h-screen bg-[#090909] text-white">

      <section className="mx-auto max-w-[1500px] px-8 py-16 md:px-14 lg:px-20">

        <header className="max-w-4xl">

          <p
            className="
              text-xs
              uppercase
              tracking-[0.45em]
              text-[#0391A1]
            "
          >
            LABORATORIO CREATIVO
          </p>

          <h1
            className="
              mt-10
              font-[var(--font-space)]
              text-5xl
              font-light
              leading-[0.92]
              md:text-7xl
            "
          >
            ¿QUÉ QUIERES
            <br />
            REVELAR?
          </h1>

          <p
            className="
              mt-10
              max-w-3xl
              text-lg
              leading-8
              text-neutral-400
            "
          >
            Tu mentor creativo con IA para revelar la identidad de tu marca,
            definir una guía de estilo visual y construir una comunicación
            auténtica.
          </p>

          <p
            className="
              mt-4
              text-[#0391A1]
            "
          >
            Los especialistas te acompañarán durante el revelado.
          </p>

        </header>

        <RevealCards
          selected={selected}
          onSelect={setSelected}
        />

        <div className="mt-20 flex justify-end">

          <button
            onClick={handleContinue}
            disabled={!selected}
            className="
              rounded-full
              border
              border-[#0391A1]
              px-10
              py-4
              uppercase
              tracking-[0.30em]
              text-[#0391A1]
              transition-all
              duration-300
              hover:bg-[#0391A1]
              hover:text-black
              disabled:opacity-30
              disabled:cursor-default
            "
          >
            CONTINUAR →
          </button>

        </div>

      </section>

    </main>
  );
}
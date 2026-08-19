"use client";

import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

import { useRevealStore } from "@/app/stores/useRevealStore";

const revealTypes = [
  "Marca",
  "Producto",
  "Proyecto",
  "Campaña",
  "Idea",
  "Historia",
  "Experiencia",
  "Contenido",
];

const contentFormats = [
  "Reel",
  "Podcast",
  "Carrusel",
  "Post",
  "Vídeo",
  "Campaña",
  "Web",
  "Presentación",
];

const inspirationExamples = [
  "Quiero lanzar una nueva marca…",
  "Quiero comunicar una investigación científica…",
  "Quiero redefinir la identidad de mi empresa…",
  "Quiero transformar una idea en un proyecto…",
  "Quiero crear una campaña con una identidad propia…",
  "Quiero descubrir qué hace único mi proyecto…",
];

export default function CreativeDirectorScene() {
  const updateIntention = useRevealStore(
    (state) => state.updateIntention
  );

  const setScene = useRevealStore(
    (state) => state.setScene
  );

  const [selectedType, setSelectedType] =
    useState<string | null>(null);

  const [selectedFormat, setSelectedFormat] =
    useState<string | null>(null);

  const [description, setDescription] =
    useState("");

  const [exampleIndex, setExampleIndex] =
    useState(0);

  useEffect(() => {
    if (description.trim()) {
      return;
    }

    const interval = window.setInterval(() => {
      setExampleIndex(
        (current) =>
          (current + 1) %
          inspirationExamples.length
      );
    }, 4200);

    return () =>
      window.clearInterval(interval);
  }, [description]);

  const canReveal =
    Boolean(selectedType) &&
    Boolean(description.trim()) &&
    Boolean(selectedFormat);

  const handleReveal = () => {
    if (!canReveal) {
      return;
    }

    const cleanDescription =
      description.trim();

    const whatToReveal = [
      selectedType,
      cleanDescription,
    ]
      .filter(Boolean)
      .join(" · ");

    const whatToTransmit =
      `Crear un ${selectedFormat!.toLowerCase()}`;

    const context = [
      `Tipo de proyecto: ${selectedType}`,
      `Formato inicial: ${selectedFormat}`,
    ].join(" · ");

    updateIntention({
      whatToReveal,
      whatToTransmit,
      context,
    });

    /*
     * La intención queda registrada
     * y el proceso avanza a Referencias.
     *
     * La siguiente escena es donde
     * RƎVELA empieza a trabajar con
     * el material de referencias.
     */
    setScene("references");
  };

  const handleKeyDown = (
    event: React.KeyboardEvent
  ) => {
    if (
      event.key === "Enter" &&
      !event.shiftKey
    ) {
      event.preventDefault();

      if (canReveal) {
        handleReveal();
      }
    }
  };

  return (
    <section className="min-h-full">

      <div className="mx-auto max-w-5xl">

        {/* DIRECTOR CREATIVO */}

        <div className="mb-12">

          <p className="mb-5 text-[0.58rem] uppercase tracking-[0.38em] text-white/35">
            Director Creativo
          </p>

          <h1 className="font-[var(--font-space)] text-[clamp(2.2rem,4.5vw,5rem)] font-light leading-[1.05] tracking-[0.08em] text-white">

            ¿Qué quieres{" "}

            <span className="whitespace-nowrap tracking-[0.12em]">
              <span className="text-white">
                R
              </span>

              <span className="text-[var(--revela-accent)]">
                Ǝ
              </span>

              <span className="text-white">
                VELAR
              </span>
            </span>

            ?

          </h1>

        </div>

        <form
          onSubmit={(event) => {
            event.preventDefault();
            handleReveal();
          }}
          onKeyDown={handleKeyDown}
        >

          {/* PUNTO DE PARTIDA */}

          <div className="mb-10">

            <p className="mb-5 text-[0.62rem] uppercase tracking-[0.28em] text-white/35">
              Punto de partida
            </p>

            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">

              {revealTypes.map((type) => {
                const active =
                  selectedType === type;

                return (
                  <button
                    key={type}
                    type="button"
                    onClick={() =>
                      setSelectedType(type)
                    }
                    className={[
                      "min-h-14 rounded-full border px-5 text-left text-sm transition-all duration-300",

                      active
                        ? "border-[var(--revela-accent)] bg-[var(--revela-accent)]/10 text-white"
                        : "border-white/10 bg-white/[0.02] text-white/55 hover:border-white/25 hover:text-white/85",
                    ].join(" ")}
                  >
                    {type}
                  </button>
                );
              })}

            </div>

          </div>

          {/* CONTEXTO */}

          <div className="mb-10">

            <label
              htmlFor="reveal-description"
              className="mb-5 block text-[0.62rem] uppercase tracking-[0.28em] text-white/35"
            >
              Cuéntame algo más
            </label>

            <div className="relative border-b border-white/15 transition-colors duration-300 focus-within:border-[var(--revela-accent)]">

              <textarea
                id="reveal-description"
                value={description}
                onChange={(event) =>
                  setDescription(
                    event.target.value
                  )
                }
                rows={2}
                placeholder={
                  inspirationExamples[
                    exampleIndex
                  ]
                }
                className="w-full resize-none bg-transparent px-0 py-3 pr-14 font-[var(--font-space)] text-lg font-light leading-relaxed text-white outline-none placeholder:text-white/25"
              />

            </div>

          </div>

          {/* FORMATO */}

          <div className="mb-10">

            <p className="mb-5 text-[0.62rem] uppercase tracking-[0.28em] text-white/35">
              ¿Dónde quieres empezar a darle forma?
            </p>

            <div className="flex flex-wrap gap-2">

              {contentFormats.map(
                (format) => {
                  const active =
                    selectedFormat ===
                    format;

                  return (
                    <button
                      key={format}
                      type="button"
                      onClick={() =>
                        setSelectedFormat(
                          format
                        )
                      }
                      className={[
                        "rounded-full border px-5 py-3 text-sm transition-all duration-300",

                        active
                          ? "border-[var(--revela-accent)] bg-[var(--revela-accent)]/10 text-white"
                          : "border-white/10 bg-white/[0.02] text-white/50 hover:border-white/25 hover:text-white/85",
                      ].join(" ")}
                    >
                      {format}
                    </button>
                  );
                }
              )}

            </div>

          </div>

          {/* RƎVELAR */}

          <div className="flex justify-end">

            <button
              type="submit"
              aria-label="RƎVELAR"
              disabled={!canReveal}
              className={[
                "group flex items-center gap-4 border-b pb-2 font-[var(--font-space)] text-[0.68rem] font-light tracking-[0.22em] transition-all duration-300",

                canReveal
                  ? "border-white/25 text-white hover:border-[var(--revela-accent)]"
                  : "cursor-default border-white/10 text-white/25",
              ].join(" ")}
            >

              <span className="whitespace-nowrap">

                <span className="text-white">
                  R
                </span>

                <span className="text-[var(--revela-accent)]">
                  Ǝ
                </span>

                <span className="text-white">
                  VELAR
                </span>

              </span>

              <ArrowRight
                size={17}
                strokeWidth={1.5}
                aria-hidden="true"
                className={
                  canReveal
                    ? "text-white transition-colors duration-300 group-hover:text-[var(--revela-accent)]"
                    : "text-white/25"
                }
              />

            </button>

          </div>

        </form>

      </div>

    </section>
  );
}

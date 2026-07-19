"use client";

import Image from "next/image";

import { REVEAL_AREAS } from "@/core/RevealAreas";

type RevealGalleryProps = {
  selected: string | null;
  onSelect: (id: string) => void;
};

export default function RevealGallery({
  selected,
  onSelect,
}: RevealGalleryProps) {
  return (
    <section className="w-full">
      <header className="mb-16 text-center">
        <h1
          className="
            font-[var(--font-space)]
            text-7xl
            xl:text-8xl
            2xl:text-9xl
            uppercase
            font-light
            tracking-[0.10em]
            text-[#55C1D4]
          "
        >
          RƎVELA TU CONTENIDO
        </h1>

        <p
          className="
            mx-auto
            mt-10
            max-w-5xl
            font-[var(--font-inter)]
            text-2xl
            xl:text-3xl
            leading-relaxed
            text-neutral-300
          "
        >
          Los especialistas te acompañan para interpretar,
          positivar y transmitir con identidad.
        </p>

        <p
          className="
            mt-14
            uppercase
            tracking-[0.45em]
            text-base
            text-neutral-500
          "
        >
          ¿Qué quieres revelar hoy?
        </p>
      </header>

      <div
        className="
          grid
          grid-cols-2
          xl:grid-cols-4
          gap-10
          xl:gap-12
        "
      >
        {REVEAL_AREAS.map((area) => {
          const active = selected === area.id;

          return (
            <button
              key={area.id}
              onClick={() => onSelect(area.id)}
              className="group text-left"
            >
              <div
                className={`
                  overflow-hidden
                  rounded-2xl
                  border
                  transition-all
                  duration-500
                  ${
                    active
                      ? "border-[#55C1D4] shadow-[0_0_40px_rgba(85,193,212,.25)]"
                      : "border-neutral-800 hover:border-[#55C1D4]"
                  }
                `}
              >
                <div className="relative h-[420px] xl:h-[500px] 2xl:h-[560px]">
                  <Image
                    src={area.image}
                    alt={area.title}
                    fill
                    priority
                    className={`
                      object-cover
                      transition-all
                      duration-700
                      ${
                        active
                          ? "grayscale-0 scale-105"
                          : "grayscale group-hover:grayscale-0 group-hover:scale-105"
                      }
                    `}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                </div>

                <div className="bg-[#090909] py-8">
                  <h2
                    className="
                      text-center
                      font-[var(--font-space)]
                      text-2xl
                      xl:text-3xl
                      uppercase
                      tracking-[0.18em]
                      text-white
                    "
                  >
                    {area.title}
                  </h2>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
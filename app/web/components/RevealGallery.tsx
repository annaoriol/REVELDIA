"use client";

import Image from "next/image";

type RevealGalleryProps = {
  selected: string | null;
  onSelect: (id: string) => void;
};

const areas = [

  {
    id: "identity",
    title: "IDENTIDAD",
    image: "/images/reveal/identity.jpg",
  },

  {
    id: "purpose",
    title: "PROPÓSITO",
    image: "/images/reveal/purpose.jpg",
  },

  {
    id: "value",
    title: "PROPUESTA DE VALOR",
    image: "/images/reveal/value.jpg",
  },

  {
    id: "voice",
    title: "VOZ",
    image: "/images/reveal/voice.jpg",
  },

  {
    id: "visual",
    title: "UNIVERSO VISUAL",
    image: "/images/reveal/visual.jpg",
  },

  {
    id: "communication",
    title: "COMUNICACIÓN",
    image: "/images/reveal/communication.jpg",
  },

  {
    id: "project",
    title: "PROYECTO",
    image: "/images/reveal/project.jpg",
  },

  {
    id: "idea",
    title: "IDEA",
    image: "/images/reveal/idea.jpg",
  },

];

export default function RevealGallery({

  selected,

  onSelect,

}: RevealGalleryProps) {

  return (

    <section className="w-full">

      <header className="mb-20 text-center">

        <h1
          className="
            font-[var(--font-space)]
            text-5xl
            md:text-7xl
            uppercase
            font-light
            tracking-[0.12em]
            text-[#55C1D4]
          "
        >

          RƎVELA TU CONTENIDO

        </h1>

        <p
          className="
            mx-auto
            mt-10
            max-w-3xl
            font-[var(--font-inter)]
            text-xl
            leading-10
            text-neutral-300
          "
        >

          Los especialistas te acompañan para interpretar,
          positivar, transmitir y comunicar con identidad.

        </p>

        <p
          className="
            mt-16
            uppercase
            tracking-[0.40em]
            text-sm
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
          lg:grid-cols-4
          gap-8
        "
      >

        {areas.map((area) => (

          <button

            key={area.id}

            onClick={() => onSelect(area.id)}

            className="group"

          >

            <div
              className="
                overflow-hidden
                rounded-md
                border
                border-neutral-800
                transition-all
                duration-500
                group-hover:border-[#55C1D4]
              "
            >

              <div className="relative aspect-[4/5]">

                <Image

                  src={area.image}

                  alt={area.title}

                  fill

                  priority

                  className="
                    object-cover
                    grayscale
                    transition-all
                    duration-700
                    group-hover:grayscale-0
                    group-hover:scale-[1.02]
                  "

                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

              </div>

              <div className="bg-[#090909] py-6">

                <h2
                  className="
                    text-center
                    font-[var(--font-space)]
                    text-lg
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

        ))}

      </div>

    </section>

  );

}
"use client";

import Image from "next/image";

type RevealGalleryProps = {
  selected: string | null;
  onSelect: (id: string) => void;
};

const laboratories = [
  {
    id: "identity",
    title: "LA IDENTIDAD",
    description: "Descubre quién eres antes de comunicar.",
    image: "/images/reveal/identity.jpg",
  },
  {
    id: "purpose",
    title: "PROPÓSITO",
    description: "Conecta con la razón que da sentido a todo lo que haces.",
    image: "/images/reveal/purpose.jpg",
  },
  {
    id: "value",
    title: "PROPUESTA DE VALOR",
    description: "Define aquello que te hace único y el impacto que generas.",
    image: "/images/reveal/value.jpg",
  },
  {
    id: "voice",
    title: "VOZ",
    description: "Encuentra las palabras, el tono y el lenguaje que te representan.",
    image: "/images/reveal/voice.jpg",
  },
  {
    id: "visual",
    title: "UNIVERSO VISUAL",
    description: "Construye un sistema visual coherente con tu identidad.",
    image: "/images/reveal/visual.jpg",
  },
  {
    id: "communication",
    title: "COMUNICACIÓN",
    description: "Transforma tu mensaje en historias que conectan y permanecen.",
    image: "/images/reveal/communication.jpg",
  },
  {
    id: "project",
    title: "PROYECTO",
    description: "Organiza las ideas y conviértelas en un plan de acción.",
    image: "/images/reveal/project.jpg",
  },
  {
    id: "idea",
    title: "IDEA",
    description: "Da forma a la chispa inicial antes de hacerla crecer.",
    image: "/images/reveal/idea.jpg",
  },
];

export default function RevealGallery({
  selected,
  onSelect,
}: RevealGalleryProps) {
  return (
    <section className="w-full">

      <div className="mb-24">

        <p className="mb-5 font-[var(--font-inter)] text-xs uppercase tracking-[0.55em] text-[#0391A1]">
          LABORATORIO CREATIVO
        </p>

        <h2
  className="
    font-[var(--font-space)]
    text-[#00B5CC]
    text-5xl
    md:text-7xl
    font-light
    uppercase
    leading-[0.88]
    tracking-[0.14em]
  "
>
          ¿QUÉ QUIERES
          <br />
         REVELAR?
        </h2>

        <p className="mt-10 max-w-[860px] font-[var(--font-inter)] text-xl leading-10 text-neutral-300">
          Cada proceso activará un equipo
          especializado para ayudarte a revelar la identidad de tu marca,
          proyecto o comunicación.
        </p>

      </div>

      <div className="grid gap-14 md:grid-cols-2 2xl:grid-cols-4">

        {laboratories.map((item) => {

          const active = selected === item.id;

          return (
            <button
              key={item.id}
              onClick={() => onSelect(item.id)}
              className="group text-left"
            >

              <div
                className={`
                  overflow-hidden
                  rounded-sm
                  border
                  transition-all
                  duration-500
                  ${
                    active
                      ? "border-[#0391A1]"
                      : "border-neutral-800 hover:border-neutral-600"
                  }
                `}
              >

                <div className="relative aspect-[4/5] overflow-hidden">

                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    priority
                    sizes="(max-width:768px) 100vw,
                           (max-width:1280px) 50vw,
                           25vw"
                    className={`
                      object-cover
                      transition-all
                      duration-700
                      ${
                        active
                          ? "scale-[1.02] brightness-100 contrast-125"
                          : "grayscale brightness-75 contrast-125 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-[1.015]"
                      }
                    `}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                </div>

                <div className="bg-[#090909] px-7 py-7">

                  <h3
  className="
    font-[var(--font-space)]
    text-[#00B5CC]
    text-[1.35rem]
    uppercase
    font-light
    tracking-[0.16em]
  "
>
                    {item.title}
                  </h3>

                  <p
                    className={`
                      mt-10
                      overflow-hidden
                      font-[var(--font-inter)]
                      text-sm
                      leading-9
                      text-neutral-400
                      transition-all
                      duration-500
                      ${
                        active
                          ? "max-h-32 opacity-100"
                          : "max-h-0 opacity-0 group-hover:max-h-32 group-hover:opacity-100"
                      }
                    `}
                  >
                    {item.description}
                  </p>

                </div>

              </div>

            </button>
          );
        })}

      </div>

    </section>
  );
}
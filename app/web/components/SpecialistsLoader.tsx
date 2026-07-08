"use client";

import { useEffect, useState } from "react";

type Props = {
  category: string;
};

const specialists: Record<string, string[]> = {
  identity: [
    "Mentor Creativo",
    "Mentor de Marca",
    "Director Creativo",
    "Storytelling",
    "Dirección de Arte",
    "Especialista IA",
  ],

  purpose: [
    "Mentor Creativo",
    "Estratega",
    "Storytelling",
    "Branding",
    "Especialista IA",
  ],

  value: [
    "Mentor Creativo",
    "Branding",
    "Marketing",
    "Storytelling",
    "Especialista IA",
  ],

  voice: [
    "Mentor Creativo",
    "Copywriter",
    "Storytelling",
    "Comunicación",
    "Especialista IA",
  ],

  visual: [
    "Mentor Creativo",
    "Director de Arte",
    "Color",
    "Tipografía",
    "Especialista IA",
  ],

  content: [
    "Mentor Creativo",
    "Estrategia",
    "Copywriter",
    "Director Creativo",
    "Especialista IA",
  ],

  project: [
    "Mentor Creativo",
    "Director Creativo",
    "Productor",
    "Storytelling",
    "Especialista IA",
  ],

  idea: [
    "Mentor Creativo",
    "Director Creativo",
    "Innovación",
    "Storytelling",
    "Especialista IA",
  ],
};

export default function SpecialistsLoader({
  category,
}: Props) {
  const list =
    specialists[category] ?? specialists.identity;

  const [visible, setVisible] = useState(0);

  useEffect(() => {
    if (visible >= list.length) return;

    const timer = setTimeout(() => {
      setVisible((v) => v + 1);
    }, 140);

    return () => clearTimeout(timer);
  }, [visible, list.length]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#090909] text-white">

      <div className="w-full max-w-xl px-10">

        <p
          className="
            text-center
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
            mt-8
            text-center
            font-[var(--font-space)]
            text-5xl
            font-light
          "
        >
          INVOCANDO
          <br />
          ESPECIALISTAS
        </h1>

        <div className="mt-14 space-y-5">

          {list.map((specialist, index) => (

            <div
              key={specialist}
              className={`
                flex
                items-center
                gap-4
                text-xl
                transition-all
                duration-500

                ${
                  index < visible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-3 opacity-0"
                }
              `}
            >
              <span className="text-[#0391A1]">
                ✓
              </span>

              <span className="font-light">
                {specialist}
              </span>

            </div>

          ))}

        </div>

        {visible >= list.length && (

          <p
            className="
              mt-16
              animate-pulse
              text-center
              uppercase
              tracking-[0.30em]
              text-[#0391A1]
            "
          >
            TODOS LOS ESPECIALISTAS ESTÁN LISTOS
          </p>

        )}

      </div>

    </main>
  );
}
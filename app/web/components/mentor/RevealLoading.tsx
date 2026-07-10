"use client";

import { useEffect, useState } from "react";

const council = [
  {
    name: "MENTOR CREATIVO",
    status: "Escuchando la observación...",
  },
  {
    name: "LABORATORIO DE IDENTIDAD",
    status: "Detectando patrones...",
  },
  {
    name: "LABORATORIO NARRATIVO",
    status: "Relacionando lenguaje...",
  },
  {
    name: "LABORATORIO VISUAL",
    status: "Contrastando referencias...",
  },
  {
    name: "LABORATORIO ESTRATÉGICO",
    status: "Buscando coherencia...",
  },
];

export default function RevealLoading() {
  const [active, setActive] = useState(-1);

  useEffect(() => {
    let current = -1;

    const interval = setInterval(() => {
      current++;

      if (current <= council.length - 1) {
        setActive(current);
      } else {
        clearInterval(interval);
      }
    }, 700);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex min-h-screen items-center justify-center bg-[#090909] text-white">

      <div className="w-full max-w-[920px] px-12">

        <p
          className="
            text-[13px]
            uppercase
            tracking-[0.55em]
            text-[#00B5CC]
          "
        >
          RƎVELA
        </p>

        <h1
          className="
            mt-8
            font-[var(--font-space)]
            text-7xl
            font-light
            leading-[0.95]
            tracking-[-0.03em]
          "
        >
          CONSEJO
          <br />
          CREATIVO
        </h1>

        <p
          className="
            mt-10
            max-w-[720px]
            text-[24px]
            leading-[1.8]
            text-neutral-500
          "
        >
          El Mentor está consultando al Consejo para
          interpretar la observación desde diferentes
          perspectivas.
        </p>

        <div className="mt-24 space-y-8">

          {council.map((item, index) => {

            if (index > active) return null;

            return (

              <div
                key={item.name}
                className="
                  border-t
                  border-neutral-800
                  pt-6
                  animate-[fadeIn_.9s_ease]
                "
              >

                <div className="flex items-center justify-between">

                  <h2
                    className="
                      font-[var(--font-space)]
                      text-xl
                      tracking-[0.12em]
                    "
                  >
                    {item.name}
                  </h2>

                  <span
                    className="
                      text-sm
                      uppercase
                      tracking-[0.18em]
                      text-[#00B5CC]
                    "
                  >
                    {item.status}
                  </span>

                </div>

              </div>

            );

          })}

        </div>

        <div
          className="
            mt-24
            text-center
            text-neutral-500
            text-lg
            tracking-[0.20em]
            uppercase
          "
        >
          Construyendo la primera revelación…
        </div>

      </div>

    </section>
  );
}
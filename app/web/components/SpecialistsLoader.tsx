"use client";

import { useEffect, useState } from "react";

type SpecialistsLoaderProps = {
  laboratory: string;
  onFinished?: () => void;
};

const labs = [
  {
    name: "MENTOR CREATIVO",
    loading: "PREPARANDO...",
  },
  {
    name: "LABORATORIO DE IDENTIDAD",
    loading: "CONECTANDO...",
  },
  {
    name: "LABORATORIO NARRATIVO",
    loading: "INICIALIZANDO...",
  },
  {
    name: "LABORATORIO VISUAL",
    loading: "CARGANDO REFERENCIAS...",
  },
  {
    name: "LABORATORIO ESTRATÉGICO",
    loading: "SINCRONIZANDO...",
  },
];

export default function SpecialistsLoader({
  onFinished,
}: SpecialistsLoaderProps) {
  const [active, setActive] = useState(-1);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    let current = -1;

    const interval = setInterval(() => {
      current++;

      if (current < labs.length) {
        setActive(current);
      } else {
        clearInterval(interval);

        setFinished(true);

        setTimeout(() => {
          onFinished?.();
        }, 900);
      }
    }, 650);

    return () => clearInterval(interval);
  }, [onFinished]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#090909] text-white">

      <div className="w-full max-w-[820px] px-10">

        <p
          className="
            text-xs
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
            text-5xl
            font-light
            tracking-[0.10em]
            text-[#00B5CC]
          "
        >
          INVOCANDO
          <br />
          LABORATORIOS
        </h1>

        <div className="mt-20 space-y-6">

          {labs.map((lab, index) => {

            const visible = index <= active;

            if (!visible) return null;

            const ready = finished;

            return (

              <div
                key={lab.name}
                className="
                  border-t
                  border-neutral-800
                  pt-6
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
                    {lab.name}
                  </h2>

                  <span
                    className={`
                      font-[var(--font-inter)]
                      text-xs
                      uppercase
                      tracking-[0.25em]
                      ${
                        ready
                          ? "text-[#00B5CC]"
                          : "text-neutral-500"
                      }
                    `}
                  >
                    {ready ? "LISTO" : lab.loading}
                  </span>

                </div>

              </div>

            );

          })}

        </div>

        {finished && (

          <div className="mt-24 text-center">

            <p
              className="
                font-[var(--font-space)]
                text-4xl
                font-light
                tracking-[0.08em]
                text-[#00B5CC]
              "
            >
              LABORATORIO PREPARADO
            </p>

          </div>

        )}

      </div>

    </main>
  );
}
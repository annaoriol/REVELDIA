"use client";

import { useEffect, useState } from "react";

type ReadyScreenProps = {
  onFinished: () => void;
};

export default function ReadyScreen({
  onFinished,
}: ReadyScreenProps) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setStep(1), 900);
    const t2 = setTimeout(() => setStep(2), 2100);
    const t3 = setTimeout(() => setStep(3), 3400);
    const t4 = setTimeout(() => onFinished(), 4500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onFinished]);

  return (
    <section className="flex min-h-screen items-center justify-center bg-[#090909]">
      <div className="mx-auto max-w-[920px] px-10 text-center">

        <p className="text-[13px] uppercase tracking-[0.55em] text-[#00B5CC]">
          RƎVELA
        </p>

        <div className="mt-24 space-y-16">

          <p
            className={`font-[var(--font-space)] text-7xl font-light leading-[0.95] transition-all duration-[1400ms]
            ${
              step >= 1
                ? "translate-y-0 opacity-100"
                : "translate-y-3 opacity-0"
            }`}
          >
            El laboratorio
            <br />
            está listo.
          </p>

          <p
            className={`mx-auto max-w-[760px] font-[var(--font-inter)] text-[26px] leading-[1.8] text-neutral-300 transition-all duration-[1400ms]
            ${
              step >= 2
                ? "translate-y-0 opacity-100"
                : "translate-y-3 opacity-0"
            }`}
          >
            Todo proceso creativo comienza observando.
          </p>

          <p
            className={`mx-auto max-w-[760px] font-[var(--font-inter)] text-[24px] leading-[1.9] text-neutral-500 transition-all duration-[1400ms]
            ${
              step >= 3
                ? "translate-y-0 opacity-100"
                : "translate-y-3 opacity-0"
            }`}
          >
            No buscaremos respuestas.
            <br />
            Buscaremos patrones.
          </p>

        </div>

      </div>
    </section>
  );
}
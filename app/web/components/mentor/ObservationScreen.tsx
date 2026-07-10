"use client";

import { useState } from "react";
import Image from "next/image";

import AnswerField from "./AnswerField";

type Observation = {
  id: string;
  image: string;
  question: string;
  hint: string;
};

type ObservationScreenProps = {
  observation: Observation;
  answer: string;
  onAnswerChange: (value: string) => void;
  onContinue: () => void;
};

export default function ObservationScreen({
  observation,
  answer,
  onAnswerChange,
  onContinue,
}: ObservationScreenProps) {
  const [selected, setSelected] = useState<string[]>([]);

  const keywords = [
    "Luz",
    "Silencio",
    "Textura",
    "Movimiento",
    "Naturaleza",
    "Contraste",
  ];

  function toggleKeyword(word: string) {
    if (selected.includes(word)) {
      setSelected(selected.filter((w) => w !== word));
    } else {
      setSelected([...selected, word]);
    }
  }

  return (
    <section className="min-h-screen bg-[#090909] text-white">

      <div className="mx-auto flex min-h-screen max-w-[1200px] flex-col items-center justify-center px-12 py-20">

        <p
          className="
            text-[13px]
            uppercase
            tracking-[0.55em]
            text-[#00B5CC]
          "
        >
          OBSERVAR
        </p>

        <h1
          className="
            mt-8
            max-w-[900px]
            text-center
            font-[var(--font-space)]
            text-6xl
            font-light
            leading-[1.02]
            tracking-[-0.03em]
            md:text-8xl
          "
        >
          {observation.question}
        </h1>

        <p
          className="
            mt-10
            max-w-[760px]
            text-center
            font-[var(--font-inter)]
            text-2xl
            leading-[1.8]
            text-neutral-500
          "
        >
          {observation.hint}
        </p>

        <div
          className="
            relative
            mt-20
            aspect-[4/5]
            w-full
            max-w-[470px]
            overflow-hidden
            rounded-sm
            border
            border-neutral-800
          "
        >
          <Image
            src={observation.image}
            alt=""
            fill
            priority
            className="object-cover transition duration-[2200ms]"
          />
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-3">

          {keywords.map((word) => (

            <button
              key={word}
              onClick={() => toggleKeyword(word)}
              className={`
                rounded-full
                border
                px-5
                py-2
                text-sm
                tracking-[0.18em]
                uppercase
                transition-all
                duration-500

                ${
                  selected.includes(word)
                    ? "border-[#00B5CC] bg-[#00B5CC]/10 text-[#00B5CC]"
                    : "border-neutral-800 text-neutral-500 hover:border-neutral-600"
                }
              `}
            >
              {word}
            </button>

          ))}

        </div>

        <div className="mt-20 w-full max-w-[900px]">

          <AnswerField
            value={answer}
            onChange={onAnswerChange}
          />

        </div>

        <button
          onClick={onContinue}
          disabled={!answer.trim()}
          className="
            group
            mt-20
            flex
            flex-col
            items-center
            gap-3
            disabled:cursor-not-allowed
            disabled:opacity-40
          "
        >
          <span
            className="
              font-[var(--font-inter)]
              text-base
              uppercase
              tracking-[0.45em]
              text-[#00B5CC]
            "
          >
            REVELAR →
          </span>

          <span
            className="
              h-px
              w-40
              bg-neutral-700
              transition-all
              duration-700
              group-hover:w-56
              group-hover:bg-[#00B5CC]
            "
          />

        </button>

      </div>

    </section>
  );
}
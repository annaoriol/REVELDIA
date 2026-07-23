"use client";

import { useState } from "react";

export default function RevelationIntroView() {
  const [intention, setIntention] = useState("");

  return (
    <section className="flex h-full w-full items-center justify-center">
      <div className="w-full max-w-3xl">

        <h1 className="text-6xl font-extralight leading-tight tracking-tight text-white">
          ¿Qué quieres revelar?
        </h1>

        <p className="mt-8 text-2xl font-light text-white/60">
          Todo empieza con una intención
        </p>

        <textarea
          autoFocus
          rows={5}
          value={intention}
          onChange={(e) => setIntention(e.target.value)}
          placeholder="Escribe una idea, una marca, un proyecto o una inquietud..."
          className="
            mt-20
            w-full
            resize-none
            border-0
            border-b
            border-white/20
            bg-transparent
            pb-6
            text-2xl
            font-light
            leading-relaxed
            text-white
            outline-none
            placeholder:text-white/25
            focus:border-[#0391A1]
          "
        />

        <div className="mt-16 flex justify-end">

          <button
            disabled={!intention.trim()}
            className="
              text-xl
              font-light
              tracking-[0.14em]
              transition-all
              disabled:cursor-default
              disabled:opacity-25
              enabled:text-[#0391A1]
              enabled:hover:tracking-[0.20em]
            "
          >
            Dispara →
          </button>

        </div>

      </div>
    </section>
  );
}
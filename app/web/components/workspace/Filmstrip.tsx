"use client";

import Image from "next/image";
import { useState } from "react";

const frames = Array.from({ length: 24 }, (_, i) => ({
  id: i + 1,
  image: "/workspace/frame.jpg",
}));

const menu = [
  "Importar",
  "Moodboard",
  "Referencias",
  "IA",
  "Storyboard",
  "Exportar",
];

export default function Filmstrip() {
  const [selected, setSelected] = useState(1);

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-black/42 shadow-[0_18px_60px_rgba(0,0,0,.30)] backdrop-blur-2xl">

      {/* ================= MINIATURAS ================= */}

      <div className="flex-1 overflow-x-auto overflow-y-hidden">

        <div className="flex h-full items-center gap-[clamp(0.65rem,1vw,1rem)] px-[clamp(1rem,4vw,4.5rem)]">

          {frames.map((frame) => (

            <button
              key={frame.id}
              onClick={() => setSelected(frame.id)}
              className={`
                group
                relative
                h-[clamp(64px,8vh,86px)]
                w-[clamp(96px,10vw,132px)]
                shrink-0
                overflow-hidden
                rounded-2xl
                border
                transition-all
                duration-300
                ${
                  selected === frame.id
                    ? "border-cyan-400"
                    : "border-white/10"
                }
              `}
            >

              <Image
                src={frame.image}
                alt=""
                fill
                sizes="132px"
                className="
                  object-cover
                  grayscale
                  transition-all
                  duration-500
                  group-hover:scale-105
                "
              />

              <div className="absolute inset-0 bg-black/35" />

              <span
                className="
                  absolute
                  bottom-2
                  right-2
                  rounded
                  bg-black/70
                  px-2
                  py-1
                  text-xs
                "
              >
                {String(frame.id).padStart(2, "0")}
              </span>

            </button>

          ))}

        </div>

      </div>

      {/* ================= BARRA INFERIOR ================= */}

      <div className="flex h-[clamp(38px,4.8vh,46px)] items-center justify-between gap-6 border-t border-white/10 bg-black/70 px-[clamp(1rem,2vw,2rem)] backdrop-blur-xl">

        <div className="flex min-w-0 items-center gap-[clamp(1rem,2vw,2rem)] overflow-x-auto">

          {menu.map((item) => (

            <button
              key={item}
              className="
                whitespace-nowrap
                text-[clamp(11px,0.8vw,14px)]
                uppercase
                tracking-[0.28em]
                text-white/60
                transition
                hover:text-cyan-400
              "
            >
              {item}
            </button>

          ))}

        </div>

        <div
          className="
            hidden
            lg:block
            text-[13px]
            uppercase
            tracking-[0.34em]
            text-cyan-400
          "
        >
          RƎVELA · LABORATORIO CREATIVO
        </div>

        <div className="text-sm text-white/35">
          v0.1
        </div>

      </div>

    </div>
  );
}

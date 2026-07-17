"use client";

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
    <div className="workspace-panel flex h-full flex-col overflow-hidden">

      {/* ================= MINIATURAS ================= */}

      <div className="flex-1 overflow-x-auto overflow-y-hidden">

        <div className="flex h-full items-center gap-4 px-18">

          {frames.map((frame) => (

            <button
              key={frame.id}
              onClick={() => setSelected(frame.id)}
              className={`
                group
                relative
                h-[86px]
                w-[132px]
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

              <img
                src={frame.image}
                alt=""
                className="
                  h-full
                  w-full
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

      <div className="flex h-[46px] items-center justify-between border-t border-white/10 bg-black/70 px-8 backdrop-blur-xl">

        <div className="flex items-center gap-8">

          {menu.map((item) => (

            <button
              key={item}
              className="
                text-[14px]
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
"use client";

import Logo from "./Logo";

type HomeScreenProps = {
  onStart: () => void;
};

export default function HomeScreen({ onStart }: HomeScreenProps) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#090909] px-8">

      <div className="max-w-4xl text-center">

        <div className="mb-12 flex justify-center">
          <Logo />
        </div>

        <p className="mb-16 font-[var(--font-space)] text-base uppercase tracking-[0.45em] text-[#0391A1]">
          LABORATORIO CREATIVO
        </p>

        <h1 className="font-[var(--font-space)] text-6xl font-semibold uppercase leading-[1.15] text-white">
          LA IDENTIDAD
          <br />
          NO SE INVENTA
          <br />
          <span className="text-[#0391A1]">
            SE REVELA
          </span>
        </h1>

        <button
          onClick={onStart}
          className="
            mt-20
            rounded-full
            border-2
            border-[#0391A1]
            px-14
            py-4
            font-[var(--font-space)]
            text-lg
            font-semibold
            uppercase
            tracking-[0.20em]
            text-[#0391A1]
            transition-all
            duration-300
            hover:bg-[#0391A1]
            hover:text-black
          "
        >
          REVÉLATE
        </button>

      </div>

    </main>
  );
}
"use client";

type MentorIntroProps = {
  onStart: () => void;
};

export default function MentorIntro({
  onStart,
}: MentorIntroProps) {
  return (
    <section className="flex min-h-screen items-center justify-center">

      <div className="mx-auto w-full max-w-[900px] px-10 text-center">

        <p
          className="
            text-xs
            uppercase
            tracking-[0.45em]
            text-[#00B5CC]
          "
        >
          RƎVELA
        </p>

        <h1
          className="
            mt-10
            font-[var(--font-space)]
            text-6xl
            font-light
            leading-[0.92]
            tracking-[-0.04em]
            md:text-8xl
          "
        >
          Antes de crear...
          <br />
          vamos a observar.
        </h1>

        <p
          className="
            mx-auto
            mt-12
            max-w-[700px]
            font-[var(--font-inter)]
            text-xl
            leading-10
            text-neutral-400
          "
        >
          Todo proceso creativo comienza descubriendo.
          No existen respuestas correctas.
          Solo revelaciones.
        </p>

        <button
          onClick={onStart}
          className="
            mt-24
            rounded-full
            border
            border-[#00B5CC]
            px-12
            py-5
            font-[var(--font-inter)]
            text-sm
            uppercase
            tracking-[0.35em]
            text-[#00B5CC]
            transition-all
            duration-300
            hover:bg-[#00B5CC]
            hover:text-black
          "
        >
          EMPEZAR EL REVELADO
        </button>

      </div>

    </section>
  );
}
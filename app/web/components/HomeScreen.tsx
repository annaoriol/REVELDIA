"use client";

import Image from "next/image";
import Logo from "./Logo";

type HomeScreenProps = {
  onStart: () => void;
};

export default function HomeScreen({ onStart }: HomeScreenProps) {
  return (
    <main className="min-h-screen overflow-hidden bg-[#090909] text-white">

      <section className="mx-auto flex min-h-screen max-w-[1500px] flex-col px-8 py-8 md:px-14 lg:px-20">

        {/* LOGO */}

        <header className="flex flex-col items-center pt-2">

          <Logo />

          <p
            className="
              mt-7
              font-[var(--font-inter)]
              text-xs
              uppercase
              tracking-[0.48em]
              text-[#0391A1]
            "
          >
            LABORATORIO CREATIVO
          </p>

        </header>

        {/* CONTENIDO */}

        <div className="grid flex-1 items-center gap-12 py-10 lg:grid-cols-12 lg:gap-20">

          {/* TEXTO */}

          <div className="order-2 lg:order-1 lg:col-span-6">

            <h1
              className="
                font-[var(--font-space)]
                leading-[0.90]
                tracking-[-0.045em]
              "
            >
              <span className="block text-[4.3rem] font-light md:text-[5.8rem] xl:text-[7rem]">
                La identidad
              </span>

              <span className="block text-[4.3rem] font-light md:text-[5.8rem] xl:text-[7rem]">
                no se inventa
              </span>

              <span className="mt-2 block text-[4.6rem] font-medium text-[#0391A1] md:text-[6rem] xl:text-[7.3rem]">
                Se revela
              </span>

            </h1>

            <p
              className="
                mt-12
                max-w-[420px]
                font-[var(--font-inter)]
                text-lg
                leading-8
                text-neutral-400
              "
            >
             Los especialistas te acompañarán en la revelación
            </p>

            <button
              onClick={onStart}
              className="
                mt-14
                rounded-full
                border
                border-[#0391A1]
                px-11
                py-4
                font-[var(--font-inter)]
                text-sm
                font-semibold
                uppercase
                tracking-[0.30em]
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

          {/* IMAGEN */}

          <div className="order-1 flex justify-center lg:order-2 lg:col-span-6">

            <div
              className="
                relative
                aspect-[4/5]
                w-full
                max-w-[620px]
                overflow-hidden
              "
            >

              <Image
                src="/images/home/editorial.jpg"
                alt="Laboratorio creativo"
                fill
                priority
                className="
                  object-cover
                  object-center
                  grayscale
                  contrast-125
                  brightness-90
                  transition-transform
                  duration-[12000ms]
                  hover:scale-[1.02]
                "
              />

              {/* Oscurece lado izquierdo para fundir con el fondo */}

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-l
                  from-transparent
                  via-black/10
                  to-[#090909]
                "
              />

              {/* Viñeteado */}

              <div
                className="
                  absolute
                  inset-0
                  bg-[radial-gradient(circle_at_center,transparent_45%,rgba(0,0,0,.35))]
                "
              />

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}
"use client";

import Image from "next/image";
import Logo from "./Logo";

type HomeScreenProps = {
  onStart: () => void;
};

export default function HomeScreen({
  onStart,
}: HomeScreenProps) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* Imagen de fondo */}

      <Image
        src="/images/home/editorial.jpg"
        alt="RƎVELA"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Oscurecer */}

      <div className="absolute inset-0 bg-black/45" />

      {/* Degradado */}

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/55 to-transparent" />

      {/* Branding */}

     <header className="absolute inset-x-0 top-8 z-20 flex flex-col items-center">

  <div
    style={{
      transform: "scale(1.5)",
      transformOrigin: "center",
    }}
  >
    <Logo />
  </div>

  <p
    className="
      mt-10
      font-[var(--font-inter)]
      font-medium
      uppercase
      tracking-[0.55em]
      text-[#55C1D4]
    "
    style={{
      fontSize: "clamp(22px,1.4vw,34px)",
    }}
  >
    LABORATORIO CREATIVO
  </p>

</header>

      {/* Contenido */}

      <section className="relative z-10 flex min-h-screen items-center">

        <div className="w-full pl-[6vw]">

          <div className="max-w-[1200px]">

            <p
              className="
                mb-10
                font-[var(--font-inter)]
                text-lg
                uppercase
                tracking-[0.55em]
                text-[#55C1D4]
              "
            >

            </p>

            <h1
              className="
                font-[var(--font-space)]
                font-light
                uppercase
                leading-[0.84]
                tracking-[-0.04em]
                text-white
              "
              style={{
                fontSize: "clamp(120px,10vw,220px)",
              }}
            >
              RƎVELA
              <br />
              TU
              <br />
              CONTENIDO
            </h1>

            <p
              className="
                mt-12
                max-w-[900px]
                font-[var(--font-inter)]
                text-white/85
              "
              style={{
                fontSize: "clamp(34px,2vw,46px)",
                lineHeight: "1.45",
              }}
            >
              Los especialistas te acompañan para interpretar,
              positivar y transmitir con identidad.
            </p>

            <button
              onClick={onStart}
              className="
                mt-20
                h-24
                w-[800px]
                rounded-full
                border
                border-[#55C1D4]
                font-[var(--font-inter)]
                text-2xl
                font-medium
                uppercase
                tracking-[0.35em]
                text-[#55C1D4]
                transition-all
                duration-300
                hover:bg-[#55C1D4]
                hover:text-black
              "
            >
              RƎVÉLATE →
            </button>

          </div>

        </div>

      </section>

    </main>
  );
}
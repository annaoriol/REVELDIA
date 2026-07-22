import Image from "next/image";

import Button from "../../components/primitives/Button";

export default function HomeView() {
  return (
    <section className="grid min-h-full gap-10 lg:grid-cols-[0.45fr_0.55fr] lg:gap-14">
      <div className="flex items-center py-8 lg:py-16">
        <div className="w-full max-w-2xl">
          <h1 className="font-[var(--font-space)] text-6xl font-light tracking-[0.14em] text-white md:text-8xl">
            RƎVELA
          </h1>

          <p className="mt-8 text-sm uppercase tracking-[0.36em] text-[#0391A1]">
            LABORATORIO CREATIVO
          </p>

          <p className="mt-16 max-w-xl text-4xl font-light leading-tight text-white md:text-6xl">
            Cada revelación amplía tu forma de pensar.
          </p>

          <p className="mt-10 max-w-xl text-xl leading-9 text-[#A3A3A3]">
            Descubre conexiones, define una dirección y construye una identidad
            que evoluciona con cada decisión.
          </p>

          <div className="mt-14">
            <Button className="w-full max-w-sm py-4 text-base">
              RƎVÉLATE
            </Button>
          </div>
        </div>
      </div>

      <div className="relative min-h-[460px] overflow-hidden rounded-2xl lg:min-h-full">
        <Image
          src="/images/home/editorial.jpg"
          alt="Laboratorio creativo editorial"
          fill
          priority
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}

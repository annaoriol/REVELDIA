import Image from "next/image";

type HomeViewProps = {
  onReveal?: () => void;
};

export default function HomeView({ onReveal }: HomeViewProps) {
  return (
    <section className="grid min-h-[calc(100vh-120px)] items-stretch gap-12 lg:grid-cols-[1fr_0.95fr] lg:gap-16">
      {/* Columna izquierda */}
      <div className="flex items-start pt-12 lg:pt-14">
        <div className="w-full max-w-2xl">
          <div className="inline-block">
            <h1 className="font-[var(--font-space)] text-6xl font-light tracking-[0.16em] text-white md:text-8xl">
              R<span className="text-[#0391A1]">Ǝ</span>VELA
            </h1>

            <p className="mt-2 flex w-full justify-between font-[var(--font-space)] text-lg uppercase text-[#0391A1]">
              <span>L</span>
              <span>A</span>
              <span>B</span>
              <span>O</span>
              <span>R</span>
              <span>A</span>
              <span>T</span>
              <span>O</span>
              <span>R</span>
              <span>I</span>
              <span>O</span>

              <span className="w-6" />

              <span>C</span>
              <span>R</span>
              <span>E</span>
              <span>A</span>
              <span>T</span>
              <span>I</span>
              <span>V</span>
              <span>O</span>
            </p>
          </div>

          <h2 className="mt-16 max-w-xl text-4xl font-light leading-[1.05] text-white md:text-6xl">
            Cada revelación amplía
            <br />
            tu forma de pensar
          </h2>

          <p className="mt-12 max-w-xl text-xl leading-9 text-[#A3A3A3]">
            Amplía tu mirada, conecta disciplinas y expresa una identidad
            coherente en cualquier formato.
          </p>

          <button
            type="button"
            onClick={onReveal}
            className="group mt-16 inline-flex items-center gap-5 transition-all duration-300 hover:opacity-80"
          >
            <span className="font-[var(--font-space)] text-[2rem] font-light tracking-[0.12em] text-white md:text-[2.6rem]">
              R<span className="text-[#0391A1]">Ǝ</span>VELAR
            </span>

            <span
              aria-hidden="true"
              className="text-3xl text-[#0391A1] transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </button>
        </div>
      </div>

      {/* Columna derecha */}
      <div className="flex h-full items-end justify-end">
        <div className="relative h-full min-h-[720px] w-full overflow-hidden rounded-2xl">
          <Image
            src="/images/home/editorial.jpg"
            alt="Laboratorio fotográfico"
            fill
            priority
            sizes="(max-width:1024px) 100vw, 50vw"
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
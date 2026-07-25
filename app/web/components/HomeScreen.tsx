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
    <main className="min-h-dvh bg-[#090909] text-white">
      <section className="relative min-h-dvh overflow-hidden">
        <Image
          src="/images/home/editorial.jpg"
          alt="Laboratorio creativo editorial"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_50%,rgba(3,145,161,0.16),transparent_32%),linear-gradient(90deg,rgba(0,0,0,0.64),rgba(0,0,0,0.22)_52%,rgba(0,0,0,0.56))]" />

        <div className="relative z-10 flex min-h-dvh items-center px-[clamp(1.5rem,7vw,8rem)] py-[clamp(4rem,7vw,7rem)]">
          <div className="max-w-[720px]">
            <div className="w-fit">
              <Logo />

              <p className="mt-3 text-[clamp(0.72rem,0.8vw,0.95rem)] uppercase tracking-[0.46em] text-[#55C1D4]">
                Laboratorio Creativo
              </p>
            </div>

            <p className="mt-[clamp(4.5rem,10vw,9rem)] max-w-[580px] font-[var(--font-space)] text-[clamp(1.55rem,2.7vw,3.45rem)] font-light leading-[1.14] tracking-[0.01em] text-white/90">
              Cada revelación amplía tu forma de pensar.
            </p>

            <button
              type="button"
              onClick={onStart}
              className="group mt-[clamp(3rem,6vw,6rem)] inline-flex cursor-pointer items-center gap-3 font-[var(--font-space)] text-[clamp(0.92rem,1vw,1.08rem)] font-medium uppercase tracking-[0.28em] text-[#55C1D4] transition-colors duration-300 hover:text-white"
            >
              Entrar
              <span
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-1"
              >
                →
              </span>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

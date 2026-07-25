"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { memo } from "react";

import { editorialAssets } from "@/app/assets/editorial-assets";
import Button from "@/app/components/ui/Button";
import { useRevealStore } from "@/app/stores/useRevealStore";

function WelcomeScene() {
  const enterLaboratory = useRevealStore(
    (state) => state.enterLaboratory
  );

  return (
    <section className="relative min-h-full overflow-hidden rounded-[var(--revela-radius-lg)] border border-white/10 bg-black">
      <Image
        src={editorialAssets.welcomeBackground}
        alt="Entrada editorial al laboratorio RƎVELA"
        fill
        priority
        sizes="(max-width: 1024px) 100vw, 70vw"
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-black/72" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_50%,rgba(3,145,161,0.16),transparent_32%)]" />

      <div className="relative z-10 flex min-h-[min(74dvh,860px)] items-center px-[clamp(1.25rem,6vw,7rem)] py-[clamp(3rem,7vw,7rem)]">
        <div className="max-w-3xl">
          <p className="font-[var(--font-space)] text-[clamp(3.4rem,7vw,8rem)] font-light leading-none tracking-[0.16em] text-white">
            R<span className="text-[var(--revela-accent)]">Ǝ</span>VELA
          </p>

          <p className="mt-4 text-[clamp(0.78rem,0.9vw,1rem)] uppercase tracking-[0.44em] text-[var(--revela-accent)]">
            Laboratorio Creativo
          </p>

          <p className="mt-[clamp(4rem,8vw,8rem)] max-w-2xl font-[var(--font-space)] text-[clamp(1.6rem,3vw,4rem)] font-light leading-[1.12] text-white/92">
            Cada revelación amplía tu forma de pensar.
          </p>

          <Button
            className="mt-[clamp(2.5rem,5vw,5rem)] px-0 text-[0.95rem] uppercase tracking-[0.28em]"
            variant="quiet"
            onClick={enterLaboratory}
          >
            Entrar
            <ArrowRight size={16} aria-hidden="true" />
          </Button>
        </div>
      </div>
    </section>
  );
}

export default memo(WelcomeScene);

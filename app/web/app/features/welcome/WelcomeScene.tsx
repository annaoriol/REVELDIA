"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { memo, useEffect, useState } from "react";

import { editorialAssets } from "@/app/assets/editorial-assets";
import { useRevealStore } from "@/app/stores/useRevealStore";

function WelcomeScene() {
  const setScene = useRevealStore(
    (state) => state.setScene
  );

  const [showTransition, setShowTransition] =
    useState(false);

  const handleReveal = () => {
    if (showTransition) {
      return;
    }

    setTimeout(() => {
      setShowTransition(true);
    }, 180);
  };

  /*
   * La entrada al laboratorio también puede
   * activarse directamente con Enter.
   *
   * En Bienvenida no existe un campo de escritura,
   * por lo que Enter funciona como acceso rápido
   * al CTA principal.
   */
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        event.key === "Enter" &&
        !showTransition
      ) {
        event.preventDefault();
        handleReveal();
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [showTransition]);

  return (
    <section className="relative min-h-full overflow-hidden rounded-[var(--revela-radius-lg)] bg-black">

      <Image
        src={editorialAssets.welcomeBackground}
        alt="Entrada al laboratorio RƎVELA"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-black/72" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_50%,rgba(3,145,161,.16),transparent_35%)]" />

      <div className="relative z-10 flex min-h-[80vh] items-center px-[clamp(2rem,7vw,8rem)]">

        <div className="max-w-4xl">

          {/* Logo */}

          <h1 className="font-[var(--font-space)] text-[clamp(3.4rem,7vw,8rem)] font-light leading-none tracking-[0.16em] text-white">
            R
            <span className="text-[var(--revela-accent)]">
              Ǝ
            </span>
            VELA
          </h1>

          <p className="mt-4 text-[clamp(.8rem,.9vw,1rem)] uppercase tracking-[0.44em] text-[var(--revela-accent)]">
            Laboratorio Creativo
          </p>

          {/* Claim */}

          <p className="mt-[clamp(4rem,8vw,8rem)] max-w-3xl font-[var(--font-space)] text-[clamp(2rem,4vw,4.6rem)] font-light leading-[1.08] text-white">
            Cada revelación amplía tu forma de crear
          </p>

          {/* CTA */}

          <button
            type="button"
            onClick={handleReveal}
            aria-label="Entrar en RƎVELA"
            className="group mt-[clamp(2.5rem,4vw,3.5rem)] flex items-center gap-3 bg-transparent focus:outline-none focus-visible:ring-1 focus-visible:ring-[var(--revela-accent)] focus-visible:ring-offset-4 focus-visible:ring-offset-black"
          >
            <span className="font-[var(--font-space)] text-[clamp(1.35rem,1.8vw,2rem)] font-light tracking-[0.16em] text-white transition-all duration-300 group-hover:opacity-80">
              R
              <span className="text-[var(--revela-accent)]">
                Ǝ
              </span>
              VELAR
            </span>

            <ArrowRight
              size={26}
              strokeWidth={1.5}
              className="text-[var(--revela-accent)] transition-transform duration-300 group-hover:translate-x-1.5"
            />
          </button>

        </div>

      </div>

      {showTransition && (
        <div className="absolute inset-0 z-50 bg-black">
          <video
            autoPlay
            playsInline
            className="h-full w-full object-cover"
            onEnded={() =>
              setScene("creative-director")
            }
          >
            <source
              src="/videos/transition.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      )}

    </section>
  );
}

export default memo(WelcomeScene);
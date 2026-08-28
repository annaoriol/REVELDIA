"use client";

import Image from "next/image";

import LightTable from "@/app/components/workspace/LightTable";
import SectionTitle from "@/app/components/ui/SectionTitle";
import Button from "@/app/components/ui/Button";
import { useRevealStore } from "@/app/stores/useRevealStore";

export default function LightTableScene() {
  const setScene = useRevealStore(
    (state) => state.setScene
  );
  return (
    <section className="flex min-h-screen flex-col">
      <header className="relative z-40">

        <SectionTitle
          eyebrow="Mesa de Luz"
          title="Relaciones de identidad"
          description=""
        />

        <div className="mt-5 flex items-center gap-2">

          <Button
            variant="ghost"
            onClick={() =>
              setScene("references")
            }
            className="shrink-0 whitespace-nowrap text-cyan-300"
          >
            ＋ Añadir referencias
          </Button>

          <Button
            variant="ghost"
            onClick={() =>
              setScene("references")
            }
            className="shrink-0 whitespace-nowrap"
          >
            Volver a Referencias
          </Button>

        </div>

      </header>

      <div className="relative mt-6 h-[calc(100vh-120px)] overflow-hidden rounded-2xl">
        <Image
  src="/workspace/light-table_.jpeg"
  alt="Mesa de Luz"
  fill
  priority
  sizes="100vw"
  className="object-cover object-center"
/>

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/25 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-black/55 via-black/20 to-transparent pointer-events-none" />

        <div className="absolute inset-0">
          <LightTable />
        </div>
      </div>
    </section>
  );
}
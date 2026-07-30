import Image from "next/image";

import LightTable from "@/app/components/workspace/LightTable";
import SectionTitle from "@/app/components/ui/SectionTitle";

export default function LightTableScene() {
  return (
    <section className="flex min-h-screen flex-col">
      <SectionTitle
  eyebrow="Mesa de Luz"
  title="Relaciones de identidad"
  description=""
/>

      <div className="relative mt-2 h-[calc(100vh-120px)] overflow-hidden rounded-2xl">
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
import LightTable from "@/app/components/workspace/LightTable";
import SectionTitle from "@/app/components/ui/SectionTitle";

export default function LightTableScene() {
  return (
    <section className="flex min-h-full flex-col">
      <SectionTitle
        eyebrow="Mesa de Luz"
        title="Relaciones de identidad"
        description="Un espacio editorial para ordenar ideas, referencias, hallazgos y conexiones antes de revelar la identidad."
      />

      <div className="mt-8 min-h-0 flex-1">
        <LightTable />
      </div>
    </section>
  );
}

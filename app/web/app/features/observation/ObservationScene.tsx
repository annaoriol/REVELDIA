import EmptyState from "@/app/components/ui/EmptyState";
import SectionTitle from "@/app/components/ui/SectionTitle";

export default function ObservationScene() {
  return (
    <section className="mx-auto flex min-h-full w-full max-w-6xl flex-col justify-center py-[clamp(2rem,5vw,6rem)]">
      <SectionTitle
        eyebrow="Observación"
        title="Preguntas que abren criterio"
        description="La observación recoge señales antes de decidir dirección, estilo o producción."
      />

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        <EmptyState
          title="Preguntas"
          description="Espacio preparado para el recorrido de descubrimiento."
        />
        <EmptyState
          title="Evidencias"
          description="Lugar reservado para hallazgos y señales del proyecto."
        />
        <EmptyState
          title="Criterio"
          description="Base para que el Director Creativo relacione conceptos."
        />
      </div>
    </section>
  );
}

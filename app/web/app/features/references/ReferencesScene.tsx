import Card from "@/app/components/ui/Card";
import SectionTitle from "@/app/components/ui/SectionTitle";

const referenceBlocks = [
  "Visual",
  "Narrativo",
  "Cultural",
  "Emocional",
  "Conceptual",
  "Editorial",
] as const;

export default function ReferencesScene() {
  return (
    <section className="mx-auto flex min-h-full w-full max-w-6xl flex-col justify-center py-[clamp(2rem,5vw,6rem)]">
      <SectionTitle
        eyebrow="Referencias"
        title="Comprender sin copiar"
        description="Las referencias ayudan a descubrir patrones. No definen la identidad por sustitución."
      />

      <div className="mt-10 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {referenceBlocks.map((block) => (
          <Card key={block} className="aspect-[4/3] p-5">
            <p className="text-xs uppercase tracking-[0.3em] text-white/35">
              {block}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
}

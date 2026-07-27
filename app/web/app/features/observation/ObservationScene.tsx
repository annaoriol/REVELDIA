"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";

import Button from "@/app/components/ui/Button";
import Card from "@/app/components/ui/Card";
import SectionTitle from "@/app/components/ui/SectionTitle";
import { useRevealStore } from "@/app/stores/useRevealStore";

const observationSchema = z.object({
  question: z
    .string()
    .trim()
    .min(6, "Escribe una pregunta más concreta."),
  answer: z
    .string()
    .trim()
    .min(8, "Registra una observación con más contexto."),
});

type ObservationFormValues = z.infer<typeof observationSchema>;

export default function ObservationScene() {
  const observations = useRevealStore(
    (state) => state.project.dna.observations
  );
  const registerObservation = useRevealStore(
    (state) => state.registerObservation
  );

  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
    setError,
  } = useForm<ObservationFormValues>({
    defaultValues: {
      question: "",
      answer: "",
    },
  });

  function submit(values: ObservationFormValues) {
    const parsed = observationSchema.safeParse(values);

    if (!parsed.success) {
      const issue = parsed.error.issues[0];
      const path = issue?.path[0];

      if (path === "question" || path === "answer") {
        setError(path, {
          type: "manual",
          message: issue.message,
        });
      }

      return;
    }

    registerObservation({
      question: parsed.data.question,
      answer: parsed.data.answer,
      evidenceIds: [],
    });

    reset();
  }

  return (
    <section className="mx-auto flex min-h-full w-full max-w-6xl flex-col justify-center py-[clamp(2rem,5vw,6rem)]">
      <SectionTitle
        eyebrow="Observación"
        title="Preguntas que abren criterio"
        description="La observación recoge señales antes de decidir dirección, estilo o producción."
      />

      <div className="mt-10 grid gap-4 lg:grid-cols-[minmax(0,1.15fr)_minmax(18rem,0.85fr)]">
        <Card className="p-6">
          <form className="space-y-6" onSubmit={handleSubmit(submit)}>
            <div>
              <label
                className="text-xs uppercase tracking-[0.3em] text-white/35"
                htmlFor="observation-question"
              >
                Pregunta
              </label>
              <input
                id="observation-question"
                className="mt-4 w-full border-0 border-b border-white/18 bg-transparent pb-4 text-lg text-white outline-none transition-colors placeholder:text-white/24 focus:border-[var(--revela-accent)]"
                placeholder="¿Qué señal conviene observar?"
                {...register("question")}
              />
              <p
                className="mt-3 min-h-5 text-sm text-[var(--revela-accent)]"
                role="alert"
              >
                {errors.question?.message}
              </p>
            </div>

            <div>
              <label
                className="text-xs uppercase tracking-[0.3em] text-white/35"
                htmlFor="observation-answer"
              >
                Observación
              </label>
              <textarea
                id="observation-answer"
                rows={5}
                className="mt-4 w-full resize-none border-0 border-b border-white/18 bg-transparent pb-4 text-xl font-light leading-relaxed text-white outline-none transition-colors placeholder:text-white/24 focus:border-[var(--revela-accent)]"
                placeholder="Describe el hallazgo sin convertirlo todavía en decisión."
                {...register("answer")}
              />
              <p
                className="mt-3 min-h-5 text-sm text-[var(--revela-accent)]"
                role="alert"
              >
                {errors.answer?.message}
              </p>
            </div>

            <div className="flex justify-end">
              <Button type="submit" variant="quiet">
                Registrar observación
              </Button>
            </div>
          </form>
        </Card>

        <Card className="flex min-h-72 flex-col p-6">
          <p className="text-xs uppercase tracking-[0.3em] text-white/35">
            Observaciones
          </p>

          <div className="mt-5 min-h-0 flex-1 space-y-4 overflow-y-auto">
            {observations.length === 0 ? (
              <p className="max-w-sm text-sm leading-6 text-white/48">
                Las señales registradas aparecerán aquí antes de pasar
                a referencias, criterio y revelación.
              </p>
            ) : (
              observations.map((observation) => (
                <article
                  key={observation.id}
                  className="border-b border-white/10 pb-4 last:border-0 last:pb-0"
                >
                  <p className="text-sm font-medium text-white">
                    {observation.question}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/55">
                    {observation.answer}
                  </p>
                </article>
              ))
            )}
          </div>
        </Card>
      </div>
    </section>
  );
}

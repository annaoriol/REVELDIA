"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";

import Button from "@/app/components/ui/Button";
import SectionTitle from "@/app/components/ui/SectionTitle";
import { useRevealStore } from "@/app/stores/useRevealStore";

const intentionSchema = z.object({
  intention: z
    .string()
    .trim()
    .min(8, "Escribe una intención con más contexto."),
});

type IntentionFormValues = z.infer<typeof intentionSchema>;

export default function IntentionScene() {
  const updateIntention = useRevealStore(
    (state) => state.updateIntention
  );

  const {
    formState: { errors },
    handleSubmit,
    register,
    setError,
  } = useForm<IntentionFormValues>({
    defaultValues: {
      intention: "",
    },
  });

  function submit(values: IntentionFormValues) {
    const parsed = intentionSchema.safeParse(values);

    if (!parsed.success) {
      const issue = parsed.error.issues[0];

      setError("intention", {
        type: "manual",
        message: issue?.message ?? "Revisa la intención.",
      });

      return;
    }

    updateIntention({
      whatToReveal: parsed.data.intention,
      whatToTransmit: "",
      context: "",
    });
  }

  return (
    <section className="mx-auto flex min-h-full w-full max-w-5xl flex-col justify-center py-[clamp(2rem,5vw,6rem)]">
      <SectionTitle
        eyebrow="Intención"
        title="¿Qué quieres revelar?"
        description="La intención abre el laboratorio. Todavía no produce contenido; delimita el territorio creativo."
      />

      <form
        className="mt-[clamp(3rem,6vw,7rem)]"
        onSubmit={handleSubmit(submit)}
      >
        <label className="sr-only" htmlFor="intention">
          Intención del proyecto
        </label>

        <textarea
          id="intention"
          rows={6}
          placeholder="Empieza escribiendo una intención..."
          className="w-full resize-none border-0 border-b border-white/18 bg-transparent pb-6 text-[clamp(1.35rem,2vw,2.5rem)] font-light leading-relaxed text-white outline-none transition-colors duration-200 placeholder:text-white/24 focus:border-[var(--revela-accent)]"
          {...register("intention")}
        />

        <div className="mt-5 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p
            className="min-h-5 text-sm text-[var(--revela-accent)]"
            role="alert"
          >
            {errors.intention?.message}
          </p>

          <Button type="submit" variant="quiet">
            Registrar intención
          </Button>
        </div>
      </form>
    </section>
  );
}

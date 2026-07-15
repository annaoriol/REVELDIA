export default function Workbench() {

  return (

    <section className="flex flex-1 flex-col overflow-hidden bg-[#181818]">

      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-16 py-12">

        <div className="mb-10">

          <p className="text-xs uppercase tracking-[0.30em] text-cyan-400">

            OBSERVACIÓN 01

          </p>

          <h1 className="mt-3 text-4xl font-light">

            ¿Qué te llama la atención?

          </h1>

          <p className="mt-4 max-w-2xl text-white/50 leading-7">

            No respondas rápido.
            Observa primero.
            Después escribe aquello que realmente
            haya despertado tu atención.

          </p>

        </div>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-black">

          <img

            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1400"

            alt="Observación"

            className="aspect-[16/9] w-full object-cover grayscale"

          />

        </div>

        <div className="mt-10">

          <textarea

            placeholder="Escribe aquí lo que observas..."

            className="h-44 w-full resize-none rounded-2xl border border-white/10 bg-[#111111] p-8 text-lg outline-none transition focus:border-cyan-400"

          />

        </div>

      </div>

    </section>

  );

}
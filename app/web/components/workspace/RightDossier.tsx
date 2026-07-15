export default function RightDossier() {

  return (

    <aside className="w-[380px] border-l border-white/10 bg-[#141414] overflow-y-auto">

      <div className="p-8">

        <div className="mb-8">

          <p className="text-[11px] uppercase tracking-[0.25em] text-white/40">

            Dossier

          </p>

          <h2 className="mt-3 text-2xl font-light">

            Cuaderno de trabajo

          </h2>

        </div>

        <div className="space-y-6">

          <section className="rounded-2xl border border-white/10 bg-[#181818] p-5">

            <p className="text-xs uppercase tracking-[0.25em] text-cyan-400">

              Revelación

            </p>

            <p className="mt-4 text-sm leading-7 text-white/70">

              Aquí aparecerán las ideas que el Director considere
              suficientemente importantes para conservar.

            </p>

          </section>

          <section className="rounded-2xl border border-white/10 bg-[#181818] p-5">

            <p className="text-xs uppercase tracking-[0.25em] text-white/40">

              Evidencias

            </p>

            <ul className="mt-4 space-y-3 text-sm text-white/60">

              <li>• Observación pendiente</li>
              <li>• Observación pendiente</li>
              <li>• Observación pendiente</li>

            </ul>

          </section>

          <section className="rounded-2xl border border-white/10 bg-[#181818] p-5">

            <p className="text-xs uppercase tracking-[0.25em] text-white/40">

              Ideas

            </p>

            <div className="mt-4 rounded-xl border border-dashed border-white/10 p-6 text-center text-sm text-white/35">

              Las ideas importantes aparecerán aquí.

            </div>

          </section>

        </div>

      </div>

    </aside>

  );

}
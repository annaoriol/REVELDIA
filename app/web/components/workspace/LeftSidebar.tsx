export default function LeftSidebar() {

  return (

    <aside className="w-[320px] border-r border-white/10 bg-[#141414] overflow-y-auto">

      <div className="p-6 space-y-6">

        <div>

          <p className="text-[11px] uppercase tracking-[0.25em] text-white/40">

            Perspectiva

          </p>

          <div className="mt-3 overflow-hidden rounded-xl border border-white/10">

            <img
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800"
              alt="Esencia"
              className="h-40 w-full object-cover grayscale"
            />

          </div>

          <h2 className="mt-4 text-lg font-medium">

            ESENCIA

          </h2>

          <p className="mt-2 text-sm leading-6 text-white/50">

            Descubrir quién eres antes de decidir cómo comunicar.

          </p>

        </div>

        <div className="border-t border-white/10 pt-6">

          <p className="text-[11px] uppercase tracking-[0.25em] text-white/40">

            Referencias

          </p>

          <div className="mt-4 grid grid-cols-2 gap-3">

            <div className="aspect-square rounded-lg bg-white/5 border border-white/10" />
            <div className="aspect-square rounded-lg bg-white/5 border border-white/10" />
            <div className="aspect-square rounded-lg bg-white/5 border border-white/10" />
            <div className="aspect-square rounded-lg bg-white/5 border border-white/10" />

          </div>

        </div>

        <div className="border-t border-white/10 pt-6">

          <p className="text-[11px] uppercase tracking-[0.25em] text-white/40">

            Material de trabajo

          </p>

          <ul className="mt-4 space-y-3 text-sm text-white/60">

            <li>📷 Fotografías</li>

            <li>🎞 Hojas de contacto</li>

            <li>📓 Libreta</li>

            <li>✂ Tijeras</li>

            <li>📎 Referencias</li>

          </ul>

        </div>

      </div>

    </aside>

  );

}
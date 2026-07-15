export default function TopBar() {

  return (

    <header className="flex h-[72px] items-center justify-between border-b border-white/10 bg-[#141414] px-8">

      <div className="flex items-center gap-4">

        <div className="h-3 w-3 rounded-full bg-cyan-400" />

        <h1 className="text-lg font-medium tracking-[0.25em]">

          RƎVELA

        </h1>

        <span className="text-sm text-white/40">

          Laboratorio Creativo

        </span>

      </div>

      <div className="flex items-center gap-8 text-sm text-white/60">

        <button className="transition hover:text-white">

          Proyecto

        </button>

        <button className="transition hover:text-white">

          Mesa de Luz

        </button>

        <button className="transition hover:text-white">

          Dossier

        </button>

        <button className="transition hover:text-white">

          Perfil

        </button>

      </div>

    </header>

  );

}
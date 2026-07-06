import Logo from "./Logo";

export default function Sidebar() {
  return (
    <aside className="w-72 border-r border-[#2A2A2A] bg-[#111111] px-8 py-10">
      <Logo />

      <nav className="mt-14 space-y-10">
        <section>
          <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[#6A6A6A]">
            ESPACIO
          </p>

          <button className="block text-left text-white transition hover:text-[#0391A1]">
            Personal
          </button>
        </section>

        <section>
          <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[#6A6A6A]">
            LABORATORIO
          </p>

          <div className="space-y-4">
            <button className="block text-left text-neutral-300 transition hover:text-[#0391A1]">
              Identidad
            </button>

            <button className="block text-left text-neutral-300 transition hover:text-[#0391A1]">
              Proyecto
            </button>

            <button className="block text-left text-neutral-300 transition hover:text-[#0391A1]">
              Contenido
            </button>

            <button className="block text-left text-neutral-300 transition hover:text-[#0391A1]">
              Idea
            </button>
          </div>
        </section>

        <section>
          <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[#6A6A6A]">
            EXPLORAR
          </p>

          <div className="space-y-4">
            <button className="block text-left text-neutral-300 transition hover:text-[#0391A1]">
              Recursos
            </button>

            <button className="block text-left text-neutral-300 transition hover:text-[#0391A1]">
              Biblioteca
            </button>
          </div>
        </section>
      </nav>
    </aside>
  );
}
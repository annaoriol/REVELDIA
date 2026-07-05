export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white flex items-center justify-center">
      <div className="max-w-3xl text-center px-8">

        <p className="text-sm uppercase tracking-[0.35em] text-cyan-400 mb-8">
          REVELA
        </p>

        <h1 className="text-6xl font-light leading-tight mb-8">
          La identidad
          <br />
          no se inventa.
          <br />
          <span className="font-semibold">
            Se revela.
          </span>
        </h1>

        <p className="text-xl text-neutral-400 mb-16">
          Laboratorio creativo para descubrir, construir y producir
          comunicación con Inteligencia Artificial.
        </p>

        <button className="rounded-full border border-cyan-400 px-8 py-4 hover:bg-cyan-400 hover:text-black transition">
          ¿Qué quieres revelar?
        </button>

      </div>
    </main>
  );
}
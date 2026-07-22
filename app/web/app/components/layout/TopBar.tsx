export default function TopBar() {
  return (
    <header className="border-b border-[#2A2A2A] bg-[#111111] px-6 py-4 md:px-10 lg:px-12">
      <div className="flex min-h-12 items-center justify-between gap-6">
        <p className="font-[var(--font-space)] text-lg font-light tracking-[0.18em] text-[#0391A1]">
          RƎVELA
        </p>

        <p className="hidden text-xs uppercase tracking-[0.32em] text-[#A3A3A3] sm:block">
          Laboratorio Creativo
        </p>
      </div>
    </header>
  );
}

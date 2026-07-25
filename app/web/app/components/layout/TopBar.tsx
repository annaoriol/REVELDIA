export default function TopBar() {
  return (
    <header className="flex min-h-20 items-center justify-between gap-8 border-b border-white/10 bg-[#090909] px-6 py-4 md:px-10 xl:px-14">
      <div className="min-w-0">
        <p className="text-[11px] uppercase tracking-[0.35em] text-white/35">
          Laboratorio
        </p>

        <h1 className="mt-2 truncate font-[var(--font-space)] text-xl font-light tracking-[0.12em] text-white">
          R<span className="text-[#0391A1]">Ǝ</span>VELA
        </h1>
      </div>

      <div className="hidden items-center gap-4 xl:flex">
        <div className="h-px w-12 bg-white/10" />

        <span className="text-xs uppercase tracking-[0.28em] text-[#0391A1]">
          Workspace Foundation
        </span>

        <div className="h-px w-12 bg-white/10" />
      </div>

      <div className="flex items-center gap-4 text-sm text-white/45 sm:gap-8">
        <span className="hidden sm:inline">Proyecto placeholder</span>
        <span className="text-[#0391A1]">UI-02</span>
      </div>
    </header>
  );
}

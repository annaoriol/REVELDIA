export default function StatusBar() {
  return (
    <footer className="flex min-h-14 flex-col gap-3 border-t border-white/10 bg-[#090909] px-6 py-3 text-xs text-white/45 md:flex-row md:items-center md:justify-between md:px-10 xl:px-14">
      <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
        <span className="uppercase tracking-[0.28em] text-white/30">
          Estado
        </span>
        <span>Workspace visual</span>
      </div>

      <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
        <span>Método placeholder</span>
        <span>Referencias placeholder</span>
        <span>IA placeholder</span>
      </div>
    </footer>
  );
}

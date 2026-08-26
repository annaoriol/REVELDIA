interface Props {
  value: string;
  onChange: (value: string) => void;
  onSearch: () => void;
  loading?: boolean;
}

export default function ReferenceSearch({
  value,
  onChange,
  onSearch,
  loading = false,
}: Props) {
  function handleKeyDown(
    event: React.KeyboardEvent<HTMLInputElement>
  ) {
    if (event.key === "Enter") {
      event.preventDefault();
      onSearch();
    }
  }

  return (
    <div className="mt-8">
      <div className="mb-3">
        <p className="text-[10px] uppercase tracking-[0.35em] text-cyan-300">
          RƎVELA · Búsqueda
        </p>

        <p className="mt-2 text-sm text-white/45">
          Busca una referencia concreta para incorporarla al proceso.
        </p>
      </div>

      <div className="flex gap-3">
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          type="text"
          placeholder="¿Qué referencia buscas?"
          className="min-w-0 flex-1 rounded-xl border border-cyan-400/35 bg-black/45 px-5 py-3 text-white placeholder:text-white/30 outline-none transition focus:border-cyan-300/80"
        />

        <button
          type="button"
          onClick={onSearch}
          disabled={loading || !value.trim()}
          className="shrink-0 rounded-xl border border-cyan-300/50 bg-cyan-300/[0.10] px-5 py-3 text-[10px] uppercase tracking-[0.2em] text-cyan-200 transition hover:bg-cyan-300/[0.18] disabled:cursor-not-allowed disabled:opacity-35"
        >
          {loading ? "Buscando…" : "Buscar"}
        </button>
      </div>
    </div>
  );
}

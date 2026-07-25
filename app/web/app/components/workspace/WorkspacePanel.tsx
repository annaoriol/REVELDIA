import type { ReactNode } from "react";

type WorkspacePanelProps = {
  children: ReactNode;
};

export default function WorkspacePanel({ children }: WorkspacePanelProps) {
  return (
    <main className="min-h-0 overflow-y-auto bg-[#090909] px-6 py-8 md:px-10 xl:px-12">
      <div className="mx-auto flex min-h-full w-full max-w-[1440px] flex-col gap-8">
        <section>
          <p className="text-[11px] uppercase tracking-[0.35em] text-white/35">
            Workspace
          </p>

          <h2 className="mt-3 font-[var(--font-space)] text-3xl font-light tracking-[0.08em] text-white">
            Mesa de Luz
          </h2>
        </section>

        <section className="grid flex-1 gap-6 xl:grid-cols-[minmax(0,1fr)_280px]">
          <div className="min-h-[420px] rounded-2xl border border-white/10 bg-white/[0.025] p-6">
            <p className="text-[11px] uppercase tracking-[0.35em] text-white/35">
              Canvas
            </p>

            <div className="mt-8">{children}</div>
          </div>

          <aside className="rounded-2xl border border-white/10 bg-white/[0.025] p-6">
            <p className="text-[11px] uppercase tracking-[0.35em] text-white/35">
              Cards
            </p>

            <div className="mt-8 space-y-4">
              <div className="rounded-xl border border-dashed border-white/10 p-4 text-sm text-white/45">
                Placeholder de tarjeta
              </div>

              <div className="rounded-xl border border-dashed border-white/10 p-4 text-sm text-white/45">
                Placeholder de tarjeta
              </div>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}

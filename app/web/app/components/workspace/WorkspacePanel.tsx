import type { ReactNode } from "react";

import LightTable from "./LightTable";

type WorkspacePanelProps = {
  children: ReactNode;
};

export default function WorkspacePanel({ children }: WorkspacePanelProps) {
  return (
    <main className="min-h-0 overflow-y-auto bg-[#090909] px-[clamp(1.25rem,2.4vw,3.5rem)] py-[clamp(1.5rem,2.6vw,4rem)]">
      <div className="mx-auto flex min-h-full w-full max-w-[min(100%,1700px)] flex-col">
        <section className="flex min-h-full flex-col rounded-[1.4rem] border border-white/[0.08] bg-white/[0.014] p-[clamp(1.5rem,2.4vw,3.25rem)]">
          <div className="flex flex-col gap-[clamp(1rem,1.8vw,2rem)] pb-[clamp(2rem,3vw,4rem)] md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-[0.35em] text-white/35">
                Workspace
              </p>

              <h2 className="mt-4 font-[var(--font-space)] text-[clamp(1.9rem,2.4vw,3.6rem)] font-light tracking-[0.12em] text-white">
                MESA DE LUZ
              </h2>
            </div>

            <p className="max-w-md text-[clamp(0.82rem,0.8vw,1rem)] leading-7 text-white/42">
              Placeholder de espacio editorial permanente.
            </p>
          </div>

          <LightTable />

          <div className="sr-only">{children}</div>
        </section>
      </div>
    </main>
  );
}

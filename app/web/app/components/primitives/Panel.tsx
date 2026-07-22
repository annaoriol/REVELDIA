import type { ReactNode } from "react";

type PanelProps = {
  children: ReactNode;
  className?: string;
};

export default function Panel({ children, className = "" }: PanelProps) {
  return (
    <section
      className={`border border-[#2A2A2A] bg-[#111111] p-6 ${className}`}
    >
      {children}
    </section>
  );
}

import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({ children, className = "" }: CardProps) {
  return (
    <section
      className={`rounded-2xl border border-[#2A2A2A] bg-[#111111] p-6 ${className}`}
    >
      {children}
    </section>
  );
}

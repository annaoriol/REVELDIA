import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button(props: ButtonProps) {
  return (
    <button
      {...props}
      className={`rounded-full border border-[#0391A1] px-6 py-3 text-sm uppercase tracking-[0.24em] text-[#0391A1] transition-colors hover:bg-[#0391A1] hover:text-black disabled:cursor-not-allowed disabled:opacity-50 ${
        props.className ?? ""
      }`}
    />
  );
}

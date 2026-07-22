import type { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export default function Input(props: InputProps) {
  return (
    <input
      {...props}
      className={`w-full rounded-full border border-[#2A2A2A] bg-[#111111] px-5 py-3 text-white outline-none placeholder:text-[#A3A3A3] focus:border-[#0391A1] ${
        props.className ?? ""
      }`}
    />
  );
}

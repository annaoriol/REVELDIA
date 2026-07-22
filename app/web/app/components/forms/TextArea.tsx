import type { TextareaHTMLAttributes } from "react";

type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

export default function TextArea(props: TextAreaProps) {
  return (
    <textarea
      {...props}
      className={`min-h-32 w-full resize-vertical rounded-2xl border border-[#2A2A2A] bg-[#111111] px-5 py-4 text-white outline-none placeholder:text-[#A3A3A3] focus:border-[#0391A1] ${
        props.className ?? ""
      }`}
    />
  );
}

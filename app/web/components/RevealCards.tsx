"use client";

type RevealCardProps = {
  symbol: string;
  title: string;
  description: string;
  active: boolean;
  onClick: () => void;
};

export default function RevealCard({
  symbol,
  title,
  description,
  active,
  onClick,
}: RevealCardProps) {
  return (
    <button
      onClick={onClick}
      className={`
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        p-8
        text-left
        transition-all
        duration-300

        ${
          active
            ? "border-[#0391A1] bg-[#101618] shadow-[0_0_40px_rgba(3,145,161,.18)]"
            : "border-neutral-800 bg-[#111111] hover:border-[#0391A1]/40 hover:bg-[#161616]"
        }
      `}
    >
      <div
        className="
          absolute
          inset-0
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
          bg-gradient-to-br
          from-[#0391A1]/5
          via-transparent
          to-transparent
        "
      />

      <div className="relative z-10">

        <div
          className="
            text-6xl
            font-extralight
            text-[#0391A1]
            transition-transform
            duration-300
            group-hover:scale-110
          "
        >
          {symbol}
        </div>

        <h3
          className="
            mt-8
            font-[var(--font-space)]
            text-2xl
            font-light
            leading-tight
          "
        >
          {title}
        </h3>

        <p
          className="
            mt-5
            text-sm
            leading-7
            text-neutral-400
          "
        >
          {description}
        </p>

      </div>
    </button>
  );
}
type CardProps = {
  title: string;
  description: string;
  onClick?: () => void;
};

export default function Card({
  title,
  description,
  onClick,
}: CardProps) {
  return (
    <button
      onClick={onClick}
      className="
        group
        w-full
        rounded-2xl
        border
        border-[#2A2A2A]
        bg-[#111111]
        p-8
        text-left
        transition-all
        duration-300
        hover:border-[#0391A1]
        hover:bg-[#161616]
      "
    >
      <h3
        className="
          font-[var(--font-space)]
          text-2xl
          font-semibold
          uppercase
          text-white
          transition-colors
          duration-300
          group-hover:text-[#0391A1]
        "
      >
        {title}
      </h3>

      <p
        className="
          mt-3
          max-w-xl
          text-base
          leading-7
          text-neutral-400
        "
      >
        {description}
      </p>
    </button>
  );
}
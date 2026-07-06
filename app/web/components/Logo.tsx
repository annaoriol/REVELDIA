export default function Logo() {
  return (
    <div className="flex justify-center select-none">
      <div className="flex items-center justify-center">

        {/* R */}
        <span
          className="
            font-[var(--font-space)]
            text-[54px]
            font-bold
            leading-none
            tracking-[0.08em]
            text-[#0391A1]
          "
        >
          R
        </span>

        {/* Espacio */}
        <div className="w-[8px]" />

        {/* Símbolo */}
        <div
          className="
            flex
            h-[44px]
            w-[44px]
            flex-col
            items-center
            justify-center
            rounded-[10px]
            border-[3px]
            border-[#0391A1]
          "
        >
          <div className="h-[6px] w-[24px] rounded-full bg-[#0391A1]" />
          <div className="my-[3px] h-[6px] w-[24px] rounded-full bg-[#0391A1]" />
          <div className="h-[6px] w-[24px] rounded-full bg-[#0391A1]" />
        </div>

        {/* Espacio */}
        <div className="w-[8px]" />

        {/* VELA */}
        <span
          className="
            font-[var(--font-space)]
            text-[54px]
            font-bold
            leading-none
            tracking-[0.08em]
            text-[#0391A1]
          "
        >
          VELA
        </span>

      </div>
    </div>
  );
}
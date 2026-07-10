"use client";

type AnswerFieldProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function AnswerField({
  value,
  onChange,
}: AnswerFieldProps) {
  return (
    <div className="w-full">

      <div className="mb-8">

        <p
          className="
            text-[13px]
            uppercase
            tracking-[0.45em]
            text-neutral-600
          "
        >
          REFLEXIÓN
        </p>

      </div>

      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={5}
        placeholder="Empieza a escribir lo primero que has percibido..."
        className="
          w-full
          resize-none
          border-0
          border-b
          border-neutral-700
          bg-transparent
          pb-6

          font-[var(--font-inter)]
          text-[24px]
          leading-[1.9]

          text-white

          placeholder:text-neutral-700

          outline-none

          transition-all
          duration-700

          focus:border-[#00B5CC]
        "
      />

      <div className="mt-5 flex justify-between">

        <p
          className="
            text-sm
            tracking-[0.10em]
            text-neutral-700
          "
        >
          No existen respuestas correctas.
        </p>

        <p
          className={`
            text-sm
            transition-all
            duration-500

            ${
              value.length > 0
                ? "text-[#00B5CC]"
                : "text-neutral-700"
            }
          `}
        >
          {value.length} caracteres
        </p>

      </div>

    </div>
  );
}
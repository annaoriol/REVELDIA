"use client";

import { useEffect, useMemo, useState } from "react";

import { useProject } from "@/context/ProjectContext";
import { useConversation } from "@/context/ConversationContext";

import { LaboratoryEngine } from "@/src/application/laboratory/LaboratoryEngine";

export default function MentorPanel() {
  const { project } = useProject();

  const {
    messages,
    initialize,
    submitAnswer,
  } = useConversation();

  const [answer, setAnswer] = useState("");

  const laboratory = useMemo(
    () => new LaboratoryEngine(project),
    [project]
  );

  useEffect(() => {
    if (messages.length > 0) return;

    const firstQuestion =
      laboratory.firstQuestion();

    if (firstQuestion) {
      initialize(firstQuestion);
    }
  }, [
    project.id,
    laboratory,
    messages.length,
    initialize,
  ]);

  function send() {
    const text = answer.trim();

    if (!text) return;

    submitAnswer(text);

    setAnswer("");
  }

  function handleKeyDown(
    event: React.KeyboardEvent<HTMLInputElement>
  ) {
    if (event.key === "Enter") {
      send();
    }
  }

  return (
    <div
      className="
        absolute
        inset-0
        flex
        items-center
        justify-center
        pointer-events-none
      "
    >
      <div
        className="
          w-[min(760px,calc(100vw-2rem))]
          max-w-[calc(100vw-2rem)]
          lg:max-w-[calc(100vw-34rem)]
          xl:max-w-[calc(100vw-45rem)]
          rounded-[1.5rem]
          border
          border-white/10
          bg-black/42
          backdrop-blur-3xl
          shadow-[0_24px_70px_rgba(0,0,0,.36)]
          px-[clamp(1.5rem,3vw,3.5rem)]
          py-[clamp(1.75rem,3vw,3rem)]
        "
      >
        <p
          className="
            text-[clamp(0.68rem,0.72vw,0.78rem)]
            uppercase
            tracking-[0.40em]
            text-[#55C1D4]
          "
        >
          {laboratory.context()?.specialist.name}
        </p>

        <div className="mt-[clamp(1.5rem,2.4vw,2rem)] max-h-[min(34vh,340px)] space-y-6 overflow-y-auto">
          {messages.map((message) => (
            <div key={message.id}>
              <p
                className={
                  message.role === "mentor"
                    ? "text-[clamp(1.35rem,2vw,1.9rem)] font-light leading-relaxed text-white"
                    : "text-[clamp(1rem,1.25vw,1.25rem)] leading-relaxed text-white/80"
                }
              >
                {message.content}
              </p>
            </div>
          ))}
        </div>

        <div
          className="
            mt-[clamp(1.75rem,3vw,3rem)]
            rounded-2xl
            border
            border-white/10
            bg-black/30
            px-[clamp(1rem,1.7vw,1.5rem)]
            py-[clamp(0.9rem,1.5vw,1.25rem)]
          "
        >
          <input
            value={answer}
            onChange={(e) =>
              setAnswer(e.target.value)
            }
            onKeyDown={handleKeyDown}
            placeholder="Escribe aquí tu respuesta..."
            className="
              w-full
              bg-transparent
              text-[clamp(1rem,1vw,1.125rem)]
              text-white
              outline-none
              placeholder:text-white/30
              pointer-events-auto
            "
          />
        </div>
      </div>
    </div>
  );
}

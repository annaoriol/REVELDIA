"use client";

import { useEffect, useState } from "react";

import { useProject } from "@/context/ProjectContext";
import { useConversation } from "@/context/ConversationContext";

import { LaboratoryEngine } from "@/core/LaboratoryEngine";

export default function MentorPanel() {
  const { project } = useProject();

  const {
    messages,
    initialize,
    submitAnswer,
  } = useConversation();

  const [answer, setAnswer] = useState("");

  const laboratory =
    new LaboratoryEngine(project);

  useEffect(() => {
    if (messages.length > 0) return;

    const firstQuestion =
      laboratory.firstQuestion();

    if (firstQuestion) {
      initialize(firstQuestion);
    }
  }, [
    project.id,
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
          w-[760px]
          max-w-[78vw]
          rounded-3xl
          border
          border-white/10
          bg-black/45
          backdrop-blur-3xl
          shadow-[0_30px_80px_rgba(0,0,0,.45)]
          px-14
          py-12
        "
      >
        <p
          className="
            text-xs
            uppercase
            tracking-[0.40em]
            text-[#55C1D4]
          "
        >
          {laboratory.context()?.specialist.name}
        </p>

        <div className="mt-8 space-y-6 max-h-[340px] overflow-y-auto">
          {messages.map((message) => (
            <div key={message.id}>
              <p
                className={
                  message.role === "mentor"
                    ? "text-3xl font-light leading-relaxed text-white"
                    : "text-xl leading-relaxed text-white/80"
                }
              >
                {message.content}
              </p>
            </div>
          ))}
        </div>

        <div
          className="
            mt-12
            rounded-2xl
            border
            border-white/10
            bg-black/30
            px-6
            py-5
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
              text-lg
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
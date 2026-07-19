"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  ReactNode,
} from "react";

import { useProject } from "@/context/ProjectContext";

import { registerObservation } from "@/core/ObservationEngine";
import { LaboratoryEngine } from "@/core/LaboratoryEngine";

import { Observation } from "@/types/observation";

export interface ConversationMessage {
  id: string;
  role: "mentor" | "user";
  content: string;
}

interface ConversationContextValue {
  messages: ConversationMessage[];

  initialize: (question: string) => void;

  submitAnswer: (answer: string) => void;

  reset: () => void;
}

const ConversationContext =
  createContext<ConversationContextValue | null>(null);

export function ConversationProvider({
  children,
}: {
  children: ReactNode;
}) {
  const { project, updateProject } =
    useProject();

  const [messages, setMessages] =
    useState<ConversationMessage[]>([]);

  function initialize(question: string) {
    setMessages((previous) => {
      const last =
        previous[previous.length - 1];

      if (
        last &&
        last.role === "mentor" &&
        last.content === question
      ) {
        return previous;
      }

      return [
        ...previous,
        {
          id: crypto.randomUUID(),
          role: "mentor",
          content: question,
        },
      ];
    });
  }

  function submitAnswer(answer: string) {
    const text = answer.trim();

    if (!text) return;

    const laboratory =
      new LaboratoryEngine(project);

    const context =
      laboratory.context();

    if (!context) {
      return;
    }

    const lastMentor =
      [...messages]
        .reverse()
        .find(
          (message) =>
            message.role === "mentor"
        );

    const observation: Omit<
      Observation,
      "keywords" | "confidence"
    > = {
      id: crypto.randomUUID(),

      laboratory:
        context.area.id as Observation["laboratory"],

      image: "",

      question:
        lastMentor?.content ?? "",

      answer: text,

      createdAt:
        new Date().toISOString(),
    };

    updateProject((current) =>
      registerObservation(
        current,
        observation
      )
    );

    setMessages((previous) => [
      ...previous,
      {
        id: crypto.randomUUID(),
        role: "user",
        content: text,
      },
    ]);
  }

  function reset() {
    setMessages([]);
  }

  const value = useMemo(
    () => ({
      messages,
      initialize,
      submitAnswer,
      reset,
    }),
    [messages]
  );

  return (
    <ConversationContext.Provider
      value={value}
    >
      {children}
    </ConversationContext.Provider>
  );
}

export function useConversation() {
  const context =
    useContext(ConversationContext);

  if (!context) {
    throw new Error(
      "useConversation debe utilizarse dentro de ConversationProvider"
    );
  }

  return context;
}
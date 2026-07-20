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
import { updateDossier } from "@/core/DossierEngine";
import { LaboratoryEngine } from "@/core/LaboratoryEngine";

import { Observation } from "@/types/observation";
import { Project } from "@/types/project";

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
  createContext<ConversationContextValue | null>(
    null
  );

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

    const lastMentor =
      [...messages]
        .reverse()
        .find(
          (message) =>
            message.role === "mentor"
        );

    let updatedProject: Project | null =
      null;

    updateProject((current) => {
      const laboratory =
        new LaboratoryEngine(current);

      const context =
        laboratory.context();

      if (!context) {
        updatedProject = current;
        return current;
      }

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

      const withObservation =
        registerObservation(
          current,
          observation
        );

      updatedProject =
        updateDossier(
          withObservation
        );

      return updatedProject;
    });

    const nextQuestion =
      updatedProject
        ? new LaboratoryEngine(
            updatedProject
          ).nextQuestion()
        : null;

    setMessages((previous) => {
      const updated: ConversationMessage[] =
        [
          ...previous,
          {
            id: crypto.randomUUID(),
            role: "user",
            content: text,
          },
        ];

      if (nextQuestion) {
        updated.push({
          id: crypto.randomUUID(),
          role: "mentor",
          content: nextQuestion,
        });
      }

      return updated;
    });
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
    useContext(
      ConversationContext
    );

  if (!context) {
    throw new Error(
      "useConversation debe utilizarse dentro de ConversationProvider"
    );
  }

  return context;
}
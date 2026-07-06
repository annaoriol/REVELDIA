"use client";

import Logo from "./Logo";
import Card from "./ui/Card";

export default function LaboratorioScreen() {
  return (
    <main className="min-h-screen bg-[#090909]">

      <div className="mx-auto flex max-w-6xl flex-col px-8 py-12">

        {/* Logo */}

        <div className="mb-14 flex justify-center">
          <Logo />
        </div>

        {/* Cabecera */}

        <div className="mb-16 text-center">

          <p className="mb-5 font-[var(--font-space)] text-sm uppercase tracking-[0.45em] text-[#0391A1]">
            LABORATORIO CREATIVO
          </p>

          <h1 className="font-[var(--font-space)] text-5xl font-semibold uppercase text-white">
            ¿QUÉ QUIERES REVELAR?
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-neutral-400">
            Elige el punto de partida. Los especialistas te acompañarán durante
            todo el proceso creativo.
          </p>

        </div>

        {/* Tarjetas */}

        <div className="grid gap-6 md:grid-cols-2">

          <Card
            title="IDENTIDAD"
            description="Descubre la esencia de una marca, define sus valores, personalidad, posicionamiento y propósito."
          />

          <Card
            title="PROYECTO"
            description="Convierte una idea en un proyecto sólido con objetivos, estructura y estrategia."
          />

          <Card
            title="CONTENIDO"
            description="Diseña publicaciones, campañas y narrativas coherentes con tu identidad."
          />

          <Card
            title="ESTRATEGIA"
            description="Analiza, planifica y construye un sistema de comunicación con visión a largo plazo."
          />

          <Card
            title="EDITOR"
            description="Desarrolla piezas audiovisuales, storytelling y dirección creativa."
          />

          <Card
            title="OTRO"
            description="Empieza desde una idea abierta y deja que el Laboratorio te guíe."
          />

        </div>

      </div>

    </main>
  );
}
"use client";

import MentorPanel from "./MentorPanel";

export default function Workbench() {
  return (
    <>
      {/* Fondo */}

      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/workspace/desk.png')",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      />

      {/* Oscurece ligeramente toda la mesa */}

      <div className="absolute inset-0 bg-black/35" />

      {/* Viñeteado */}

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, rgba(0,0,0,0) 28%, rgba(0,0,0,.35) 100%)",
        }}
      />

      {/* Degradado superior */}

      <div
        className="absolute top-0 left-0 right-0 h-40"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,.45), rgba(0,0,0,0))",
        }}
      />

      {/* Degradado inferior */}

      <div
        className="absolute bottom-0 left-0 right-0 h-56"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,.55), rgba(0,0,0,0))",
        }}
      />

      <MentorPanel />
    </>
  );
}
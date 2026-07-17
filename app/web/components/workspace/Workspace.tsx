"use client";

import TopBar from "./TopBar";
import LeftSidebar from "./LeftSidebar";
import Workbench from "./Workbench";
import RightDossier from "./RightDossier";
import Filmstrip from "./Filmstrip";

export default function Workspace() {
  return (
    <main className="relative h-screen w-screen overflow-hidden bg-[#090909] text-white">

      {/* Imagen de fondo */}
      <Workbench />

      {/* Barra superior */}
      <header
        className="absolute left-0 right-0 z-40"
        style={{
          top: "22px",
          paddingLeft: "24px",
          paddingRight: "24px",
        }}
      >
        <TopBar />
      </header>

      {/* Panel izquierdo */}
      <aside
        className="absolute z-30"
        style={{
          top: "108px",
          left: "24px",
          width: "320px",
          bottom: "170px",
        }}
      >
        <LeftSidebar />
      </aside>

      {/* Panel derecho */}
      <aside
        className="absolute z-30"
        style={{
          top: "108px",
          right: "24px",
          width: "320px",
          bottom: "170px",
        }}
      >
        <RightDossier />
      </aside>

      {/* Filmstrip */}
      <section
        className="absolute left-0 right-0 z-30"
        style={{
          bottom: "20px",
          height: "150px",
          paddingLeft: "60px",
          paddingRight: "60px",
        }}
      >
        <Filmstrip />
      </section>

    </main>
  );
}
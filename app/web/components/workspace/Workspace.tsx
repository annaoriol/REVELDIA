"use client";

import TopBar from "./TopBar";
import LeftSidebar from "./LeftSidebar";
import Workbench from "./Workbench";
import RightDossier from "./RightDossier";
import Filmstrip from "./Filmstrip";

export default function Workspace() {
  return (
    <main className="relative h-dvh w-screen overflow-hidden bg-[#090909] text-white">

      {/* Imagen de fondo */}
      <Workbench />

      {/* Barra superior */}
      <header
        className="absolute left-0 right-0 z-40"
        style={{
          top: "clamp(14px, 2.1vh, 22px)",
          paddingLeft: "clamp(14px, 2vw, 24px)",
          paddingRight: "clamp(14px, 2vw, 24px)",
        }}
      >
        <TopBar />
      </header>

      {/* Panel izquierdo */}
      <aside
        className="absolute z-30 hidden lg:block"
        style={{
          top: "clamp(90px, 11vh, 108px)",
          left: "clamp(14px, 2vw, 24px)",
          width: "clamp(240px, 18vw, 320px)",
          bottom: "clamp(126px, 17vh, 170px)",
        }}
      >
        <LeftSidebar />
      </aside>

      {/* Panel derecho */}
      <aside
        className="absolute z-30 hidden xl:block"
        style={{
          top: "clamp(90px, 11vh, 108px)",
          right: "clamp(14px, 2vw, 24px)",
          width: "clamp(260px, 19vw, 320px)",
          bottom: "clamp(126px, 17vh, 170px)",
        }}
      >
        <RightDossier />
      </aside>

      {/* Filmstrip */}
      <section
        className="absolute left-0 right-0 z-30"
        style={{
          bottom: "clamp(12px, 2vh, 20px)",
          height: "clamp(110px, 15vh, 150px)",
          paddingLeft: "clamp(14px, 4vw, 60px)",
          paddingRight: "clamp(14px, 4vw, 60px)",
        }}
      >
        <Filmstrip />
      </section>

    </main>
  );
}

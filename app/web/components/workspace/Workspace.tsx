"use client";

import TopBar from "./TopBar";
import LeftSidebar from "./LeftSidebar";
import Workbench from "./Workbench";
import RightDossier from "./RightDossier";
import Filmstrip from "./Filmstrip";
import BottomToolbar from "./BottomToolbar";

export default function Workspace() {

  return (

    <main className="h-screen w-screen overflow-hidden bg-[#111111] text-white">

      <div className="flex h-full flex-col">

        <TopBar />

        <div className="flex flex-1 overflow-hidden">

          <LeftSidebar />

          <Workbench />

          <RightDossier />

        </div>

        <Filmstrip />

        <BottomToolbar />

      </div>

    </main>

  );

}
"use client";

import {
  FolderOpen,
  LayoutGrid,
  BookOpen,
  Search,
  Bell,
  Menu,
} from "lucide-react";

export default function TopBar() {
  return (
    <header
      className="
        workspace-panel
        h-full
        w-full
      "
    >
      <div className="flex h-full items-center justify-between px-8">

        {/* LOGO */}

        <div className="flex items-center gap-6">

          <h1
            className="
              text-[15px]
              font-light
              tracking-[0.18em]
              text-[#55C1D4]
              leading-none
            "
          >
            RƎVELA
          </h1>

          <span
            className="
              hidden
              xl:block
              text-[12px]
              uppercase
              tracking-[0.42em]
              text-white/45
            "
          >
            LABORATORIO CREATIVO
          </span>

        </div>

        {/* MENÚ */}

        <nav
          className="
            hidden
            lg:flex
            items-center
            gap-10
          "
        >

          <button
            className="
              flex
              items-center
              gap-3
              rounded-xl
              px-5
              py-3
              text-[15px]
              text-white/75
              transition
              hover:bg-white/5
              hover:text-white
            "
          >
            <FolderOpen size={18} />
            Proyecto
          </button>

          <button
            className="
              flex
              items-center
              gap-3
              rounded-xl
              px-5
              py-3
              text-[17px]
              text-white/75
              transition
              hover:bg-white/5
              hover:text-white
            "
          >
            <LayoutGrid size={20} />
            Mesa de Luz
          </button>

          <button
            className="
              flex
              items-center
              gap-3
              rounded-xl
              px-5
              py-3
              text-[17px]
              text-white/75
              transition
              hover:bg-white/5
              hover:text-white
            "
          >
            <BookOpen size={20} />
            Dossier
          </button>

        </nav>

        {/* DERECHA */}

        <div className="flex items-center gap-4">

          <div
            className="
              hidden
              xl:flex
              items-center
              gap-3
              rounded-full
              border
              border-white/10
              bg-white/5
              px-5
              py-3
            "
          >

            <Search
              size={18}
              className="text-white/50"
            />

            <input
              placeholder="Buscar..."
              className="
                w-[180px]
                bg-transparent
                text-[15px]
                outline-none
                placeholder:text-white/35
              "
            />

          </div>

          <button
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-white/5
              transition
              hover:bg-white/10
            "
          >
            <Bell
              size={18}
              className="text-white/70"
            />
          </button>

          <button
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-[#55C1D4]
              text-[14px]
              font-medium
              text-[#55C1D4]
            "
          >
            AO
          </button>

          <button
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-white/5
              transition
              hover:bg-white/10
            "
          >
            <Menu
              size={20}
              className="text-white/70"
            />
          </button>

        </div>

      </div>
    </header>
  );
}
import type { ReactNode } from "react";

import Sidebar from "../navigation/Sidebar";
import StatusBar from "./StatusBar";
import TopBar from "./TopBar";

type AppShellProps = {
  children: ReactNode;
  showTopBar?: boolean;
  showStatusBar?: boolean;
};

export default function AppShell({
  children,
  showTopBar = true,
  showStatusBar = true,
}: AppShellProps) {
  return (
    <div className="min-h-screen overflow-hidden bg-[#090909] text-white">
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-[320px_minmax(0,1fr)]">
        <Sidebar />

        <div className="flex min-h-screen min-w-0 flex-col">
          {showTopBar && <TopBar />}

          <main className="flex-1 overflow-y-auto px-8 py-8 lg:px-16 lg:py-12">
            <div className="mx-auto w-full max-w-[1800px]">
              {children}
            </div>
          </main>

          {showStatusBar && <StatusBar />}
        </div>
      </div>
    </div>
  );
}
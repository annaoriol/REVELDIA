import type { ReactNode } from "react";

import Sidebar from "../navigation/Sidebar";
import StatusBar from "./StatusBar";
import TopBar from "./TopBar";

type AppShellProps = {
  children: ReactNode;
};

export default function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-screen bg-[#090909] text-white">
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-[280px_1fr]">
        <Sidebar />

        <div className="flex min-h-screen flex-col">
          <TopBar />

          <main className="flex-1 overflow-auto px-6 py-8 md:px-10 lg:px-12">
            {children}
          </main>

          <StatusBar />
        </div>
      </div>
    </div>
  );
}

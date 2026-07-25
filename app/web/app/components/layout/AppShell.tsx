import type { ReactNode } from "react";

import Sidebar from "../navigation/Sidebar";
import ReferencesPanel from "../workspace/ReferencesPanel";
import WorkspacePanel from "../workspace/WorkspacePanel";
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
    <div className="flex min-h-screen flex-col overflow-hidden bg-[#090909] text-white">
      {showTopBar && <TopBar />}

      <div className="grid min-h-0 flex-1 grid-cols-1 overflow-hidden lg:grid-cols-[280px_minmax(0,1fr)_320px]">
        <Sidebar />

        <WorkspacePanel>{children}</WorkspacePanel>

        <ReferencesPanel />
      </div>

      {showStatusBar && <StatusBar />}
    </div>
  );
}

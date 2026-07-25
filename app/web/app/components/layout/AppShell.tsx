import type { ReactNode } from "react";

import Inspector from "../panels/Inspector";
import Sidebar from "../navigation/Sidebar";
import Workspace from "../workspace/Workspace";
import Footer from "./Footer";
import Header from "./Header";

type AppShellProps = {
  children?: ReactNode;
  showTopBar?: boolean;
  showStatusBar?: boolean;
};

export default function AppShell({
  children,
  showTopBar = true,
  showStatusBar = true,
}: AppShellProps) {
  return (
    <div className="flex h-dvh min-h-dvh max-h-dvh flex-col overflow-hidden bg-[var(--revela-background)] text-[var(--revela-text)]">
      {showTopBar && <Header />}

      <div className="grid min-h-0 flex-1 grid-cols-1 grid-rows-[auto_minmax(0,1fr)_auto] overflow-hidden lg:grid-cols-[clamp(15rem,18vw,18rem)_minmax(0,1fr)_clamp(17rem,22vw,22rem)] lg:grid-rows-1">
        <Sidebar />

        <Workspace>{children}</Workspace>

        <Inspector />
      </div>

      {showStatusBar && <Footer />}
    </div>
  );
}

import Sidebar from "./Sidebar";

type AppShellProps = {
  children: React.ReactNode;
};

export default function AppShell({ children }: AppShellProps) {
  return (
    <div className="flex min-h-screen bg-neutral-950 text-white">
      <Sidebar />

      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  );
}
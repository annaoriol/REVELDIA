"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { ReactNode } from "react";
import { memo } from "react";

import SceneRenderer from "@/app/features/SceneRenderer";
import { useRevealStore } from "@/app/stores/useRevealStore";

export interface WorkspaceProps {
  children?: ReactNode;
}

function Workspace({ children }: WorkspaceProps) {
  const activeSceneId = useRevealStore(
    (state) => state.scene.activeSceneId
  );

  return (
    <main className="relative min-h-0 overflow-hidden bg-[var(--revela-workspace)]">
      <div className="pointer-events-none absolute inset-0 opacity-[0.045] [background-image:url('/images/home/editorial.jpg')] [background-position:center] [background-size:cover]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.055),transparent_58%)]" />

      <div className="relative h-full overflow-y-auto px-[clamp(1rem,2.4vw,3rem)] py-[clamp(1rem,2.4vw,3rem)]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSceneId}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="min-h-full"
          >
            {children ?? <SceneRenderer />}
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
}

export default memo(Workspace);

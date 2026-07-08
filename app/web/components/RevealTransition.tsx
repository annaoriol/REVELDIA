"use client";

import { useEffect, useRef } from "react";

type Props = {
  onFinished: () => void;
};

export default function RevealTransition({
  onFinished,
}: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    videoRef.current?.play();
  }, []);

  return (
    <main className="fixed inset-0 z-[9999] bg-black">

      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        preload="auto"
        onEnded={onFinished}
        className="h-screen w-screen object-cover"
      >
        <source
          src="/videos/transition.mp4"
          type="video/mp4"
        />
      </video>

    </main>
  );
}
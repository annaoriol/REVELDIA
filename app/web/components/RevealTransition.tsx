"use client";

export default function RevealTransition() {
  return (
    <div className="fixed inset-0 z-50 bg-black">

      <video
        autoPlay
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/darkroom.mp4" type="video/mp4" />
      </video>

    </div>
  );
}
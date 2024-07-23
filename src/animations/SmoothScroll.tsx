"use client";

import ReactLenis from "lenis/react";
interface ReactChildrenProps {
    children: React.ReactNode;
}
export default function SmoothScroll({ children }: ReactChildrenProps) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.05,
      }}
    >
      {children}
    </ReactLenis>
  );
}

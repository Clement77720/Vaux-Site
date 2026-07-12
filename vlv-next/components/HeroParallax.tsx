"use client";

import { useEffect, useRef } from "react";

/**
 * Full-bleed hero background image that drifts with the pointer for a subtle
 * "wow" parallax. Movement is eased via requestAnimationFrame (lerp) so it
 * glides rather than snapping, and is disabled for prefers-reduced-motion.
 * The image is over-scaled so no edges are ever revealed while it travels.
 */
export default function HeroParallax({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  const imgRef = useRef<HTMLImageElement>(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const MAX = 26; // px of travel from centre, each axis

    const onMove = (e: MouseEvent) => {
      target.current.x = -(e.clientX / window.innerWidth - 0.5) * 2 * MAX;
      target.current.y = -(e.clientY / window.innerHeight - 0.5) * 2 * MAX;
    };

    const tick = () => {
      current.current.x += (target.current.x - current.current.x) * 0.07;
      current.current.y += (target.current.y - current.current.y) * 0.07;
      const el = imgRef.current;
      if (el) {
        el.style.transform = `scale(1.16) translate3d(${current.current.x}px, ${current.current.y}px, 0)`;
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className="absolute inset-0">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        style={{ transform: "scale(1.16)" }}
        className="w-full h-full object-cover will-change-transform"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#141912]/20 via-[#141912]/25 to-[#0f140c]/[0.82]" />
    </div>
  );
}

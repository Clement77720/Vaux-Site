"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";

const points = [
  {
    num: "Point 01",
    title: "Le Vestibule",
    text: "Le regard s'engage dès l'entrée, guidé par l'enfilade des salons vers l'horizon des jardins.",
  },
  {
    num: "Point 02",
    title: "Le Bassin du Miroir",
    text: "Les parterres de broderies et le grand miroir d'eau reflètent la façade sud dans un jeu de symétrie parfaite.",
  },
  {
    num: "Point 03",
    title: "Le Grand Canal",
    text: "Invisible depuis le château, il n'apparaît qu'à l'approche — une illusion d'optique calculée par Le Nôtre.",
  },
  {
    num: "Point 04",
    title: "L'Hercule",
    text: "À deux kilomètres, la statue ferme la perspective et referme la promenade philosophique du domaine.",
  },
];

export default function AxisSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(-1);

  useEffect(() => {
    function update() {
      const el = sectionRef.current;
      const fill = fillRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = rect.height;
      let progress = (vh - rect.top) / (total + vh * 0.3);
      progress = Math.max(0, Math.min(1, progress));
      if (fill) fill.style.height = progress * 100 + "%";

      let current = -1;
      points.forEach((_, i) => {
        const pr = points.length <= 1 ? 0 : i / (points.length - 1);
        if (progress >= pr - 0.02) current = i;
      });
      setActive(current);
    }
    update();
    window.addEventListener("scroll", update);
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <section className="bg-navy text-cream py-20 md:py-[150px] relative overflow-hidden">
      <div className="max-w-[1180px] mx-auto px-5 md:px-10">
        <Reveal className="max-w-[640px] mx-auto mb-16 md:mb-24 md:text-center">
          <span className="font-ui text-[.68rem] tracking-[.22em] uppercase text-goldLight">
            La Signature de Le Nôtre
          </span>
          <h2 className="font-display font-semibold text-[clamp(1.6rem,6.5vw,2.6rem)] leading-tight mt-3">
            Un seul axe, quatre kilomètres de perspective
          </h2>
          <p className="font-ui font-light text-cream/70 mt-4 leading-relaxed text-[.92rem]">
            Le Nôtre organise l&apos;ensemble du domaine autour d&apos;une ligne
            unique — du vestibule du château jusqu&apos;à la statue d&apos;Hercule,
            loin au sud. Faites défiler pour suivre cet axe fondateur.
          </p>
        </Reveal>
      </div>

      {/* Vertical timeline: a single left-hand gold rail that fills on scroll,
          with each point laid out as a full-width card to its right. Robust
          at every breakpoint — the text column always keeps the remaining
          width, so it can never be squeezed. */}
      <div ref={sectionRef} className="relative max-w-[680px] mx-auto px-5">
        <div className="relative">
          {/* Continuous rail at x = 7px; the gold fill grows with scroll. */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-goldLight/20">
            <div
              ref={fillRef}
              style={{ height: "0%" }}
              className="absolute left-0 top-0 w-full bg-goldLight transition-[height] duration-100 ease-linear"
            />
          </div>

          <div className="flex flex-col gap-8 md:gap-14">
            {points.map((p, i) => {
              const isActive = active === i;
              return (
                <div key={p.num} className="relative flex gap-5 md:gap-8">
                  {/* Fixed-width marker column; the dot sits on the rail. */}
                  <div className="relative w-[15px] shrink-0">
                    <span
                      className={`absolute left-[7px] -translate-x-1/2 top-[6px]
                        w-[13px] h-[13px] rounded-full border border-goldLight
                        transition-all duration-300 ${
                          isActive
                            ? "bg-goldLight shadow-[0_0_0_8px_rgba(216,193,147,0.15)]"
                            : "bg-navy"
                        }`}
                    />
                  </div>

                  {/* Text column always keeps the remaining width. */}
                  <div
                    className={`flex-1 min-w-0 rounded-md px-5 py-5 md:px-6 md:py-6 transition-colors duration-500 ${
                      isActive
                        ? "bg-goldLight/[.07] ring-1 ring-goldLight/25"
                        : "bg-white/[.03] ring-1 ring-white/5"
                    }`}
                  >
                    <span className="font-ui text-[.66rem] tracking-[.18em] text-gold uppercase flex items-center gap-2.5">
                      <span className="w-4 h-px bg-gold inline-block" />
                      {p.num}
                    </span>
                    <h3 className="font-display font-semibold text-[1.35rem] md:text-2xl mt-2 mb-2">
                      {p.title}
                    </h3>
                    <p className="font-ui font-light text-[.9rem] text-cream/70 leading-relaxed">
                      {p.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

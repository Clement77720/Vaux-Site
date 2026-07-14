"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const F = (name: string) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${name}`;

/** Aspect ratio (w/h) of the aerial, used until the real image reports its
 *  natural size. Keeps hotspots roughly placed on first paint / when the
 *  external image can't load. */
const IMG_ASPECT_FALLBACK = 1.6;

type Geom = { ox: number; oy: number; rw: number; rh: number };

export type HeroPoint = {
  id: string;
  /** Position as a percentage of the image box (0–100). Tune with ?spots=edit. */
  x: number;
  y: number;
  title: string;
  tag?: string;
  desc: string;
  img: string;
  imgAlt: string;
};

/**
 * Points of interest laid over the aerial hero. Coordinates are a first pass
 * estimated from the reference photo — open the home page with ?spots=edit and
 * click the image to read exact percentages, then paste them here.
 */
export const heroPoints: HeroPoint[] = [
  {
    id: "cour",
    x: 52,
    y: 9,
    title: "La Cour d'Honneur",
    tag: "L'entrée",
    desc: "Passé la grille d'honneur, l'avenue et les communs encadrent la première perspective, dans l'axe du château.",
    img: F("0%20Vaux-le-Vicomte%20-%20Fa%C3%A7ade%20nord%20du%20ch%C3%A2teau%20(2).JPG"),
    imgAlt: "Façade nord du château",
  },
  {
    id: "communs",
    x: 39,
    y: 16,
    title: "Les Communs",
    tag: "Musée des Équipages",
    desc: "Les anciennes écuries abritent aujourd'hui une collection rare de carrosses, berlines et attelages d'époque.",
    img: F("0%20Vaux-le-Vicomte%20-%20Fa%C3%A7ade%20nord%20du%20ch%C3%A2teau%20(2).JPG"),
    imgAlt: "Les communs du domaine",
  },
  {
    id: "chateau",
    x: 49,
    y: 30,
    title: "Le Château",
    tag: "Le Vau · Le Brun",
    desc: "Coiffé de son dôme, le château domine les douves. Son grand salon ovale relie le vestibule à la perspective des jardins.",
    img: F("Ch%C3%A2teau%20de%20Vaux-le-Vicomte%20-%20Grand%20salon%202.JPG"),
    imgAlt: "Le Grand Salon du château",
  },
  {
    id: "parterres",
    x: 35,
    y: 38,
    title: "Les Parterres de Broderie",
    tag: "André Le Nôtre",
    desc: "Buis taillés en arabesques, allées de sable et bassins composent un tapis végétal pensé pour être lu depuis le château.",
    img: F("0%20Ch%C3%A2teau%20de%20Vaux-le-Vicomte%20-%20Jardins%20(3).JPG"),
    imgAlt: "Les parterres à la française",
  },
  {
    id: "couronne",
    x: 69,
    y: 43,
    title: "Le Bassin de la Couronne",
    tag: "Jeux d'eau",
    desc: "L'un des grands miroirs d'eau qui rythment l'axe et reflètent le ciel, animés par les jeux d'eau de la saison.",
    img: F("Ch%C3%A2teau%20de%20Vaux-le-Vicomte%20et%20reflets%20dans%20l%27eau.JPG"),
    imgAlt: "Reflets dans les bassins",
  },
  {
    id: "grilles",
    x: 43,
    y: 74,
    title: "Les Grilles d'Eau",
    tag: "L'axe central",
    desc: "À mi-chemin vers l'horizon, une nappe d'eau et ses statues marquent une pause avant la grande descente vers le canal.",
    img: F("0%20Vaux-le-Vicomte%20-%20Bassin%20des%20Tritons%20occidental%20et%20ch%C3%A2teau%20(2).JPG"),
    imgAlt: "Le bassin des Tritons",
  },
  {
    id: "canal",
    x: 39,
    y: 94,
    title: "Le Grand Canal",
    tag: "875 mètres",
    desc: "Invisible depuis le château, il ne se dévoile qu'à l'approche — l'illusion d'optique la plus célèbre de Le Nôtre.",
    img: F("0%20Vaux-le-Vicomte%20-%20Le%20Grand%20Canal%20ou%20Canal%20de%20la%20Po%C3%ABle%20(2).JPG"),
    imgAlt: "Le Grand Canal",
  },
];

export default function HeroInteractive({
  src,
  alt,
  points = heroPoints,
}: {
  src: string;
  alt: string;
  points?: HeroPoint[];
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const [active, setActive] = useState<HeroPoint | null>(null);
  const [edit, setEdit] = useState(false);
  const [pick, setPick] = useState<string | null>(null);
  const [geom, setGeom] = useState<Geom | null>(null);

  // Compute the rectangle the image actually occupies under object-cover, so
  // markers can be mapped from image-space percentages to on-screen positions
  // — correct at every aspect ratio (wide desktop, tall mobile, …).
  const recompute = useCallback(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const W = wrap.offsetWidth;
    const H = wrap.offsetHeight;
    if (!W || !H) return;
    const img = imgRef.current;
    const aspect =
      img && img.naturalWidth
        ? img.naturalWidth / img.naturalHeight
        : IMG_ASPECT_FALLBACK;
    let rw: number;
    let rh: number;
    if (W / H < aspect) {
      rh = H;
      rw = H * aspect;
    } else {
      rw = W;
      rh = W / aspect;
    }
    setGeom({ ox: (W - rw) / 2, oy: (H - rh) / 2, rw, rh });
  }, []);

  useEffect(() => {
    recompute();
    window.addEventListener("resize", recompute);
    return () => window.removeEventListener("resize", recompute);
  }, [recompute]);

  // Mouse parallax on the whole image+markers layer. Skipped on touch/reduced
  // motion — and there the 1.16 overscan (which only exists to give the mouse
  // parallax room) is dropped so the image crops less and more markers stay
  // on-screen, especially on mobile.
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (reduce || !fine) {
      if (wrapRef.current) wrapRef.current.style.transform = "scale(1)";
      return;
    }
    const MAX = 26;
    const target = { x: 0, y: 0 };
    const cur = { x: 0, y: 0 };
    let raf = 0;
    const onMove = (e: MouseEvent) => {
      target.x = -(e.clientX / window.innerWidth - 0.5) * 2 * MAX;
      target.y = -(e.clientY / window.innerHeight - 0.5) * 2 * MAX;
    };
    const tick = () => {
      cur.x += (target.x - cur.x) * 0.07;
      cur.y += (target.y - cur.y) * 0.07;
      if (wrapRef.current) {
        wrapRef.current.style.transform = `scale(1.16) translate3d(${cur.x}px, ${cur.y}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };
    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  // ?spots=edit helper: click the image to read exact percentages.
  useEffect(() => {
    const p = new URLSearchParams(window.location.search).get("spots");
    setEdit(p === "edit");
  }, []);

  // Modal: focus, Escape to close, lock body scroll.
  useEffect(() => {
    if (!active) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [active]);

  const onImageClick = (e: React.MouseEvent) => {
    const wrap = wrapRef.current;
    if (!edit || !wrap || !geom) return;
    const r = wrap.getBoundingClientRect();
    const px = ((e.clientX - r.left) / r.width) * wrap.offsetWidth;
    const py = ((e.clientY - r.top) / r.height) * wrap.offsetHeight;
    const x = ((px - geom.ox) / geom.rw) * 100;
    const y = ((py - geom.oy) / geom.rh) * 100;
    const coords = `x: ${x.toFixed(1)}, y: ${y.toFixed(1)}`;
    setPick(coords);
    // eslint-disable-next-line no-console
    console.log("[spots]", coords);
  };

  return (
    <>
      <div className="absolute inset-0 overflow-hidden">
        <div
          ref={wrapRef}
          onClick={onImageClick}
          style={{ transform: "scale(1.16)" }}
          className="absolute inset-0 will-change-transform"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            ref={imgRef}
            src={src}
            alt={alt}
            onLoad={recompute}
            className="w-full h-full object-cover select-none"
            draggable={false}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#141912]/20 via-[#141912]/25 to-[#0f140c]/[0.82]" />

          {points.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                if (!edit) setActive(p);
              }}
              aria-label={p.title}
              style={
                geom
                  ? {
                      left: geom.ox + (p.x / 100) * geom.rw,
                      top: geom.oy + (p.y / 100) * geom.rh,
                    }
                  : { left: `${p.x}%`, top: `${p.y}%` }
              }
              className="group absolute z-[3] -translate-x-1/2 -translate-y-1/2 p-2.5"
            >
              <span className="relative flex items-center justify-center">
                <span className="absolute w-3.5 h-3.5 rounded-full bg-goldLight/70 animate-[hotspotPulse_2.4s_ease-out_infinite]" />
                <span className="relative w-3.5 h-3.5 rounded-full bg-goldLight ring-1 ring-cream/70 shadow-[0_0_0_4px_rgba(27,39,64,0.35)] transition-transform duration-300 group-hover:scale-125" />
              </span>
              <span className="pointer-events-none absolute left-1/2 top-[calc(100%+6px)] -translate-x-1/2 whitespace-nowrap font-ui text-[.58rem] tracking-[.16em] uppercase text-cream bg-navy/85 px-2.5 py-1 rounded-sm opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-200">
                {p.title}
              </span>
            </button>
          ))}
        </div>
      </div>

      {edit && (
        <div className="absolute top-24 left-1/2 -translate-x-1/2 z-[5] font-ui text-xs bg-navy text-cream px-4 py-2 rounded-sm shadow-lg">
          Mode placement — {pick ?? "cliquez sur l'image"}
        </div>
      )}

      {active && (
        <div
          className="fixed inset-0 z-[1200] flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
        >
          <button
            aria-label="Fermer"
            onClick={() => setActive(null)}
            className="absolute inset-0 bg-ink/75 backdrop-blur-sm animate-[backdropIn_.3s_ease] cursor-default"
          />
          <div className="relative w-full max-w-[440px] bg-cream rounded-sm overflow-hidden shadow-2xl animate-[modalPop_.35s_cubic-bezier(.16,1,.3,1)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={active.img}
              alt={active.imgAlt}
              className="w-full h-44 sm:h-52 object-cover bg-navy"
            />
            <button
              ref={closeRef}
              aria-label="Fermer"
              onClick={() => setActive(null)}
              className="absolute top-3 right-3 w-9 h-9 rounded-full bg-navy/85 text-cream flex items-center justify-center hover:bg-navy transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
                <path
                  d="M1 1l12 12M13 1L1 13"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <div className="p-6">
              {active.tag && (
                <span className="font-ui text-[.62rem] tracking-[.2em] uppercase text-gold">
                  {active.tag}
                </span>
              )}
              <h3 className="font-display font-semibold text-[1.5rem] text-navy mt-1.5 mb-2.5">
                {active.title}
              </h3>
              <p className="font-ui font-light text-[.9rem] leading-relaxed text-[#4a4536]">
                {active.desc}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

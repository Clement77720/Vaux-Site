import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-ink text-cream/65 pt-16 pb-6 md:pt-20 md:pb-8">
      <div className="max-w-[1180px] mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-8 md:gap-12 pb-10 border-b border-cream/10">
          <div>
            <div className="font-display text-xl text-cream mb-3">
              Vaux-le-Vicomte
            </div>
            <p className="font-ui text-sm leading-relaxed max-w-[32ch] text-cream/55">
              Château de Vaux-le-Vicomte
              <br />
              77950 Maincy, France
            </p>
          </div>
          <div>
            <h4 className="font-ui text-xs tracking-[.14em] uppercase text-gold mb-4">
              Domaine
            </h4>
            <Link href="/chateau" className="block font-ui text-sm mb-3 hover:text-goldLight transition-colors">
              Le Château
            </Link>
            <Link href="/jardins" className="block font-ui text-sm mb-3 hover:text-goldLight transition-colors">
              Les Jardins
            </Link>
            <Link href="/evenements" className="block font-ui text-sm mb-3 hover:text-goldLight transition-colors">
              Événements
            </Link>
          </div>
          <div>
            <h4 className="font-ui text-xs tracking-[.14em] uppercase text-gold mb-4">
              Visite
            </h4>
            <Link href="/visiter" className="block font-ui text-sm mb-3 hover:text-goldLight transition-colors">
              Horaires & tarifs
            </Link>
            <Link href="/visiter" className="block font-ui text-sm mb-3 hover:text-goldLight transition-colors">
              Billetterie
            </Link>
            <Link href="/contact" className="block font-ui text-sm mb-3 hover:text-goldLight transition-colors">
              Accès
            </Link>
          </div>
          <div>
            <h4 className="font-ui text-xs tracking-[.14em] uppercase text-gold mb-4">
              Suivre
            </h4>
            <a href="#" className="block font-ui text-sm mb-3 hover:text-goldLight transition-colors">
              Instagram
            </a>
            <a href="#" className="block font-ui text-sm mb-3 hover:text-goldLight transition-colors">
              Facebook
            </a>
            <a href="#" className="block font-ui text-sm mb-3 hover:text-goldLight transition-colors">
              Newsletter
            </a>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-between gap-2 pt-6 font-ui text-xs">
          <span>© Domaine de Vaux-le-Vicomte</span>
          <span>Maquette de refonte réalisée par JNR Studio</span>
        </div>
      </div>
    </footer>
  );
}

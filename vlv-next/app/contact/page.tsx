import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

const IMG = {
  hero: "https://commons.wikimedia.org/wiki/Special:FilePath/Vaux-le-Vicomte%2001.jpg",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        image={IMG.hero}
        alt="Château de Vaux-le-Vicomte"
        eyebrow="Nous écrire"
        title="Contact"
      />

      <section className="py-16 md:py-[120px]">
        <div className="max-w-[1180px] mx-auto px-5 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
          <Reveal>
            <span className="font-ui text-[.68rem] tracking-[.22em] uppercase text-gold">
              Une question ?
            </span>
            <h2 className="font-display font-semibold text-[clamp(1.7rem,7vw,2.6rem)] leading-tight mt-3 mb-6">
              Écrivez-nous
            </h2>
            <form className="flex flex-col gap-4 max-w-[440px]">
              <input
                type="text"
                placeholder="Nom complet"
                className="font-ui text-sm bg-transparent border border-[#3B2A1A]/20 rounded-sm px-4 py-3.5 focus:outline-none focus:border-gold transition-colors"
              />
              <input
                type="email"
                placeholder="Adresse e-mail"
                className="font-ui text-sm bg-transparent border border-[#3B2A1A]/20 rounded-sm px-4 py-3.5 focus:outline-none focus:border-gold transition-colors"
              />
              <textarea
                placeholder="Votre message"
                rows={5}
                className="font-ui text-sm bg-transparent border border-[#3B2A1A]/20 rounded-sm px-4 py-3.5 focus:outline-none focus:border-gold transition-colors resize-none"
              />
              <button
                type="button"
                className="border border-gold bg-gold text-navy px-8 py-3.5 text-xs tracking-wider uppercase font-ui w-full sm:w-auto"
              >
                Envoyer le message
              </button>
            </form>
          </Reveal>
          <Reveal>
            <div className="bg-creamDeep rounded-sm p-7 md:p-10 h-full">
              <h3 className="font-display font-semibold text-xl mb-5">
                Coordonnées
              </h3>
              <div className="flex flex-col gap-5 font-ui text-[.9rem] text-[#3a3529]">
                <div>
                  <b className="block text-[.68rem] tracking-[.16em] uppercase text-gold mb-1">
                    Adresse
                  </b>
                  Château de Vaux-le-Vicomte
                  <br />
                  77950 Maincy, France
                </div>
                <div>
                  <b className="block text-[.68rem] tracking-[.16em] uppercase text-gold mb-1">
                    Téléphone
                  </b>
                  01 64 14 41 90
                </div>
                <div>
                  <b className="block text-[.68rem] tracking-[.16em] uppercase text-gold mb-1">
                    Groupes & privatisation
                  </b>
                  groupes@vaux-le-vicomte.fr
                </div>
                <div>
                  <b className="block text-[.68rem] tracking-[.16em] uppercase text-gold mb-1">
                    Horaires du standard
                  </b>
                  Du lundi au vendredi, 9h — 18h
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

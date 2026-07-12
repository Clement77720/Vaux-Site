import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

const IMG = {
  hero: "https://commons.wikimedia.org/wiki/Special:FilePath/0%20Vaux-le-Vicomte%20-%20Fa%C3%A7ade%20nord%20du%20ch%C3%A2teau%20(2).JPG",
};

export default function VisiterPage() {
  return (
    <>
      <PageHero
        image={IMG.hero}
        alt="Façade du château de Vaux-le-Vicomte"
        eyebrow="Préparer ma visite"
        title="Informations pratiques"
      />

      <section className="py-16 md:py-[120px]">
        <div className="max-w-[1180px] mx-auto px-5 md:px-10">
          <Reveal className="bg-creamDeep rounded-sm overflow-hidden grid grid-cols-1 md:grid-cols-[1.1fr_1fr]">
            <div className="p-7 md:p-16">
              <span className="font-ui text-[.68rem] tracking-[.22em] uppercase text-gold">
                Informations pratiques
              </span>
              <h2 className="font-display font-semibold text-[clamp(1.6rem,6.5vw,2.5rem)] mt-3 mb-4">
                Préparez votre visite
              </h2>
              <p className="font-ui font-light text-[#4a4536] leading-relaxed max-w-[42ch] mb-7 text-[.92rem]">
                Le domaine se visite librement ou avec un guide audio 3D
                inclus, à travers trois niveaux entièrement meublés.
              </p>
              <div className="grid grid-cols-2 gap-3.5">
                {[
                  ["10h–17h30", "Ouverture quotidienne"],
                  ["33 ha", "Jardins à la française"],
                  ["3 niveaux", "Château meublé"],
                  ["Audio 3D", "Parcours immersif inclus"],
                ].map(([n, l]) => (
                  <div
                    key={l}
                    className="border border-[#3B2A1A]/15 p-4 rounded-sm hover:border-gold hover:-translate-y-1 transition-all duration-300"
                  >
                    <span className="font-display text-xl md:text-2xl text-navy block">
                      {n}
                    </span>
                    <span className="font-ui text-[.62rem] tracking-[.08em] uppercase text-gold mt-1 block">
                      {l}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-navy text-cream p-7 md:p-16 flex flex-col justify-center">
              <span className="font-ui text-[.68rem] tracking-[.22em] uppercase text-goldLight">
                Billetterie
              </span>
              <h3 className="font-display font-semibold text-2xl md:text-3xl mt-2 mb-3">
                Tarifs journée
              </h3>
              <p className="font-ui font-light text-[.9rem] text-cream/70 leading-relaxed mb-6">
                Château, jardins et musée des équipages inclus dans chaque
                billet.
              </p>
              {[
                ["Plein tarif", "18 €"],
                ["Tarif réduit", "14,50 €"],
                ["Moins de 6 ans", "Gratuit"],
              ].map(([label, price], i, arr) => (
                <div
                  key={label}
                  className={`flex justify-between py-3.5 border-t border-cream/15 font-ui text-[.86rem] ${
                    i === arr.length - 1 ? "border-b mb-7" : ""
                  }`}
                >
                  <span>{label}</span>
                  <b className="text-goldLight">{price}</b>
                </div>
              ))}
              <button className="border border-gold bg-gold text-navy px-8 py-3.5 text-xs tracking-wider uppercase font-ui">
                Choisir mes billets
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-creamDeep py-16 md:py-[120px]">
        <div className="max-w-[1180px] mx-auto px-5 md:px-10">
          <Reveal className="max-w-[640px] mb-10">
            <span className="font-ui text-[.68rem] tracking-[.22em] uppercase text-gold">
              Accès
            </span>
            <h2 className="font-display font-semibold text-[clamp(1.6rem,6vw,2.4rem)] mt-3">
              Comment venir
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              ["En voiture", "A5 puis D215, à 55 km au sud-est de Paris. Parking gratuit sur place."],
              ["En train", "Gare de Melun depuis Paris Gare de Lyon, puis navette ou taxi (20 min)."],
              ["Adresse", "Château de Vaux-le-Vicomte, 77950 Maincy, France."],
            ].map(([title, text]) => (
              <Reveal
                key={title}
                className="bg-cream border border-[#3B2A1A]/10 rounded-sm p-6"
              >
                <h3 className="font-display font-semibold text-lg mb-2">
                  {title}
                </h3>
                <p className="font-ui font-light text-[.88rem] text-[#4a4536] leading-relaxed">
                  {text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

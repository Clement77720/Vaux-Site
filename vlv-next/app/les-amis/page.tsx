import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

const IMG = {
  hero: "https://commons.wikimedia.org/wiki/Special:FilePath/0%20Vaux-le-Vicomte%20-%20Fa%C3%A7ade%20nord%20du%20ch%C3%A2teau%20(2).JPG",
  salon:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Ch%C3%A2teau%20de%20Vaux-le-Vicomte%20-%20Grand%20salon%202.JPG",
  aerial:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Aerial%20image%20of%20Ch%C3%A2teau%20de%20Vaux-le-Vicomte%20(view%20from%20the%20south).jpg",
};

const tiers = [
  {
    name: "Jeune",
    price: "40 €",
    note: "Moins de 30 ans",
    perks: [
      "Accès illimité au domaine pendant un an",
      "Invitations aux événements des Amis",
      "La lettre d'information de l'association",
    ],
  },
  {
    name: "Ami",
    price: "90 €",
    note: "Adhésion individuelle",
    featured: true,
    perks: [
      "Accès illimité au château et aux jardins",
      "Invitations aux avant-premières et vernissages",
      "Rencontres privilégiées avec les équipes du domaine",
      "Réductions à la boutique et au restaurant",
    ],
  },
  {
    name: "Bienfaiteur",
    price: "250 €",
    note: "Soutien renforcé",
    perks: [
      "Tous les avantages de l'adhésion Ami",
      "Visites privées et coulisses du domaine",
      "Invitation à l'assemblée annuelle des Amis",
    ],
  },
];

const projects = [
  ["Restauration", "Toitures, décors peints, statues et boiseries retrouvent leur éclat grâce au mécénat."],
  ["Acquisitions", "Faire revenir à Vaux les œuvres et le mobilier d'époque, et enrichir les collections."],
  ["Médiation", "Transmettre le Grand Siècle au plus grand nombre, et tout particulièrement au jeune public."],
  ["Accessibilité", "Rendre le domaine accueillant pour tous les visiteurs, quelle que soit leur situation."],
];

export default function AmisPage() {
  return (
    <>
      <PageHero
        image={IMG.hero}
        alt="Façade du château de Vaux-le-Vicomte"
        eyebrow="Nous soutenir"
        title="Les Amis de Vaux-le-Vicomte"
      />

      {/* INTRO */}
      <section className="py-16 md:py-[120px]">
        <div className="max-w-[1180px] mx-auto px-5 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
          <Reveal>
            <span className="font-ui text-[.68rem] tracking-[.22em] uppercase text-gold">
              L&apos;association
            </span>
            <h2 className="font-display font-semibold text-[clamp(1.7rem,7vw,2.6rem)] leading-tight mt-3 mb-5">
              Ceux qui font vivre Vaux, saison après saison
            </h2>
            <p className="text-[1rem] leading-relaxed text-[#3a3529] max-w-[48ch]">
              Fondée en 1983 par Patrice et Cristina de Vogüé, reconnue
              d&apos;utilité publique depuis 2004, l&apos;association Les Amis
              de Vaux-le-Vicomte réunit aujourd&apos;hui plus de 1 500 membres
              et mécènes passionnés.
            </p>
            <p className="text-[1rem] leading-relaxed text-[#3a3529] max-w-[48ch] mt-4">
              Sa mission&nbsp;: préserver et faire rayonner ce chef-d&apos;œuvre
              classé Monument Historique, enrichir ses collections et transmettre
              la connaissance du plus grand domaine privé de France.
            </p>
          </Reveal>
          <Reveal className="relative overflow-hidden rounded-sm group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={IMG.salon}
              alt="Grand salon du château de Vaux-le-Vicomte"
              className="w-full h-[320px] md:h-[460px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </Reveal>
        </div>
      </section>

      {/* KEY FIGURES */}
      <section className="bg-navy text-cream py-14 md:py-20">
        <div className="max-w-[1180px] mx-auto px-5 md:px-10 grid grid-cols-2 md:grid-cols-4 gap-y-9 gap-x-4">
          {[
            ["1983", "Création de l'association"],
            ["1 500+", "Amis et mécènes"],
            ["66 %", "De vos dons déductibles"],
            ["65–85 %", "Des restaurations financées"],
          ].map(([n, l]) => (
            <Reveal key={l} className="text-center">
              <span className="font-display text-[clamp(1.9rem,6vw,3.1rem)] text-goldLight block leading-none">
                {n}
              </span>
              <span className="font-ui text-[.68rem] md:text-[.72rem] tracking-[.14em] uppercase text-cream/65 mt-3 block">
                {l}
              </span>
            </Reveal>
          ))}
        </div>
      </section>

      {/* MEMBERSHIP TIERS */}
      <section className="bg-creamDeep py-16 md:py-[120px]">
        <div className="max-w-[1180px] mx-auto px-5 md:px-10">
          <Reveal className="max-w-[600px] mb-10 md:mb-14">
            <span className="font-ui text-[.68rem] tracking-[.22em] uppercase text-gold">
              Devenir Ami·e
            </span>
            <h2 className="font-display font-semibold text-[clamp(1.7rem,7vw,2.6rem)] leading-tight mt-3">
              Trois façons de rejoindre l&apos;aventure
            </h2>
            <p className="font-ui font-light text-[#4a4536] leading-relaxed mt-4 text-[.95rem] max-w-[52ch]">
              Chaque adhésion, valable un an, ouvre les portes du domaine et
              soutient directement sa sauvegarde.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {tiers.map((t) => (
              <Reveal
                key={t.name}
                className={`flex h-full flex-col rounded-sm p-7 md:p-8 border transition-colors duration-300 ${
                  t.featured
                    ? "bg-navy text-cream border-navy"
                    : "bg-cream text-navy border-[#3B2A1A]/12 hover:border-gold"
                }`}
              >
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-display font-semibold text-[1.5rem]">
                    {t.name}
                  </h3>
                  {t.featured && (
                    <span className="font-ui text-[.58rem] tracking-[.16em] uppercase text-navy bg-goldLight px-2.5 py-1 rounded-sm">
                      Le plus choisi
                    </span>
                  )}
                </div>
                <div className="mt-3 mb-1 flex items-end gap-1.5">
                  <span className="font-display text-[2.4rem] leading-none text-gold">
                    {t.price}
                  </span>
                  <span
                    className={`font-ui text-[.72rem] pb-1 ${
                      t.featured ? "text-cream/60" : "text-[#4a4536]"
                    }`}
                  >
                    / an
                  </span>
                </div>
                <span
                  className={`font-ui text-[.64rem] tracking-[.16em] uppercase ${
                    t.featured ? "text-goldLight" : "text-gold"
                  }`}
                >
                  {t.note}
                </span>
                <ul className="mt-6 space-y-3 flex-1">
                  {t.perks.map((p) => (
                    <li
                      key={p}
                      className={`font-ui font-light text-[.86rem] leading-relaxed flex gap-2.5 ${
                        t.featured ? "text-cream/80" : "text-[#4a4536]"
                      }`}
                    >
                      <span className="text-gold mt-px shrink-0">—</span>
                      {p}
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  className={`mt-7 w-full py-3.5 text-xs tracking-wider uppercase font-ui border transition-colors ${
                    t.featured
                      ? "border-gold bg-gold text-navy hover:bg-goldLight"
                      : "border-navy text-navy hover:bg-navy hover:text-cream"
                  }`}
                >
                  Choisir {t.name}
                </button>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-8">
            <p className="font-ui font-light text-[.85rem] text-[#4a4536] max-w-[70ch]">
              Vous représentez une entreprise ou souhaitez soutenir Vaux depuis
              l&apos;étranger&nbsp;? Le Club Entreprises et les International
              Friends of Vaux-le-Vicomte offrent des formes d&apos;engagement
              dédiées.
            </p>
          </Reveal>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="py-16 md:py-[120px]">
        <div className="max-w-[1180px] mx-auto px-5 md:px-10">
          <Reveal className="max-w-[600px] mb-10 md:mb-14">
            <span className="font-ui text-[.68rem] tracking-[.22em] uppercase text-gold">
              Votre soutien en action
            </span>
            <h2 className="font-display font-semibold text-[clamp(1.7rem,7vw,2.6rem)] leading-tight mt-3">
              Ce que le mécénat rend possible
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
            {projects.map(([titre, desc]) => (
              <Reveal key={titre} className="border-t-2 border-gold pt-5">
                <h3 className="font-display font-semibold text-[1.2rem] text-navy mb-2">
                  {titre}
                </h3>
                <p className="font-ui font-light text-[.86rem] leading-relaxed text-[#4a4536]">
                  {desc}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-navy">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={IMG.aerial}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy/85" />
        <div className="relative z-[2] max-w-[720px] mx-auto px-5 py-20 md:py-28 text-center text-cream">
          <Reveal>
            <span className="font-ui text-[.68rem] tracking-[.22em] uppercase text-goldLight">
              Un geste qui compte double
            </span>
            <h2 className="font-display font-semibold text-[clamp(1.6rem,6.5vw,2.6rem)] leading-tight mt-3 mb-4">
              Faites un don, déduisez 66&nbsp;% de vos impôts
            </h2>
            <p className="font-ui font-light text-cream/75 leading-relaxed max-w-[48ch] mx-auto text-[.94rem]">
              Chaque contribution est déductible à hauteur de 66&nbsp;% de votre
              impôt sur le revenu&nbsp;: un don de 100&nbsp;€ ne vous coûte, en
              réalité, que 34&nbsp;€.
            </p>
            <div className="flex flex-col sm:flex-row gap-3.5 mt-8 justify-center">
              <button
                type="button"
                className="w-full sm:w-auto border border-gold bg-gold text-navy px-8 py-3.5 text-xs tracking-wider uppercase font-ui hover:bg-goldLight transition-colors"
              >
                Devenir Ami·e
              </button>
              <button
                type="button"
                className="w-full sm:w-auto border border-creamDeep text-cream px-8 py-3.5 text-xs tracking-wider uppercase font-ui hover:bg-cream hover:text-navy transition-colors"
              >
                Faire un don
              </button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

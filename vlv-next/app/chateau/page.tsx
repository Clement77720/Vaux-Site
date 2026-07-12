import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

const IMG = {
  hero: "https://commons.wikimedia.org/wiki/Special:FilePath/Ch%C3%A2teau%20Vaux-le-Vicomte.JPG",
  salon:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Ch%C3%A2teau%20de%20Vaux-le-Vicomte%20-%20Grand%20salon%202.JPG",
  facade:
    "https://commons.wikimedia.org/wiki/Special:FilePath/0%20Vaux-le-Vicomte%20-%20Fa%C3%A7ade%20nord%20du%20ch%C3%A2teau%20(2).JPG",
};

const rooms = [
  {
    title: "Le Grand Salon",
    text: "Salon ovale à double hauteur, coiffé d'un dôme — la pièce maîtresse de Le Vau qui domine la façade sud tout entière.",
  },
  {
    title: "La Chambre du Roi",
    text: "Préparée en toute hâte pour Louis XIV, elle témoigne du faste déployé par Fouquet lors de la fête du 17 août 1661.",
  },
  {
    title: "Le Cabinet des Jeux",
    text: "Un espace intime orné par Le Brun, où se jouaient les divertissements de la cour à l'abri des regards.",
  },
  {
    title: "Les Cuisines",
    text: "Situées en sous-sol pour dégager les niveaux nobles, elles nourrissaient les 6&nbsp;000 convives du soir de l'inauguration.",
  },
];

export default function ChateauPage() {
  return (
    <>
      <PageHero
        image={IMG.hero}
        alt="Château de Vaux-le-Vicomte"
        eyebrow="Le Domaine"
        title="Le Château"
      />

      <section className="py-16 md:py-[120px]">
        <div className="max-w-[1180px] mx-auto px-5 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
          <Reveal>
            <span className="font-ui text-[.68rem] tracking-[.22em] uppercase text-gold">
              Architecture
            </span>
            <h2 className="font-display font-semibold text-[clamp(1.7rem,7vw,2.6rem)] leading-tight mt-3 mb-5">
              Une demeure pensée comme un tableau vivant
            </h2>
            <p className="text-[1rem] leading-relaxed text-[#3a3529] max-w-[48ch]">
              Construit entre 1658 et 1661 pour Nicolas Fouquet, surintendant
              des finances de Louis XIV, le château repose sur une plateforme
              entourée de douves. Sa façade est rigoureusement symétrique de
              part et d&apos;autre de l&apos;axe central, jusque dans la
              distribution intérieure des pièces.
            </p>
            <p className="text-[1rem] leading-relaxed text-[#3a3529] max-w-[48ch] mt-4">
              Le grand salon ovale, couvert d&apos;un dôme, marque la
              transition entre le vestibule d&apos;entrée et la perspective des
              jardins — une composition alors inédite en France.
            </p>
          </Reveal>
          <Reveal className="relative overflow-hidden rounded-sm group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={IMG.facade}
              alt="Façade du château"
              className="w-full h-[320px] md:h-[460px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-creamDeep py-16 md:py-[120px]">
        <div className="max-w-[1180px] mx-auto px-5 md:px-10">
          <Reveal className="max-w-[640px] mb-10 md:mb-14">
            <span className="font-ui text-[.68rem] tracking-[.22em] uppercase text-gold">
              Parcours de visite
            </span>
            <h2 className="font-display font-semibold text-[clamp(1.6rem,6vw,2.4rem)] mt-3">
              Quatre pièces à ne pas manquer
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {rooms.map((r) => (
              <Reveal
                key={r.title}
                className="bg-cream border border-[#3B2A1A]/10 rounded-sm p-6 md:p-7 hover:border-gold transition-colors duration-300"
              >
                <h3 className="font-display font-semibold text-xl mb-2">
                  {r.title}
                </h3>
                <p
                  className="font-ui font-light text-[.9rem] text-[#4a4536] leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: r.text }}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-[120px]">
        <div className="max-w-[1180px] mx-auto px-5 md:px-10">
          <Reveal className="relative overflow-hidden rounded-sm">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={IMG.salon}
              alt="Grand salon du château de Vaux-le-Vicomte"
              className="w-full h-[280px] md:h-[520px] object-cover"
            />
            <div className="absolute bottom-0 left-0 bg-navy text-cream font-ui text-xs tracking-wider uppercase px-5 py-3.5">
              Le Grand Salon — décor de Charles Le Brun
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

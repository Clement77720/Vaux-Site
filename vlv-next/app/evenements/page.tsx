import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

const IMG = {
  hero: "https://commons.wikimedia.org/wiki/Special:FilePath/0%20Vaux-le-Vicomte%20-%20Bassin%20des%20Tritons%20occidental%20et%20ch%C3%A2teau%20(2).JPG",
};

const events = [
  {
    title: "Les Soirées aux Chandelles",
    period: "Mai — Septembre, tous les samedis",
    hours: "17h30 — 21h30 (dernier accès)",
    text: "Plus de 2 000 bougies et un ballet de lumière transforment le domaine en un tableau vivant du Grand Siècle.",
  },
  {
    title: "L'Exposition André Le Nôtre",
    period: "Toute l'année",
    hours: "Incluse dans le billet château",
    text: "Une exposition permanente consacrée au génie du jardin à la française et à son influence durable sur l'art des jardins.",
  },
  {
    title: "Visite en costume d'époque",
    period: "Sur réservation",
    hours: "Créneaux à la demi-journée",
    text: "Louez un costume XVIIe siècle et parcourez le château et les jardins dans la peau d'un invité de Fouquet.",
  },
];

export default function EvenementsPage() {
  return (
    <>
      <PageHero
        image={IMG.hero}
        alt="Événement au château de Vaux-le-Vicomte"
        eyebrow="Vivre le domaine"
        title="Événements"
      />

      <section className="py-16 md:py-[120px]">
        <div className="max-w-[1180px] mx-auto px-5 md:px-10">
          <Reveal className="max-w-[640px] mb-10 md:mb-16">
            <span className="font-ui text-[.68rem] tracking-[.22em] uppercase text-gold">
              Programmation
            </span>
            <h2 className="font-display font-semibold text-[clamp(1.7rem,7vw,2.6rem)] leading-tight mt-3">
              Chaque saison, une nouvelle façon de vivre le domaine
            </h2>
          </Reveal>

          <div className="flex flex-col gap-5">
            {events.map((e) => (
              <Reveal
                key={e.title}
                className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 md:gap-10 border-t border-[#3B2A1A]/12 pt-7"
              >
                <div>
                  <h3 className="font-display font-semibold text-2xl mb-2">
                    {e.title}
                  </h3>
                  <div className="font-ui text-[.72rem] tracking-wide text-gold uppercase">
                    {e.period}
                  </div>
                  <div className="font-ui text-[.78rem] text-[#4a4536] mt-1">
                    {e.hours}
                  </div>
                </div>
                <p className="font-ui font-light text-[.95rem] text-[#3a3529] leading-relaxed">
                  {e.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brown text-cream py-16 md:py-[120px]">
        <div className="max-w-[1180px] mx-auto px-5 md:px-10 text-center">
          <Reveal>
            <span className="font-ui text-[.68rem] tracking-[.22em] uppercase text-goldLight">
              Réservation
            </span>
            <h2 className="font-display font-semibold text-[clamp(1.7rem,6vw,2.4rem)] mt-3 mb-6 max-w-[560px] mx-auto">
              Réservez votre place pour la prochaine Soirée aux Chandelles
            </h2>
            <button className="border border-gold bg-gold text-navy px-9 py-3.5 text-xs tracking-wider uppercase font-ui">
              Voir les dates disponibles
            </button>
          </Reveal>
        </div>
      </section>
    </>
  );
}

import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import AxisSection from "@/components/AxisSection";

const IMG = {
  hero: "https://commons.wikimedia.org/wiki/Special:FilePath/0%20Ch%C3%A2teau%20de%20Vaux-le-Vicomte%20-%20Jardins%20(3).JPG",
  canal:
    "https://commons.wikimedia.org/wiki/Special:FilePath/0%20Vaux-le-Vicomte%20-%20Le%20Grand%20Canal%20ou%20Canal%20de%20la%20Po%C3%ABle%20(2).JPG",
  miroir:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Ch%C3%A2teau%20de%20Vaux-le-Vicomte%20et%20reflets%20dans%20l%27eau.JPG",
  triton:
    "https://commons.wikimedia.org/wiki/Special:FilePath/0%20Vaux-le-Vicomte%20-%20Bassin%20des%20Tritons%20occidental%20et%20ch%C3%A2teau%20(2).JPG",
};

export default function JardinsPage() {
  return (
    <>
      <PageHero
        image={IMG.hero}
        alt="Jardins du château de Vaux-le-Vicomte"
        eyebrow="Le Domaine"
        title="Les Jardins à la française"
      />

      <section className="py-16 md:py-[120px]">
        <div className="max-w-[1180px] mx-auto px-5 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
          <Reveal>
            <span className="font-ui text-[.68rem] tracking-[.22em] uppercase text-gold">
              André Le Nôtre
            </span>
            <h2 className="font-display font-semibold text-[clamp(1.7rem,7vw,2.6rem)] leading-tight mt-3 mb-5">
              Trente-trois hectares dessinés comme une perspective
            </h2>
            <p className="text-[1rem] leading-relaxed text-[#3a3529] max-w-[48ch]">
              Broderies de buis, bassins en miroir, statues et bosquets se
              répondent le long d&apos;un axe unique de près de quatre
              kilomètres. Le Nôtre y déploie pour la première fois à cette
              échelle les principes qui feront ensuite sa renommée à
              Versailles&nbsp;: anamorphoses, jeux d&apos;échelle et
              perspectives forcées.
            </p>
          </Reveal>
          <Reveal className="relative overflow-hidden rounded-sm group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={IMG.triton}
              alt="Bassin des Tritons"
              className="w-full h-[320px] md:h-[460px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </Reveal>
        </div>
      </section>

      <AxisSection />

      <section className="py-16 md:py-[120px]">
        <div className="max-w-[1180px] mx-auto px-5 md:px-10">
          <Reveal className="max-w-[560px] mb-10 md:mb-14">
            <h2 className="font-display font-semibold text-[clamp(1.7rem,7vw,2.6rem)] leading-tight">
              Trois points de vue sur le domaine
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {[
              { img: IMG.canal, title: "Le Grand Canal", tag: "875 mètres" },
              { img: IMG.miroir, title: "Le Miroir d'Eau", tag: "Symétrie parfaite" },
              { img: IMG.triton, title: "Le Bassin des Tritons", tag: "Jeux d'eau" },
            ].map((g) => (
              <Reveal key={g.title} className="relative overflow-hidden rounded-sm group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={g.img}
                  alt={g.title}
                  className="w-full h-[260px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-[#0f120a]/85 to-transparent">
                  <b className="block font-display italic text-cream text-lg font-medium">
                    {g.title}
                  </b>
                  <span className="text-[.64rem] tracking-[.14em] uppercase text-goldLight font-ui">
                    {g.tag}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

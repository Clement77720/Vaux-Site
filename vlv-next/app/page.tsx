import Reveal from "@/components/Reveal";
import AxisSection from "@/components/AxisSection";
import HeroInteractive from "@/components/HeroInteractive";
import Link from "next/link";

const IMG = {
  aerial:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Aerial%20image%20of%20Ch%C3%A2teau%20de%20Vaux-le-Vicomte%20(view%20from%20the%20south).jpg",
  facade:
    "https://commons.wikimedia.org/wiki/Special:FilePath/0%20Vaux-le-Vicomte%20-%20Fa%C3%A7ade%20nord%20du%20ch%C3%A2teau%20(2).JPG",
  jardins:
    "https://commons.wikimedia.org/wiki/Special:FilePath/0%20Ch%C3%A2teau%20de%20Vaux-le-Vicomte%20-%20Jardins%20(3).JPG",
  canal:
    "https://commons.wikimedia.org/wiki/Special:FilePath/0%20Vaux-le-Vicomte%20-%20Le%20Grand%20Canal%20ou%20Canal%20de%20la%20Po%C3%ABle%20(2).JPG",
  miroir:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Ch%C3%A2teau%20de%20Vaux-le-Vicomte%20et%20reflets%20dans%20l%27eau.JPG",
  triton:
    "https://commons.wikimedia.org/wiki/Special:FilePath/0%20Vaux-le-Vicomte%20-%20Bassin%20des%20Tritons%20occidental%20et%20ch%C3%A2teau%20(2).JPG",
};

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[100svh] flex items-end overflow-hidden">
        <HeroInteractive
          src={IMG.aerial}
          alt="Vue aérienne du château de Vaux-le-Vicomte"
        />
        <div className="pointer-events-none relative z-[2] max-w-[1180px] mx-auto px-5 md:px-10 pb-14 md:pb-24 w-full text-cream">
          <span className="font-ui text-goldLight text-[.68rem] tracking-[.22em] uppercase">
            Maincy · Seine-et-Marne
          </span>
          <h1 className="font-display font-medium text-[clamp(2.1rem,9vw,5.4rem)] leading-[1.05] max-w-[900px] mt-2">
            L&apos;harmonie parfaite entre{" "}
            <em className="italic text-goldLight">architecture</em> et jardin
          </h1>
          <p className="font-ui font-light text-[.94rem] max-w-[480px] mt-4 text-cream/85 leading-relaxed">
            Né de l&apos;ambition de Nicolas Fouquet et du génie de trois
            artistes visionnaires, Vaux-le-Vicomte fut le modèle d&apos;un
            château qui inspira Versailles.
          </p>
          <div className="pointer-events-auto flex flex-col md:flex-row gap-3.5 mt-7">
            <button className="w-full md:w-auto border border-gold bg-gold text-navy px-8 py-3.5 text-xs tracking-wider uppercase font-ui">
              Réserver ma visite
            </button>
            <Link
              href="/chateau"
              className="w-full md:w-auto text-center border border-creamDeep px-8 py-3.5 text-xs tracking-wider uppercase font-ui hover:bg-cream hover:text-navy transition-colors"
            >
              Découvrir le domaine
            </Link>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 md:py-[150px]">
        <div className="max-w-[1180px] mx-auto px-5 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
          <Reveal>
            <span className="font-ui text-[.68rem] tracking-[.22em] uppercase text-gold">
              Le Château
            </span>
            <h2 className="font-display font-semibold text-[clamp(1.7rem,7vw,2.9rem)] leading-tight mt-3 mb-5">
              Un manifeste du Grand Siècle, dessiné par trois génies
            </h2>
            <p className="text-[1rem] leading-relaxed text-[#3a3529] max-w-[48ch]">
              En 1656, Nicolas Fouquet réunit l&apos;architecte Louis Le Vau, le
              peintre Charles Le Brun et le jardinier André Le Nôtre pour bâtir
              une demeure sans équivalent. Chaque pièce, chaque perspective y
              répond à une même exigence&nbsp;: l&apos;unité entre le bâti et
              la nature.
            </p>
            <p className="text-[1rem] leading-relaxed text-[#3a3529] max-w-[48ch] mt-4">
              Cette collaboration inédite donnera naissance à un vocabulaire
              architectural qui influencera durablement l&apos;art de vivre à
              la française — jusqu&apos;à séduire, puis inquiéter, le jeune
              Louis XIV.
            </p>
            <div className="flex flex-col md:flex-row gap-4 md:gap-9 mt-8">
              {[
                ["Louis Le Vau", "Architecte"],
                ["Charles Le Brun", "Peintre-décorateur"],
                ["André Le Nôtre", "Jardinier"],
              ].map(([name, role]) => (
                <div key={name} className="font-display italic text-navySoft text-[1.05rem]">
                  {name}
                  <b className="block font-ui not-italic text-[.63rem] tracking-[.18em] uppercase text-gold mt-1">
                    {role}
                  </b>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal className="relative overflow-hidden rounded-sm group order-first md:order-none">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={IMG.facade}
              alt="Façade du château de Vaux-le-Vicomte"
              className="w-full h-[320px] md:h-[520px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 bg-navy text-cream font-ui text-[.66rem] md:text-xs tracking-wider uppercase px-4 py-3 md:px-5 md:py-3.5">
              Façade nord — dôme et perron
            </div>
          </Reveal>
        </div>
      </section>

      {/* KEY FIGURES */}
      <section className="bg-navy text-cream py-14 md:py-20">
        <div className="max-w-[1180px] mx-auto px-5 md:px-10 grid grid-cols-2 md:grid-cols-4 gap-y-9 gap-x-4">
          {[
            ["1661", "La fête fastueuse de Fouquet"],
            ["33 ha", "De jardins à la française"],
            ["3 génies", "Le Vau · Le Brun · Le Nôtre"],
            ["50 km", "Au sud-est de Paris"],
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

      {/* DISCOVER — directory */}
      <section className="py-20 md:py-[130px] bg-creamDeep">
        <div className="max-w-[1180px] mx-auto px-5 md:px-10">
          <Reveal className="max-w-[600px] mb-10 md:mb-14">
            <span className="font-ui text-[.68rem] tracking-[.22em] uppercase text-gold">
              Explorer le domaine
            </span>
            <h2 className="font-display font-semibold text-[clamp(1.7rem,7vw,2.9rem)] leading-tight mt-3">
              Trois siècles d&apos;art de vivre, en un seul lieu
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { num: "01", title: "Le Château", href: "/chateau", desc: "Les appartements de Fouquet, le Grand Salon ovale sous le dôme et les décors de Charles Le Brun." },
              { num: "02", title: "Les Jardins à la française", href: "/jardins", desc: "33 hectares de broderies de buis, bassins et perspectives dessinés par André Le Nôtre." },
              { num: "03", title: "Le Musée des Équipages", href: "/visiter", desc: "Une collection rare de carrosses et d'attelages, installée dans les anciennes écuries du château." },
              { num: "04", title: "Les Jeux d'eau", href: "/jardins", desc: "Bassins, cascades et fontaines s'animent certains après-midis de la belle saison." },
              { num: "05", title: "Les Soirées aux Chandelles", href: "/evenements", desc: "Plus de 2 000 bougies, un bar à champagne et un feu d'artifice, chaque samedi d'été." },
              { num: "06", title: "Boutique & Restaurant", href: "/visiter", desc: "Le restaurant L'Écureuil, un salon de thé et une librairie pour prolonger la visite." },
            ].map((it) => (
              <Reveal key={it.title}>
                <Link
                  href={it.href}
                  className="group flex h-full flex-col bg-cream rounded-sm p-6 md:p-7 border border-[#3B2A1A]/12 hover:border-gold hover:-translate-y-1 transition-all duration-300"
                >
                  <span className="font-ui text-[.7rem] tracking-[.18em] text-gold">
                    {it.num}
                  </span>
                  <h3 className="font-display font-semibold text-[1.3rem] md:text-[1.45rem] text-navy mt-2 mb-2.5">
                    {it.title}
                  </h3>
                  <p className="font-ui font-light text-[.88rem] leading-relaxed text-[#4a4536]">
                    {it.desc}
                  </p>
                  <span className="font-ui text-[.66rem] tracking-[.16em] uppercase text-navy mt-5 inline-flex items-center gap-2 group-hover:text-gold transition-colors">
                    Découvrir
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <AxisSection />

      {/* GARDENS */}
      <section className="py-20 md:py-[150px]">
        <div className="max-w-[1180px] mx-auto px-5 md:px-10">
          <Reveal className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-10 md:mb-14">
            <h2 className="font-display font-semibold text-[clamp(1.7rem,7vw,2.9rem)] max-w-[520px] leading-tight">
              Les jardins à la française, dans leur plus pure expression
            </h2>
            <p className="font-ui font-light max-w-[340px] text-[#4a4536] leading-relaxed text-[.9rem]">
              Trente-trois hectares de broderies de buis, bassins et statues,
              dessinés pour manipuler la perspective et la lumière.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {[
              { img: IMG.jardins, title: "Les Broderies", tag: "Parterres sud", tall: true },
              { img: IMG.canal, title: "Le Grand Canal", tag: "875 mètres", tall: false },
              { img: IMG.miroir, title: "Le Miroir d'Eau", tag: "Symétrie parfaite", tall: false },
            ].map((g) => (
              <Reveal
                key={g.title}
                className={`relative overflow-hidden rounded-sm group ${g.tall ? "md:row-span-2" : ""}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={g.img}
                  alt={g.title}
                  className="w-full h-full min-h-[220px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 p-5 md:p-6 bg-gradient-to-t from-[#0f120a]/85 to-transparent">
                  <b className="block font-display italic text-cream text-xl font-medium">
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

      {/* EVENTS */}
      <section className="bg-brown text-cream py-20 md:py-[140px] relative">
        <div className="max-w-[1180px] mx-auto px-5 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-9 md:gap-[70px] items-center">
          <Reveal className="relative overflow-hidden rounded-sm">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={IMG.triton}
              alt="Château de Vaux-le-Vicomte au crépuscule"
              className="w-full h-[280px] md:h-[460px] object-cover"
            />
          </Reveal>
          <Reveal>
            <span className="font-ui text-[.68rem] tracking-[.22em] uppercase text-goldLight">
              Événements
            </span>
            <h2 className="font-display font-semibold text-[clamp(1.7rem,7vw,2.8rem)] mt-3 mb-4">
              Les Soirées aux Chandelles
            </h2>
            <p className="font-ui font-light leading-relaxed text-cream/75 max-w-[46ch] text-[.92rem]">
              Chaque samedi de mai à septembre, plus de 2 000 bougies et un
              ballet de lumière transforment le domaine en un tableau vivant
              du Grand Siècle.
            </p>
            <ul className="font-ui text-[.84rem] my-6">
              {[
                ["Période", "Mai — Septembre, tous les samedis"],
                ["Horaires", "17h30 — 21h30 (dernier accès)"],
                ["Ambiance", "Bougies, jeux d'eau et musique baroque"],
              ].map(([k, v]) => (
                <li
                  key={k}
                  className="flex flex-col md:flex-row md:gap-3.5 py-3 border-t border-cream/10 last:border-b text-cream/85"
                >
                  <b className="text-goldLight font-medium md:min-w-[150px]">{k}</b>
                  {v}
                </li>
              ))}
            </ul>
            <Link
              href="/evenements"
              className="inline-block w-full md:w-auto text-center border border-creamDeep px-8 py-3.5 text-xs tracking-wider uppercase font-ui hover:bg-cream hover:text-navy transition-colors"
            >
              Voir le calendrier
            </Link>
          </Reveal>
        </div>
      </section>

      {/* SEASONAL AGENDA */}
      <section className="py-20 md:py-[130px]">
        <div className="max-w-[1180px] mx-auto px-5 md:px-10">
          <Reveal className="flex flex-col md:flex-row md:justify-between md:items-end gap-5 mb-10 md:mb-14">
            <div>
              <span className="font-ui text-[.68rem] tracking-[.22em] uppercase text-gold">
                L&apos;agenda du domaine
              </span>
              <h2 className="font-display font-semibold text-[clamp(1.7rem,7vw,2.9rem)] leading-tight mt-3 max-w-[560px]">
                Toute l&apos;année à Vaux-le-Vicomte
              </h2>
            </div>
            <Link
              href="/evenements"
              className="font-ui text-[.7rem] tracking-[.16em] uppercase text-navy border-b border-gold pb-1 hover:text-gold transition-colors self-start"
            >
              Voir l&apos;agenda complet
            </Link>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
            {[
              ["Printemps", "La Chasse aux Œufs", "Le plus grand jeu de piste de Pâques, à travers les jardins du domaine."],
              ["Été", "Les Soirées aux Chandelles", "2 000 bougies, jeux d'eau et feu d'artifice, chaque samedi soir de mai à septembre."],
              ["Automne", "Les Journées Grand Siècle", "Le domaine revit en costumes du XVIIᵉ siècle le temps d'un week-end."],
              ["Hiver", "Noël à Vaux-le-Vicomte", "Le château se pare de décors féeriques pour les fêtes de fin d'année."],
            ].map(([saison, titre, desc]) => (
              <Reveal key={titre} className="border-t-2 border-gold pt-5">
                <span className="font-ui text-[.64rem] tracking-[.18em] uppercase text-gold">
                  {saison}
                </span>
                <h3 className="font-display font-semibold text-[1.25rem] text-navy mt-2 mb-2">
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

      {/* INFOS / BOOKING */}
      <section className="py-20 md:py-[150px]">
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

      {/* ACCESS */}
      <section className="bg-brown text-cream py-16 md:py-24">
        <div className="max-w-[1180px] mx-auto px-5 md:px-10 grid grid-cols-1 md:grid-cols-[1fr_1.35fr] gap-10 md:gap-16">
          <Reveal>
            <span className="font-ui text-[.68rem] tracking-[.22em] uppercase text-goldLight">
              Comment venir
            </span>
            <h2 className="font-display font-semibold text-[clamp(1.7rem,7vw,2.8rem)] leading-tight mt-3 mb-5">
              À moins d&apos;une heure de Paris
            </h2>
            <p className="font-ui font-light text-cream/75 leading-relaxed max-w-[42ch] text-[.92rem]">
              Le domaine se situe à Maincy, en Seine-et-Marne, à une cinquantaine
              de kilomètres au sud-est de la capitale.
            </p>
            <p className="font-display italic text-goldLight text-[1.05rem] mt-6 leading-relaxed">
              Château de Vaux-le-Vicomte
              <span className="block font-ui not-italic text-[.8rem] text-cream/70 mt-1">
                77950 Maincy — Seine-et-Marne
              </span>
            </p>
          </Reveal>
          <Reveal className="grid sm:grid-cols-2 gap-x-8 gap-y-7">
            {[
              ["En voiture", "Autoroutes A4 puis A5, sortie Saint-Germain-Laxis, ou A6. Environ 55 minutes depuis Paris."],
              ["En train", "RER D ou Transilien ligne R depuis Paris Gare de Lyon jusqu'à la gare de Melun."],
              ["La navette Châteaubus", "Depuis la gare de Melun jusqu'à l'entrée du domaine, les week-ends et jours fériés."],
              ["Stationnement", "Un vaste parking gratuit vous accueille à l'entrée du château."],
            ].map(([k, v]) => (
              <div key={k} className="border-t border-cream/15 pt-4">
                <b className="block font-ui text-[.7rem] tracking-[.14em] uppercase text-goldLight mb-2">
                  {k}
                </b>
                <p className="font-ui font-light text-[.88rem] leading-relaxed text-cream/80">
                  {v}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="py-16 md:py-24 bg-navy text-cream">
        <div className="max-w-[680px] mx-auto px-5 text-center">
          <Reveal>
            <span className="font-ui text-[.68rem] tracking-[.22em] uppercase text-goldLight">
              Restez informé
            </span>
            <h2 className="font-display font-semibold text-[clamp(1.6rem,6.5vw,2.5rem)] leading-tight mt-3 mb-4">
              Recevez la programmation du domaine
            </h2>
            <p className="font-ui font-light text-cream/70 leading-relaxed max-w-[46ch] mx-auto text-[.92rem]">
              Événements, ouvertures exceptionnelles et actualités de
              Vaux-le-Vicomte, directement dans votre boîte mail.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-8 max-w-[480px] mx-auto">
              <input
                type="email"
                placeholder="Votre adresse e-mail"
                className="flex-1 min-w-0 bg-transparent border border-cream/25 rounded-sm px-4 py-3.5 font-ui text-sm text-cream placeholder:text-cream/40 focus:border-gold focus:outline-none transition-colors"
              />
              <button
                type="button"
                className="border border-gold bg-gold text-navy px-8 py-3.5 text-xs tracking-wider uppercase font-ui shrink-0"
              >
                S&apos;inscrire
              </button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

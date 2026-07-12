export default function PageHero({
  image,
  alt,
  eyebrow,
  title,
}: {
  image: string;
  alt: string;
  eyebrow: string;
  title: string;
}) {
  return (
    <section className="relative h-[52vh] min-h-[360px] md:h-[60vh] flex items-end overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#141912]/30 via-[#141912]/30 to-[#0f140c]/85" />
      <div className="relative z-[2] max-w-[1180px] mx-auto px-5 md:px-10 pb-14 md:pb-20 w-full">
        <span className="font-ui text-goldLight text-[.68rem] tracking-[.22em] uppercase">
          {eyebrow}
        </span>
        <h1 className="font-display font-medium text-cream text-[clamp(2.1rem,8vw,4.2rem)] leading-tight mt-2 max-w-[900px]">
          {title}
        </h1>
      </div>
    </section>
  );
}

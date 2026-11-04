type PageIntroProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  image: string;
};

export default function PageIntro({ eyebrow, title, subtitle, image }: PageIntroProps) {
  return (
    <section className="relative isolate flex h-[56vh] min-h-[420px] items-end overflow-hidden border-b border-neutral-200 dark:border-neutral-800">
      <img
        src={image}
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        style={{ animation: 'kenBurns 20s ease-out forwards' }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/85 via-black/55 to-black/25" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/75 to-transparent" />

      <div className="w-full pb-16 pt-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p
            className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-emerald-400/50 bg-black/40 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-emerald-300 backdrop-blur"
            style={{ animation: 'fadeUp 0.7s 0.1s both' }}
          >
            {eyebrow}
          </p>
          <h1
            className="max-w-3xl text-4xl font-extrabold leading-[1.15] text-white opacity-0 sm:text-5xl lg:text-6xl"
            style={{ animation: 'fadeUp 0.7s 0.25s forwards' }}
          >
            {title}
          </h1>
          {subtitle && (
            <p
              className="mt-5 max-w-2xl translate-y-4 text-lg leading-relaxed text-neutral-100 opacity-0"
              style={{ animation: 'fadeUp 0.7s 0.4s forwards' }}
            >
              {subtitle}
            </p>
          )}
        </div>
      </div>

      <style>{`
        @keyframes fadeUp { to { opacity: 1; transform: translateY(0); } }
        @keyframes kenBurns { from { transform: scale(1); } to { transform: scale(1.15); } }
      `}</style>
    </section>
  );
}

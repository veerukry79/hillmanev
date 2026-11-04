import { Battery, Coins, Heart, Zap } from 'lucide-react';
import PageIntro from '@/components/PageIntro';
import Reveal from '@/components/Reveal';
import { HIGHLIGHTS, STOCK_IMAGES } from '@/lib/siteAssets';

const FEATURE_ICONS = [Battery, Zap, Coins, Heart];

export default function WhyHilmanPage() {
  return (
    <>
      <PageIntro
        eyebrow="Why HILMAN"
        title="Committed to the best EV performance"
        subtitle="We believe electric mobility is the future of a cleaner world. Every HILMAN model is built around customer satisfaction and affordability."
        image={STOCK_IMAGES.batteryCells}
      />

      <section className="bg-neutral-50 py-20 dark:bg-neutral-950">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 sm:grid-cols-2 lg:px-8">
          {HIGHLIGHTS.map((item, i) => {
            const Icon = FEATURE_ICONS[i];
            return (
              <Reveal key={item.title} delay={((i % 2) + 1) as 1 | 2}>
                <article className="group relative h-full overflow-hidden rounded-3xl border border-neutral-200 bg-white p-10 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/60 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-emerald-400/60">
                  <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-emerald-500/5 transition-transform duration-500 group-hover:scale-150 dark:bg-emerald-400/5" />
                  <div className="relative">
                    <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 transition-colors group-hover:bg-emerald-500/20 dark:bg-emerald-400/10 dark:text-emerald-300 dark:group-hover:bg-emerald-400/20">
                      <Icon className="h-8 w-8" />
                    </div>
                    <h2 className="mt-8 text-2xl font-extrabold text-neutral-900 dark:text-white">
                      {item.title}
                    </h2>
                    <p className="mt-3 leading-relaxed text-neutral-600 dark:text-neutral-300">
                      {item.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-neutral-200 bg-neutral-100 py-24 dark:border-neutral-800 dark:bg-neutral-900/40">
        <img
          src={STOCK_IMAGES.chargingStation}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-10 dark:opacity-15"
          style={{ animation: 'kenBurns 30s ease-out forwards' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-100 via-neutral-100/90 to-neutral-100/60 dark:from-neutral-950 dark:via-neutral-950/90 dark:to-neutral-950/60" />
        <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
          <Reveal>
            <h2 className="text-3xl font-extrabold text-neutral-900 sm:text-4xl dark:text-white">
              Cleaner transport, built around you
            </h2>
            <p className="mt-5 leading-relaxed text-neutral-600 dark:text-neutral-300">
              Zero-emission vehicles offer real environmental benefits where fuel-run vehicles
              account for the majority of greenhouse gas emissions. Every day we work toward
              something innovative and extraordinary for a greener future.
            </p>
          </Reveal>
        </div>
        <style>{`@keyframes kenBurns { from { transform: scale(1); } to { transform: scale(1.12); } }`}</style>
      </section>

      <section className="bg-neutral-50 py-24 dark:bg-neutral-950">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-3 lg:px-8">
          <Reveal>
            <div className="relative h-72 overflow-hidden rounded-3xl">
              <img
                src={STOCK_IMAGES.batteryCar}
                alt="Electric vehicle battery"
                className="h-full w-full object-cover transition-transform duration-[1.5s] hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <p className="absolute bottom-6 left-6 text-lg font-bold text-white">
                Advanced battery tech
              </p>
            </div>
          </Reveal>
          <Reveal delay={2}>
            <div className="relative h-72 overflow-hidden rounded-3xl">
              <img
                src={STOCK_IMAGES.windCoast}
                alt="Renewable energy"
                className="h-full w-full object-cover transition-transform duration-[1.5s] hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <p className="absolute bottom-6 left-6 text-lg font-bold text-white">
                Sustainable energy
              </p>
            </div>
          </Reveal>
          <Reveal delay={3}>
            <div className="relative h-72 overflow-hidden rounded-3xl">
              <img
                src={STOCK_IMAGES.dirtBikeLake}
                alt="Electric bike outdoors"
                className="h-full w-full object-cover transition-transform duration-[1.5s] hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <p className="absolute bottom-6 left-6 text-lg font-bold text-white">
                Built for adventure
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

import { ArrowRight, Battery, Bike, Leaf, Zap } from 'lucide-react';
import Hero from '@/components/Hero';
import Reveal from '@/components/Reveal';
import ProductCard from '@/components/ProductCard';
import { PRODUCTS } from '@/lib/products';
import { HIGHLIGHTS, STOCK_IMAGES } from '@/lib/siteAssets';

const STATS = [
  { value: '1965', label: 'Serving the auto sector since' },
  { value: '3', label: 'Trendy electric models' },
  { value: '0', label: 'Emissions per ride' },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="bg-neutral-50 py-24 dark:bg-neutral-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-8">
            {STATS.map((stat, i) => (
              <Reveal key={stat.label} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <div className="text-center">
                  <p className="bg-gradient-to-r from-emerald-500 to-emerald-700 bg-clip-text text-4xl font-extrabold text-transparent sm:text-6xl dark:from-emerald-300 dark:to-emerald-500">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-xs text-neutral-500 sm:text-sm dark:text-neutral-400">
                    {stat.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-neutral-100 py-24 dark:border-neutral-800 dark:bg-neutral-900/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-600 dark:text-emerald-400">
                Our products
              </p>
              <h2 className="mt-4 text-3xl font-extrabold leading-[1.2] text-neutral-900 sm:text-4xl dark:text-white">
                Electric bikes and scooters
                <span className="block text-neutral-400 dark:text-neutral-500">for every rider</span>
              </h2>
            </Reveal>
            <Reveal delay={2}>
              <a
                href="#/products"
                className="inline-flex items-center gap-2 text-sm font-bold text-emerald-600 transition-colors hover:text-emerald-700 dark:text-emerald-300 dark:hover:text-emerald-200"
              >
                View all products
                <ArrowRight className="h-4 w-4" />
              </a>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.map((product, i) => (
              <ProductCard key={product.slug} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-neutral-50 py-24 dark:bg-neutral-950">
        <img
          src={STOCK_IMAGES.roadRider}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-10 dark:opacity-20"
          style={{ animation: 'kenBurns 25s ease-out forwards' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-50 via-neutral-50/90 to-neutral-50/40 dark:from-neutral-950 dark:via-neutral-950/90 dark:to-neutral-950/40" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-600 dark:text-emerald-400">
              Why HILMAN
            </p>
            <h2 className="mt-4 max-w-2xl text-3xl font-extrabold leading-[1.2] text-neutral-900 sm:text-4xl dark:text-white">
              Committed to the best EV performance
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {HIGHLIGHTS.map((item, i) => (
              <Reveal key={item.title} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                <article className="group h-full rounded-2xl border border-neutral-200 bg-white/90 p-8 backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:border-emerald-500/60 hover:shadow-lg hover:shadow-emerald-500/10 dark:border-neutral-800 dark:bg-neutral-900/80 dark:hover:border-emerald-400/60">
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-emerald-500/10 transition-colors group-hover:bg-emerald-500/20 dark:bg-emerald-400/10 dark:group-hover:bg-emerald-400/20">
                    <img src={item.icon} alt="" className="h-10 w-10 object-contain" />
                  </div>
                  <h3 className="mt-6 text-lg font-bold leading-snug text-neutral-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
        <style>{`@keyframes kenBurns { from { transform: scale(1); } to { transform: scale(1.12); } }`}</style>
      </section>

      <section className="bg-neutral-100 py-24 dark:bg-neutral-900/40">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <div className="relative h-80 overflow-hidden rounded-3xl">
              <img
                src={STOCK_IMAGES.scooterCity}
                alt="Electric scooter in the city"
                className="h-full w-full object-cover transition-transform duration-[1.5s] hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            </div>
          </Reveal>
          <Reveal delay={2}>
            <div className="flex flex-col justify-center">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-600 dark:text-emerald-400">
                Our mission
              </p>
              <h2 className="mt-4 text-3xl font-extrabold leading-[1.2] text-neutral-900 dark:text-white">
                A cleaner world, one bike at a time
              </h2>
              <p className="mt-5 leading-relaxed text-neutral-600 dark:text-neutral-300">
                Zero-emission vehicles offer real environmental benefits in a world where fuel-run
                vehicles account for the majority of greenhouse gas emissions. Every day we strive
                to embrace something innovative and extraordinary for a greener future.
              </p>
              <a
                href="#/about"
                className="mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-emerald-500/40 px-6 py-3 text-sm font-bold text-emerald-600 transition-all hover:gap-3 hover:bg-emerald-500/10 dark:border-emerald-400/40 dark:text-emerald-300 dark:hover:bg-emerald-400/10"
              >
                Read our story
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-neutral-200 bg-neutral-50 py-24 dark:border-neutral-800 dark:bg-neutral-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <p className="text-center text-xs font-bold uppercase tracking-[0.18em] text-emerald-600 dark:text-emerald-400">
              Built for the ride
            </p>
            <h2 className="mx-auto mt-4 max-w-2xl text-center text-3xl font-extrabold leading-[1.2] text-neutral-900 sm:text-4xl dark:text-white">
              Everything you need for electric mobility
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Battery, label: 'Lithium batteries' },
              { icon: Zap, label: 'High torque motors' },
              { icon: Bike, label: 'Stylish two-wheelers' },
              { icon: Leaf, label: 'Zero emissions' },
            ].map((item, i) => (
              <Reveal key={item.label} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                <div className="flex flex-col items-center rounded-3xl border border-neutral-200 bg-white p-10 text-center transition-all hover:-translate-y-1 hover:border-emerald-500/60 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-emerald-400/60">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-300">
                    <item.icon className="h-6 w-6" />
                  </span>
                  <p className="mt-5 font-bold text-neutral-900 dark:text-white">{item.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-neutral-200 bg-neutral-100 py-24 dark:border-neutral-800 dark:bg-neutral-900/40">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <a
              href="#/about"
              className="group relative flex h-72 flex-col justify-end overflow-hidden rounded-3xl p-10"
            >
              <img
                src={STOCK_IMAGES.greenBuilding}
                alt=""
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
              <div className="relative">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-300">About us</p>
                <h3 className="mt-3 text-2xl font-extrabold text-white">Driving the future of e-mobility</h3>
              </div>
            </a>
          </Reveal>
          <Reveal delay={2}>
            <a
              href="#/dealership"
              className="group relative flex h-72 flex-col justify-end overflow-hidden rounded-3xl border border-emerald-500/30 p-10 dark:border-emerald-400/30"
            >
              <img
                src={STOCK_IMAGES.windHills}
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-40 transition-transform duration-[1.2s] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-black/80 to-black dark:from-emerald-400/20 dark:via-neutral-950/80 dark:to-neutral-950" />
              <div className="relative">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-300">Partner with us</p>
                <h3 className="mt-3 text-2xl font-extrabold text-white">Apply for a HILMAN dealership</h3>
              </div>
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}

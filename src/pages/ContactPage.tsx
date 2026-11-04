import { MapPin, Phone, ArrowRight } from 'lucide-react';
import PageIntro from '@/components/PageIntro';
import Reveal from '@/components/Reveal';
import { PHONE_BRANCH_OFFICE, PHONE_HEAD_OFFICE, STOCK_IMAGES } from '@/lib/siteAssets';

const OFFICES = [
  { label: 'Head office', phone: PHONE_HEAD_OFFICE },
  { label: 'Branch office', phone: PHONE_BRANCH_OFFICE },
];

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contact us"
        title="We are here to help"
        subtitle="Call either office to enquire about any HILMAN model, pricing, or service."
        image={STOCK_IMAGES.roadSunset}
      />

      <section className="bg-neutral-50 py-20 dark:bg-neutral-950">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-2 lg:px-8">
          {OFFICES.map((office, i) => (
            <Reveal key={office.phone} delay={((i % 2) + 1) as 1 | 2}>
              <a
                href={`tel:${office.phone}`}
                className="group flex items-center gap-6 rounded-3xl border border-neutral-200 bg-white p-10 transition-all hover:-translate-y-1 hover:border-emerald-500/60 hover:shadow-lg hover:shadow-emerald-500/10 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-emerald-400/60"
              >
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 transition-all group-hover:scale-110 group-hover:bg-emerald-500/20 dark:bg-emerald-400/10 dark:text-emerald-300 dark:group-hover:bg-emerald-400/20">
                  <Phone className="h-6 w-6" />
                </span>
                <span>
                  <span className="block text-xs font-bold uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
                    {office.label}
                  </span>
                  <span className="mt-2 block text-2xl font-extrabold text-neutral-900 transition-colors group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-300">
                    {office.phone}
                  </span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="relative flex h-72 flex-col items-center justify-center overflow-hidden rounded-3xl border border-neutral-200 text-center dark:border-neutral-800">
              <img
                src={STOCK_IMAGES.scooterCity}
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-10 dark:opacity-20"
                style={{ animation: 'kenBurns 25s ease-out forwards' }}
              />
              <div className="absolute inset-0 bg-neutral-50/60 dark:bg-neutral-950/60" />
              <div className="relative px-6">
                <MapPin className="mx-auto h-8 w-8 text-emerald-600 dark:text-emerald-300" />
                <h2 className="mt-4 text-2xl font-extrabold text-neutral-900 dark:text-white">
                  Based in West Bengal, India
                </h2>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                  Serving customers and partners across India with electric two-wheelers and lithium
                  batteries.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mx-auto mt-12 max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="flex flex-col items-center justify-between gap-6 rounded-3xl border border-neutral-200 bg-white p-8 text-center sm:flex-row sm:text-left dark:border-neutral-800 dark:bg-neutral-900">
              <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                Want to sell HILMAN vehicles in your area? Apply for a dealership and grow with us.
              </p>
              <a
                href="#/dealership"
                className="inline-flex shrink-0 items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-sm font-bold text-white transition-all hover:scale-105 hover:bg-emerald-600 dark:bg-emerald-400 dark:text-neutral-950 dark:hover:bg-emerald-300"
              >
                Apply for dealership
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>
        <style>{`@keyframes kenBurns { from { transform: scale(1); } to { transform: scale(1.12); } }`}</style>
      </section>
    </>
  );
}

import { Phone, ArrowRight, TrendingUp, Handshake, MapPin } from 'lucide-react';
import PageIntro from '@/components/PageIntro';
import Reveal from '@/components/Reveal';
import { PHONE_BRANCH_OFFICE, PHONE_HEAD_OFFICE, STOCK_IMAGES } from '@/lib/siteAssets';

const BENEFITS = [
  { icon: TrendingUp, title: 'Grow with a rising brand', text: 'Electric mobility is expanding across India — be part of the growth from the ground up.' },
  { icon: Handshake, title: 'Trusted partnership', text: 'We support our dealers with supply chain, marketing and service backing.' },
  { icon: MapPin, title: 'Reach every corner', text: 'Our goal is to explore every part of India. Bring HILMAN to your region.' },
];

export default function DealershipPage() {
  return (
    <>
      <PageIntro
        eyebrow="Dealership"
        title="Join our business"
        subtitle="Our goal is to explore every part of India. Become a HILMAN partner and be part of the future of business expansion."
        image={STOCK_IMAGES.roadBridge}
      />

      <section className="bg-neutral-50 py-20 dark:bg-neutral-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {BENEFITS.map((benefit, i) => (
              <Reveal key={benefit.title} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <article className="group h-full rounded-3xl border border-neutral-200 bg-white p-8 transition-all hover:-translate-y-1 hover:border-emerald-500/60 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-emerald-400/60">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600 transition-all group-hover:scale-110 group-hover:bg-emerald-500/20 dark:bg-emerald-400/10 dark:text-emerald-300 dark:group-hover:bg-emerald-400/20">
                    <benefit.icon className="h-7 w-7" />
                  </span>
                  <h3 className="mt-6 text-xl font-extrabold text-neutral-900 dark:text-white">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                    {benefit.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-neutral-200 bg-neutral-100 py-24 dark:border-neutral-800 dark:bg-neutral-900/40">
        <img
          src={STOCK_IMAGES.dirtBikeBeach}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-10 dark:opacity-20"
          style={{ animation: 'kenBurns 25s ease-out forwards' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-100 via-neutral-100/90 to-neutral-100/50 dark:from-neutral-950 dark:via-neutral-950/90 dark:to-neutral-950/50" />
        <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
          <Reveal>
            <h2 className="text-3xl font-extrabold text-neutral-900 sm:text-4xl dark:text-white">
              How to apply
            </h2>
            <p className="mt-5 leading-relaxed text-neutral-600 dark:text-neutral-300">
              Call our head office or branch office to start your dealership application. Our team
              will take your details and guide you through the next steps.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href={`tel:${PHONE_HEAD_OFFICE}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-7 py-3.5 text-sm font-bold text-white transition-all hover:scale-105 hover:bg-emerald-600 dark:bg-emerald-400 dark:text-neutral-950 dark:hover:bg-emerald-300"
              >
                <Phone className="h-4 w-4" />
                Call head office
              </a>
              <a
                href={`tel:${PHONE_BRANCH_OFFICE}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-300 px-7 py-3.5 text-sm font-bold text-neutral-800 transition-all hover:scale-105 hover:border-emerald-500 hover:text-emerald-600 dark:border-neutral-600 dark:text-neutral-100 dark:hover:border-emerald-400 dark:hover:text-emerald-300"
              >
                <Phone className="h-4 w-4" />
                Call branch office
              </a>
            </div>
          </Reveal>
        </div>
        <style>{`@keyframes kenBurns { from { transform: scale(1); } to { transform: scale(1.12); } }`}</style>
      </section>

      <section className="bg-neutral-50 py-24 dark:bg-neutral-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <a
              href="#/contact"
              className="group flex flex-col items-center justify-between gap-6 rounded-3xl border border-neutral-200 bg-gradient-to-br from-white to-neutral-100 p-10 transition-all hover:border-emerald-500/40 sm:flex-row dark:border-neutral-800 dark:from-neutral-900 dark:to-neutral-950 dark:hover:border-emerald-400/40"
            >
              <p className="text-center text-lg font-semibold text-neutral-700 sm:text-left dark:text-neutral-200">
                Have a product question first? Get in touch with our team.
              </p>
              <span className="inline-flex shrink-0 items-center gap-2 rounded-full border border-emerald-500/40 px-6 py-3 text-sm font-bold text-emerald-600 transition-all group-hover:gap-3 group-hover:bg-emerald-500/10 dark:border-emerald-400/40 dark:text-emerald-300 dark:group-hover:bg-emerald-400/10">
                Contact us
                <ArrowRight className="h-4 w-4" />
              </span>
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}

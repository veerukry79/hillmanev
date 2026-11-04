import { ArrowRight } from 'lucide-react';
import PageIntro from '@/components/PageIntro';
import Reveal from '@/components/Reveal';
import { STOCK_IMAGES } from '@/lib/siteAssets';

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About us"
        title="Driving the future of e-mobility"
        subtitle="HILMAN is a leading distributor of battery-operated two-wheelers, focused on the transition to sustainable energy."
        image={STOCK_IMAGES.windHills}
      />

      <section className="bg-neutral-50 py-20 dark:bg-neutral-950">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <div className="relative h-96 overflow-hidden rounded-3xl">
              <img
                src={STOCK_IMAGES.scooterRiders}
                alt="Electric scooter riders"
                className="h-full w-full object-cover"
                style={{ animation: 'kenBurns 20s ease-out forwards' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
          </Reveal>
          <Reveal delay={2} className="flex flex-col justify-center">
            <h2 className="text-3xl font-extrabold leading-[1.2] text-neutral-900 dark:text-white">
              Our story
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-neutral-600 dark:text-neutral-300">
              <p>
                HILMAN is headquartered in West Bengal and is part of HILMAN EV India Private
                Limited. We are built on the principles of customer satisfaction and affordability,
                and we believe electric mobility is the future of a cleaner world.
              </p>
              <p>
                Through the introduction of three trendy scooter models and the release of more
                models, we hope to make a positive impact on the future.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-neutral-100 py-20 dark:border-neutral-800 dark:bg-neutral-900/40">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <Reveal>
            <h2 className="text-2xl font-extrabold text-neutral-900 sm:text-3xl dark:text-white">
              Our mission
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-neutral-600 dark:text-neutral-300">
              <p>
                As an integral part of innovation, our idea is to introduce something new to the
                market that can help combat climate change. Zero-emission vehicles offer a great
                deal of environmental benefit in the current environment where fuel-run vehicles
                account for the majority of greenhouse gas emissions.
              </p>
              <p>
                We are committed to providing an eco-friendly environment, one bike at a time. Our
                efforts do not end here — every day we strive to embrace something innovative and
                extraordinary to ensure a greener future.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-neutral-50 py-20 dark:bg-neutral-950">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:px-8">
          <Reveal className="order-2 flex flex-col justify-center lg:order-1">
            <h2 className="text-3xl font-extrabold leading-[1.2] text-neutral-900 dark:text-white">
              Our heritage
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-neutral-600 dark:text-neutral-300">
              <p>
                Since 1965 we have served in the automobile sector. Today HILMAN EV India Private
                Limited designs and manufactures EVs and lithium batteries, overseeing sales,
                marketing and branding operations across all of India.
              </p>
              <p>
                We play a key role in developing strategic reseller and supplier relationships,
                ensuring flexibility in response to an increasingly demanding market — including
                end-to-end management of the HILMAN EV supply chain, sales activities, and service
                and support.
              </p>
            </div>
          </Reveal>
          <Reveal delay={2} className="order-1 lg:order-2">
            <div className="relative h-96 overflow-hidden rounded-3xl">
              <img
                src={STOCK_IMAGES.motoJaipur}
                alt="Electric motorcycle in India"
                className="h-full w-full object-cover"
                style={{ animation: 'kenBurns 22s ease-out forwards' }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-neutral-200 bg-neutral-100 py-24 dark:border-neutral-800 dark:bg-neutral-900/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <a
              href="#/dealership"
              className="group relative flex flex-col items-center justify-between gap-8 overflow-hidden rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/15 via-neutral-100 to-neutral-100 p-10 transition-all hover:border-emerald-500/70 sm:flex-row sm:items-center dark:border-emerald-400/30 dark:from-emerald-400/15 dark:via-neutral-900 dark:to-neutral-900 dark:hover:border-emerald-400/70"
            >
              <div className="text-center sm:text-left">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-600 dark:text-emerald-300">
                  Join our business
                </p>
                <h2 className="mt-3 text-2xl font-extrabold text-neutral-900 sm:text-3xl dark:text-white">
                  Be part of the future of Indian e-mobility
                </h2>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3.5 text-sm font-bold text-white transition-all group-hover:gap-3 dark:bg-emerald-400 dark:text-neutral-950">
                Apply for dealership
                <ArrowRight className="h-4 w-4" />
              </span>
            </a>
          </Reveal>
        </div>
      </section>
      <style>{`@keyframes kenBurns { from { transform: scale(1); } to { transform: scale(1.12); } }`}</style>
    </>
  );
}

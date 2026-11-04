import { useEffect, useState } from 'react';
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { HERO_SLIDES } from '@/lib/siteAssets';

const AUTO_ADVANCE_MS = 6000;

export default function Hero() {
  const [index, setIndex] = useState(0);
  const total = HERO_SLIDES.length;

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % total);
    }, AUTO_ADVANCE_MS);
    return () => window.clearInterval(timer);
  }, [total]);

  const goTo = (next: number) => setIndex((next + total) % total);

  return (
    <section className="relative isolate h-screen min-h-[640px] w-full overflow-hidden">
      {HERO_SLIDES.map((slide, i) => (
        <img
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          className={`absolute inset-0 -z-10 h-full w-full object-cover transition-opacity duration-[1200ms] ${
            i === index ? 'scale-110 opacity-100' : 'scale-100 opacity-0'
          }`}
          style={{ transition: 'opacity 1.2s ease, transform 6s ease-out' }}
        />
      ))}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/80 via-black/60 to-black/20" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/85 via-transparent to-black/40" />

      <div className="mx-auto flex h-full max-w-7xl flex-col justify-center px-6 pt-20 lg:px-8">
        <p
          className="mb-5 inline-flex w-fit translate-y-4 items-center gap-2 rounded-full border border-emerald-400/40 bg-neutral-950/60 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-emerald-300 opacity-0 backdrop-blur"
          style={{ animation: 'float-slow 6s ease-in-out infinite, fadeUp 0.8s 0.2s forwards' }}
        >
          Electric mobility, built for India
        </p>
        <h1
          className="max-w-3xl text-5xl font-extrabold leading-[1.1] text-white opacity-0 sm:text-6xl lg:text-7xl"
          style={{ animation: 'fadeUp 0.8s 0.4s forwards' }}
        >
          Ride cleaner.
          <span className="block bg-gradient-to-r from-emerald-300 to-emerald-500 bg-clip-text text-transparent">
            Ride further.
          </span>
        </h1>
        <p
          className="mt-6 max-w-xl translate-y-4 text-lg leading-relaxed text-neutral-200 opacity-0"
          style={{ animation: 'fadeUp 0.8s 0.6s forwards' }}
        >
          HILMAN is a leading distributor of battery-operated two-wheelers. Long-lasting lithium
          batteries, powerful motors and a team that puts customers first.
        </p>
        <div
          className="mt-10 flex translate-y-4 flex-wrap gap-4 opacity-0"
          style={{ animation: 'fadeUp 0.8s 0.8s forwards' }}
        >
          <a
            href="#/products"
            className="rounded-full bg-emerald-400 px-7 py-3.5 text-sm font-bold text-neutral-950 transition-all hover:scale-105 hover:bg-emerald-300 hover:shadow-lg hover:shadow-emerald-500/30"
          >
            Explore Products
          </a>
          <a
            href="#/contact"
            className="rounded-full border border-white/50 px-7 py-3.5 text-sm font-bold text-white backdrop-blur transition-all hover:scale-105 hover:border-emerald-400 hover:text-emerald-200"
          >
            Enquire Now
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 z-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
          <div className="flex items-center gap-2">
            {HERO_SLIDES.map((slide, i) => (
              <button
                key={slide.src}
                type="button"
                aria-label={`Show slide ${i + 1}`}
                onClick={() => goTo(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === index ? 'w-8 bg-emerald-400' : 'w-2 bg-white/50 hover:bg-white'
                }`}
              />
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Previous slide"
              onClick={() => goTo(index - 1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-neutral-950/50 text-white transition-all hover:scale-110 hover:border-emerald-400 hover:text-emerald-300"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Next slide"
              onClick={() => goTo(index + 1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-neutral-950/50 text-white transition-all hover:scale-110 hover:border-emerald-400 hover:text-emerald-300"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 lg:block">
        <ChevronDown className="h-6 w-6 animate-bounce text-white/40" />
      </div>

      <style>{`
        @keyframes fadeUp {
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}

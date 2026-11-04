import { Home } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { STOCK_IMAGES } from '@/lib/siteAssets';

export default function NotFoundPage() {
  return (
    <section className="relative flex h-screen min-h-[600px] items-center justify-center overflow-hidden">
      <img
        src={STOCK_IMAGES.motoModern}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-10 dark:opacity-20"
        style={{ animation: 'kenBurns 20s ease-out forwards' }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-50 via-neutral-50/80 to-neutral-50/60 dark:from-neutral-950 dark:via-neutral-950/80 dark:to-neutral-950/60" />
      <div className="relative px-6 text-center">
        <Reveal>
          <p className="bg-gradient-to-r from-emerald-500 to-emerald-700 bg-clip-text text-7xl font-extrabold text-transparent sm:text-9xl dark:from-emerald-300 dark:to-emerald-500">
            404
          </p>
          <h1 className="mt-4 text-2xl font-extrabold text-neutral-900 sm:text-3xl dark:text-white">
            Page not found
          </h1>
          <p className="mx-auto mt-4 max-w-md text-neutral-600 dark:text-neutral-300">
            The page you are looking for may have moved. Let's get you back on the road.
          </p>
          <a
            href="#/"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3.5 text-sm font-bold text-white transition-all hover:scale-105 hover:bg-emerald-600 dark:bg-emerald-400 dark:text-neutral-950 dark:hover:bg-emerald-300"
          >
            <Home className="h-4 w-4" />
            Back to home
          </a>
        </Reveal>
      </div>
      <style>{`@keyframes kenBurns { from { transform: scale(1); } to { transform: scale(1.15); } }`}</style>
    </section>
  );
}

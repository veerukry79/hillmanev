import PageIntro from '@/components/PageIntro';
import Reveal from '@/components/Reveal';
import ProductCard from '@/components/ProductCard';
import { PRODUCTS } from '@/lib/products';
import { STOCK_IMAGES } from '@/lib/siteAssets';

export default function ProductsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Our products"
        title="Electric bikes and scooters for every rider"
        subtitle="Battery-operated two-wheelers from HILMAN, designed for performance, affordability and everyday riding."
        image={STOCK_IMAGES.scooterCollection}
      />

      <section className="bg-neutral-50 py-20 dark:bg-neutral-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.map((product, i) => (
              <Reveal key={product.slug} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <ProductCard product={product} index={i} />
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="mt-10 text-sm text-neutral-500 dark:text-neutral-400">
              Prices exclude accessories, labour, handling, fitting and delivery.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-neutral-200 bg-neutral-100 py-24 dark:border-neutral-800 dark:bg-neutral-900/40">
        <img
          src={STOCK_IMAGES.motoModern}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-10 dark:opacity-15"
          style={{ animation: 'kenBurns 25s ease-out forwards' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-100 via-neutral-100/90 to-neutral-100/80 dark:from-neutral-950 dark:via-neutral-950/90 dark:to-neutral-950/80" />
        <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
          <Reveal>
            <h2 className="text-3xl font-extrabold text-neutral-900 sm:text-4xl dark:text-white">
              Not sure which model is right for you?
            </h2>
            <p className="mt-5 leading-relaxed text-neutral-600 dark:text-neutral-300">
              Our team can walk you through specifications, colour options and pricing for every
              HILMAN model.
            </p>
            <a
              href="#/contact"
              className="mt-8 inline-flex rounded-full bg-emerald-500 px-7 py-3.5 text-sm font-bold text-white transition-all hover:scale-105 hover:bg-emerald-600 dark:bg-emerald-400 dark:text-neutral-950 dark:hover:bg-emerald-300"
            >
              Talk to our team
            </a>
          </Reveal>
        </div>
        <style>{`@keyframes kenBurns { from { transform: scale(1); } to { transform: scale(1.12); } }`}</style>
      </section>
    </>
  );
}

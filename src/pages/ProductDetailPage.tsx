import { ArrowRight, Battery, Bike, Phone, Zap } from 'lucide-react';
import NotFoundPage from '@/pages/NotFoundPage';
import Reveal from '@/components/Reveal';
import { findProduct, PRODUCTS, type Product } from '@/lib/products';
import { STOCK_IMAGES } from '@/lib/siteAssets';

type ProductDetailPageProps = {
  slug: string;
};

const RELATED_IMAGES: Record<string, string> = {
  rock: STOCK_IMAGES.dirtBikeClose,
  rambo: STOCK_IMAGES.scooterRiders,
  'rambo-cool': STOCK_IMAGES.scooterLined,
};

export default function ProductDetailPage({ slug }: ProductDetailPageProps) {
  const product = findProduct(slug);
  if (!product) return <NotFoundPage />;
  return <ProductDetail product={product} />;
}

function ProductDetail({ product }: { product: Product }) {
  const [cover, ...rest] = product.gallery;
  const others = PRODUCTS.filter((p) => p.slug !== product.slug);
  const relatedImage = RELATED_IMAGES[product.slug] ?? STOCK_IMAGES.motoModern;

  return (
    <>
      <section className="relative isolate flex h-[56vh] min-h-[440px] items-end overflow-hidden border-b border-neutral-200 dark:border-neutral-800">
        <img
          src={cover ?? relatedImage}
          alt={`HILMAN ${product.name}`}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
          style={{ animation: 'kenBurns 20s ease-out forwards' }}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/85 via-black/55 to-black/30" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/75 to-transparent" />

        <div className="w-full pb-16 pt-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <p
              className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-emerald-400/50 bg-black/40 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-emerald-300 backdrop-blur"
              style={{ animation: 'fadeUp 0.7s 0.1s both' }}
            >
              HILMAN electric range
            </p>
            <h1
              className="text-5xl font-extrabold text-white opacity-0 sm:text-6xl lg:text-7xl"
              style={{ animation: 'fadeUp 0.7s 0.25s forwards' }}
            >
              {product.name}
            </h1>
            <p
              className="mt-4 translate-y-4 text-lg font-semibold text-emerald-300 opacity-0"
              style={{ animation: 'fadeUp 0.7s 0.4s forwards' }}
            >
              {product.tagline}
            </p>
          </div>
        </div>
        <style>{`
          @keyframes fadeUp { to { opacity: 1; transform: translateY(0); } }
          @keyframes kenBurns { from { transform: scale(1); } to { transform: scale(1.15); } }
        `}</style>
      </section>

      <section className="bg-neutral-50 py-20 dark:bg-neutral-950">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-5 lg:px-8">
          <Reveal className="space-y-4 lg:col-span-3">
            {cover && (
              <img
                src={cover}
                alt={`HILMAN ${product.name}`}
                className="aspect-[4/3] w-full rounded-3xl object-cover"
              />
            )}
            {rest.length > 0 && (
              <div className="grid grid-cols-3 gap-4">
                {rest.map((src, i) => (
                  <img
                    key={src}
                    src={src}
                    alt={`HILMAN ${product.name} photo ${i + 2}`}
                    className="aspect-square w-full rounded-2xl object-cover transition-transform duration-500 hover:scale-105"
                  />
                ))}
              </div>
            )}
            {rest.length === 0 && !cover && (
              <div className="flex aspect-[4/3] items-center justify-center rounded-3xl border border-neutral-200 bg-gradient-to-br from-neutral-200 to-neutral-300 text-6xl font-extrabold tracking-tight text-neutral-500 dark:border-neutral-800 dark:from-neutral-800 dark:to-neutral-950">
                {product.name}
              </div>
            )}
          </Reveal>

          <Reveal delay={2} className="lg:col-span-2">
            <h2 className="text-2xl font-extrabold text-neutral-900 dark:text-white">
              About this model
            </h2>
            <p className="mt-4 text-base leading-relaxed text-neutral-600 dark:text-neutral-300">
              {product.description}
            </p>

            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { icon: Battery, label: 'Lithium battery' },
                { icon: Zap, label: 'Electric motor' },
                { icon: Bike, label: 'Two-wheeler' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center gap-2 rounded-2xl border border-neutral-200 bg-white p-4 text-center dark:border-neutral-800 dark:bg-neutral-900"
                >
                  <item.icon className="h-6 w-6 text-emerald-600 dark:text-emerald-300" />
                  <span className="text-xs font-semibold text-neutral-600 dark:text-neutral-300">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 via-white to-neutral-100 p-8 dark:border-emerald-400/30 dark:from-emerald-400/10 dark:via-neutral-900 dark:to-neutral-900">
              <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
                Interested in {product.name}?
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                Call our team for specifications, colour options and the latest pricing.
              </p>
              <a
                href="#/contact"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-sm font-bold text-white transition-all hover:scale-105 hover:bg-emerald-600 dark:bg-emerald-400 dark:text-neutral-950 dark:hover:bg-emerald-300"
              >
                <Phone className="h-4 w-4" />
                Contact us
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-neutral-200 bg-neutral-100 py-24 dark:border-neutral-800 dark:bg-neutral-900/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <h2 className="text-2xl font-extrabold text-neutral-900 sm:text-3xl dark:text-white">
              Explore more models
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {others.map((other, i) => (
              <Reveal key={other.slug} delay={((i % 2) + 1) as 1 | 2}>
                <a
                  href={`#/products/${other.slug}`}
                  className="group flex items-center gap-6 overflow-hidden rounded-3xl border border-neutral-200 bg-white transition-all hover:-translate-y-1 hover:border-emerald-500/60 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-emerald-400/60"
                >
                  <div className="h-36 w-36 shrink-0 overflow-hidden bg-neutral-100 dark:bg-neutral-950">
                    {other.gallery[0] ? (
                      <img
                        src={other.gallery[0]}
                        alt={`HILMAN ${other.name}`}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center text-xl font-extrabold text-neutral-400 dark:text-neutral-500">
                        {other.name}
                      </div>
                    )}
                  </div>
                  <div className="pr-6">
                    <h3 className="text-xl font-extrabold text-neutral-900 transition-colors group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-300">
                      {other.name}
                    </h3>
                    <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">{other.tagline}</p>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-emerald-600 dark:text-emerald-300">
                      View <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

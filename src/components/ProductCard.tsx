import { ArrowUpRight } from 'lucide-react';
import type { Product } from '@/lib/products';

type ProductCardProps = {
  product: Product;
  index?: number;
};

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const cover = product.gallery[0];

  return (
    <a
      href={`#/products/${product.slug}`}
      className="reveal group relative flex flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-white transition-all duration-300 hover:-translate-y-2 hover:border-emerald-500/60 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-emerald-400/60"
      style={{ transitionDelay: `${(index % 3) * 0.1}s` }}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100 dark:bg-neutral-950">
        {cover ? (
          <img
            src={cover}
            alt={`HILMAN ${product.name}`}
            className="h-full w-full object-cover transition-transform duration-[800ms] group-hover:scale-110"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-neutral-200 to-neutral-300 text-5xl font-extrabold tracking-tight text-neutral-500 transition-all duration-500 group-hover:text-neutral-400 dark:from-neutral-800 dark:to-neutral-950 dark:text-neutral-500">
            {product.name}
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
      <div className="flex flex-1 flex-col p-7">
        <h3 className="text-2xl font-extrabold text-neutral-900 transition-colors group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-300">
          {product.name}
        </h3>
        <p className="mt-2 text-sm font-semibold text-emerald-600/80 dark:text-emerald-300/80">
          {product.tagline}
        </p>
        <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-emerald-600 transition-all group-hover:gap-3 group-hover:text-emerald-700 dark:text-emerald-300 dark:group-hover:text-emerald-200">
          View details
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </a>
  );
}

import { SITE } from '@/lib/siteAssets';

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  gallery: string[];
};

export const PRODUCTS: Product[] = [
  {
    slug: 'rock',
    name: 'ROCK',
    tagline: 'High speed electric motor-bike',
    description:
      'ROCK combines two-wheeler styling with a high-speed electric motor and long-lasting lithium batteries, for riders who want performance with a clean, eco-friendly ride.',
    gallery: [
      `${SITE}/admin/portfolio/220715080721IMG_20220716_072043.jpg`,
      `${SITE}/admin/portfolio/220630110639rock%20jpg-2.jpg`,
      `${SITE}/admin/portfolio/220629080647Banner-bg2.jpg`,
      `${SITE}/admin/portfolio/220629030617Banner-bg1.jpg`,
    ],
  },
  {
    slug: 'rambo',
    name: 'RAMBO',
    tagline: 'Part of the HILMAN electric range',
    description:
      'RAMBO is one of HILMAN battery-operated two-wheelers. Contact our team for specifications, colour options and current pricing.',
    gallery: [],
  },
  {
    slug: 'rambo-cool',
    name: 'RAMBO COOL',
    tagline: 'Part of the HILMAN electric range',
    description:
      'RAMBO COOL is one of HILMAN battery-operated two-wheelers. Contact our team for specifications, colour options and current pricing.',
    gallery: [],
  },
];

export function findProduct(slug: string): Product | undefined {
  return PRODUCTS.find((product) => product.slug === slug);
}

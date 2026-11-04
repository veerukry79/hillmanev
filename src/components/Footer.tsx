import { LOGO_URL, PHONE_BRANCH_OFFICE, PHONE_HEAD_OFFICE } from '@/lib/siteAssets';

const EXPLORE_LINKS = [
  { label: 'Products', href: '#/products' },
  { label: 'Why HILMAN', href: '#/why-hilman' },
  { label: 'About us', href: '#/about' },
];

const CONNECT_LINKS = [
  { label: 'Contact us', href: '#/contact' },
  { label: 'Dealership application', href: '#/dealership' },
];

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <span className="inline-flex rounded-lg bg-white px-2 py-1 ring-1 ring-neutral-200 dark:ring-neutral-700">
            <img src={LOGO_URL} alt="HILMAN logo" className="h-9 w-auto object-contain" />
          </span>
          <p className="mt-6 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
            HILMAN is committed to driving the future of e-mobility and energy storage systems. We
            design and manufacture EVs and lithium batteries.
          </p>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
            Explore
          </h4>
          <ul className="mt-5 space-y-3">
            {EXPLORE_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-semibold text-neutral-700 transition-colors hover:text-emerald-600 dark:text-neutral-200 dark:hover:text-emerald-400"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
            Connect
          </h4>
          <ul className="mt-5 space-y-3">
            {CONNECT_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-semibold text-neutral-700 transition-colors hover:text-emerald-600 dark:text-neutral-200 dark:hover:text-emerald-400"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
            Call us
          </h4>
          <ul className="mt-5 space-y-4 text-sm text-neutral-700 dark:text-neutral-200">
            <li>
              <span className="block text-xs text-neutral-500 dark:text-neutral-400">Head office</span>
              <a href={`tel:${PHONE_HEAD_OFFICE}`} className="font-semibold hover:text-emerald-600 dark:hover:text-emerald-400">
                {PHONE_HEAD_OFFICE}
              </a>
            </li>
            <li>
              <span className="block text-xs text-neutral-500 dark:text-neutral-400">Branch office</span>
              <a href={`tel:${PHONE_BRANCH_OFFICE}`} className="font-semibold hover:text-emerald-600 dark:hover:text-emerald-400">
                {PHONE_BRANCH_OFFICE}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-neutral-200 dark:border-neutral-800">
        <p className="mx-auto max-w-7xl px-6 py-6 text-xs text-neutral-500 dark:text-neutral-400 lg:px-8">
          © {new Date().getFullYear()} HILMAN EV India Private Limited. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

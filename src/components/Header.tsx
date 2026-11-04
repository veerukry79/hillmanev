import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { LOGO_URL } from '@/lib/siteAssets';
import { usePath } from '@/lib/router';
import ThemeToggle from '@/components/ThemeToggle';

const NAV_LINKS = [
  { label: 'Products', href: '#/products' },
  { label: 'Why HILMAN', href: '#/why-hilman' },
  { label: 'About', href: '#/about' },
  { label: 'Contact', href: '#/contact' },
];

type HeaderProps = {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
};

export default function Header({ theme, onToggleTheme }: HeaderProps) {
  const path = usePath();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [path]);

  const isActive = (href: string) =>
    path === href.replace(/^#/, '') || path.startsWith(`${href.replace(/^#/, '')}/`);

  const solid = scrolled || menuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        solid
          ? 'border-b border-neutral-200 bg-white/95 backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/95'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <a href="#/" className="flex items-center">
          <span className="flex h-11 items-center rounded-lg bg-white px-2 py-1 ring-1 ring-neutral-200 dark:ring-neutral-700">
            <img src={LOGO_URL} alt="HILMAN logo" className="h-9 w-auto object-contain" />
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? 'page' : undefined}
              className={`text-sm font-semibold transition-colors hover:text-emerald-500 dark:hover:text-emerald-400 ${
                isActive(link.href)
                  ? 'text-emerald-600 dark:text-emerald-400'
                  : 'text-neutral-700 dark:text-neutral-200'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <a
            href="#/dealership"
            className="rounded-full border border-neutral-300 px-5 py-2.5 text-sm font-semibold text-neutral-800 transition-colors hover:border-emerald-500 hover:text-emerald-600 dark:border-neutral-600 dark:text-neutral-100 dark:hover:border-emerald-400 dark:hover:text-emerald-400"
          >
            Apply for Dealership
          </a>
          <a
            href="#/contact"
            className="rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-emerald-600 dark:bg-emerald-400 dark:text-neutral-950 dark:hover:bg-emerald-300"
          >
            Enquire Now
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-300 text-neutral-800 dark:border-neutral-700 dark:text-neutral-100"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-neutral-200 bg-white px-6 pb-8 pt-4 dark:border-neutral-800 dark:bg-neutral-950 lg:hidden">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-3 text-base font-semibold text-neutral-800 hover:bg-neutral-100 hover:text-emerald-600 dark:text-neutral-100 dark:hover:bg-neutral-900 dark:hover:text-emerald-400"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-6 flex flex-col gap-3">
            <a
              href="#/contact"
              className="rounded-full bg-emerald-500 px-5 py-3 text-center text-sm font-bold text-white dark:bg-emerald-400 dark:text-neutral-950"
            >
              Enquire Now
            </a>
            <a
              href="#/dealership"
              className="rounded-full border border-neutral-300 px-5 py-3 text-center text-sm font-semibold text-neutral-800 dark:border-neutral-600 dark:text-neutral-100"
            >
              Apply for Dealership
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

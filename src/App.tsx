import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HomePage from '@/pages/HomePage';
import ProductsPage from '@/pages/ProductsPage';
import ProductDetailPage from '@/pages/ProductDetailPage';
import WhyHilmanPage from '@/pages/WhyHilmanPage';
import AboutPage from '@/pages/AboutPage';
import ContactPage from '@/pages/ContactPage';
import DealershipPage from '@/pages/DealershipPage';
import NotFoundPage from '@/pages/NotFoundPage';
import { usePath } from '@/lib/router';
import { useTheme } from '@/lib/useTheme';

const PRODUCT_PATH = /^\/products\/([a-z-]+)$/;

function renderPage(path: string) {
  const productMatch = path.match(PRODUCT_PATH);
  if (productMatch) return <ProductDetailPage slug={productMatch[1]} />;

  switch (path) {
    case '/':
      return <HomePage />;
    case '/products':
      return <ProductsPage />;
    case '/why-hilman':
      return <WhyHilmanPage />;
    case '/about':
      return <AboutPage />;
    case '/contact':
      return <ContactPage />;
    case '/dealership':
      return <DealershipPage />;
    default:
      return <NotFoundPage />;
  }
}

function App() {
  const path = usePath();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [path]);

  return (
    <div className="flex min-h-screen flex-col bg-neutral-50 font-sans text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <main className="flex-1">{renderPage(path)}</main>
      <Footer />
    </div>
  );
}

export default App;

import React, { useState, useEffect, useCallback } from 'react';
import { ToastProvider } from './context/ToastContext';
import { ToastContainer } from './components/ToastContainer';
import { ParticlesBackground } from './components/ParticlesBackground';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { GlobalSearchModal } from './components/GlobalSearchModal';
import { PortfolioLightbox } from './components/PortfolioLightbox';
import { OrderQuoteModal } from './components/OrderQuoteModal';

// Pages
import { HomePage } from './pages/HomePage';
import { MinecraftPage } from './pages/MinecraftPage';
import { WikiPage } from './pages/WikiPage';
import { VotePage } from './pages/VotePage';
import { ServicesPage } from './pages/ServicesPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { LivesPage } from './pages/LivesPage';
import { CommunityPage } from './pages/CommunityPage';
import { NewsPage } from './pages/NewsPage';
import { NotFoundPage } from './pages/NotFoundPage';

import { PageRoute } from './types';
import { PORTFOLIO_ITEMS } from './data/portfolioData';

export function AppContent() {
  const [currentRoute, setCurrentRoute] = useState<PageRoute>('home');
  const [routeParams, setRouteParams] = useState<Record<string, string>>({});
  
  // Modals & Lightbox state
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeLightboxItemId, setActiveLightboxItemId] = useState<string | null>(null);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [orderModalInitialCategory, setOrderModalInitialCategory] = useState<string | undefined>(undefined);
  const [orderModalInitialService, setOrderModalInitialService] = useState<string | undefined>(undefined);

  // Parse hash on initial load and on hashchange (GitHub Pages friendly)
  const parseHash = useCallback(() => {
    const hash = window.location.hash.replace(/^#\/?/, '');
    if (!hash) {
      setCurrentRoute('home');
      setRouteParams({});
      return;
    }

    const [pathPart, queryPart] = hash.split('?');
    const params: Record<string, string> = {};

    if (queryPart) {
      const searchParams = new URLSearchParams(queryPart);
      searchParams.forEach((val, key) => {
        params[key] = val;
      });
    }

    const validRoutes: PageRoute[] = [
      'home',
      'minecraft',
      'wiki',
      'vote',
      'servicos',
      'portfolio',
      'lives',
      'comunidade',
      'noticias',
    ];

    if (validRoutes.includes(pathPart as PageRoute)) {
      setCurrentRoute(pathPart as PageRoute);
      setRouteParams(params);
    } else {
      setCurrentRoute('home');
      setRouteParams({});
    }
  }, []);

  useEffect(() => {
    parseHash();
    window.addEventListener('hashchange', parseHash);
    return () => window.removeEventListener('hashchange', parseHash);
  }, [parseHash]);

  // Global Ctrl+K / Cmd+K listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navigateTo = (route: PageRoute, params?: Record<string, string>) => {
    setCurrentRoute(route);
    setRouteParams(params || {});
    
    // Update window hash
    let hashUrl = `#/${route}`;
    if (params && Object.keys(params).length > 0) {
      const sp = new URLSearchParams(params);
      hashUrl += `?${sp.toString()}`;
    }
    window.location.hash = hashUrl;

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenOrderModal = (category?: string, serviceTitle?: string) => {
    setOrderModalInitialCategory(category);
    setOrderModalInitialService(serviceTitle);
    setIsOrderModalOpen(true);
  };

  const activePortfolioItem = activeLightboxItemId
    ? PORTFOLIO_ITEMS.find((item) => item.id === activeLightboxItemId) || null
    : null;

  return (
    <div className="min-h-screen bg-[#060911] text-slate-100 flex flex-col relative font-sans antialiased selection:bg-emerald-500 selection:text-slate-950">
      {/* Dynamic Background */}
      <ParticlesBackground />

      {/* Global Navbar */}
      <Navbar
        currentRoute={currentRoute}
        onNavigate={navigateTo}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Main Page Container */}
      <div className="flex-1 pt-24 sm:pt-28 relative z-10">
        {currentRoute === 'home' && (
          <HomePage
            onNavigate={navigateTo}
            onOpenOrderModal={handleOpenOrderModal}
            onOpenPortfolioLightbox={(id) => setActiveLightboxItemId(id)}
          />
        )}

        {currentRoute === 'minecraft' && (
          <MinecraftPage onNavigate={navigateTo} />
        )}

        {currentRoute === 'wiki' && (
          <WikiPage initialSlug={routeParams.slug} onNavigate={navigateTo} />
        )}

        {currentRoute === 'vote' && (
          <VotePage onNavigate={navigateTo} />
        )}

        {currentRoute === 'servicos' && (
          <ServicesPage
            initialCategory={routeParams.category}
            onNavigate={navigateTo}
            onOpenOrderModal={handleOpenOrderModal}
            onOpenPortfolioLightbox={(id) => setActiveLightboxItemId(id)}
          />
        )}

        {currentRoute === 'portfolio' && (
          <PortfolioPage
            onNavigate={navigateTo}
            onOpenLightbox={(id) => setActiveLightboxItemId(id)}
            onOpenOrderModal={handleOpenOrderModal}
          />
        )}

        {currentRoute === 'lives' && (
          <LivesPage onNavigate={navigateTo} />
        )}

        {currentRoute === 'comunidade' && (
          <CommunityPage onNavigate={navigateTo} />
        )}

        {currentRoute === 'noticias' && (
          <NewsPage initialSlug={routeParams.slug} onNavigate={navigateTo} />
        )}

        {![
          'home',
          'minecraft',
          'wiki',
          'vote',
          'servicos',
          'portfolio',
          'lives',
          'comunidade',
          'noticias',
        ].includes(currentRoute) && <NotFoundPage onNavigate={navigateTo} />}
      </div>

      {/* Global Footer */}
      <Footer onNavigate={navigateTo} />

      {/* Utilities */}
      <ScrollToTop />
      <ToastContainer />

      {/* Search Modal */}
      <GlobalSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={navigateTo}
      />

      {/* Lightbox for Portfolio Gallery */}
      <PortfolioLightbox
        item={activePortfolioItem}
        onClose={() => setActiveLightboxItemId(null)}
        onRequestSimilarService={handleOpenOrderModal}
      />

      {/* Order Quote / Commission Brief Modal */}
      <OrderQuoteModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        initialCategory={orderModalInitialCategory}
        initialServiceTitle={orderModalInitialService}
      />
    </div>
  );
}

export default function App() {
  return (
    <ToastProvider>
      <AppContent />
    </ToastProvider>
  );
}

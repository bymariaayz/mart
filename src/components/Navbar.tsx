import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Search, Sparkles, BookOpen, Vote, 
  Tv, Users, Newspaper, Image, Wrench, Shield, MessageSquare
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { PageRoute } from '../types';

interface NavbarProps {
  currentRoute: PageRoute;
  onNavigate: (route: PageRoute, params?: Record<string, string>) => void;
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentRoute, onNavigate, onOpenSearch }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { route: PageRoute; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { route: 'home', label: 'Início', icon: Sparkles },
    { route: 'minecraft', label: 'Minecraft', icon: Shield },
    { route: 'wiki', label: 'Wiki', icon: BookOpen },
    { route: 'vote', label: 'Votação', icon: Vote },
    { route: 'servicos', label: 'Serviços', icon: Wrench },
    { route: 'portfolio', label: 'Portfólio', icon: Image },
    { route: 'lives', label: 'Lives', icon: Tv },
    { route: 'comunidade', label: 'Comunidade', icon: Users },
    { route: 'noticias', label: 'Notícias', icon: Newspaper },
  ];

  const handleNavClick = (route: PageRoute) => {
    onNavigate(route);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#120814]/90 backdrop-blur-xl border-b border-purple-500/15 shadow-xl shadow-purple-950/40 py-2.5'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        <div 
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2.5 cursor-pointer group shrink-0"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-500 via-purple-500 to-purple-500 p-0.5 shadow-lg shadow-purple-950/50 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-[#120814] rounded-[10px] flex items-center justify-center">
              <span className="text-purple-300 font-black text-lg font-['Outfit']">m</span>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-white text-base tracking-tight font-['Outfit'] group-hover:text-purple-300 transition-colors">
                {SITE_CONFIG.shortName}
              </span>
              <span className="text-[10px] px-1.5 py-0.2 rounded bg-purple-500/20 text-purple-200 font-mono border border-purple-500/30 font-bold">
                ART & MINE
              </span>
            </div>
            <p className="text-[11px] text-slate-400 -mt-0.5 font-sans hidden sm:block">
              Artes, Lives & Servidor de Minecraft
            </p>
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 p-1 rounded-2xl border border-purple-500/15 backdrop-blur-md">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = currentRoute === link.route;
            return (
              <button
                key={link.route}
                onClick={() => handleNavClick(link.route)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-pink-500 to-pink-500 text-white shadow-md shadow-pink-950/40'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-pink-300'}`} />
                <span>{link.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="flex items-center gap-2.5">
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-pink-500/20 text-xs transition-colors cursor-pointer"
            title="Pesquisar (Ctrl+K)"
          >
            <Search className="w-4 h-4 text-pink-400" />
            <span className="hidden xl:inline text-slate-300">Buscar...</span>
            <kbd className="hidden sm:inline-block text-[10px] font-mono bg-slate-800 px-1.5 py-0.5 rounded text-slate-300 border border-slate-700">
              ⌘K
            </kbd>
          </button>

          <a
            href={SITE_CONFIG.socials.discord}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-pink-600 to-pink-600 hover:from-pink-500 hover:to-pink-500 text-white font-bold text-xs shadow-lg shadow-pink-950/20 active:scale-95 transition-all"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Discord</span>
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-slate-900/90 text-slate-300 hover:text-white border border-pink-500/20 cursor-pointer"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bg-[#120814]/98 border-b border-purple-500/15 backdrop-blur-2xl shadow-2xl p-5 max-h-[85vh] overflow-y-auto space-y-4">
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenSearch();
            }}
            className="w-full flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-pink-500/20 text-slate-300 text-xs"
          >
            <div className="flex items-center gap-2">
              <Search className="w-4 h-4 text-pink-400" />
              <span>Pesquisar na Wiki e Serviços</span>
            </div>
            <kbd className="font-mono text-[10px] bg-slate-800 px-2 py-0.5 rounded text-slate-300">
              Buscar
            </kbd>
          </button>

          <div className="grid grid-cols-2 gap-2 pt-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = currentRoute === link.route;
              return (
                <button
                  key={link.route}
                  onClick={() => handleNavClick(link.route)}
                  className={`flex items-center gap-2.5 p-3 rounded-xl text-xs font-semibold transition-all text-left ${
                    isActive
                      ? 'bg-gradient-to-r from-pink-500 to-pink-500 text-white shadow-md'
                      : 'bg-slate-900/70 border border-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-pink-300'}`} />
                  <span>{link.label}</span>
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <a
              href={SITE_CONFIG.socials.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 p-3 rounded-xl bg-gradient-to-r from-pink-600 to-pink-600 text-white font-bold text-xs shadow-md"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Entrar no Discord Oficial</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

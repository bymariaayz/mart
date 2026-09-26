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
          ? 'bg-[#090d16]/90 backdrop-blur-xl border-b border-emerald-500/15 shadow-xl shadow-slate-950/40 py-2.5'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Logo / Brand */}
        <div 
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2.5 cursor-pointer group shrink-0"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-fuchsia-600 via-pink-500 to-amber-400 p-0.5 shadow-lg shadow-fuchsia-950/50 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-[#090d16] rounded-[10px] flex items-center justify-center">
              <span className="text-fuchsia-400 font-black text-lg font-['Outfit']">M</span>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-white text-base tracking-tight font-['Outfit'] group-hover:text-fuchsia-300 transition-colors">
                {SITE_CONFIG.shortName}
              </span>
              <span className="text-[10px] px-1.5 py-0.2 rounded bg-fuchsia-500/20 text-fuchsia-300 font-mono border border-fuchsia-500/30 font-bold">
                ART & MINE
              </span>
            </div>
            <p className="text-[11px] text-slate-400 -mt-0.5 font-sans hidden sm:block">
              Artes, Lives & Servidor de Minecraft
            </p>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 p-1 rounded-2xl border border-slate-800/80 backdrop-blur-md">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = currentRoute === link.route;
            return (
              <button
                key={link.route}
                onClick={() => handleNavClick(link.route)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-950/40'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-slate-950' : 'text-slate-400'}`} />
                <span>{link.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-2.5">
          {/* Search trigger button */}
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 text-xs transition-colors cursor-pointer"
            title="Pesquisar (Ctrl+K)"
          >
            <Search className="w-4 h-4 text-emerald-400" />
            <span className="hidden xl:inline text-slate-400">Buscar...</span>
            <kbd className="hidden sm:inline-block text-[10px] font-mono bg-slate-800 px-1.5 py-0.5 rounded text-slate-400 border border-slate-700">
              ⌘K
            </kbd>
          </button>

          {/* Discord CTA */}
          <a
            href={SITE_CONFIG.socials.discord}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl bg-[#5865F2] hover:bg-[#4752C4] text-white font-bold text-xs shadow-lg shadow-[#5865F2]/20 active:scale-95 transition-all"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Discord</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-slate-900/90 text-slate-300 hover:text-white border border-slate-800 cursor-pointer"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bg-[#090d16]/98 border-b border-emerald-500/20 backdrop-blur-2xl shadow-2xl p-5 max-h-[85vh] overflow-y-auto space-y-4">
          {/* Search button for mobile */}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenSearch();
            }}
            className="w-full flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 text-xs"
          >
            <div className="flex items-center gap-2">
              <Search className="w-4 h-4 text-emerald-400" />
              <span>Pesquisar na Wiki e Serviços</span>
            </div>
            <kbd className="font-mono text-[10px] bg-slate-800 px-2 py-0.5 rounded text-slate-400">
              Buscar
            </kbd>
          </button>

          {/* Navigation Items Grid */}
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
                      ? 'bg-emerald-500 text-slate-950 shadow-md'
                      : 'bg-slate-900/70 border border-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-slate-950' : 'text-emerald-400'}`} />
                  <span>{link.label}</span>
                </button>
              );
            })}
          </div>

          {/* Discord & Contact CTAs */}
          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <a
              href={SITE_CONFIG.socials.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 p-3 rounded-xl bg-[#5865F2] text-white font-bold text-xs shadow-md"
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

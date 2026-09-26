import React, { useState } from 'react';
import { 
  Image as ImageIcon, Palette, Brush, Grid, Pickaxe, 
  Sparkles, ExternalLink, Tag, User, Maximize2 
} from 'lucide-react';
import { PORTFOLIO_ITEMS } from '../data/portfolioData';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { PageRoute } from '../types';

interface PortfolioPageProps {
  onNavigate: (route: PageRoute, params?: Record<string, string>) => void;
  onOpenLightbox: (id: string) => void;
  onOpenOrderModal: (category?: string, serviceTitle?: string) => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({
  onNavigate,
  onOpenLightbox,
  onOpenOrderModal,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Todos os Projetos', icon: Sparkles },
    { id: 'design', label: '🎨 Design', icon: Palette },
    { id: 'arte', label: '🖌️ Arte Digital', icon: Brush },
    { id: 'pixel-art', label: '🧩 Pixel Art', icon: Grid },
    { id: 'minecraft', label: '⛏️ Minecraft', icon: Pickaxe },
  ];

  const filteredItems = activeCategory === 'all'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 pb-16">
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: 'Portfólio Criativo', active: true }]} onNavigate={onNavigate} />

      {/* Header */}
      <div className="relative rounded-3xl bg-gradient-to-r from-[#0d1c29] via-[#0f172a] to-[#171129] border border-cyan-500/30 p-8 sm:p-12 overflow-hidden shadow-2xl">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold">
            <ImageIcon className="w-3.5 h-3.5" />
            <span>Galeria Oficial de Criações</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-['Outfit']">
            Portfólio do Estúdio Aetheria
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Explore trabalhos autorais desenvolvidos por nossos artistas e construtores. Clique em qualquer peça para abrir o visualizador de alta resolução, informações técnicas e ferramentas utilizadas.
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-slate-900/80 border border-slate-800">
        {categories.map((cat) => {
          const Icon = cat.icon;
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                isActive
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-950/40'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => onOpenLightbox(item.id)}
            className="group relative rounded-2xl bg-[#0c1220] border border-slate-800 hover:border-cyan-500/40 overflow-hidden cursor-pointer transition-all duration-300 shadow-xl flex flex-col justify-between"
          >
            {/* Image Box */}
            <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors" />

              {/* Category pill */}
              <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-md text-[10px] font-bold bg-cyan-500 text-slate-950 shadow-md">
                {item.categoryLabel}
              </span>

              {/* Zoom overlay indicator */}
              <div className="absolute top-3 right-3 p-1.5 rounded-lg bg-slate-900/80 text-white opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Info */}
            <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
              <div className="space-y-1.5">
                <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Tags & Author Footer */}
              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <div className="flex items-center gap-1.5 truncate">
                  <User className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span className="truncate">{item.author}</span>
                </div>
                <span className="text-cyan-400 font-medium text-[11px]">Ampliar ↗</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA to Order */}
      <section className="p-8 rounded-3xl bg-gradient-to-r from-cyan-950/30 via-slate-900 to-slate-900 border border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center sm:text-left">
          <h3 className="text-xl font-bold text-white font-['Outfit']">
            Gostou dos trabalhos e quer encomendar algo exclusivo?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
            Nossos artistas estão disponíveis para produzir peças customizadas para o seu canal, servidor ou projeto pessoal.
          </p>
        </div>

        <button
          onClick={() => onOpenOrderModal('design')}
          className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs sm:text-sm shadow-md shadow-cyan-950/40 shrink-0 cursor-pointer"
        >
          Fazer um Orçamento
        </button>
      </section>
    </div>
  );
};

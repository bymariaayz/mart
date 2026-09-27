import React, { useState } from 'react';
import { 
  Wrench, Palette, Brush, Grid, Pickaxe, 
  Clock, CheckCircle2, MessageSquare, ChevronRight, 
  Sparkles, ExternalLink, HelpCircle 
} from 'lucide-react';
import { CREATIVE_SERVICES } from '../data/servicesData';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { PageRoute } from '../types';

interface ServicesPageProps {
  initialCategory?: string;
  onNavigate: (route: PageRoute, params?: Record<string, string>) => void;
  onOpenOrderModal: (category?: string, serviceTitle?: string) => void;
  onOpenPortfolioLightbox: (id: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  initialCategory = 'all',
  onNavigate,
  onOpenOrderModal,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>(initialCategory);

  const categories = [
    { id: 'all', label: 'Todos os Serviços', icon: Sparkles },
    { id: 'design', label: '🎨 Design Gráfico', icon: Palette },
    { id: 'arte', label: '🖌️ Artes Digitais', icon: Brush },
    { id: 'pixel-art', label: '🧩 Pixel Art', icon: Grid },
    { id: 'minecraft', label: '⛏️ Minecraft', icon: Pickaxe },
  ];

  const filteredServices = selectedFilter === 'all'
    ? CREATIVE_SERVICES
    : CREATIVE_SERVICES.filter((s) => s.category === selectedFilter);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 pb-16">
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: 'Estúdio Criativo', active: true }]} onNavigate={onNavigate} />

      {/* Hero Header */}
      <div className="relative rounded-3xl bg-gradient-to-r from-[#0d1c29] via-[#0f172a] to-[#171129] border border-pink-500/30 p-8 sm:p-12 overflow-hidden shadow-2xl">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-300 text-xs font-semibold">
            <Wrench className="w-3.5 h-3.5" />
            <span>Estúdio Criativo & Produção Digital</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-['Outfit']">
            Serviços Criativos Sob Medida
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Além de gerenciar o servidor de Minecraft, nossa equipe de artistas e designers produz identidades visuais de alto impacto, ilustrações conceituais, sprites em pixel art e mapas customizados para criadores de conteúdo e servidores.
          </p>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-slate-900/80 border border-slate-800">
        {categories.map((cat) => {
          const Icon = cat.icon;
          const isActive = selectedFilter === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedFilter(cat.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                isActive
                  ? 'bg-pink-500 text-slate-950 shadow-md shadow-pink-950/40'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* Services List Grid */}
      <div className="space-y-8">
        {filteredServices.map((srv) => (
          <div
            key={srv.id}
            id={srv.id}
            className="p-6 sm:p-10 rounded-3xl bg-[#0c1220] border border-slate-800 hover:border-pink-500/30 transition-all shadow-xl space-y-8 scroll-mt-24"
          >
            {/* Header */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-800/80 pb-6">
              <div className="space-y-2">
                <span className="px-2.5 py-0.5 rounded-md bg-pink-500/10 border border-pink-500/20 text-pink-300 font-mono text-[10px] font-bold uppercase tracking-wider">
                  {srv.categoryLabel}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white font-['Outfit']">
                  {srv.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
                  {srv.fullDescription}
                </p>
              </div>

              <div className="flex flex-col items-start md:items-end gap-2 shrink-0">
                <div className="flex items-center gap-1.5 text-xs text-slate-400 bg-slate-900/80 px-3 py-1.5 rounded-xl border border-slate-800">
                  <Clock className="w-3.5 h-3.5 text-pink-400" />
                  <span>Prazo Estimado: <strong className="text-white font-mono">{srv.estimatedTurnaround}</strong></span>
                </div>
                <button
                  onClick={() => onOpenOrderModal(srv.category, srv.title)}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-pink-500 to-teal-400 hover:from-pink-400 hover:to-teal-300 text-slate-950 font-bold text-xs sm:text-sm shadow-md shadow-pink-950/40 active:scale-95 transition-all cursor-pointer flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Solicitar Orçamento</span>
                </button>
              </div>
            </div>

            {/* Deliverables & Workflow */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Deliverables */}
              <div className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800/80 space-y-3">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>O que está incluso na entrega</span>
                </h4>
                <ul className="space-y-2 text-xs text-slate-300">
                  {srv.deliverables.map((del, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-pink-400 font-mono">▸</span>
                      <span>{del}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Workflow */}
              <div className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800/80 space-y-3">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-pink-400" />
                  <span>Etapas de Criação (Workflow)</span>
                </h4>
                <ol className="space-y-2 text-xs text-slate-300">
                  {srv.workflow.map((flow, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-pink-500/20 text-pink-300 text-[10px] font-bold">
                        {idx + 1}
                      </span>
                      <span>{flow}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Gallery Samples */}
            {srv.gallery && srv.gallery.length > 0 && (
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Amostras Recentes de Trabalhos
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {srv.gallery.map((img, idx) => (
                    <div
                      key={idx}
                      className="group relative rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 aspect-video"
                    >
                      <img
                        src={img.imageUrl}
                        alt={img.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent p-4 flex flex-col justify-end">
                        <span className="text-xs font-bold text-white">{img.title}</span>
                        <span className="text-[11px] text-slate-400">{img.caption}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Banner: View Full Portfolio */}
      <section className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center sm:text-left">
          <h3 className="text-xl font-bold text-white font-['Outfit']">
            Quer conferir mais exemplos em alta resolução?
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
            Visite nossa galeria de portfólio completa com filtros por categoria, créditos e visualizador ampliado.
          </p>
        </div>

        <button
          onClick={() => onNavigate('portfolio')}
          className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs sm:text-sm border border-slate-700 shrink-0 cursor-pointer"
        >
          Acessar Portfólio Completo →
        </button>
      </section>
    </div>
  );
};

import React, { useState } from 'react';
import { 
  Newspaper, Calendar, User, Tag, Sparkles, 
  ChevronRight, ArrowLeft, Clock, Wrench, Shield, CheckCircle2 
} from 'lucide-react';
import { NEWS_ARTICLES } from '../data/newsData';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { PageRoute, NewsArticle } from '../types';

interface NewsPageProps {
  initialSlug?: string;
  onNavigate: (route: PageRoute, params?: Record<string, string>) => void;
}

export const NewsPage: React.FC<NewsPageProps> = ({ initialSlug, onNavigate }) => {
  const [selectedSlug, setSelectedSlug] = useState<string | null>(initialSlug || null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Todas as Novidades' },
    { id: 'updates', label: '⚡ Atualizações' },
    { id: 'events', label: '🏆 Eventos' },
    { id: 'maintenance', label: '🛠️ Manutenções' },
    { id: 'wiki', label: '📚 Wiki & Guias' },
  ];

  const activeArticle = selectedSlug ? NEWS_ARTICLES.find((n) => n.slug === selectedSlug) : null;

  const filteredNews = selectedCategory === 'all'
    ? NEWS_ARTICLES
    : NEWS_ARTICLES.filter((n) => n.category === selectedCategory);

  // If reading a single news article
  if (activeArticle) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 pb-16">
        <Breadcrumbs
          items={[
            { label: 'Notícias & Updates', route: 'noticias' },
            { label: activeArticle.title, active: true },
          ]}
          onNavigate={onNavigate}
        />

        <button
          onClick={() => setSelectedSlug(null)}
          className="flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Voltar para todas as notícias</span>
        </button>

        <article className="p-6 sm:p-10 rounded-3xl bg-[#0c1220] border border-slate-800 shadow-2xl space-y-8">
          {/* Article Header */}
          <header className="space-y-4 border-b border-slate-800/80 pb-6">
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
              <span className="px-2.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 font-bold uppercase text-[10px]">
                {activeArticle.categoryLabel}
              </span>
              <div className="flex items-center gap-4 text-slate-400">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-purple-400" />
                  {activeArticle.date}
                </span>
                <span className="flex items-center gap-1">
                  <User className="w-3.5 h-3.5 text-slate-400" />
                  {activeArticle.author.name}
                </span>
              </div>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-['Outfit']">
              {activeArticle.title}
            </h1>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {activeArticle.summary}
            </p>
          </header>

          {/* Banner Image if any */}
          {activeArticle.imageUrl && (
            <div className="aspect-video w-full rounded-2xl overflow-hidden bg-slate-950">
              <img
                src={activeArticle.imageUrl}
                alt={activeArticle.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Main content */}
          <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
            {activeArticle.content.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          {/* Changelog Highlights */}
          {activeArticle.changelogItems && activeArticle.changelogItems.length > 0 && (
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-purple-500/20 space-y-3">
              <h3 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span>Principais Mudanças Desta Publicação:</span>
              </h3>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {activeArticle.changelogItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-purple-400 font-mono">▸</span>
                    <span>
                      <strong className="text-white font-mono uppercase text-[10px] mr-1.5 px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700">
                        {item.type}
                      </strong>
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </article>
      </div>
    );
  }

  // News list view
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 pb-16">
      <Breadcrumbs items={[{ label: 'Notícias & Updates', active: true }]} onNavigate={onNavigate} />

      {/* Header */}
      <div className="relative rounded-3xl bg-gradient-to-r from-[#170e28] via-[#0f172a] to-[#0c1824] border border-purple-500/30 p-8 sm:p-12 overflow-hidden shadow-2xl">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-semibold">
            <Newspaper className="w-3.5 h-3.5" />
            <span>Mural de Notícias & Atualizações</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-['Outfit']">
            Notícias do Servidor & Comunidade
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Acompanhe em primeira mão os novos capítulos da Wiki, anúncios de torneios comunitários, manutenções programadas e notas de versão do servidor de Minecraft.
          </p>
        </div>
      </div>

      {/* Categories Filter */}
      <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-slate-900/80 border border-slate-800">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                isActive
                  ? 'bg-pink-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredNews.map((news) => (
          <div
            key={news.id}
            onClick={() => setSelectedSlug(news.slug)}
            className="group rounded-3xl bg-[#0c1220] border border-slate-800 hover:border-purple-500/40 overflow-hidden cursor-pointer transition-all duration-300 shadow-xl flex flex-col justify-between"
          >
            {news.imageUrl && (
              <div className="aspect-video w-full overflow-hidden bg-slate-950">
                <img
                  src={news.imageUrl}
                  alt={news.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            )}

            <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="px-2.5 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-[10px] font-bold">
                    {news.categoryLabel}
                  </span>
                  <span className="text-slate-400">{news.date}</span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                  {news.title}
                </h3>

                <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                  {news.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-purple-400 font-semibold">
                <span>Ler matéria completa</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

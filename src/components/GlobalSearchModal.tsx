import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Search, X, BookOpen, Wrench, Newspaper, Tv, Image, ArrowRight, CornerDownLeft } from 'lucide-react';
import { WIKI_ARTICLES } from '../data/wikiData';
import { CREATIVE_SERVICES } from '../data/servicesData';
import { NEWS_ARTICLES } from '../data/newsData';
import { COMMUNITY_STREAMERS } from '../data/livesData';
import { PORTFOLIO_ITEMS } from '../data/portfolioData';
import { PageRoute } from '../types';
import { motion, AnimatePresence } from 'motion/react';

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (route: PageRoute, params?: Record<string, string>) => void;
}

interface SearchResultItem {
  id: string;
  title: string;
  category: string;
  type: 'wiki' | 'servico' | 'noticia' | 'live' | 'portfolio';
  snippet: string;
  route: PageRoute;
  params?: Record<string, string>;
}

export const GlobalSearchModal: React.FC<GlobalSearchModalProps> = ({
  isOpen,
  onClose,
  onNavigate,
}) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  // Global Ctrl+K shortcut listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const allItems: SearchResultItem[] = useMemo(() => {
    const list: SearchResultItem[] = [];

    // Wiki
    WIKI_ARTICLES.forEach((art) => {
      list.push({
        id: `wiki-${art.slug}`,
        title: art.title,
        category: art.categoryLabel,
        type: 'wiki',
        snippet: art.summary,
        route: 'wiki',
        params: { slug: art.slug },
      });
    });

    // Services
    CREATIVE_SERVICES.forEach((srv) => {
      list.push({
        id: `srv-${srv.id}`,
        title: srv.title,
        category: srv.categoryLabel,
        type: 'servico',
        snippet: srv.shortDescription,
        route: 'servicos',
        params: { id: srv.id },
      });
    });

    // News
    NEWS_ARTICLES.forEach((news) => {
      list.push({
        id: `news-${news.slug}`,
        title: news.title,
        category: news.categoryLabel,
        type: 'noticia',
        snippet: news.summary,
        route: 'noticias',
        params: { slug: news.slug },
      });
    });

    // Streamers
    COMMUNITY_STREAMERS.forEach((stream) => {
      list.push({
        id: `stream-${stream.id}`,
        title: `Live: ${stream.name}`,
        category: stream.platform.toUpperCase(),
        type: 'live',
        snippet: stream.streamTitle || stream.scheduleDescription || 'Transmissão da comunidade',
        route: 'lives',
      });
    });

    // Portfolio
    PORTFOLIO_ITEMS.forEach((p) => {
      list.push({
        id: `port-${p.id}`,
        title: p.title,
        category: p.categoryLabel,
        type: 'portfolio',
        snippet: p.description,
        route: 'portfolio',
      });
    });

    return list;
  }, []);

  const filteredResults = useMemo(() => {
    if (!query.trim()) {
      // Show default top suggestions
      return allItems.slice(0, 7);
    }
    const q = query.toLowerCase();
    return allItems
      .filter((item) => item.title.toLowerCase().includes(q) || item.snippet.toLowerCase().includes(q) || item.category.toLowerCase().includes(q))
      .slice(0, 10);
  }, [allItems, query]);

  const handleSelect = (item: SearchResultItem) => {
    onNavigate(item.route, item.params);
    onClose();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % (filteredResults.length || 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredResults.length) % (filteredResults.length || 1));
    } else if (e.key === 'Enter' && filteredResults[selectedIndex]) {
      e.preventDefault();
      handleSelect(filteredResults[selectedIndex]);
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div
        id="global-search-overlay"
        className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-950/80 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -10 }}
          className="relative max-w-2xl w-full bg-[#0d1322] border border-emerald-500/30 rounded-2xl shadow-2xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Search Input Bar */}
          <div className="flex items-center gap-3 px-4 py-3.5 border-b border-slate-800 bg-[#11192e]">
            <Search className="w-5 h-5 text-emerald-400 shrink-0" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setSelectedIndex(0);
              }}
              onKeyDown={handleKeyDown}
              placeholder="Buscar na Wiki, Serviços, Notícias, Lives, Portfólio..."
              className="w-full bg-transparent text-white placeholder-slate-400 text-sm sm:text-base focus:outline-none"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="p-1 rounded text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            )}
            <span className="hidden sm:inline text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">
              ESC para fechar
            </span>
          </div>

          {/* Results List */}
          <div className="max-h-[380px] overflow-y-auto p-2 divide-y divide-slate-800/40">
            {filteredResults.length === 0 ? (
              <div className="text-center py-10 text-slate-400 text-sm">
                Nenhum resultado encontrado para &quot;{query}&quot;
              </div>
            ) : (
              filteredResults.map((item, idx) => {
                const isSelected = idx === selectedIndex;
                return (
                  <div
                    key={item.id}
                    onClick={() => handleSelect(item)}
                    onMouseEnter={() => setSelectedIndex(idx)}
                    className={`flex items-start justify-between gap-3 p-3 rounded-xl cursor-pointer transition-all ${
                      isSelected
                        ? 'bg-emerald-500/15 border border-emerald-500/30 text-white'
                        : 'hover:bg-slate-800/60 text-slate-300'
                    }`}
                  >
                    <div className="flex items-start gap-3 min-w-0">
                      <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-emerald-400 mt-0.5 shrink-0">
                        {item.type === 'wiki' && <BookOpen className="w-4 h-4 text-emerald-400" />}
                        {item.type === 'servico' && <Wrench className="w-4 h-4 text-purple-400" />}
                        {item.type === 'noticia' && <Newspaper className="w-4 h-4 text-amber-400" />}
                        {item.type === 'live' && <Tv className="w-4 h-4 text-purple-400" />}
                        {item.type === 'portfolio' && <Image className="w-4 h-4 text-purple-400" />}
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold text-white truncate">
                            {item.title}
                          </span>
                          <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-medium">
                            {item.category}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 truncate mt-0.5">{item.snippet}</p>
                      </div>
                    </div>

                    <div className="shrink-0 flex items-center gap-1 text-slate-400 mt-1">
                      {isSelected ? (
                        <span className="flex items-center gap-1 text-xs text-emerald-400 font-mono font-medium">
                          Abrir <CornerDownLeft className="w-3 h-3" />
                        </span>
                      ) : (
                        <ArrowRight className="w-4 h-4 opacity-40" />
                      )}
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Footer Shortcuts */}
          <div className="p-2.5 px-4 bg-slate-950/90 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
            <div className="flex items-center gap-3">
              <span>↑↓ para navegar</span>
              <span>↵ para selecionar</span>
            </div>
            <span className="text-emerald-400 font-medium">Portal Aetheria</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

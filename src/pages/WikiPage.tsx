import React, { useState, useEffect, useMemo } from 'react';
import { 
  BookOpen, Search, Copy, Check, ChevronRight, ChevronLeft, 
  Sparkles, Terminal, ShieldAlert, Wrench, Coins, TrendingUp, 
  Skull, Shield, Trees, Globe, HelpCircle, ArrowRight, Tag, Clock, Calendar, AlertTriangle, Info, CheckCircle2
} from 'lucide-react';
import { WIKI_ARTICLES, WIKI_CATEGORIES } from '../data/wikiData';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { useToast } from '../context/ToastContext';
import { PageRoute, WikiArticle } from '../types';

interface WikiPageProps {
  initialSlug?: string;
  onNavigate: (route: PageRoute, params?: Record<string, string>) => void;
}

export const WikiPage: React.FC<WikiPageProps> = ({ initialSlug, onNavigate }) => {
  const [selectedSlug, setSelectedSlug] = useState<string>(initialSlug || 'comece-a-jogar');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedIndex, setCopiedIndex] = useState<string | null>(null);
  const { copyToClipboard } = useToast();

  useEffect(() => {
    if (initialSlug) {
      setSelectedSlug(initialSlug);
    }
  }, [initialSlug]);

  const activeArticle: WikiArticle = useMemo(() => {
    return WIKI_ARTICLES.find((art) => art.slug === selectedSlug) || WIKI_ARTICLES[0];
  }, [selectedSlug]);

  // Filtered list of articles for sidebar search
  const filteredArticles = useMemo(() => {
    if (!searchQuery.trim()) return WIKI_ARTICLES;
    const q = searchQuery.toLowerCase();
    return WIKI_ARTICLES.filter(
      (art) =>
        art.title.toLowerCase().includes(q) ||
        art.summary.toLowerCase().includes(q) ||
        art.tags.some((t) => t.toLowerCase().includes(q))
    );
  }, [searchQuery]);

  // Prev / Next article
  const currentIndex = WIKI_ARTICLES.findIndex((art) => art.slug === activeArticle.slug);
  const prevArticle = currentIndex > 0 ? WIKI_ARTICLES[currentIndex - 1] : null;
  const nextArticle = currentIndex < WIKI_ARTICLES.length - 1 ? WIKI_ARTICLES[currentIndex + 1] : null;

  // Related articles
  const relatedArticles = useMemo(() => {
    return WIKI_ARTICLES.filter((art) => activeArticle.relatedSlugs?.includes(art.slug));
  }, [activeArticle]);

  const handleCopyCommand = async (command: string, id: string) => {
    const success = await copyToClipboard(command, 'Comando', true);
    if (success) {
      setCopiedIndex(id);
      setTimeout(() => setCopiedIndex(null), 2000);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 pb-20">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Wiki & Documentação', route: 'wiki' },
          { label: activeArticle.categoryLabel, route: 'wiki' },
          { label: activeArticle.title, active: true },
        ]}
        onNavigate={onNavigate}
      />

      {/* Main Wiki Layout (Sidebar + Reader + TOC) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* LEFT SIDEBAR: Categories & Navigation */}
        <aside className="lg:col-span-3 space-y-6">
          <div className="p-4 rounded-2xl bg-[#0d1322] border border-slate-800/90 shadow-xl space-y-4">
            {/* Wiki Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 text-emerald-400 absolute left-3 top-3" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Filtrar artigos..."
                className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-900 border border-slate-700/80 text-white text-xs focus:outline-none focus:border-emerald-500 transition-colors"
              />
            </div>

            {/* Category Groups */}
            <div className="space-y-4 max-h-[70vh] overflow-y-auto pr-1">
              {WIKI_CATEGORIES.map((cat) => {
                const categoryArticles = filteredArticles.filter((art) => art.category === cat.id);
                if (categoryArticles.length === 0) return null;

                return (
                  <div key={cat.id} className="space-y-1">
                    <div className="px-2 py-1 text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                      <span className="text-emerald-400 font-mono">▸</span>
                      <span>{cat.label}</span>
                    </div>

                    <div className="space-y-0.5">
                      {categoryArticles.map((art) => {
                        const isSelected = art.slug === activeArticle.slug;
                        return (
                          <button
                            key={art.slug}
                            onClick={() => {
                              setSelectedSlug(art.slug);
                              window.scrollTo({ top: 120, behavior: 'smooth' });
                            }}
                            className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium transition-all flex items-center justify-between cursor-pointer ${
                              isSelected
                                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-semibold'
                                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                            }`}
                          >
                            <span className="truncate">{art.title}</span>
                            {isSelected && <ChevronRight className="w-3.5 h-3.5 text-emerald-400 shrink-0" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </aside>

        {/* CENTER COLUMN: Article Content */}
        <main className="lg:col-span-6 space-y-8">
          <article className="p-6 sm:p-10 rounded-3xl bg-[#0c1220]/80 border border-slate-800 backdrop-blur-xl shadow-2xl space-y-8">
            {/* Article Meta Header */}
            <header className="space-y-4 border-b border-slate-800/80 pb-6">
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-semibold uppercase tracking-wider text-[10px]">
                  {activeArticle.categoryLabel}
                </span>

                <div className="flex items-center gap-4 text-slate-400 text-xs">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-emerald-400" />
                    {activeArticle.readingTimeMinutes} min de leitura
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-purple-400" />
                    Atualizado: {activeArticle.lastUpdated}
                  </span>
                </div>
              </div>

              <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-['Outfit']">
                {activeArticle.title}
              </h1>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {activeArticle.summary}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {activeArticle.tags.map((tag) => (
                  <span
                    key={tag}
                    className="flex items-center gap-1 px-2.5 py-0.5 rounded-lg text-[11px] font-mono bg-slate-900 border border-slate-800 text-slate-400"
                  >
                    <Tag className="w-3 h-3 text-slate-400" />
                    {tag}
                  </span>
                ))}
              </div>
            </header>

            {/* Render Sections */}
            <div className="space-y-10">
              {activeArticle.sections.map((section, sIdx) => (
                <section key={section.id} id={section.id} className="space-y-4 scroll-mt-24">
                  <h2 className="text-lg sm:text-xl font-bold text-white font-['Outfit'] border-l-4 border-emerald-500 pl-3">
                    {section.title}
                  </h2>

                  {/* Text Paragraphs */}
                  <div className="space-y-2.5 text-slate-300 text-sm leading-relaxed">
                    {section.content.map((p, pIdx) => (
                      <p key={pIdx}>{p}</p>
                    ))}
                  </div>

                  {/* Commands / Code Blocks */}
                  {section.commands && section.commands.length > 0 && (
                    <div className="space-y-2 pt-2">
                      {section.commands.map((cmd, cIdx) => {
                        const cmdId = `${section.id}-cmd-${cIdx}`;
                        const isCopied = copiedIndex === cmdId;
                        return (
                          <div
                            key={cIdx}
                            className="p-3.5 rounded-2xl bg-[#090d16] border border-slate-800 hover:border-emerald-500/30 transition-colors space-y-2"
                          >
                            <div className="flex items-center justify-between gap-3">
                              <div className="flex items-center gap-2 overflow-x-auto">
                                <Terminal className="w-4 h-4 text-emerald-400 shrink-0" />
                                <code className="font-mono text-emerald-300 text-xs sm:text-sm font-semibold select-all">
                                  {cmd.command}
                                </code>
                              </div>

                              <button
                                onClick={() => handleCopyCommand(cmd.command, cmdId)}
                                className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 text-xs border border-emerald-500/30 transition-all shrink-0 cursor-pointer active:scale-95"
                                title="Copiar comando"
                              >
                                {isCopied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                                <span className="hidden sm:inline">{isCopied ? 'Copiado!' : 'Copiar'}</span>
                              </button>
                            </div>

                            <p className="text-xs text-slate-400">{cmd.description}</p>

                            {cmd.example && (
                              <p className="text-[11px] text-slate-400 font-mono">
                                Exemplo: <span className="text-cyan-300">{cmd.example}</span>
                              </p>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* Callout Boxes (Info, Warning, Tip) */}
                  {section.callouts && section.callouts.length > 0 && (
                    <div className="space-y-3 pt-2">
                      {section.callouts.map((callout, clIdx) => (
                        <div
                          key={clIdx}
                          className={`p-4 rounded-2xl border flex items-start gap-3 text-xs sm:text-sm ${
                            callout.type === 'warning'
                              ? 'bg-amber-950/30 border-amber-500/30 text-amber-200'
                              : callout.type === 'tip'
                              ? 'bg-emerald-950/30 border-emerald-500/30 text-emerald-200'
                              : 'bg-cyan-950/30 border-cyan-500/30 text-cyan-200'
                          }`}
                        >
                          <div className="mt-0.5 shrink-0">
                            {callout.type === 'warning' && <AlertTriangle className="w-5 h-5 text-amber-400" />}
                            {callout.type === 'tip' && <Sparkles className="w-5 h-5 text-emerald-400" />}
                            {callout.type === 'info' && <Info className="w-5 h-5 text-cyan-400" />}
                          </div>

                          <div className="space-y-1">
                            {callout.title && <strong className="font-bold block text-white">{callout.title}</strong>}
                            <p className="leading-relaxed">{callout.content}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tables */}
                  {section.table && (
                    <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/50 mt-4">
                      <table className="w-full text-left text-xs sm:text-sm">
                        <thead className="bg-slate-900/90 text-slate-300 border-b border-slate-800">
                          <tr>
                            {section.table.headers.map((h, hIdx) => (
                              <th key={hIdx} className="px-4 py-3 font-semibold text-white">
                                {h}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800/60 text-slate-300 font-sans">
                          {section.table.rows.map((row, rIdx) => (
                            <tr key={rIdx} className="hover:bg-slate-800/30 transition-colors">
                              {row.map((cell, cellIdx) => (
                                <td key={cellIdx} className="px-4 py-3 text-xs leading-relaxed">
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {/* Subsections (e.g. FAQ items) */}
                  {section.subsections && (
                    <div className="space-y-3 pt-3">
                      {section.subsections.map((sub) => (
                        <div
                          key={sub.id}
                          className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/90 space-y-2"
                        >
                          <h3 className="text-sm font-bold text-white flex items-center gap-2">
                            <span className="text-emerald-400 font-mono">Q:</span>
                            <span>{sub.title}</span>
                          </h3>
                          <div className="text-xs text-slate-300 leading-relaxed pl-5 space-y-1">
                            {sub.content.map((sc, scIdx) => (
                              <p key={scIdx}>{sc}</p>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </section>
              ))}
            </div>

            {/* Pagination Navigation (Previous / Next Article) */}
            <nav aria-label="Navegação entre artigos" className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-stretch justify-between gap-4">
              {prevArticle ? (
                <button
                  onClick={() => {
                    setSelectedSlug(prevArticle.slug);
                    window.scrollTo({ top: 120, behavior: 'smooth' });
                  }}
                  className="flex-1 p-4 rounded-2xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800 hover:border-emerald-500/30 text-left transition-all group cursor-pointer"
                >
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-400 group-hover:text-emerald-400 transition-colors">
                    <ChevronLeft className="w-3.5 h-3.5" />
                    <span>Artigo Anterior</span>
                  </div>
                  <div className="text-sm font-bold text-white mt-1 truncate">{prevArticle.title}</div>
                </button>
              ) : (
                <div className="flex-1" />
              )}

              {nextArticle && (
                <button
                  onClick={() => {
                    setSelectedSlug(nextArticle.slug);
                    window.scrollTo({ top: 120, behavior: 'smooth' });
                  }}
                  className="flex-1 p-4 rounded-2xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800 hover:border-emerald-500/30 text-right transition-all group cursor-pointer"
                >
                  <div className="flex items-center justify-end gap-1.5 text-[11px] text-slate-400 group-hover:text-emerald-400 transition-colors">
                    <span>Próximo Artigo</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                  <div className="text-sm font-bold text-white mt-1 truncate">{nextArticle.title}</div>
                </button>
              )}
            </nav>
          </article>
        </main>

        {/* RIGHT COLUMN: Table of Contents & Related Articles */}
        <aside className="lg:col-span-3 space-y-6">
          {/* Table of Contents (Índice da Página) */}
          <div className="p-5 rounded-2xl bg-[#0d1322] border border-slate-800/90 shadow-xl space-y-3 sticky top-20">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider font-['Outfit'] flex items-center gap-2">
              <span className="text-emerald-400 font-mono">#</span>
              <span>Nesta Página</span>
            </h3>

            <nav className="space-y-1 text-xs">
              {activeArticle.sections.map((sec) => (
                <button
                  key={sec.id}
                  onClick={() => scrollToSection(sec.id)}
                  className="w-full text-left py-1.5 px-2.5 rounded-lg text-slate-400 hover:text-emerald-300 hover:bg-slate-800/50 transition-colors truncate block cursor-pointer"
                >
                  {sec.title}
                </button>
              ))}
            </nav>

            {/* Related Articles */}
            {relatedArticles.length > 0 && (
              <div className="pt-4 mt-4 border-t border-slate-800/80 space-y-2">
                <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  Artigos Relacionados
                </h4>
                <div className="space-y-1">
                  {relatedArticles.map((rel) => (
                    <button
                      key={rel.slug}
                      onClick={() => {
                        setSelectedSlug(rel.slug);
                        window.scrollTo({ top: 120, behavior: 'smooth' });
                      }}
                      className="w-full text-left p-2 rounded-xl bg-slate-900/60 hover:bg-slate-900 text-xs text-slate-300 hover:text-emerald-300 transition-colors flex items-center justify-between cursor-pointer"
                    >
                      <span className="truncate">{rel.title}</span>
                      <ArrowRight className="w-3 h-3 text-slate-400 shrink-0" />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
};

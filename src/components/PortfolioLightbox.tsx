import React from 'react';
import { X, ExternalLink, Calendar, User, Tag, Sparkles } from 'lucide-react';
import { PortfolioItem } from '../types';
import { motion, AnimatePresence } from 'motion/react';

interface PortfolioLightboxProps {
  item: PortfolioItem | null;
  onClose: () => void;
  onRequestSimilarService?: (category: string, title: string) => void;
}

export const PortfolioLightbox: React.FC<PortfolioLightboxProps> = ({
  item,
  onClose,
  onRequestSimilarService,
}) => {
  if (!item) return null;

  return (
    <AnimatePresence>
      <div 
        id="portfolio-lightbox-overlay"
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.2 }}
          className="relative max-w-4xl w-full bg-[#0d1322] border border-emerald-500/30 rounded-2xl shadow-2xl overflow-hidden my-8"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/60 backdrop-blur-sm transition-colors cursor-pointer"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Media Header */}
          <div className="relative w-full max-h-[500px] bg-slate-950/90 flex items-center justify-center overflow-hidden border-b border-slate-800">
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-auto max-h-[500px] object-contain select-none"
              loading="lazy"
            />
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500 text-slate-950 shadow-md">
                {item.categoryLabel}
              </span>
            </div>
          </div>

          {/* Details Content */}
          <div className="p-6 sm:p-8 space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-white tracking-tight">{item.title}</h3>
              <p className="mt-2 text-slate-300 text-sm leading-relaxed">{item.description}</p>
            </div>

            {/* Meta badges */}
            <div className="flex flex-wrap gap-4 py-4 border-y border-slate-800/80 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <User className="w-4 h-4 text-emerald-400" />
                <span>Autor: <strong className="text-slate-200">{item.author}</strong></span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-pink-400" />
                <span>Data: <strong className="text-slate-200">{item.date}</strong></span>
              </div>
            </div>

            {/* Tools Used */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-pink-400" />
                <span>Ferramentas & Softwares Utilizados</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {item.toolsUsed.map((tool, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-800/80 text-pink-300 border border-slate-700"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div>
              <div className="flex flex-wrap gap-1.5">
                {item.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="flex items-center gap-1 px-2 py-0.5 rounded text-[11px] text-slate-400 bg-slate-900 border border-slate-800"
                  >
                    <Tag className="w-3 h-3" />
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-xl text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors cursor-pointer"
              >
                Voltar à Galeria
              </button>

              {onRequestSimilarService && (
                <button
                  onClick={() => {
                    onRequestSimilarService(item.category, item.title);
                    onClose();
                  }}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold text-sm shadow-lg shadow-emerald-950/40 active:scale-95 transition-all cursor-pointer"
                >
                  <span>Solicitar Projeto Similar</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

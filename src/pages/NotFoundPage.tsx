import React from 'react';
import { Compass, Home, BookOpen, MessageSquare } from 'lucide-react';
import { PageRoute } from '../types';
import { SITE_CONFIG } from '../config/siteConfig';

interface NotFoundPageProps {
  onNavigate: (route: PageRoute, params?: Record<string, string>) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-2xl mx-auto px-4 py-20 text-center space-y-6">
      <div className="w-20 h-20 mx-auto rounded-3xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center">
        <Compass className="w-10 h-10 text-purple-400 animate-spin-slow" />
      </div>

      <div className="space-y-2">
        <span className="text-xs font-mono text-purple-400 font-bold uppercase tracking-wider">
          Erro 404 • Coordenadas Desconhecidas
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-['Outfit']">
          Página não encontrada
        </h1>
        <p className="text-slate-400 text-sm max-w-md mx-auto">
          Parece que você viajou para além dos limites do mundo gerado. Utilize as opções abaixo para retornar em segurança.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-pink-500 to-pink-500 hover:from-pink-400 hover:to-pink-400 text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
        >
          <Home className="w-4 h-4" />
          <span>Voltar ao Início</span>
        </button>

        <button
          onClick={() => onNavigate('wiki')}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white border border-pink-500/15 font-semibold text-xs sm:text-sm transition-all cursor-pointer"
        >
          <BookOpen className="w-4 h-4 text-pink-400" />
          <span>Explorar a Wiki</span>
        </button>
      </div>
    </div>
  );
};

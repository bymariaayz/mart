import React from 'react';
import { 
  Sparkles, BookOpen, Shield, Vote, Wrench, 
  Image, Tv, Users, Newspaper, MessageSquare, 
  Youtube, Twitter, Instagram, Github, Heart, ExternalLink
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { PageRoute } from '../types';

interface FooterProps {
  onNavigate: (route: PageRoute, params?: Record<string, string>) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="relative z-10 bg-[#070a12] border-t border-pink-500/15 pt-16 pb-12 mt-20 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <div 
              onClick={() => onNavigate('home')} 
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-fuchsia-500 via-pink-500 to-violet-500 p-0.5">
                <div className="w-full h-full bg-[#070a12] rounded-[10px] flex items-center justify-center">
                  <span className="text-fuchsia-300 font-black text-lg font-['Outfit']">m</span>
                </div>
              </div>
              <div>
                <h3 className="text-white font-extrabold text-base font-['Outfit'] group-hover:text-pink-300 transition-colors">
                  {SITE_CONFIG.name}
                </h3>
                <p className="text-slate-400 text-[11px]">{SITE_CONFIG.tagline}</p>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed max-w-sm">
              {SITE_CONFIG.description}
            </p>

            <div className="flex items-center gap-2 pt-2">
              <a href={SITE_CONFIG.socials.discord} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-slate-900 hover:bg-violet-600 hover:text-white text-slate-300 transition-colors" title="Discord Oficial">
                <MessageSquare className="w-4 h-4" />
              </a>
              {SITE_CONFIG.socials.youtube && (
                <a href={SITE_CONFIG.socials.youtube} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-slate-900 hover:bg-red-600 hover:text-white text-slate-300 transition-colors" title="YouTube">
                  <Youtube className="w-4 h-4" />
                </a>
              )}
              {SITE_CONFIG.socials.twitter && (
                <a href={SITE_CONFIG.socials.twitter} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-slate-900 hover:bg-sky-500 hover:text-white text-slate-300 transition-colors" title="Twitter / X">
                  <Twitter className="w-4 h-4" />
                </a>
              )}
              {SITE_CONFIG.socials.instagram && (
                <a href={SITE_CONFIG.socials.instagram} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-slate-900 hover:bg-pink-600 hover:text-white text-slate-300 transition-colors" title="Instagram">
                  <Instagram className="w-4 h-4" />
                </a>
              )}
              {SITE_CONFIG.socials.github && (
                <a href={SITE_CONFIG.socials.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-slate-900 hover:bg-slate-700 hover:text-white text-slate-300 transition-colors" title="GitHub">
                  <Github className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider font-['Outfit']">Minecraft & Guias</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onNavigate('minecraft')} className="hover:text-pink-400 transition-colors flex items-center gap-1.5 cursor-pointer">
                  <Shield className="w-3.5 h-3.5 text-pink-400" />
                  <span>Como Conectar</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('wiki', { slug: 'comece-a-jogar' })} className="hover:text-pink-400 transition-colors flex items-center gap-1.5 cursor-pointer">
                  <Sparkles className="w-3.5 h-3.5 text-pink-400" />
                  <span>Guia para Iniciantes</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('wiki', { slug: 'comandos' })} className="hover:text-pink-400 transition-colors flex items-center gap-1.5 cursor-pointer">
                  <BookOpen className="w-3.5 h-3.5 text-pink-400" />
                  <span>Lista de Comandos</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('wiki', { slug: 'regras' })} className="hover:text-pink-400 transition-colors flex items-center gap-1.5 cursor-pointer">
                  <Shield className="w-3.5 h-3.5 text-pink-400" />
                  <span>Regras & Diretrizes</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('vote')} className="hover:text-pink-400 transition-colors flex items-center gap-1.5 cursor-pointer">
                  <Vote className="w-3.5 h-3.5 text-pink-400" />
                  <span>Votar no Servidor</span>
                </button>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider font-['Outfit']">Estúdio Criativo</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onNavigate('servicos')} className="hover:text-violet-400 transition-colors flex items-center gap-1.5 cursor-pointer">
                  <Wrench className="w-3.5 h-3.5 text-violet-400" />
                  <span>Catálogo de Serviços</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('portfolio')} className="hover:text-violet-400 transition-colors flex items-center gap-1.5 cursor-pointer">
                  <Image className="w-3.5 h-3.5 text-violet-400" />
                  <span>Galeria do Portfólio</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('servicos', { category: 'design' })} className="hover:text-violet-400 transition-colors cursor-pointer">Design Gráfico & UI</button>
              </li>
              <li>
                <button onClick={() => onNavigate('servicos', { category: 'pixel-art' })} className="hover:text-violet-400 transition-colors cursor-pointer">Pixel Art & Sprites</button>
              </li>
              <li>
                <button onClick={() => onNavigate('servicos', { category: 'minecraft' })} className="hover:text-violet-400 transition-colors cursor-pointer">Mapas & Modelos 3D</button>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider font-['Outfit']">Comunidade</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onNavigate('lives')} className="hover:text-fuchsia-400 transition-colors flex items-center gap-1.5 cursor-pointer">
                  <Tv className="w-3.5 h-3.5 text-fuchsia-400" />
                  <span>Transmissões ao Vivo</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('comunidade')} className="hover:text-fuchsia-400 transition-colors flex items-center gap-1.5 cursor-pointer">
                  <Users className="w-3.5 h-3.5 text-fuchsia-400" />
                  <span>Eventos & Discord</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('noticias')} className="hover:text-fuchsia-400 transition-colors flex items-center gap-1.5 cursor-pointer">
                  <Newspaper className="w-3.5 h-3.5 text-fuchsia-400" />
                  <span>Notícias & Updates</span>
                </button>
              </li>
              <li>
                <a href={SITE_CONFIG.socials.discord} target="_blank" rel="noopener noreferrer" className="hover:text-violet-400 transition-colors flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-violet-400" />
                  <span>Suporte no Discord</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-slate-900/60 border border-pink-500/15 space-y-2 text-[11px] leading-relaxed text-slate-400">
          <p>
            <strong className="text-slate-300">Aviso Legal:</strong> {SITE_CONFIG.disclaimers.mojang}
          </p>
          <p>
            <strong className="text-pink-300">Compromisso de Jogo Justo:</strong> {SITE_CONFIG.disclaimers.noPayToWin}
          </p>
        </div>

        <div className="pt-6 border-t border-pink-500/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-xs">
          <p>
            © {SITE_CONFIG.foundedYear} - {new Date().getFullYear()} {SITE_CONFIG.name}. Todos os direitos reservados.
          </p>

          <p className="flex items-center gap-1.5">
            <span>Desenvolvido com</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>para a comunidade de jogadores & artistas</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

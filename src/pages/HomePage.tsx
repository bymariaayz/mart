import React from 'react';
import { 
  Sparkles, BookOpen, Shield, MessageSquare, Vote, 
  Tv, ArrowRight, Wrench, Image, Newspaper, ExternalLink,
  Compass, ChevronRight, CheckCircle2, Brush, Palette, Grid, Pickaxe,
  Flame, Clock
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { ServerStatusCard } from '../components/ServerStatusCard';
import { WIKI_ARTICLES } from '../data/wikiData';
import { NEWS_ARTICLES } from '../data/newsData';
import { COMMUNITY_STREAMERS } from '../data/livesData';
import { PORTFOLIO_ITEMS } from '../data/portfolioData';
import { CREATIVE_SERVICES } from '../data/servicesData';
import { PageRoute } from '../types';

interface HomePageProps {
  onNavigate: (route: PageRoute, params?: Record<string, string>) => void;
  onOpenOrderModal: (category?: string, serviceTitle?: string) => void;
  onOpenPortfolioLightbox: (id: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenOrderModal,
  onOpenPortfolioLightbox,
}) => {
  const primaryStreamer = COMMUNITY_STREAMERS[0];
  const featuredNews = NEWS_ARTICLES.slice(0, 3);
  const featuredPortfolio = PORTFOLIO_ITEMS.filter((p) => p.featured).slice(0, 4);
  const wikiHighlights = WIKI_ARTICLES.slice(0, 4);

  return (
    <div className="space-y-24 pb-16">
      {/* HERO SECTION - MAAH'S CREATOR PORTAL */}
      <section className="relative pt-8 sm:pt-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Creator Badges */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-bold tracking-wide">
                  <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                  <span>Artista Digital & Streamer</span>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Comissões: {SITE_CONFIG.commissionsQueueStatus}</span>
                </div>
              </div>

              {/* Title & Personal Tagline */}
              <div className="space-y-2">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] font-['Outfit']">
                  Oi, eu sou a <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-300 to-amber-300">Maah's</span>!
                </h1>
                <p className="text-xl sm:text-2xl font-bold text-slate-200 font-['Outfit']">
                  Artes Digitais, Design para Lives & Nosso Servidor de Minecraft.
                </p>
              </div>

              {/* Description */}
              <p className="text-slate-300 text-base leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Crio identidades visuais completas, ilustrações personalizadas, emotes em pixel art e mapas temáticos para Minecraft. Além de produzir conteúdo em live, mantenho um servidor Survival RPG exclusivo para jogarmos juntos com a nossa comunidade do Discord!
              </p>

              {/* Primary Call-to-Actions */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
                <button
                  onClick={() => onOpenOrderModal('design', 'Comissão Geral com Maah\'s')}
                  className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-pink-500 via-pink-500 to-rose-500 hover:from-pink-400 hover:to-rose-400 text-white font-extrabold text-sm shadow-xl shadow-pink-950/50 active:scale-95 transition-all cursor-pointer"
                >
                  <Palette className="w-4 h-4" />
                  <span>Fazer Orçamento de Arte</span>
                </button>

                <button
                  onClick={() => onNavigate('portfolio')}
                  className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 font-bold text-sm transition-all cursor-pointer"
                >
                  <Image className="w-4 h-4 text-pink-400" />
                  <span>Ver Meu Portfólio</span>
                </button>

                <a
                  href={SITE_CONFIG.socials.discord}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-[#5865F2] hover:bg-[#4752C4] text-white font-bold text-sm shadow-lg shadow-[#5865F2]/25 active:scale-95 transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Entrar no Discord</span>
                </a>
              </div>

              {/* Creator Trust Perks */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-3 text-xs text-slate-400 font-medium">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-purple-400" />
                  Artes 100% Autorais & Vetorizadas
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Servidor de Minecraft Sem Pay-To-Win
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-purple-400" />
                  Revisões Inclusas nas Comissões
                </span>
              </div>
            </div>

            {/* Right: Featured Creator Profile Card & Server Live Box */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-6 rounded-3xl bg-gradient-to-b from-[#181126] via-[#101424] to-[#0c0f1d] border border-purple-500/25 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
                
                <div className="flex items-center gap-4 pb-5 border-b border-slate-800/80">
                  <div className="relative">
                    <img
                      src={SITE_CONFIG.avatarUrl}
                      alt={SITE_CONFIG.creatorName}
                      className="w-16 h-16 rounded-2xl object-cover ring-2 ring-purple-500/40 shadow-lg"
                    />
                    <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-slate-900" title="Online no Discord e Criando"></span>
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-white font-['Outfit'] flex items-center gap-2">
                      {SITE_CONFIG.creatorName}
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
                        Artista Oficial
                      </span>
                    </h3>
                    <p className="text-xs text-slate-400">{SITE_CONFIG.creatorTitle}</p>
                    <p className="text-xs text-emerald-400 font-medium mt-0.5 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      Prazo médio: 3 a 7 dias úteis
                    </p>
                  </div>
                </div>

                <div className="py-4 space-y-3">
                  <div className="text-xs text-slate-300">
                    <strong className="text-white">O que você encontra aqui:</strong>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div 
                      onClick={() => onNavigate('servicos')}
                      className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-purple-500/40 transition-all cursor-pointer"
                    >
                      <span className="text-purple-400 font-bold block">🎨 Venda de Artes</span>
                      <span className="text-[11px] text-slate-400">Overlays, Emotes, Packs</span>
                    </div>
                    <div 
                      onClick={() => onNavigate('portfolio')}
                      className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-purple-500/40 transition-all cursor-pointer"
                    >
                      <span className="text-purple-400 font-bold block">🖼️ Portfólio</span>
                      <span className="text-[11px] text-slate-400">Trabalhos anteriores</span>
                    </div>
                    <div 
                      onClick={() => onNavigate('lives')}
                      className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-purple-500/40 transition-all cursor-pointer"
                    >
                      <span className="text-purple-400 font-bold block">📺 Lives & Twitch</span>
                      <span className="text-[11px] text-slate-400">Speedpaints & Jogatina</span>
                    </div>
                    <div 
                      onClick={() => onNavigate('minecraft')}
                      className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/40 transition-all cursor-pointer"
                    >
                      <span className="text-emerald-400 font-bold block">⛏️ Servidor de Mine</span>
                      <span className="text-[11px] text-slate-400">Survival RPG comunitário</span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <span className="text-slate-400">Discord oficial:</span>
                  <a
                    href={SITE_CONFIG.socials.discord}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-pink-400 hover:text-pink-300 flex items-center gap-1"
                  >
                    <span>{SITE_CONFIG.server.discordMemberCount}+ membros</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Server Status Preview Card */}
              <ServerStatusCard onExploreClick={() => onNavigate('minecraft')} />
            </div>
          </div>
        </div>
      </section>

      {/* LIVE BROADCAST BAR (IF MAAH'S IS LIVE) */}
      {primaryStreamer && primaryStreamer.isLive && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-purple-950/60 via-slate-900/90 to-[#181126] border border-purple-500/40 backdrop-blur-xl shadow-xl">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="relative flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500"></span>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-black uppercase tracking-wider text-red-400 flex items-center gap-1">
                      <Tv className="w-3.5 h-3.5" />
                      Maah's Está Ao Vivo na Twitch!
                    </span>
                    <span className="text-xs text-slate-400 hidden sm:inline">Desenhando & Jogando no Servidor</span>
                  </div>
                  <h3 className="text-base font-bold text-white mt-0.5">
                    {primaryStreamer.streamTitle}
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <span className="text-xs text-purple-300 font-mono bg-purple-500/10 px-3 py-1.5 rounded-lg border border-purple-500/30">
                  {primaryStreamer.viewers} assistindo
                </span>
                <a
                  href={primaryStreamer.channelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-5 py-2 rounded-xl bg-pink-600 hover:bg-pink-500 text-white font-bold text-xs shadow-md transition-all"
                >
                  <span>Assistir Live da Maah's</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CREATIVE SERVICES & STOREFRONT SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-purple-400 uppercase tracking-wider flex items-center gap-1.5">
              <Wrench className="w-3.5 h-3.5" />
              Comissões & Serviços
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-['Outfit'] mt-1">
              Serviços Criativos da Maah's
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              Escolha o pacote ideal para seu canal, Discord ou servidor de Minecraft e solicite seu orçamento.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigate('servicos')}
              className="flex items-center gap-1.5 text-xs font-bold text-pink-400 hover:text-pink-300 transition-colors cursor-pointer"
            >
              <span>Ver Tabela & Detalhes</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {CREATIVE_SERVICES.map((serv) => {
            const IconComponent = 
              serv.iconName === 'Palette' ? Palette :
              serv.iconName === 'Brush' ? Brush :
              serv.iconName === 'Grid' ? Grid : Pickaxe;

            return (
              <div
                key={serv.id}
                className="p-6 rounded-2xl bg-[#0f1424]/80 hover:bg-[#12192e] border border-slate-800 hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between group shadow-lg"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <div className="space-y-1">
                    <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                      {serv.categoryLabel}
                    </span>
                    <h3 className="text-base font-bold text-white group-hover:text-purple-300 transition-colors pt-1">
                      {serv.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {serv.shortDescription}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-slate-800/80 space-y-3">
                  <div className="flex items-center justify-between text-[11px] text-slate-400">
                    <span>Prazo: {serv.estimatedTurnaround}</span>
                  </div>

                  <button
                    onClick={() => onOpenOrderModal(serv.category, serv.title)}
                    className="w-full py-2.5 rounded-xl bg-pink-500/15 hover:bg-pink-500 text-pink-300 hover:text-white font-bold text-xs border border-pink-500/30 transition-all cursor-pointer text-center"
                  >
                    Pedir Orçamento
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Commission Banner with Briefing trigger */}
        <div className="p-6 rounded-3xl bg-gradient-to-r from-[#20102b] via-[#151226] to-[#0c1424] border border-purple-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-400 uppercase">
              <Flame className="w-3.5 h-3.5" />
              <span>Calculadora & Briefing Imediato</span>
            </div>
            <h3 className="text-lg sm:text-xl font-black text-white font-['Outfit']">
              Quer uma estimativa rápida para o seu projeto?
            </h3>
            <p className="text-xs text-slate-300 max-w-xl">
              Selecione o tipo de arte, nível de detalhe e receba as instruções para abrir seu ticket direto comigo no Discord.
            </p>
          </div>

          <button
            onClick={() => onOpenOrderModal('design')}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-pink-500 hover:from-pink-400 hover:to-pink-400 text-white font-extrabold text-xs shadow-lg shadow-pink-950/50 active:scale-95 transition-all shrink-0 cursor-pointer"
          >
            Abrir Calculadora de Orçamento
          </button>
        </div>
      </section>

      {/* PORTFOLIO SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-purple-400 uppercase tracking-wider flex items-center gap-1.5">
              <Image className="w-3.5 h-3.5" />
              Galeria de Obras
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-['Outfit'] mt-1">
              Portfólio de Trabalhos da Maah's
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              Confira ilustrações, emotes, overlays e construções criadas para criadores e servidores.
            </p>
          </div>

          <button
            onClick={() => onNavigate('portfolio')}
            className="flex items-center gap-1.5 text-xs font-bold text-pink-400 hover:text-pink-300 transition-colors cursor-pointer"
          >
            <span>Ver todas as obras</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Portfolio preview cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {featuredPortfolio.map((item) => (
            <div
              key={item.id}
              onClick={() => onOpenPortfolioLightbox(item.id)}
              className="group relative rounded-2xl bg-slate-900 border border-slate-800 hover:border-purple-500/40 overflow-hidden cursor-pointer transition-all duration-300 shadow-lg"
            >
              <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-transparent to-transparent opacity-80" />
                <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded text-[10px] font-semibold bg-purple-500 text-slate-950 shadow">
                  {item.categoryLabel}
                </span>
              </div>

              <div className="p-4 space-y-1">
                <h4 className="text-sm font-bold text-white group-hover:text-purple-300 transition-colors truncate">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-400 truncate">{item.description}</p>
                <div className="pt-2 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="text-purple-300 font-medium">Por {item.author}</span>
                  <span className="text-purple-400 font-medium">Expandir arte →</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MINECRAFT SERVER & WIKI SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="p-8 rounded-3xl bg-gradient-to-r from-[#0b1f1a] via-[#0d1726] to-[#140e24] border border-emerald-500/30 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-bold">
                <Shield className="w-3.5 h-3.5" />
                <span>Servidor Oficial de Minecraft da Maah's</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-white font-['Outfit']">
                Jogue conosco no Maah's World (1.21 Java & Bedrock)
              </h2>

              <p className="text-slate-300 text-sm leading-relaxed max-w-2xl">
                Nosso servidor é focado em diversão comunitária, sobrevivência equilibrada, biomas customizados e eventos semanais durante as transmissões ao vivo.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => onNavigate('minecraft')}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs shadow-lg active:scale-95 transition-all cursor-pointer"
                >
                  <Shield className="w-4 h-4" />
                  <span>Ver IPs & Como Conectar</span>
                </button>

                <button
                  onClick={() => onNavigate('wiki')}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold text-xs transition-all cursor-pointer"
                >
                  <BookOpen className="w-4 h-4 text-emerald-400" />
                  <span>Acessar Wiki & Comandos</span>
                </button>

                <button
                  onClick={() => onNavigate('vote')}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-amber-300 border border-amber-500/30 font-semibold text-xs transition-all cursor-pointer"
                >
                  <Vote className="w-4 h-4" />
                  <span>Votar no Servidor</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-4 bg-slate-950/60 p-5 rounded-2xl border border-emerald-500/20 space-y-3 text-xs">
              <div className="font-bold text-white flex items-center justify-between">
                <span>Informações Rápidas:</span>
                <span className="text-emerald-400 font-mono">100% Gratuito</span>
              </div>
              <div className="space-y-1.5 text-slate-300">
                <div className="flex justify-between py-1 border-b border-slate-800">
                  <span className="text-slate-400">IP Java:</span>
                  <span className="font-mono text-white font-bold">{SITE_CONFIG.server.ip}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800">
                  <span className="text-slate-400">IP Bedrock:</span>
                  <span className="font-mono text-white font-bold">{SITE_CONFIG.server.bedrockIp}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-400">Porta Bedrock:</span>
                  <span className="font-mono text-white">{SITE_CONFIG.server.bedrockPort}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wiki Fast Links */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-white flex items-center gap-2 font-['Outfit']">
              <Compass className="w-4 h-4 text-emerald-400" />
              Guias da Wiki para Jogadores
            </h3>
            <button
              onClick={() => onNavigate('wiki')}
              className="text-xs text-emerald-400 hover:text-emerald-300 font-bold"
            >
              Ver todos os guias →
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {wikiHighlights.map((art) => (
              <div
                key={art.slug}
                onClick={() => onNavigate('wiki', { slug: art.slug })}
                className="p-4 rounded-2xl bg-[#0f172a]/60 hover:bg-[#0f172a] border border-slate-800 hover:border-emerald-500/40 transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {art.categoryLabel}
                  </span>
                  <h4 className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {art.title}
                  </h4>
                  <p className="text-xs text-slate-400 line-clamp-2">
                    {art.summary}
                  </p>
                </div>
                <div className="pt-3 mt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-emerald-400">
                  <span>Ler guia</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LATEST NEWS & POSTS FROM MAAH'S */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-purple-400 uppercase tracking-wider flex items-center gap-1.5">
              <Newspaper className="w-3.5 h-3.5" />
              Notícias & Posts
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-['Outfit'] mt-1">
              Avisos da Maah's & Novidades
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              Fique por dentro da abertura de comissões, notas do servidor e programações de live.
            </p>
          </div>

          <button
            onClick={() => onNavigate('noticias')}
            className="flex items-center gap-1.5 text-xs font-bold text-pink-400 hover:text-pink-300 transition-colors cursor-pointer"
          >
            <span>Ver todas as publicações</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredNews.map((news) => (
            <div
              key={news.id}
              onClick={() => onNavigate('noticias', { slug: news.slug })}
              className="group rounded-2xl bg-[#0f172a]/60 hover:bg-[#0f172a] border border-slate-800 hover:border-purple-500/40 overflow-hidden cursor-pointer transition-all duration-300 flex flex-col justify-between"
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

              <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="px-2 py-0.5 rounded bg-purple-500/10 text-purple-300 border border-purple-500/20 font-medium">
                      {news.categoryLabel}
                    </span>
                    <span className="text-slate-400">{news.date}</span>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-purple-300 transition-colors">
                    {news.title}
                  </h3>

                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {news.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-purple-400 font-medium">
                  <span className="text-slate-400">Por {news.author.name}</span>
                  <div className="flex items-center gap-1">
                    <span>Ler post</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};


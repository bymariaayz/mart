import React from 'react';
import { 
  Users, MessageSquare, Calendar, Shield, 
  Sparkles, ExternalLink, Heart, CheckCircle2, Award 
} from 'lucide-react';
import { COMMUNITY_EVENTS, STAFF_MEMBERS, DISCORD_SECTIONS } from '../data/communityData';
import { SITE_CONFIG } from '../config/siteConfig';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { PageRoute } from '../types';

interface CommunityPageProps {
  onNavigate: (route: PageRoute, params?: Record<string, string>) => void;
}

export const CommunityPage: React.FC<CommunityPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 pb-16">
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: 'Central da Comunidade', active: true }]} onNavigate={onNavigate} />

      {/* Hero Discord Hub */}
      <div className="relative rounded-3xl bg-gradient-to-r from-[#171a3d] via-[#10152e] to-[#0d1c29] border border-[#5865F2]/40 p-8 sm:p-12 overflow-hidden shadow-2xl">
        <div className="max-w-3xl space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5865F2]/20 border border-[#5865F2]/40 text-purple-300 text-xs font-semibold">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Ponto Central de Encontro & Suporte</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-['Outfit']">
            Comunidade & Discord Oficial
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Nosso Discord é o coração pulsante do projeto! Lá você encontra salas de bate-papo, canais de voz por proximidade, anúncios em tempo real, suporte com a moderação e espaço para compartilhar construções e artes.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href={SITE_CONFIG.socials.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#5865F2] hover:bg-[#4752C4] text-white font-bold text-sm shadow-xl shadow-[#5865F2]/30 active:scale-95 transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Entrar no Discord da Comunidade</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <button
              onClick={() => onNavigate('minecraft')}
              className="px-5 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold text-sm transition-all cursor-pointer"
            >
              Ver Servidor Minecraft
            </button>
          </div>
        </div>
      </div>

      {/* DISCORD CANAL HIGHLIGHTS */}
      <section className="space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold text-white font-['Outfit'] flex items-center gap-2">
          <MessageSquare className="w-5 h-5 text-[#5865F2]" />
          <span>Estrutura dos Nossos Canais no Discord</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {DISCORD_SECTIONS.map((sec, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-[#0c1220] border border-slate-800 space-y-2 hover:border-[#5865F2]/40 transition-all"
            >
              <h3 className="text-sm font-bold text-white font-mono">{sec.name}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{sec.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* EVENTS CALENDAR */}
      <section className="space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold text-white font-['Outfit'] flex items-center gap-2">
          <Calendar className="w-5 h-5 text-emerald-400" />
          <span>Próximos Eventos Comunitários</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {COMMUNITY_EVENTS.map((ev) => (
            <div
              key={ev.id}
              className="p-6 rounded-3xl bg-[#0d1322] border border-slate-800 hover:border-emerald-500/30 transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className={`px-2.5 py-0.5 rounded font-mono font-bold text-[10px] uppercase ${
                    ev.status === 'upcoming' 
                      ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30' 
                      : 'bg-slate-800 text-slate-400'
                  }`}>
                    {ev.status === 'upcoming' ? 'Em Breve' : 'Concluído'}
                  </span>
                  <span className="text-slate-400">{ev.date}</span>
                </div>

                <h3 className="text-base font-bold text-white">{ev.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{ev.description}</p>
              </div>

              <div className="pt-4 border-t border-slate-800 text-xs space-y-1">
                <div className="text-slate-400">
                  Local: <strong className="text-white font-normal">{ev.location}</strong>
                </div>
                <div className="text-emerald-400 font-medium">
                  {ev.rewardsNote}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STAFF & TEAM SECTION */}
      <section className="space-y-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-white font-['Outfit'] flex items-center gap-2">
            <Shield className="w-5 h-5 text-purple-400" />
            <span>Equipe de Administração & Moderação</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Nossa equipe atua voluntariamente para garantir um ambiente amigável, acolhedor e livre de trapaças.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {STAFF_MEMBERS.map((staff, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col items-center text-center space-y-3"
            >
              <img
                src={staff.avatar}
                alt={staff.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-slate-700"
              />
              <div>
                <h4 className="text-sm font-bold text-white">{staff.name}</h4>
                <span className={`inline-block mt-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-gradient-to-r ${staff.badgeColor}`}>
                  {staff.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

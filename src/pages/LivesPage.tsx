import React from 'react';
import { 
  Tv, ExternalLink, Calendar, Users, Radio, 
  Sparkles, CheckCircle2, Clock, MessageSquare 
} from 'lucide-react';
import { COMMUNITY_STREAMERS, STREAM_SCHEDULE } from '../data/livesData';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { PageRoute } from '../types';

interface LivesPageProps {
  onNavigate: (route: PageRoute, params?: Record<string, string>) => void;
}

export const LivesPage: React.FC<LivesPageProps> = ({ onNavigate }) => {
  const liveNow = COMMUNITY_STREAMERS.filter((s) => s.isLive);
  const offlineStreamers = COMMUNITY_STREAMERS.filter((s) => !s.isLive);

  const getPlatformBadge = (platform: 'twitch' | 'youtube' | 'kick') => {
    switch (platform) {
      case 'twitch':
        return <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-[#9146FF] text-white">TWITCH</span>;
      case 'youtube':
        return <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-[#FF0000] text-white">YOUTUBE</span>;
      case 'kick':
        return <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-[#53FC18] text-slate-950 font-mono">KICK</span>;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 pb-16">
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: 'Transmissões ao Vivo', active: true }]} onNavigate={onNavigate} />

      {/* Header Banner */}
      <div className="relative rounded-3xl bg-gradient-to-r from-[#170e28] via-[#0f172a] to-[#0c1824] border border-purple-500/30 p-8 sm:p-12 overflow-hidden shadow-2xl">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-semibold">
            <Radio className="w-3.5 h-3.5 text-red-400 animate-pulse" />
            <span>Transmissões da Comunidade • Twitch, YouTube & Kick</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-['Outfit']">
            Lives & Criadores de Conteúdo
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Acompanhe as transmissões ao vivo dos criadores parceiros e membros da comunidade explorando o servidor de Minecraft, participando de torneios e trocando ideias em tempo real.
          </p>
        </div>
      </div>

      {/* LIVES HAPPENING NOW */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-bold text-white font-['Outfit'] flex items-center gap-2">
            <Radio className="w-5 h-5 text-red-500 animate-pulse" />
            <span>Ao Vivo Agora</span>
          </h2>
          <span className="text-xs text-slate-400 font-mono">
            {liveNow.length} canal(is) transmitindo
          </span>
        </div>

        {liveNow.length === 0 ? (
          <div className="p-8 rounded-2xl bg-slate-900/40 border border-slate-800 text-center space-y-2">
            <Tv className="w-8 h-8 text-slate-600 mx-auto" />
            <p className="text-sm font-semibold text-slate-300">Nenhum criador transmitindo neste momento.</p>
            <p className="text-xs text-slate-400">Consulte a programação abaixo para não perder as próximas lives!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {liveNow.map((streamer) => (
              <div
                key={streamer.id}
                className="p-6 rounded-3xl bg-[#0e1424] border border-red-500/30 shadow-2xl space-y-5 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Top info */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <img
                          src={streamer.avatar}
                          alt={streamer.name}
                          className="w-12 h-12 rounded-full object-cover border-2 border-red-500"
                        />
                        <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full bg-red-500 border-2 border-[#0e1424]" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-white flex items-center gap-2">
                          <span>{streamer.name}</span>
                          {getPlatformBadge(streamer.platform)}
                        </h3>
                        <span className="text-xs text-slate-400 font-medium">Jogando: <strong className="text-emerald-400">{streamer.game}</strong></span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-500/15 border border-red-500/30 text-red-300 text-xs font-mono font-bold">
                      <Users className="w-3.5 h-3.5 text-red-400" />
                      <span>{streamer.viewers} online</span>
                    </div>
                  </div>

                  {/* Title */}
                  <p className="text-sm text-slate-200 font-medium leading-relaxed">
                    &quot;{streamer.streamTitle}&quot;
                  </p>
                </div>

                <a
                  href={streamer.channelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-purple-950/40 active:scale-95 transition-all"
                >
                  <span>Assistir no canal</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* COMMUNITY STREAMERS ROSTER */}
      <section className="space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold text-white font-['Outfit'] flex items-center gap-2">
          <Tv className="w-5 h-5 text-purple-400" />
          <span>Criadores Parceiros da Comunidade</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {COMMUNITY_STREAMERS.map((s) => (
            <div
              key={s.id}
              className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between gap-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <img
                    src={s.avatar}
                    alt={s.name}
                    className="w-10 h-10 rounded-full object-cover border border-slate-700"
                  />
                  {getPlatformBadge(s.platform)}
                </div>

                <div>
                  <h4 className="text-sm font-bold text-white">{s.name}</h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">{s.scheduleDescription}</p>
                </div>
              </div>

              <a
                href={s.channelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-purple-400 hover:text-purple-300 font-semibold flex items-center gap-1"
              >
                <span>Visitar Canal</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* STREAM SCHEDULE CALENDAR */}
      <section className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-white font-['Outfit'] flex items-center gap-2">
            <Calendar className="w-5 h-5 text-purple-400" />
            <span>Cronograma Semanal de Transmissões</span>
          </h2>
          <span className="text-xs text-slate-400">Horário de Brasília (BRT)</span>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-800">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-950 text-slate-300 border-b border-slate-800">
              <tr>
                <th className="px-4 py-3 font-semibold text-white">Dia</th>
                <th className="px-4 py-3 font-semibold text-white">Horário</th>
                <th className="px-4 py-3 font-semibold text-white">Criador</th>
                <th className="px-4 py-3 font-semibold text-white">Conteúdo / Tema</th>
                <th className="px-4 py-3 font-semibold text-white">Plataforma</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300">
              {STREAM_SCHEDULE.map((item, idx) => (
                <tr key={idx} className="hover:bg-slate-800/30 transition-colors">
                  <td className="px-4 py-3 font-bold text-white">{item.day}</td>
                  <td className="px-4 py-3 font-mono text-purple-300">{item.time}</td>
                  <td className="px-4 py-3">{item.streamer}</td>
                  <td className="px-4 py-3 text-xs text-slate-300">{item.title}</td>
                  <td className="px-4 py-3">{getPlatformBadge(item.platform)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

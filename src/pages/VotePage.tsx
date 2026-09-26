import React from 'react';
import { 
  Vote, ExternalLink, Flame, Trophy, Star, Globe, 
  Sparkles, CheckCircle2, Clock, Gift, ShieldAlert, Award
} from 'lucide-react';
import { VOTE_SITES, VOTE_REWARDS_INFO, VOTE_INSTRUCTIONS } from '../data/voteData';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { useToast } from '../context/ToastContext';
import { PageRoute } from '../types';

interface VotePageProps {
  onNavigate: (route: PageRoute, params?: Record<string, string>) => void;
}

export const VotePage: React.FC<VotePageProps> = ({ onNavigate }) => {
  const { triggerSparkles } = useToast();

  const getSiteIcon = (iconName: string) => {
    switch (iconName) {
      case 'Flame': return <Flame className="w-5 h-5 text-amber-400" />;
      case 'Trophy': return <Trophy className="w-5 h-5 text-yellow-400" />;
      case 'Star': return <Star className="w-5 h-5 text-violet-400" />;
      default: return <Globe className="w-5 h-5 text-cyan-400" />;
    }
  };

  const handleVoteClick = (url: string) => {
    triggerSparkles();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 pb-16">
      <Breadcrumbs items={[{ label: 'Votação & Recompensas', active: true }]} onNavigate={onNavigate} />

      <div className="relative rounded-3xl bg-gradient-to-r from-pink-950 via-violet-950 to-fuchsia-950 border border-pink-500/30 p-8 sm:p-12 overflow-hidden shadow-2xl">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-200 text-xs font-semibold">
            <Vote className="w-3.5 h-3.5" />
            <span>Apoie o Servidor Gratuitamente</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-['Outfit']">
            Vote no Servidor & Resgate Recompensas
          </h1>

          <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
            Seus votos diários colocam nosso servidor em destaque nas maiores listas de Minecraft e nos ajudam a atrair novos jogadores e amigos. Como agradecimento, você recebe chaves cósmicas, cosmetics e bônus especiais da comunidade.
          </p>
        </div>
      </div>

      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-bold text-white font-['Outfit'] flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-pink-400" />
            <span>Sites Oficiais de Votação</span>
          </h2>
          <span className="text-xs text-slate-400 font-mono">
            {VOTE_SITES.length} links disponíveis hoje
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {VOTE_SITES.map((site) => (
            <div
              key={site.id}
              className="p-6 rounded-2xl bg-[#0d1322] border border-pink-500/15 hover:border-pink-500/40 transition-all flex flex-col justify-between gap-6 shadow-xl group"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 group-hover:scale-105 transition-transform">
                      {getSiteIcon(site.icon)}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-pink-300 transition-colors">
                        {site.name}
                      </h3>
                      <div className="flex items-center gap-2 mt-0.5 text-xs text-slate-400">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        <span>Renova a cada {site.cooldownHours} horas</span>
                      </div>
                    </div>
                  </div>

                  {site.bonusText && (
                    <span className="px-2.5 py-1 rounded-lg bg-pink-500/10 border border-pink-500/20 text-pink-300 font-mono text-[11px] font-semibold">
                      {site.bonusText}
                    </span>
                  )}
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {site.description}
                </p>
              </div>

              <button
                onClick={() => handleVoteClick(site.url)}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-400 hover:to-violet-400 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md shadow-fuchsia-950/40 active:scale-95 transition-all cursor-pointer"
              >
                <span>Votar no {site.name}</span>
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="p-8 rounded-3xl bg-slate-900/60 border border-pink-500/15 space-y-6">
        <h2 className="text-xl font-bold text-white font-['Outfit'] flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-pink-400" />
          <span>Como Votar Passo a Passo</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {VOTE_INSTRUCTIONS.map((step) => (
            <div key={step.step} className="p-4 rounded-2xl bg-slate-950/60 border border-pink-500/15 space-y-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-pink-500/10 text-pink-400 font-bold text-xs border border-pink-500/30">
                {step.step}
              </span>
              <h3 className="text-sm font-bold text-white">{step.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-white font-['Outfit'] flex items-center gap-2">
            <Gift className="w-5 h-5 text-violet-400" />
            <span>Recompensas & Bônus de Sequência (Informativo)</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Todas as recompensas são 100% cosméticas e utilizáveis exclusivamente dentro do jogo. Não comercializamos vantagens ou itens com dinheiro real.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {VOTE_REWARDS_INFO.map((tier, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#0d1322] border border-violet-500/20 hover:border-violet-500/40 transition-all space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-violet-500/10 text-violet-300 border border-violet-500/20 font-bold">
                    {tier.tier}
                  </span>
                  <Award className="w-4 h-4 text-violet-400" />
                </div>

                <h3 className="text-base font-bold text-white">{tier.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{tier.description}</p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 space-y-2">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                  Itens Entregues no Jogo:
                </span>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {tier.rewards.map((rew, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-2">
                      <span className="text-pink-400 font-mono">✓</span>
                      <span>{rew}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

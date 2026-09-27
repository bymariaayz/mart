import React, { useState, useEffect } from 'react';
import { Copy, Check, Users, Wifi, RefreshCw, Smartphone, Monitor } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { fetchServerStatus, LiveServerStatus } from '../utils/statusApi';
import { useToast } from '../context/ToastContext';

interface ServerStatusCardProps {
  compact?: boolean;
  onExploreClick?: () => void;
}

export const ServerStatusCard: React.FC<ServerStatusCardProps> = ({ compact = false, onExploreClick }) => {
  const [status, setStatus] = useState<LiveServerStatus>({
    online: SITE_CONFIG.server.defaultStatus.online,
    playersOnline: SITE_CONFIG.server.defaultStatus.playersOnline,
    maxPlayers: SITE_CONFIG.server.defaultStatus.maxPlayers,
    version: SITE_CONFIG.server.version,
    motd: SITE_CONFIG.server.defaultStatus.motd,
    pingMs: SITE_CONFIG.server.defaultStatus.pingMs,
    isFallback: true,
    lastChecked: new Date()
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [copiedJava, setCopiedJava] = useState<boolean>(false);
  const [copiedBedrock, setCopiedBedrock] = useState<boolean>(false);
  const { copyToClipboard } = useToast();

  const loadStatus = async () => {
    setIsLoading(true);
    try {
      const data = await fetchServerStatus(SITE_CONFIG.server.ip);
      setStatus(data);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadStatus();
    // Auto-refresh every 60s
    const interval = setInterval(loadStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyJava = async () => {
    const success = await copyToClipboard(SITE_CONFIG.server.ip, 'IP Java do Servidor', true);
    if (success) {
      setCopiedJava(true);
      setTimeout(() => setCopiedJava(false), 2500);
    }
  };

  const handleCopyBedrock = async () => {
    const bedrockText = `${SITE_CONFIG.server.bedrockIp || SITE_CONFIG.server.ip}:${SITE_CONFIG.server.bedrockPort || 19132}`;
    const success = await copyToClipboard(bedrockText, 'IP & Porta Bedrock', true);
    if (success) {
      setCopiedBedrock(true);
      setTimeout(() => setCopiedBedrock(false), 2500);
    }
  };

  const percentage = Math.min(Math.round((status.playersOnline / (status.maxPlayers || 100)) * 100), 100);

  if (compact) {
    return (
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-[#0f172a]/80 border border-emerald-500/20 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="relative flex h-3 w-3">
            {status.online ? (
              <>
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </>
            ) : (
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            )}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                {status.online ? 'Servidor Online' : 'Servidor em Manutenção'}
              </span>
              <span className="text-xs text-slate-400 font-mono">v{status.version}</span>
            </div>
            <p className="text-sm font-bold text-white font-mono">{SITE_CONFIG.server.ip}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-xs text-slate-300 font-medium px-2.5 py-1 rounded-lg bg-slate-800/80 border border-slate-700/50">
            <Users className="w-3.5 h-3.5 text-emerald-400" />
            <span className="font-mono text-white font-bold">{status.playersOnline}</span>
            <span className="text-slate-400">/ {status.maxPlayers}</span>
          </div>

          <button
            onClick={handleCopyJava}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-emerald-500 text-slate-950 hover:bg-emerald-400 active:scale-95 transition-all shadow-md shadow-emerald-950/40 cursor-pointer"
          >
            {copiedJava ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copiedJava ? 'Copiado!' : 'Copiar IP'}</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative group overflow-hidden rounded-2xl bg-gradient-to-b from-[#111827]/90 to-[#0b0f19]/90 border border-emerald-500/25 p-6 backdrop-blur-xl shadow-2xl shadow-emerald-950/20">
      {/* Decorative ambient corner glow */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-emerald-500/15 transition-colors" />

      {/* Header with Status Indicator & Refresh */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-800/80">
        <div className="flex items-center gap-2.5">
          <div className="relative flex h-3.5 w-3.5">
            {status.online ? (
              <>
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500"></span>
              </>
            ) : (
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-red-500"></span>
            )}
          </div>
          <span className="text-sm font-bold text-white tracking-wide">
            {status.online ? 'STATUS DO SERVIDOR: ONLINE' : 'STATUS: MANUTENÇÃO'}
          </span>
          <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 font-mono">
            {SITE_CONFIG.server.version}
          </span>
        </div>

        <button
          onClick={loadStatus}
          disabled={isLoading}
          className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-emerald-400 transition-colors p-1.5 rounded-md hover:bg-slate-800/60 cursor-pointer"
          title="Atualizar status agora"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin text-emerald-400' : ''}`} />
          <span className="hidden sm:inline">Atualizar</span>
        </button>
      </div>

      {/* MOTD / Welcome message */}
      <div className="my-4 p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs font-mono text-slate-300 flex items-center gap-2">
        <span className="text-emerald-400 text-sm">✦</span>
        <span className="truncate">{status.motd}</span>
      </div>

      {/* Player Count & Live Progress Bar */}
      <div className="space-y-2 mb-6">
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-1.5 text-slate-300">
            <Users className="w-4 h-4 text-emerald-400" />
            <span>Jogadores Conectados</span>
          </div>
          <div className="font-mono">
            <span className="text-white font-bold text-sm">{status.playersOnline}</span>
            <span className="text-slate-400"> / {status.maxPlayers} vagas</span>
          </div>
        </div>

        {/* Bar */}
        <div className="w-full h-2.5 rounded-full bg-slate-800/80 overflow-hidden p-0.5 border border-slate-700/40">
          <div
            className="h-full rounded-full bg-gradient-to-r from-emerald-500 via-teal-400 to-blue-400 transition-all duration-500 shadow-sm shadow-emerald-500/50"
            style={{ width: `${Math.max(percentage, 5)}%` }}
          />
        </div>
      </div>

      {/* Connection IP Options: Java & Bedrock */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {/* Java Box */}
        <div className="p-3.5 rounded-xl bg-[#141d30]/70 border border-slate-700/50 flex flex-col justify-between gap-2.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-300">
              <Monitor className="w-3.5 h-3.5 text-blue-400" />
              <span>Java Edition</span>
            </div>
            <span className="text-[10px] text-slate-400 font-mono">Porta: 25565</span>
          </div>

          <div className="flex items-center justify-between gap-2">
            <span className="font-mono text-xs font-bold text-emerald-300 truncate select-all">
              {SITE_CONFIG.server.ip}
            </span>
            <button
              onClick={handleCopyJava}
              className="p-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 transition-all active:scale-95 cursor-pointer shrink-0"
              title="Copiar IP Java"
            >
              {copiedJava ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* Bedrock Box */}
        <div className="p-3.5 rounded-xl bg-[#141d30]/70 border border-slate-700/50 flex flex-col justify-between gap-2.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-300">
              <Smartphone className="w-3.5 h-3.5 text-blue-400" />
              <span>Bedrock / Mobile</span>
            </div>
            <span className="text-[10px] text-blue-300 font-mono">Porta: {SITE_CONFIG.server.bedrockPort || 19132}</span>
          </div>

          <div className="flex items-center justify-between gap-2">
            <span className="font-mono text-xs font-bold text-blue-300 truncate select-all">
              {SITE_CONFIG.server.bedrockIp || SITE_CONFIG.server.ip}
            </span>
            <button
              onClick={handleCopyBedrock}
              className="p-1.5 rounded-lg bg-pink-500/10 hover:bg-pink-500/20 text-pink-400 border border-pink-500/30 transition-all active:scale-95 cursor-pointer shrink-0"
              title="Copiar IP e Porta Bedrock"
            >
              {copiedBedrock ? <Check className="w-3.5 h-3.5 text-pink-300" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Latency & Guide footer */}
      <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
        <div className="flex items-center gap-1.5">
          <Wifi className="w-3.5 h-3.5 text-emerald-400" />
          <span>Latência Média: <strong className="text-slate-200 font-mono">~{status.pingMs || 28}ms</strong></span>
        </div>

        {onExploreClick && (
          <button
            onClick={onExploreClick}
            className="text-emerald-400 hover:text-emerald-300 font-medium underline underline-offset-4 cursor-pointer"
          >
            Guia de conexão completo →
          </button>
        )}
      </div>
    </div>
  );
};

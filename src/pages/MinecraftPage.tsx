import React, { useState } from 'react';
import { 
  Shield, Copy, Check, Monitor, Smartphone, Download, 
  ExternalLink, Sparkles, BookOpen, Users, Compass, 
  HelpCircle, AlertCircle, ChevronRight, CheckCircle2 
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { ServerStatusCard } from '../components/ServerStatusCard';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { useToast } from '../context/ToastContext';
import { PageRoute } from '../types';

interface MinecraftPageProps {
  onNavigate: (route: PageRoute, params?: Record<string, string>) => void;
}

export const MinecraftPage: React.FC<MinecraftPageProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'java' | 'bedrock'>('java');
  const [copiedJava, setCopiedJava] = useState(false);
  const [copiedBedrock, setCopiedBedrock] = useState(false);
  const { copyToClipboard } = useToast();

  const handleCopyJava = async () => {
    const success = await copyToClipboard(SITE_CONFIG.server.ip, 'IP Java', true);
    if (success) {
      setCopiedJava(true);
      setTimeout(() => setCopiedJava(false), 2500);
    }
  };

  const handleCopyBedrock = async () => {
    const text = `${SITE_CONFIG.server.bedrockIp || SITE_CONFIG.server.ip}:${SITE_CONFIG.server.bedrockPort || 19132}`;
    const success = await copyToClipboard(text, 'IP & Porta Bedrock', true);
    if (success) {
      setCopiedBedrock(true);
      setTimeout(() => setCopiedBedrock(false), 2500);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 pb-16">
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: 'Servidor Minecraft', active: true }]} onNavigate={onNavigate} />

      {/* Header Banner */}
      <div className="relative rounded-3xl bg-gradient-to-r from-[#0e1d24] via-[#0b172a] to-[#12132b] border border-emerald-500/30 p-8 sm:p-12 overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
            <Shield className="w-3.5 h-3.5" />
            <span>Servidor Survival RPG • Versão {SITE_CONFIG.server.version}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-['Outfit']">
            {SITE_CONFIG.server.name}
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {SITE_CONFIG.server.tagline} {SITE_CONFIG.server.shortDescription}
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <button
              onClick={handleCopyJava}
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm shadow-lg shadow-emerald-950/40 active:scale-95 transition-all cursor-pointer"
            >
              {copiedJava ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <span>{copiedJava ? 'IP Copiado com Sucesso!' : `Copiar IP: ${SITE_CONFIG.server.ip}`}</span>
            </button>

            <button
              onClick={() => onNavigate('wiki', { slug: 'comece-a-jogar' })}
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-700 font-semibold text-xs sm:text-sm transition-all cursor-pointer"
            >
              <BookOpen className="w-4 h-4 text-emerald-400" />
              <span>Ver Guia Completo na Wiki</span>
            </button>
          </div>
        </div>
      </div>

      {/* Grid: How to Connect (Java vs Bedrock) & Server Status */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Connection Guides Tabs */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-slate-900/80 border border-slate-800">
            <button
              onClick={() => setActiveTab('java')}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'java'
                  ? 'bg-emerald-500 text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Monitor className="w-4 h-4" />
              <span>Como Entrar (Java Edition)</span>
            </button>
            <button
              onClick={() => setActiveTab('bedrock')}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'bedrock'
                  ? 'bg-pink-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Smartphone className="w-4 h-4" />
              <span>Como Entrar (Bedrock / Mobile)</span>
            </button>
          </div>

          {/* Java Guide */}
          {activeTab === 'java' && (
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0f172a]/70 border border-emerald-500/20 space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Monitor className="w-5 h-5 text-emerald-400" />
                <span>Instruções para Minecraft Java Edition (PC)</span>
              </h3>

              <ol className="space-y-4 text-sm text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-xs border border-emerald-500/30">
                    1
                  </span>
                  <div>
                    <strong className="text-white">Inicie o Minecraft na versão 1.21+</strong>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Você pode usar o inicializador padrão, Prism Launcher, Modrinth ou CurseForge.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-xs border border-emerald-500/30">
                    2
                  </span>
                  <div>
                    <strong className="text-white">Vá em &quot;Multijogador&quot; e clique em &quot;Adicionar Servidor&quot;</strong>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Nome do servidor: <span className="font-mono text-emerald-300">{SITE_CONFIG.name}</span>
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-xs border border-emerald-500/30">
                    3
                  </span>
                  <div className="w-full">
                    <strong className="text-white">Insira o Endereço do Servidor</strong>
                    <div className="mt-2 flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-800 font-mono text-sm">
                      <span className="text-emerald-300 font-bold select-all">{SITE_CONFIG.server.ip}</span>
                      <button
                        onClick={handleCopyJava}
                        className="px-3 py-1 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 text-xs border border-emerald-500/30 transition-all cursor-pointer"
                      >
                        {copiedJava ? 'Copiado!' : 'Copiar'}
                      </button>
                    </div>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-xs border border-emerald-500/30">
                    4
                  </span>
                  <div>
                    <strong className="text-white">Clique em &quot;Concluído&quot; e entre no mundo!</strong>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Contas originais entram sem senha. Contas não-originais podem se registrar usando <code className="text-emerald-300 bg-slate-900 px-1 py-0.5 rounded">/register [suasenha]</code>.
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          )}

          {/* Bedrock Guide */}
          {activeTab === 'bedrock' && (
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0f172a]/70 border border-blue-500/20 space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Smartphone className="w-5 h-5 text-blue-400" />
                <span>Instruções para Minecraft Bedrock (Celular / Win 10 / Consoles)</span>
              </h3>

              <ol className="space-y-4 text-sm text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-blue-400 font-bold text-xs border border-blue-500/30">
                    1
                  </span>
                  <div>
                    <strong className="text-white">Abra o Minecraft no seu celular ou dispositivo</strong>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Certifique-se de estar na versão Bedrock mais recente.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-blue-400 font-bold text-xs border border-blue-500/30">
                    2
                  </span>
                  <div>
                    <strong className="text-white">Clique em &quot;Jogar&quot; e acesse a aba &quot;Servidores&quot;</strong>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Role até o final e clique no botão &quot;Adicionar Servidor&quot;.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-blue-400 font-bold text-xs border border-blue-500/30">
                    3
                  </span>
                  <div className="w-full space-y-2">
                    <strong className="text-white">Preencha os Campos de Conexão:</strong>
                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-2 font-mono text-xs">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-400">Endereço do Servidor:</span>
                        <span className="text-blue-300 font-bold">{SITE_CONFIG.server.bedrockIp || SITE_CONFIG.server.ip}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-400">Porta:</span>
                        <span className="text-blue-300 font-bold">{SITE_CONFIG.server.bedrockPort || 19132}</span>
                      </div>
                    </div>
                    <button
                      onClick={handleCopyBedrock}
                      className="w-full py-2 rounded-xl bg-pink-600/20 hover:bg-pink-600/30 text-pink-300 border border-pink-500/40 text-xs font-semibold transition-all cursor-pointer flex items-center justify-center gap-2"
                    >
                      {copiedBedrock ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedBedrock ? 'Dados Copiados!' : 'Copiar IP e Porta Bedrock'}</span>
                    </button>
                  </div>
                </li>
              </ol>
            </div>
          )}
        </div>

        {/* Right Column: Server Status Widget & Quick Specs */}
        <div className="lg:col-span-5 space-y-6">
          <ServerStatusCard />

          {/* Quick Server Specs */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4 text-xs">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-['Outfit'] flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>Especificações Técnicas</span>
            </h4>

            <div className="space-y-2.5 divide-y divide-slate-800/60">
              <div className="flex justify-between pt-1">
                <span className="text-slate-400">Versão Suportada:</span>
                <span className="text-white font-mono font-semibold">{SITE_CONFIG.server.version}</span>
              </div>
              <div className="flex justify-between pt-2">
                <span className="text-slate-400">Java Recomendado:</span>
                <span className="text-white font-mono font-semibold">{SITE_CONFIG.server.javaVersionRecommended}</span>
              </div>
              <div className="flex justify-between pt-2">
                <span className="text-slate-400">Geração de Mundo:</span>
                <span className="text-white font-semibold">Custom RPG & Cordilheiras</span>
              </div>
              <div className="flex justify-between pt-2">
                <span className="text-slate-400">Proteção de Grief:</span>
                <span className="text-emerald-400 font-semibold">Pá Dourada & CoreProtect</span>
              </div>
              <div className="flex justify-between pt-2">
                <span className="text-slate-400">Chat de Voz:</span>
                <span className="text-blue-400 font-semibold">Simple Voice Chat (Opcional)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RECOMMENDED LAUNCHERS & CLIENT MODS */}
      <section className="space-y-6 pt-6">
        <div>
          <h2 className="text-2xl font-bold text-white font-['Outfit'] flex items-center gap-2">
            <Download className="w-5 h-5 text-emerald-400" />
            <span>Launchers & Mods Recomendados (Opcionais)</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-1">
            Você pode jogar com o inicializador oficial, mas os clientes abaixo garantem um ganho massivo de FPS e recursos extras.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {SITE_CONFIG.server.recommendedLauncher.map((launcher, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/30 transition-all flex flex-col justify-between gap-4"
            >
              <div>
                <h3 className="text-base font-bold text-white">{launcher.name}</h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">{launcher.notes}</p>
              </div>

              <a
                href={launcher.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-emerald-300 text-xs font-semibold transition-colors"
              >
                <span>Baixar Inicializador</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>

        {/* Client Mods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          {SITE_CONFIG.server.recommendedMods.map((mod, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800 flex flex-col justify-between gap-3"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-white">{mod.name}</span>
                  <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400">
                    {mod.type}
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">{mod.description}</p>
              </div>

              <a
                href={mod.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-emerald-400 hover:text-emerald-300 font-medium flex items-center gap-1 mt-2"
              >
                <span>Obter no Modrinth</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* QUICK WIKI DIRECTORY BANNER */}
      <section className="p-8 rounded-3xl bg-gradient-to-r from-emerald-950/40 via-slate-900 to-slate-900 border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center sm:text-left">
          <h3 className="text-xl font-bold text-white font-['Outfit']">
            Quer entender como funcionam as proteções e profissões?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
            Acesse nossa Wiki completa com tutoriais de terrenos, lista de comandos públicos, sistemas de economia e receitas personalizadas.
          </p>
        </div>

        <button
          onClick={() => onNavigate('wiki')}
          className="flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm shadow-md shrink-0 cursor-pointer"
        >
          <BookOpen className="w-4 h-4" />
          <span>Acessar a Wiki Oficial</span>
        </button>
      </section>
    </div>
  );
};

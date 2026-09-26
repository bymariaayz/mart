import React, { useState, useEffect } from 'react';
import { X, Send, Copy, Check, MessageSquare, Sparkles, Clock, AlertCircle } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { useToast } from '../context/ToastContext';
import { motion, AnimatePresence } from 'motion/react';

interface OrderQuoteModalProps {
  isOpen: boolean;
  initialCategory?: string;
  initialServiceTitle?: string;
  onClose: () => void;
}

export const OrderQuoteModal: React.FC<OrderQuoteModalProps> = ({
  isOpen,
  initialCategory = 'design',
  initialServiceTitle = '',
  onClose,
}) => {
  const [category, setCategory] = useState<string>(initialCategory);
  const [serviceTitle, setServiceTitle] = useState<string>(initialServiceTitle);
  const [clientDiscord, setClientDiscord] = useState<string>('');
  const [deadline, setDeadline] = useState<string>('Normal (sem urgência)');
  const [description, setDescription] = useState<string>('');
  const [copiedBrief, setCopiedBrief] = useState<boolean>(false);
  const { copyToClipboard, triggerSparkles } = useToast();

  useEffect(() => {
    if (initialCategory) setCategory(initialCategory);
    if (initialServiceTitle) setServiceTitle(initialServiceTitle);
  }, [initialCategory, initialServiceTitle]);

  if (!isOpen) return null;

  const generatedBrief = `📋 **SOLICITAÇÃO DE ORÇAMENTO - ESTÚDIO AETHERIA**
━━━━━━━━━━━━━━━━━━━━━━━━━━━
• **Categoria:** ${category.toUpperCase()}
• **Serviço/Projeto:** ${serviceTitle || 'Projeto Personalizado'}
• **Cliente Discord:** ${clientDiscord || 'Não informado'}
• **Prazo Desejado:** ${deadline}
• **Detalhes do Pedido:**
${description || 'Gostaria de solicitar um orçamento para um projeto criativo sob medida.'}
━━━━━━━━━━━━━━━━━━━━━━━━━━━
*Enviado via Portal Aetheria*`;

  const handleCopyAndGoDiscord = async () => {
    const success = await copyToClipboard(generatedBrief, 'Briefing do Pedido', true);
    if (success) {
      setCopiedBrief(true);
      triggerSparkles();
      setTimeout(() => {
        window.open(SITE_CONFIG.socials.discord, '_blank', 'noopener,noreferrer');
      }, 700);
    }
  };

  return (
    <AnimatePresence>
      <div 
        id="order-quote-modal"
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative max-w-2xl w-full bg-[#0d1322] border border-emerald-500/30 rounded-2xl shadow-2xl overflow-hidden my-8"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="p-6 bg-gradient-to-r from-[#14213d] to-[#0f1b29] border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Solicitar Orçamento / Encomenda</h3>
                <p className="text-xs text-slate-400">
                  Preencha o resumo e abra um chamado no Discord para atendimento direto com nossos artistas.
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Form */}
          <div className="p-6 space-y-4">
            {/* Category selection */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                Categoria do Serviço
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'design', label: '🎨 Design' },
                  { id: 'arte', label: '🖌️ Arte Digital' },
                  { id: 'pixel-art', label: '🧩 Pixel Art' },
                  { id: 'minecraft', label: '⛏️ Minecraft' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setCategory(item.id)}
                    className={`py-2 px-3 rounded-xl text-xs font-medium border transition-all cursor-pointer text-center ${
                      category === item.id
                        ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300 shadow-sm shadow-emerald-500/20'
                        : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Service title / context */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Nome do Projeto ou Serviço Desejado
              </label>
              <input
                type="text"
                value={serviceTitle}
                onChange={(e) => setServiceTitle(e.target.value)}
                placeholder="Ex: Identidade Visual completa, Mapa de Spawn 200x200, Emotes Pixel Art..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all font-sans"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Discord username */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Seu Usuário do Discord (Opcional)
                </label>
                <input
                  type="text"
                  value={clientDiscord}
                  onChange={(e) => setClientDiscord(e.target.value)}
                  placeholder="Ex: seunick#0000 ou @seunick"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-emerald-500 transition-all font-mono"
                />
              </div>

              {/* Deadline */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Prazo Estimado
                </label>
                <select
                  value={deadline}
                  onChange={(e) => setDeadline(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-emerald-500 transition-all"
                >
                  <option value="Normal (sem urgência)">Normal (sem urgência)</option>
                  <option value="Em até 7 dias">Em até 7 dias</option>
                  <option value="Em até 15 dias">Em até 15 dias</option>
                  <option value="Urgente (avaliar taxa extra)">Urgente (avaliar taxa extra)</option>
                </select>
              </div>
            </div>

            {/* Description / details */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Descrição e Referências do Pedido
              </label>
              <textarea
                rows={4}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Conte-nos sobre sua ideia, paletas de cores preferidas, links de referências visuais ou dimensões necessárias..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-emerald-500 transition-all resize-none"
              />
            </div>

            {/* Informational notice */}
            <div className="p-3.5 rounded-xl bg-emerald-950/30 border border-emerald-500/20 flex items-start gap-2.5 text-xs text-emerald-300">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-emerald-400" />
              <span>
                Não cobramos valores automáticos no site. Seu pedido será analisado individualmente por nossa equipe no Discord, onde apresentaremos o orçamento detalhado e cronograma.
              </span>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="p-6 bg-slate-900/80 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              Cancelar
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleCopyAndGoDiscord}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold text-xs sm:text-sm shadow-lg shadow-emerald-950/40 active:scale-95 transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{copiedBrief ? 'Copiado! Abrindo Discord...' : 'Copiar Briefing & Abrir Discord'}</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

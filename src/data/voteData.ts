import { VoteSite, VoteRewardInfo } from '../types';

export const VOTE_SITES: VoteSite[] = [
  {
    id: 'minecraft-mp',
    name: 'Minecraft-MP',
    url: 'https://minecraft-mp.com/server-s123456',
    icon: 'Flame',
    cooldownHours: 24,
    description: 'A maior lista global de servidores de Minecraft. Ajude o servidor a subir no ranking internacional!',
    bonusText: '+1 Chave Cósmica & +100 Aether Coins'
  },
  {
    id: 'topg',
    name: 'TopG Servers',
    url: 'https://topg.org/minecraft-servers/server-123456',
    icon: 'Trophy',
    cooldownHours: 12,
    description: 'Voto rápido que renova a cada 12 horas. Permite acumular o dobro de recompensas no dia.',
    bonusText: '+1 Chave Cósmica & +75 Aether Coins'
  },
  {
    id: 'minecraft-server-list',
    name: 'Minecraft Server List',
    url: 'https://minecraft-server-list.com/server/123456',
    icon: 'Star',
    cooldownHours: 24,
    description: 'Portal clássico de divulgação com pontuação de relevância para servidores survival.',
    bonusText: '+1 Chave Cósmica & +100 Aether Coins'
  },
  {
    id: 'planet-minecraft',
    name: 'Planet Minecraft',
    url: 'https://www.planetminecraft.com/server/aetheria-network',
    icon: 'Globe',
    cooldownHours: 24,
    description: 'Comunidade criativa de mapas, skins e servidores mundiais.',
    bonusText: '+2 Chaves Cósmicas & +150 Aether Coins'
  }
];

export const VOTE_REWARDS_INFO: VoteRewardInfo[] = [
  {
    tier: 'diario',
    title: 'Recompensa por Voto Individual',
    description: 'Entregue imediatamente dentro do jogo logo após você concluir seu voto em qualquer um dos links acima.',
    rewards: [
      '1x Chave de Baú Cósmico (abre baú com cosméticos, fogos e partículas)',
      '100 a 150 Aether Coins (moeda 100% in-game para comércio)',
      '10 minutos de Efeito de Velocidade I e Brilho Cosmético',
      'XP de personagem para evoluir suas profissões'
    ]
  },
  {
    tier: 'streak',
    title: 'Bônus por Sequência de Votos (Vote Streak)',
    description: 'Mantenha seus votos em dia ao longo dos dias consecutivos para acumular recompensas multiplicadas!',
    rewards: [
      'Sequência de 7 dias: Título cosmético [★ Devoto] + 3 Chaves Lendárias',
      'Sequência de 14 dias: Partícula de Asas Astrais + 1.000 Aether Coins',
      'Sequência de 30 dias: Troféu decorativo de votante do mês + Tag no Discord'
    ]
  },
  {
    tier: 'mensal',
    title: 'Top Votantes do Mês',
    description: 'Os 3 jogadores que mais votarem até o último dia de cada mês recebem homenagens especiais no hall da fama do spawn:',
    rewards: [
      '1º Lugar: Estátua dourada personalizada no Spawn + Título Lendário',
      '2º e 3º Lugar: Estátuas de prata/bronze + Coleção completa de cosméticos de partículas'
    ]
  }
];

export const VOTE_INSTRUCTIONS = [
  {
    step: 1,
    title: 'Certifique-se de estar conectado (opcional)',
    description: 'Você pode votar estando dentro do servidor ou offline. Se estiver online, receberá as partículas de comemoração na hora!'
  },
  {
    step: 2,
    title: 'Clique nos botões de voto',
    description: 'Abra cada um dos links oficiais listados nesta página.'
  },
  {
    step: 3,
    title: 'Digite seu Nick exato do Minecraft',
    description: 'No campo do site de votação, insira o mesmo nome de usuário com que você joga no servidor (cuidado com maiúsculas e minúsculas).'
  },
  {
    step: 4,
    title: 'Conclua o captcha e confirme',
    description: 'Após enviar o voto, o sistema do servidor receberá o sinal automaticamente via NuVotifier em menos de 10 segundos.'
  }
];

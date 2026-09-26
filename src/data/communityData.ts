import { CommunityEvent, StaffMember } from '../types';

export const COMMUNITY_EVENTS: CommunityEvent[] = [
  {
    id: 'ev-1',
    title: 'Torneio de Construção da Maah\'s: Cidades Flutuantes',
    date: '28 de Fevereiro de 2025',
    time: '18:00 BRT',
    description: 'Batalha de arquitetura ao vivo transmitida no canal da Maah\'s. Os participantes terão 3 horas para construir seus santuários temáticos.',
    location: 'Servidor de Eventos /evento',
    rewardsNote: 'Troféus honoríficos no Spawn + Arte digital personalizada feita pela Maah\'s + Destaque em Live',
    bannerUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop&q=80',
    status: 'upcoming'
  },
  {
    id: 'ev-2',
    title: 'Noite de Bate-Papo & Podcast com a Maah\'s no Discord',
    date: '02 de Março de 2025',
    time: '20:00 BRT',
    description: 'Sessão aberta de bate-papo, avaliação de portfólio de inscritos, novidades da próxima temporada do servidor e sorteio de comissão exclusiva.',
    location: 'Canal de Voz #Auditório do Discord',
    rewardsNote: 'Sorteio de 1 emote em Pixel Art gratuito ao vivo',
    bannerUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80',
    status: 'upcoming'
  },
  {
    id: 'ev-3',
    title: 'Invasão Coletiva do Servidor: O Covil do Dragão Ancião',
    date: '10 de Fevereiro de 2025',
    time: '19:00 BRT',
    description: 'A Maah\'s e mais de 60 jogadores uniram forças no The End para derrotar a versão modificada do Dragão.',
    location: 'Dimensão do Fim',
    rewardsNote: 'Concluído com sucesso com gravação de vídeo especial!',
    bannerUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=800&auto=format&fit=crop&q=80',
    status: 'completed'
  }
];

export const STAFF_MEMBERS: StaffMember[] = [
  {
    name: "Maah's",
    role: 'Criadora, Artista & Host do Servidor',
    badgeColor: 'from-fuchsia-500 to-pink-500 text-fuchsia-100',
    avatar: './maah.png',
    social: 'https://twitch.tv/maahs'
  },
  {
    name: 'Kaelen',
    role: 'Líder Técnico & SysAdmin do Servidor',
    badgeColor: 'from-amber-500 to-orange-500 text-amber-100',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&auto=format&fit=crop&q=80',
    social: 'https://github.com'
  },
  {
    name: 'NyxMod',
    role: 'Líder de Moderação do Discord',
    badgeColor: 'from-emerald-500 to-teal-500 text-emerald-100',
    avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=120&auto=format&fit=crop&q=80'
  },
  {
    name: 'Aiko',
    role: 'Suporte à Comunidade & Eventos',
    badgeColor: 'from-cyan-500 to-blue-500 text-cyan-100',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&auto=format&fit=crop&q=80'
  }
];

export const DISCORD_SECTIONS = [
  {
    name: '📢 #avisos-e-lives',
    description: 'Avisos automáticos quando a Maah\'s abrir live na Twitch e novos vídeos no YouTube.'
  },
  {
    name: '🎫 #pedir-comissao',
    description: 'Abra um ticket privado diretamente com a Maah\'s para solicitar orçamentos de artes, overlays ou mapas.'
  },
  {
    name: '💬 #chat-da-galera',
    description: 'O ponto de encontro diário para conversar sobre jogos, animes, artes e trocar ideias.'
  },
  {
    name: '🎮 #minecraft-chat',
    description: 'Canal integrado ao chat in-game do servidor da Maah\'s! Converse com quem está online jogando.'
  },
  {
    name: '🎨 #fanarts-e-projetos',
    description: 'Espaço para os membros compartilharem suas próprias criações e receberem feedback carinhoso.'
  }
];


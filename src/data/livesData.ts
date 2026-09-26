import { StreamerItem } from '../types';

export const COMMUNITY_STREAMERS: StreamerItem[] = [
  {
    id: 'streamer-maahs',
    name: "Maah's (Canal Principal)",
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80',
    platform: 'twitch',
    channelUrl: 'https://twitch.tv/maahs',
    isLive: true,
    streamTitle: '✦ Desenhando Comissões ao Vivo & Jogando no Servidor de Minecraft com o Chat! (/ip: jogar.maahs.net)',
    game: 'Art & Minecraft',
    viewers: 320,
    scheduleDescription: 'Segunda, Quarta, Sexta e Sábado às 19:00 BRT',
    nextStreamDate: 'Hoje às 19:00'
  },
  {
    id: 'streamer-youtube',
    name: "Maah's Lives & Speedpaints",
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80',
    platform: 'youtube',
    channelUrl: 'https://youtube.com/@maahs_oficial',
    isLive: false,
    streamTitle: 'VODs, Speedpaints de Ilustrações e Melhores Momentos do Servidor',
    game: 'Criatividade & Minecraft',
    viewers: 0,
    scheduleDescription: 'Vídeos novos e transmissões especiais aos Domingos',
    nextStreamDate: 'Domingo às 18:00'
  },
  {
    id: 'streamer-kick',
    name: "Maah's no Kick",
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80',
    platform: 'kick',
    channelUrl: 'https://kick.com/maahs',
    isLive: false,
    streamTitle: 'Maratonas Noturnas de Jogos & Bate-Papo Sem Filtro',
    game: 'Just Chatting & Games',
    viewers: 0,
    scheduleDescription: 'Sábados a partir das 22:00',
    nextStreamDate: 'Sábado às 22:00'
  }
];

export const STREAM_SCHEDULE = [
  { day: 'Segunda-feira', time: '19:00', streamer: "Maah's", title: '🎨 Live de Arte & Produção de Comissões de Inscritos', platform: 'twitch' as const },
  { day: 'Terça-feira', time: '19:00', streamer: "Maah's", title: '🛠️ Dia de Criação: Novos Modelos 3D & Spawns do Servidor', platform: 'twitch' as const },
  { day: 'Quarta-feira', time: '19:00', streamer: "Maah's", title: '⛏️ Jogando Survival no Servidor da Maah\'s com Viewers', platform: 'twitch' as const },
  { day: 'Quinta-feira', time: '20:00', streamer: "Maah's & Mods", title: '🎙️ Bate-Papo & Podcast com a Comunidade no Discord', platform: 'twitch' as const },
  { day: 'Sexta-feira', time: '19:30', streamer: "Maah's", title: '⚔️ Noite de Dungeons, Minigames & Eventos no Minecraft', platform: 'twitch' as const },
  { day: 'Sábado', time: '17:00', streamer: "Maah's", title: '🌟 Maratona Especial de Fim de Semana + Sorteios de Artes', platform: 'twitch' as const },
  { day: 'Domingo', time: '18:00', streamer: "Maah's", title: '🎬 Speedpaints, Avaliação de Construções dos Inscritos', platform: 'youtube' as const }
];


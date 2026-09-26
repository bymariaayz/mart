export type PageRoute = 
  | 'home' 
  | 'minecraft' 
  | 'wiki' 
  | 'vote' 
  | 'servicos' 
  | 'portfolio' 
  | 'lives' 
  | 'comunidade' 
  | 'noticias'
  | '404';

export interface ServerConfig {
  name: string;
  tagline: string;
  shortDescription: string;
  ip: string;
  port: number;
  bedrockIp?: string;
  bedrockPort?: number;
  version: string;
  javaVersionRecommended: string;
  discordInviteUrl: string;
  discordMemberCount?: number;
  recommendedLauncher: {
    name: string;
    url: string;
    notes: string;
  }[];
  recommendedMods: {
    name: string;
    type: 'performance' | 'voice' | 'visual';
    description: string;
    url: string;
  }[];
  defaultStatus?: {
    online: boolean;
    playersOnline: number;
    maxPlayers: number;
    motd: string;
    pingMs?: number;
  };
}

export interface SocialLinks {
  discord: string;
  youtube?: string;
  twitch?: string;
  kick?: string;
  twitter?: string;
  instagram?: string;
  tiktok?: string;
  github?: string;
  contactEmail?: string;
  commissionFormUrl?: string;
}

export interface WikiCallout {
  type: 'info' | 'warning' | 'tip' | 'note';
  title?: string;
  content: string;
}

export interface WikiCommand {
  command: string;
  description: string;
  permission?: string;
  example?: string;
}

export interface WikiTable {
  headers: string[];
  rows: string[][];
}

export interface WikiSection {
  id: string;
  title: string;
  content: string[];
  commands?: WikiCommand[];
  callouts?: WikiCallout[];
  table?: WikiTable;
  subsections?: {
    id: string;
    title: string;
    content: string[];
  }[];
}

export interface WikiArticle {
  slug: string;
  title: string;
  category: 'iniciante' | 'regras' | 'mecanicas' | 'conteudo' | 'faq';
  categoryLabel: string;
  summary: string;
  iconName: string;
  readingTimeMinutes: number;
  lastUpdated: string;
  sections: WikiSection[];
  relatedSlugs: string[];
  tags: string[];
}

export interface CreativeService {
  id: string;
  category: 'design' | 'arte' | 'pixel-art' | 'minecraft';
  categoryLabel: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  estimatedTurnaround: string;
  startingPriceNote: string;
  deliverables: string[];
  workflow: string[];
  gallery: {
    imageUrl: string;
    title: string;
    caption: string;
  }[];
  faq: {
    question: string;
    answer: string;
  }[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'design' | 'arte' | 'pixel-art' | 'minecraft';
  categoryLabel: string;
  description: string;
  imageUrl: string;
  aspectRatio?: string;
  author: string;
  date: string;
  toolsUsed: string[];
  tags: string[];
  featured?: boolean;
}

export interface StreamerItem {
  id: string;
  name: string;
  avatar: string;
  platform: 'twitch' | 'youtube' | 'kick';
  channelUrl: string;
  isLive: boolean;
  streamTitle?: string;
  game?: string;
  viewers?: number;
  scheduleDescription?: string;
  nextStreamDate?: string;
}

export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  category: 'atualizacao' | 'evento' | 'manutencao' | 'wiki' | 'geral';
  categoryLabel: string;
  date: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  summary: string;
  content: string[];
  tags: string[];
  imageUrl?: string;
  changelogItems?: {
    type: 'added' | 'changed' | 'fixed' | 'removed';
    text: string;
  }[];
  featured?: boolean;
}

export interface VoteSite {
  id: string;
  name: string;
  url: string;
  icon: string;
  cooldownHours: number;
  description: string;
  bonusText?: string;
}

export interface VoteRewardInfo {
  title: string;
  description: string;
  tier: 'diario' | 'semanal' | 'mensal' | 'streak';
  rewards: string[];
}

export interface CommunityEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  description: string;
  location: string;
  rewardsNote: string;
  bannerUrl?: string;
  status: 'upcoming' | 'ongoing' | 'completed';
}

export interface StaffMember {
  name: string;
  role: string;
  badgeColor: string;
  avatar: string;
  social?: string;
}

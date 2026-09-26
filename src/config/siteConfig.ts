import { ServerConfig, SocialLinks } from '../types';

export const SITE_CONFIG = {
  // Identidade da Criadora
  name: "Maria",
  creatorName: "Maria",
  creatorTitle: "Artista Digital, Designer & Streamer",
  shortName: "Maah's",
  tagline: "Artes Digitais, Comissões, Lives & Servidor de Minecraft",
  description: "Portfólio e loja oficial da Maah's: solicite artes digitais, design para streams, emotes em pixel art, acompanhe lives ao vivo, entre na nossa comunidade do Discord e jogue no meu servidor de Minecraft!",
  avatarUrl: "./maah.png",
  bannerImage: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=1200&auto=format&fit=crop&q=80",
  foundedYear: 2024,
  
  // Status de Comissões
  commissionsOpen: true,
  commissionsQueueStatus: "3 vagas disponíveis este mês",
  
  // Identidade & Metadados
  baseUrl: "https://maahs-art.github.io",
  
  // Configuração do Servidor de Minecraft da Maah's
  server: {
    name: "Maah's World • Survival RPG",
    tagline: "O servidor de Minecraft oficial da Maah's e da nossa comunidade!",
    shortDescription: "Um mundo acolhedor focado em sobrevivência em comunidade, biomas customizados, sistema de proteção de terrenos por pá dourada, economia justa e 100% livre de Pay-To-Win.",
    ip: "jogar.maahs.net", // IP configurável
    port: 25565,
    bedrockIp: "bedrock.maahs.net",
    bedrockPort: 19132,
    version: "1.21.x (Java & Bedrock)",
    javaVersionRecommended: "Java 21 (OpenJDK)",
    
    // Status Padrão para fallback de exibição
    defaultStatus: {
      online: true,
      playersOnline: 38,
      maxPlayers: 120,
      motd: "✦ MAAH'S WORLD ✦ Survival RPG da Comunidade • Java & Bedrock",
      pingMs: 24,
    },
    
    // Launchers Recomendados
    recommendedLauncher: [
      {
        name: "Prism Launcher",
        url: "https://prismlauncher.org/",
        notes: "Meu launcher favorito: leve, rápido e permite instalar mods de FPS com 1 clique."
      },
      {
        name: "Modrinth App",
        url: "https://modrinth.com/app",
        notes: "Excelente interface moderna para gerenciar shaders e pacotes de otimização."
      },
      {
        name: "Minecraft Original (Vanilla)",
        url: "https://www.minecraft.net/",
        notes: "Basta abrir o jogo na 1.21 e adicionar o IP direto na sua lista de servidores."
      }
    ],

    // Mods Recomendados para Clientes (Opcionais)
    recommendedMods: [
      {
        name: "Sodium / Embeddium",
        type: "performance" as const,
        description: "Aumenta absurdamente seu FPS e remove travamentos ao carregar novos chunks.",
        url: "https://modrinth.com/mod/sodium"
      },
      {
        name: "Simple Voice Chat",
        type: "voice" as const,
        description: "Permite conversar por voz com outros jogadores por proximidade dentro do servidor!",
        url: "https://modrinth.com/plugin/simple-voice-chat"
      },
      {
        name: "Iris Shaders",
        type: "visual" as const,
        description: "Para quem quer jogar com iluminação volumétrica e água realista sem perder desempenho.",
        url: "https://modrinth.com/mod/iris"
      }
    ],
    
    discordInviteUrl: "https://discord.gg/placeholder-maahs",
    discordMemberCount: 2850
  } satisfies ServerConfig,

  // Redes Sociais & Contato da Maah's
  socials: {
    discord: "https://discord.gg/placeholder-maahs",
    youtube: "https://youtube.com/@maahs_oficial",
    twitch: "https://twitch.tv/maahs",
    kick: "https://kick.com/maahs",
    twitter: "https://twitter.com/maahs_art",
    instagram: "https://instagram.com/maahs.art",
    tiktok: "https://tiktok.com/@maahs.art",
    github: "https://github.com/maahs-creator",
    contactEmail: "comissoes@maahs.art",
    commissionFormUrl: "https://discord.gg/placeholder-maahs"
  } satisfies SocialLinks,

  // Políticas e Avisos
  disclaimers: {
    mojang: "Este portal e o servidor de Minecraft não são afiliados e nem aprovados pela Mojang AB ou Microsoft Corporation.",
    noPayToWin: "O servidor da Maah's é 100% comunitário. Não vendemos itens que dão vantagem, itens apelões ou vantagens desleais no jogo.",
  }
};


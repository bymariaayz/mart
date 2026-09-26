import { NewsArticle } from '../types';

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: 'news-agenda-comissoes-aberta',
    slug: 'abertura-agenda-comissoes-marco',
    title: 'Agenda de Comissões & Serviços de Março Aberta!',
    category: 'atualizacao',
    categoryLabel: 'Comissões & Artes',
    date: '18 de Fevereiro de 2025',
    author: {
      name: "Maah's",
      role: 'Artista & Criadora',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80'
    },
    summary: 'Estou abrindo novas vagas para artes digitais, kits de stream (overlays/painéis), emotes em pixel art e mapas customizados para Minecraft.',
    content: [
      'Oi gente! Estou muito animada em anunciar a abertura da minha nova agenda de comissões para o próximo mês.',
      'Se você tem um canal na Twitch/Kick e quer renovar sua identidade visual, ou se quer uma pintura personalizada da sua skin do Minecraft, você pode solicitar seu orçamento direto aqui pelo site ou abrindo um ticket no meu Discord.',
      'Lembrando que as vagas são limitadas para garantir a máxima qualidade e atenção em cada projeto entregue.'
    ],
    tags: ['Comissões', 'Artes', 'Overlays', 'Pixel Art'],
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&auto=format&fit=crop&q=80',
    changelogItems: [
      { type: 'added', text: 'Novo pacote modular de Overlays para Twitch/Kick com animação.' },
      { type: 'added', text: 'Calculadora e briefing interativo com estimativa imediata no site.' },
      { type: 'changed', text: 'Redução no prazo médio de entrega de emotes em pixel art para 3 dias.' }
    ],
    featured: true
  },
  {
    id: 'news-v2-lancamento',
    slug: 'atualizacao-era-dos-cristais',
    title: 'Servidor de Minecraft: A Era dos Cristais & Novos Biomas',
    category: 'atualizacao',
    categoryLabel: 'Servidor de Minecraft',
    date: '15 de Fevereiro de 2025',
    author: {
      name: "Maah's",
      role: 'Host do Servidor',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80'
    },
    summary: 'Chegou a maior atualização da temporada do meu servidor! Apresentamos o novo gerador de biomas subterrâneos, 4 novos mini-chefes e melhorias substanciais no desempenho.',
    content: [
      'Construímos um novo Spawn monumental para acolher os novos jogadores com portais rúnicos e ilhas flutuantes mágicas.',
      'O servidor continua 100% livre de vantagens pagas ou pay-to-win, focando na convivência amigável e em eventos ao vivo durante as lives.',
      'O IP para conectar é jogar.maahs.net (Java) e bedrock.maahs.net:19132 (Bedrock).'
    ],
    tags: ['Minecraft', 'Update', 'Survival', 'Biomas'],
    imageUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=1200&auto=format&fit=crop&q=80',
    changelogItems: [
      { type: 'added', text: 'Novo spawn monumental com ilhas celestiais e cristais de ametista.' },
      { type: 'added', text: 'Sistema de Tumbas Espirituais para proteger seus itens ao morrer.' },
      { type: 'changed', text: 'Compatibilidade atualizada para as versões mais recentes do Minecraft 1.21.' },
      { type: 'fixed', text: 'Otimização geral no motor reduzindo latência nas vilas dos jogadores.' }
    ],
    featured: true
  },
  {
    id: 'news-torneio-construcao',
    slug: 'grande-torneio-de-construcao-comunitario',
    title: 'Torneio de Construção ao Vivo na Live da Maah\'s',
    category: 'evento',
    categoryLabel: 'Live & Evento',
    date: '10 de Fevereiro de 2025',
    author: {
      name: "Maah's",
      role: 'Streamer & Host',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80'
    },
    summary: 'Mostre seu talento arquitetônico no evento mais divertido do mês! Terrenos especiais, avaliação ao vivo em live e prêmios cosméticos.',
    content: [
      'O tema deste torneio será "Cidades Flutuantes e Santuários Celestes". Todos os participantes terão acesso a blocos em um mundo isolado.',
      'Estarei transmitindo e avaliando todas as construções ao vivo na Twitch, com votação do chat e da nossa comunidade do Discord!',
      'Para participar, basta confirmar sua presença no canal #eventos do nosso Discord oficial.'
    ],
    tags: ['Evento', 'Live', 'Twitch', 'Minecraft'],
    imageUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&auto=format&fit=crop&q=80',
    featured: true
  }
];


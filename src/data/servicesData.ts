import { CreativeService } from '../types';

export const CREATIVE_SERVICES: CreativeService[] = [
  {
    id: 'design-identidade-visual',
    category: 'design',
    categoryLabel: 'Design Gráfico & Stream UI',
    title: 'Identidade Visual Completa para Streamers & Criadores',
    shortDescription: 'Criação de logotipos exclusivos, pacote de overlays para Twitch/Kick, painéis para Discord e banners de redes sociais.',
    fullDescription: 'Transformo seu canal e sua marca pessoal em algo profissional e inesquecível. Desenvolvo desde a paleta cromática até as telas animadas de início, intervalo e encerramento de live, com tipografia customizada e manual de identidade visual.',
    iconName: 'Palette',
    estimatedTurnaround: '3 a 7 dias úteis',
    startingPriceNote: 'Valores por pacote ou peças avulsas (consulte a calculadora de briefing)',
    deliverables: [
      'Logotipo autoral em alta resolução (PNG transparente, SVG e vetorizado)',
      'Telas de stream (Iniciando, Já Volto, Fim de Live e Offline)',
      'Overlays de webcam, molduras e barras de alertas (Bits, Subs, Doações)',
      'Banners harmonizados para Twitch, Twitter/X, YouTube e Discord',
      'Guia de cores e fontes para manter o padrão visual do seu conteúdo'
    ],
    workflow: [
      'Conversa de alinhamento e briefing no Discord ou formulário',
      'Apresentação de 2 a 3 propostas de cores, layout e rascunhos',
      'Refinamento do estilo escolhido com suas sugestões e ajustes',
      'Renderização final e entrega dos arquivos organizados em pastas'
    ],
    gallery: [
      {
        imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80',
        title: 'Kit de Stream Overlays - Neon Aesthetic',
        caption: 'Overlays modulares para Twitch, alertas e telas de intervalo criados por Maah\'s.'
      },
      {
        imageUrl: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&auto=format&fit=crop&q=80',
        title: 'Identidade Visual & Branding',
        caption: 'Logotipo vetorial e paleta mística para criador de conteúdo.'
      }
    ],
    faq: [
      {
        question: 'Em quais formatos recebo os arquivos?',
        answer: 'Você recebe arquivos em PNG de alta definição com transparência, JPG em 4K, e os arquivos fonte organizados.'
      },
      {
        question: 'Tenho direito a alterações no pedido?',
        answer: 'Sim! Todas as minhas comissões incluem revisões gratuitas durante a fase de esboço e ajustes finos na entrega.'
      }
    ]
  },
  {
    id: 'artes-ilustracoes-digitais',
    category: 'arte',
    categoryLabel: 'Ilustrações & Arte Digital',
    title: 'Ilustrações Digitais, Avatares & Thumbnails Pintadas',
    shortDescription: 'Pinturas digitais estilizadas, ilustrações do seu personagem/skin de Minecraft e capas impactantes para YouTube.',
    fullDescription: 'Pinturas digitais feitas à mão com mesa digitalizadora, trazendo atmosfera mágica, iluminação volumétrica e traços marcantes. Perfeito para transformar sua skin do Minecraft ou seu avatar em uma obra de arte única para perfil ou capas.',
    iconName: 'Brush',
    estimatedTurnaround: '4 a 9 dias úteis',
    startingPriceNote: 'Valores variam conforme o detalhamento do personagem e complexidade do cenário',
    deliverables: [
      'Ilustração final em resolução 4K (3840x2160 ou proporção customizada)',
      'Versão com fundo completo e versão sem fundo (PNG recortado)',
      'Adaptação para foto de perfil redonda/quadrada e banner inclusos'
    ],
    workflow: [
      'Envio da referência (sua skin do Minecraft, foto ou descrição de personagem)',
      'Envio do esboço (sketch) para aprovação de pose e expressão facial',
      'Etapa de lineart limpa e teste de paleta de cores (flat colors)',
      'Renderização de luzes, sombras, efeitos de partículas e acabamento'
    ],
    gallery: [
      {
        imageUrl: 'https://images.unsplash.com/photo-1563089145-599997674d42?w=800&auto=format&fit=crop&q=80',
        title: 'Guardião Celestial - Pintura Digital',
        caption: 'Ilustração digital de personagem com iluminação volumétrica por Maah\'s.'
      },
      {
        imageUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=800&auto=format&fit=crop&q=80',
        title: 'Avatar de Skin de Minecraft Ilustrado',
        caption: 'Transformação de skin em pintura de fantasia épica.'
      }
    ],
    faq: [
      {
        question: 'Você desenha qualquer skin do Minecraft?',
        answer: 'Sim! Basta me enviar o arquivo PNG da sua skin ou seu nick no jogo que eu crio a ilustração baseada no seu visual.'
      }
    ]
  },
  {
    id: 'pixel-art-customizada',
    category: 'pixel-art',
    categoryLabel: 'Pixel Art & Emotes',
    title: 'Emotes para Twitch/Discord, Insígnias de Sub & Sprites',
    shortDescription: 'Criação de emotes expressivos, insígnias de subevolução, ícones de itens e sprites retrô em alta qualidade.',
    fullDescription: 'Adoro trabalhar com a estética pixel art! Desenvolvo pacotes de emotes que destacam sua personalidade no chat da Twitch e no Discord, além de ícones de itens estilizados e insígnias para assinantes do seu canal.',
    iconName: 'Grid',
    estimatedTurnaround: '2 a 5 dias úteis',
    startingPriceNote: 'Disponível em pacotes de 3, 6 ou 12 emotes com desconto progressivo',
    deliverables: [
      'Emotes e insígnias nas resoluções oficiais da Twitch (112x112, 56x56, 28x28)',
      'Tamanho original de alta resolução para uso no Discord e redes sociais',
      'GIFs animados nos emotes que possuem animação em loop'
    ],
    workflow: [
      'Definição dos conceitos e reações desejadas para cada emote',
      'Desenho dos primeiros testes em tamanho real para garantir legibilidade no chat',
      'Ajustes de cores e animação de frames (quando aplicável)',
      'Exportação dos arquivos otimizados prontos para upload direto'
    ],
    gallery: [
      {
        imageUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop&q=80',
        title: 'Pack de Emotes & Badges Cósmicas',
        caption: 'Sprites em 32x32 com acabamento nítido e paleta neon por Maah\'s.'
      }
    ],
    faq: [
      {
        question: 'Os emotes já vêm prontos para enviar na Twitch?',
        answer: 'Sim! Envio tudo nas dimensões exatas e com fundo transparente, sem você precisar redimensionar nada.'
      }
    ]
  },
  {
    id: 'servicos-minecraft-custom',
    category: 'minecraft',
    categoryLabel: 'Minecraft: Builds & 3D',
    title: 'Spawns Customizados, Mapas Temáticos & Modelos 3D Blockbench',
    shortDescription: 'Construção de mapas monumentais para servidores de Minecraft, spawns de eventos e modelagem 3D de itens/armaduras.',
    fullDescription: 'Com anos de experiência construindo mapas épicos e criando para o Minecraft, ofereço serviços de arquitetura in-game (spawns, lobbies, vilas temáticas e arenas PvP) e modelagem 3D no Blockbench pronta para plugins modernos como ItemsAdder e Oraxen.',
    iconName: 'Pickaxe',
    estimatedTurnaround: '5 a 14 dias úteis',
    startingPriceNote: 'Orçamento calculado de acordo com o tamanho do mapa (ex: 100x100, 250x250) ou quantidade de modelos',
    deliverables: [
      'Arquivos de mapa em formato .schem (WorldEdit/Sponge) ou pasta de mundo pronta',
      'Modelos 3D em formato .bbmodel com texturas e animações',
      'Configurações prontas para plugins de servidor (se solicitado)',
      'Suporte para verificação de blocos, iluminação e biome blending'
    ],
    workflow: [
      'Briefing sobre o estilo arquitetônico, dimensões e requisitos do seu servidor',
      'Terraformação do terreno e aprovação do layout em renders 3D',
      'Construção detalhada dos edifícios, caminhos e iluminação ambiente',
      'Revisão final no servidor de testes e entrega do arquivo .schem'
    ],
    gallery: [
      {
        imageUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop&q=80',
        title: 'Santuário de Aetheria - Spawn Monumental',
        caption: 'Construção autoral de spawn com ilhas flutuantes e cristais mágicos por Maah\'s.'
      },
      {
        imageUrl: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&auto=format&fit=crop&q=80',
        title: 'Set de Armas & Modelos 3D Blockbench',
        caption: 'Modelagem 3D low-poly com texturas emissivas.'
      }
    ],
    faq: [
      {
        question: 'Você constrói em qual versão do Minecraft?',
        answer: 'Construo principalmente na versão 1.21 com os blocos mais recentes, mas posso adaptar para versões anteriores caso seu servidor utilize uma versão específica.'
      }
    ]
  }
];


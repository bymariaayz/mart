import { WikiArticle } from '../types';

export const WIKI_CATEGORIES = [
  { id: 'iniciante', label: 'Primeiros Passos', icon: 'Compass', description: 'Tudo o que você precisa saber para se conectar e dar os primeiros passos no servidor.' },
  { id: 'regras', label: 'Diretrizes & Regras', icon: 'ShieldCheck', description: 'Código de conduta para manter um ambiente saudável, respeitoso e justo para todos.' },
  { id: 'mecanicas', label: 'Sistemas & Mecânicas', icon: 'Cpu', description: 'Como funcionam os sistemas customizados, economia cooperativa e progressão de habilidades.' },
  { id: 'conteudo', label: 'Enciclopédia de Mundo', icon: 'BookOpen', description: 'Catálogo de itens exclusivos, mobs especiais, biomas mágicos e dimensões.' },
  { id: 'faq', label: 'Dúvidas & Ajuda', icon: 'HelpCircle', description: 'Respostas para as perguntas mais frequentes da comunidade.' },
] as const;

export const WIKI_ARTICLES: WikiArticle[] = [
  {
    slug: 'comece-a-jogar',
    title: 'Guia de Início Rápido',
    category: 'iniciante',
    categoryLabel: 'Primeiros Passos',
    summary: 'Aprenda a conectar no servidor, escolher sua profissão inicial, proteger seu primeiro terreno e explorar o mapa com segurança.',
    iconName: 'Sparkles',
    readingTimeMinutes: 4,
    lastUpdated: '2025-02-15',
    tags: ['iniciante', 'conexao', 'protecao', 'terreno', 'guia'],
    relatedSlugs: ['comandos', 'regras', 'economia'],
    sections: [
      {
        id: 'conexao',
        title: '1. Como Conectar no Servidor',
        content: [
          'O servidor suporta clientes Java Edition (versão 1.21+) e Bedrock Edition (Windows, Celulares, Consoles).',
          'Para conectar no Java Edition: abra seu inicializador preferido, vá em "Multijogador" > "Adicionar Servidor" e insira o endereço:',
        ],
        commands: [
          {
            command: 'jogar.aetheria.net',
            description: 'Endereço IP oficial para conexão Java Edition (Porta padrão: 25565)',
          },
          {
            command: 'bedrock.aetheria.net:19132',
            description: 'Endereço e Porta padrão para jogadores Bedrock Edition (GeyserMC)',
          }
        ],
        callouts: [
          {
            type: 'tip',
            title: 'Dica de Performance',
            content: 'Recomendamos utilizar o mod Sodium com Iris Shaders para obter taxas de quadros (FPS) estáveis e fluidas durante sua exploração.',
          }
        ]
      },
      {
        id: 'spawn-e-protecao',
        title: '2. Chegando no Spawn & Criando sua Primeira Proteção',
        content: [
          'Ao entrar pela primeira vez, você surgirá no Santuário de Aetheria (Spawn Principal). Aqui você encontrará murais informativos, aldeões mercadores e o portal de teleporte para a região de construção livre.',
          'Utilize o comando /rtp para ser teleportado aleatoriamente para uma área inexplorada na natureza.',
          'Para proteger seu terreno contra modificações indesejadas de outros jogadores, você receberá uma Pá Dourada ao entrar.',
        ],
        commands: [
          {
            command: '/rtp',
            description: 'Teleporte aleatório e seguro para encontrar um local e começar sua base.',
          },
          {
            command: '/kit inicio',
            description: 'Recebe um kit inicial básico com ferramentas de ferro, comida e a pá dourada de proteção.',
          }
        ],
        callouts: [
          {
            type: 'info',
            title: 'Sistema de Proteção por Pá Dourada',
            content: 'Clique com o botão direito em um vértice do seu terreno e depois com o botão direito no vértice oposto. Uma área cúbica do chão ao céu será demarcada como sua propriedade!',
          }
        ]
      },
      {
        id: 'pontos-de-retorno',
        title: '3. Salvando seu Ponto de Retorno (Homes)',
        content: [
          'Você pode salvar locais favoritos para retornar a qualquer momento.',
          'Todos os jogadores possuem 3 slots de home gratuitos para gerenciar suas bases e construções.',
        ],
        commands: [
          {
            command: '/sethome [nome]',
            description: 'Define um ponto de teleporte no local atual (Exemplo: /sethome base)',
          },
          {
            command: '/home [nome]',
            description: 'Teleporta você instantaneamente para o ponto salvo.',
          },
          {
            command: '/delhome [nome]',
            description: 'Remove um ponto salvo anteriormente.',
          }
        ]
      }
    ]
  },
  {
    slug: 'comandos',
    title: 'Lista Completa de Comandos',
    category: 'iniciante',
    categoryLabel: 'Primeiros Passos',
    summary: 'Catálogo de todos os comandos públicos disponíveis para jogadores, separados por categoria com exemplos práticos.',
    iconName: 'Terminal',
    readingTimeMinutes: 5,
    lastUpdated: '2025-02-18',
    tags: ['comandos', 'teleporte', 'chat', 'utilitarios', 'atalhos'],
    relatedSlugs: ['comece-a-jogar', 'economia', 'sistemas'],
    sections: [
      {
        id: 'comandos-navegacao',
        title: 'Comandos de Navegação e Teleporte',
        content: [
          'Esses comandos auxiliam na movimentação pelo mapa e na localização de amigos.',
        ],
        commands: [
          {
            command: '/spawn',
            description: 'Retorna imediatamente para o ponto central do servidor.',
          },
          {
            command: '/rtp',
            description: 'Teleporta você para um ponto aleatório seguro na natureza (cooldown: 2 minutos).',
          },
          {
            command: '/tpa [jogador]',
            description: 'Envia um pedido de teleporte até a posição de outro jogador.',
            example: '/tpa Steve'
          },
          {
            command: '/tpaccept',
            description: 'Aceita um pedido de teleporte recebido.',
          },
          {
            command: '/tpdeny',
            description: 'Recusa um pedido de teleporte recebido.',
          },
          {
            command: '/back',
            description: 'Retorna ao local anterior ao último teleporte ou morte.',
          }
        ]
      },
      {
        id: 'comandos-terreno',
        title: 'Comandos de Proteção de Terreno (Claims)',
        content: [
          'Gerencie as permissões de quem pode construir, abrir baús ou interagir na sua base.',
        ],
        commands: [
          {
            command: '/trust [jogador]',
            description: 'Concede permissão total de construção e abertura de recipientes no terreno onde você está.',
          },
          {
            command: '/containertrust [jogador]',
            description: 'Permite apenas abrir baús, fornalhas e barris, sem alterar blocos.',
          },
          {
            command: '/accesstrust [jogador]',
            description: 'Permite interagir com portas, botões e alavancas.',
          },
          {
            command: '/untrust [jogador]',
            description: 'Remove todas as permissões de um jogador no seu terreno.',
          },
          {
            command: '/claimlist',
            description: 'Lista todas as suas áreas protegidas e a quantidade de blocos de proteção disponíveis.',
          }
        ]
      },
      {
        id: 'comandos-comunicacao',
        title: 'Comandos de Comunicação & Chat',
        content: [
          'Comandos para conversar com amigos e gerenciar mensagens privadas.',
        ],
        commands: [
          {
            command: '/msg [jogador] [mensagem]',
            description: 'Envia uma mensagem privada para outro jogador.',
          },
          {
            command: '/r [mensagem]',
            description: 'Responde rapidamente à última mensagem privada recebida.',
          },
          {
            command: '/ignore [jogador]',
            description: 'Ignora mensagens públicas e privadas de um jogador específico.',
          },
          {
            command: '/discord',
            description: 'Exibe o link de convite oficial para nossa comunidade no Discord.',
          },
          {
            command: '/vote',
            description: 'Exibe os links para votar no servidor e resgatar recompensas diárias.',
          }
        ]
      }
    ]
  },
  {
    slug: 'regras',
    title: 'Regras da Comunidade & Servidor',
    category: 'regras',
    categoryLabel: 'Diretrizes & Regras',
    summary: 'Diretrizes essenciais sobre comportamento no chat, conduta em jogo, griefing, uso de modificações permitidas e penalidades.',
    iconName: 'ShieldAlert',
    readingTimeMinutes: 3,
    lastUpdated: '2025-01-10',
    tags: ['regras', 'conduta', 'banimentos', 'mods-permitidos', 'fair-play'],
    relatedSlugs: ['comece-a-jogar', 'perguntas-frequentes'],
    sections: [
      {
        id: 'respeito-e-convivencia',
        title: '1. Respeito Mútuo & Convivência Saudável',
        content: [
          'Nossa comunidade prioriza um espaço acolhedor, inclusivo e seguro para todas as idades.',
          'É estritamente proibido:',
          '• Discurso de ódio, racismo, homofobia, xenofobia, assédio ou qualquer forma de discriminação.',
          '• Spam, flood excessivo no chat ou divulgação de outros servidores/produtos não autorizados.',
          '• Compartilhamento de dados pessoais (doxxing) de qualquer membro.',
        ],
        callouts: [
          {
            type: 'warning',
            title: 'Tolerância Zero',
            content: 'Casos comprovados de discriminação ou assédio resultarão em banimento permanente imediato de todas as plataformas do projeto.',
          }
        ]
      },
      {
        id: 'jogabilidade-justa',
        title: '2. Jogabilidade Justa & Regras do Minecraft',
        content: [
          '• Griefing e Roubo: É proibido destruir construções, roubar itens ou matar animais mesmo que o terreno não esteja protegido. A Staff possui ferramentas para restaurar ações (CoreProtect).',
          '• Trapaças e Clientes Hackeados: Proibido o uso de X-Ray, Fly, KillAura, Baritone, autoclickers abusivos ou qualquer modificação que conceda vantagem indevida.',
          '• Máquinas e Lags: Máquinas de redstone com loops infinitos desnecessários ou que gerem sobrecarga de ticks (lag) serão removidas após notificação.',
        ]
      },
      {
        id: 'mods-permitidos-e-proibidos',
        title: '3. Tabela de Modificações Permitidas',
        content: [
          'Abaixo está uma referência clara sobre o que é permitido no cliente dos jogadores:',
        ],
        table: {
          headers: ['Tipo de Mod', 'Exemplos', 'Status'],
          rows: [
            ['Otimização / Performance', 'Sodium, Lithium, Iris, FerriteCore, Entity Culling', '✓ Permitido'],
            ['Comunicação / Interface', 'Simple Voice Chat, AppleSkin, ModMenu, ShulkerBoxTooltip', '✓ Permitido'],
            ['Minimapas sem Radar', 'JourneyMap, Xaero Minimap (sem radar de entidades/cavernas)', '✓ Permitido com restrições'],
            ['Visuais / Estéticos', 'Shaders, Capes Mods, Custom Armor Visuals', '✓ Permitido'],
            ['Vantagens Indevidas', 'X-Ray, FreeCam, Auto-Totem, ChestESP, Baritone, Flight', '✕ ESTRITAMENTE PROIBIDO']
          ]
        }
      }
    ]
  },
  {
    slug: 'sistemas',
    title: 'Sistemas & Mecânicas Exclusivas',
    category: 'mecanicas',
    categoryLabel: 'Sistemas & Mecânicas',
    summary: 'Conheça o sistema de Habilidades (Skills), Proteção Dinâmica, Correio entre Jogadores, Tumbas de Morte e Eventos Semanais.',
    iconName: 'Wrench',
    readingTimeMinutes: 6,
    lastUpdated: '2025-02-12',
    tags: ['sistemas', 'skills', 'tumbas', 'habilidades', 'eventos'],
    relatedSlugs: ['progressao', 'economia', 'mobs'],
    sections: [
      {
        id: 'sistema-tumbas',
        title: '1. Sistema de Tumbas (Death Chests)',
        content: [
          'Ao morrer no servidor, seus itens e experiência não são espalhados no chão para desaparecer com o tempo (despawn).',
          'Uma tumba mágica é criada no local exato da morte e fica trancada exclusivamente para você por 3 horas.',
          'Você receberá no chat as coordenadas exatas e poderá usar a bússola espiritual para encontrar seu local de descanso.',
        ],
        callouts: [
          {
            type: 'tip',
            title: 'Recuperação com Segurança',
            content: 'Ao alcançar sua tumba, basta agachar (Shift) sobre ela ou clicar com o botão direito para reequipar instantaneamente todo o seu inventário e armadura.',
          }
        ]
      },
      {
        id: 'sistema-correio',
        title: '2. Correio entre Jogadores (/mail)',
        content: [
          'Precisa enviar uma mensagem ou item para um amigo que está offline? Utilize o sistema de caixas de correio do servidor.',
          'Você pode depositar cartas e pacotes que serão notificados quando o destinatário logar no jogo.',
        ],
        commands: [
          {
            command: '/mail send [jogador] [mensagem]',
            description: 'Envia uma mensagem direta que ficará salva na caixa postal do amigo.',
          },
          {
            command: '/mail read',
            description: 'Lê todas as cartas recebidas na sua caixa postal.',
          }
        ]
      },
      {
        id: 'sistema-chat-voz',
        title: '3. Chat de Voz por Proximidade',
        content: [
          'O servidor possui suporte nativo ao mod Simple Voice Chat!',
          'Com ele instalado no seu cliente, você pode conversar com outros jogadores que estiverem por perto no jogo, com atenuação de distância e acústica de cavernas.',
        ]
      }
    ]
  },
  {
    slug: 'economia',
    title: 'Economia Justa & Lojas Comunitárias',
    category: 'mecanicas',
    categoryLabel: 'Sistemas & Mecânicas',
    summary: 'Entenda a moeda do servidor (Aether Coins), como conseguir moedas através de trabalhos (Jobs), comércio livre entre jogadores e mercado comunitário.',
    iconName: 'Coins',
    readingTimeMinutes: 5,
    lastUpdated: '2025-02-10',
    tags: ['economia', 'moedas', 'jobs', 'lojas', 'mercado', 'chestshop'],
    relatedSlugs: ['sistemas', 'progressao', 'itens'],
    sections: [
      {
        id: 'moeda-e-fontes',
        title: '1. Aether Coins & Filosofia Econômica',
        content: [
          'A economia do Aetheria é 100% conduzida pelos jogadores. Não existem vendas de moedas com dinheiro real.',
          'A moeda oficial é o Aether Coin (⛃). Você pode conquistar moedas realizando trabalhos in-game, completando missões semanais e comercializando recursos com outros jogadores.',
        ],
        callouts: [
          {
            type: 'info',
            title: 'Sem Pay-To-Win',
            content: 'Todos os itens e recursos da economia são obtidos puramente através do esforço e cooperação dentro do jogo.',
          }
        ]
      },
      {
        id: 'sistema-de-jobs',
        title: '2. Profissões In-Game (/jobs)',
        content: [
          'Você pode ingressar em até 2 profissões simultâneas para ganhar dinheiro e experiência enquanto joga:',
        ],
        table: {
          headers: ['Profissão', 'Como Ganha Dinheiro', 'Habilidade Especial'],
          rows: [
            ['Minerador', 'Minerar carvão, ferro, redstone, diamante, netherite', 'Chance de dropar minérios dobrados'],
            ['Lenhador', 'Cortar árvores de qualquer espécie', 'Chance de derrubar a árvore inteira de uma vez'],
            ['Agricultor', 'Plantar e colher trigo, cenouras, batatas, cacau', 'Chance de colheita instantânea auto-replantada'],
            ['Caçador', 'Derrotar monstros hostis à noite ou em cavernas', 'Bônus de XP ao derrotar mobs especiais'],
            ['Construtor', 'Posicionar blocos variados em áreas protegidas', 'Desconto ao comprar blocos decorativos'],
            ['Pescador', 'Pescar peixes e tesouros nas águas do mundo', 'Chance de pescar itens místicos e relíquias']
          ]
        },
        commands: [
          {
            command: '/jobs join [profissao]',
            description: 'Ingressa em uma profissão (Exemplo: /jobs join minerador)',
          },
          {
            command: '/jobs stats',
            description: 'Exibe seu nível, bônus ativos e ganhos de hoje em cada trabalho.',
          },
          {
            command: '/jobs leave [profissao]',
            description: 'Abandona uma profissão para escolher outra.',
          }
        ]
      },
      {
        id: 'lojas-de-jogadores',
        title: '3. Criando sua Própria Loja de Baú (ChestShop)',
        content: [
          'Qualquer jogador pode abrir sua loja no Distrito Comercial ou na sua própria vila!',
          'Para criar uma loja: coloque um baú, segure o item que deseja vender e clique no baú com uma placa enquanto digita o preço de compra e venda.',
        ],
        commands: [
          {
            command: '/balance ou /money',
            description: 'Verifica seu saldo atual de Aether Coins.',
          },
          {
            command: '/pay [jogador] [quantia]',
            description: 'Transfere moedas com segurança para outro jogador.',
          },
          {
            command: '/ah',
            description: 'Abre o catálogo do Mercado Global de Leilões entre jogadores.',
          }
        ]
      }
    ]
  },
  {
    slug: 'progressao',
    title: 'Progressão, Títulos & Conquistas',
    category: 'mecanicas',
    categoryLabel: 'Sistemas & Mecânicas',
    summary: 'Descubra como evoluir seus atributos, desbloquear títulos honoríficos de sobrevivência e completar as jornadas de conquistas personalizadas.',
    iconName: 'TrendingUp',
    readingTimeMinutes: 4,
    lastUpdated: '2025-01-25',
    tags: ['progressao', 'niveis', 'titulos', 'conquistas', 'rpg'],
    relatedSlugs: ['sistemas', 'economia', 'itens'],
    sections: [
      {
        id: 'arvore-habilidades',
        title: '1. Sistema de Habilidades (AuraSkills)',
        content: [
          'Cada ação no mundo evolui uma habilidade específica: Força, Mineração, Agilidade, Alquimia, Arquearia e Defesa.',
          'Conforme você sobe de nível nessas habilidades, ganha bônus passivos permanentes, como maior velocidade de corrida, resistência a dano e chances de acerto crítico.',
        ],
        commands: [
          {
            command: '/skills',
            description: 'Abre o menu interativo com o nível de todas as suas habilidades e talentos desbloqueados.',
          },
          {
            command: '/skills top',
            description: 'Exibe o ranking dos maiores exploradores e mestres do servidor.',
          }
        ]
      },
      {
        id: 'titulos-honorificos',
        title: '2. Títulos e Distintivos Cosméticos',
        content: [
          'Ao atingir marcos épicos — como derrotar o Dragão do Fim, explorar 10.000 blocos em alto mar ou pescar 500 tesouros — você desbloqueia títulos cosméticos para exibir ao lado do seu nome no chat.',
        ],
        commands: [
          {
            command: '/tags',
            description: 'Abre a galeria de títulos cosméticos que você já conquistou.',
          }
        ]
      }
    ]
  },
  {
    slug: 'mobs',
    title: 'Mobs Especiais & Mini-Chefes',
    category: 'conteudo',
    categoryLabel: 'Enciclopédia de Mundo',
    summary: 'Manual sobre as criaturas raras que habitam as profundezas e noites de tempestade em Aetheria, suas mecânicas de ataque e recompensas.',
    iconName: 'Skull',
    readingTimeMinutes: 5,
    lastUpdated: '2025-02-05',
    tags: ['mobs', 'chefes', 'monstros', 'desafios', 'loot'],
    relatedSlugs: ['itens', 'biomas', 'progressao'],
    sections: [
      {
        id: 'mobs-raros',
        title: '1. Criaturas de Elite',
        content: [
          'Durante a noite ou em cavernas profundas (abaixo da camada Y=0), você poderá encontrar variantes de elite de monstros comuns.',
          'Esses monstros possuem um indicador de vida visível acima da cabeça, aura colorida e habilidades especiais (como ataques elétricos ou teletransporte rápido).',
        ],
        table: {
          headers: ['Monstro de Elite', 'Habitat', 'Habilidade Especial', 'Loot Raro'],
          rows: [
            ['Esqueleto Arcânico', 'Cavernas de Ametista', 'Dispara flechas perseguidoras com lentidão', 'Pó Astral, Fragmentos de Ametista Pura'],
            ['Zumbi Titânico', 'Pântanos em Noite de Lua Cheia', 'Armadura pesada com repulsão dobrada', 'Essência da Terra, Lingotes Raros'],
            ['Creeper de Plasma', 'Camadas Y < -30', 'Explosão azul com raio expansivo de eletricidade', 'Pólvora Cristalizada'],
            ['Aranha das Sombras', 'Florestas Escuras', 'Fica invisível temporariamente ao sofrer dano', 'Seda Reforçada']
          ]
        }
      },
      {
        id: 'mini-chefes',
        title: '2. Eventos de Mini-Chefes Mundiais',
        content: [
          'Periodicamente, tempestades mágicas despertam mini-chefes em ruínas antigas espalhadas pelo mundo de exploração.',
          'Um aviso sonoro e mensagem no chat anunciará a região aproximada onde a entidade surgiu.',
          'Reúna seus companheiros de guilda para derrotar o chefe e repartir as recompensas cosméticas e materiais de criação.',
        ],
        callouts: [
          {
            type: 'warning',
            title: 'Zona de Perigo Cooperativo',
            content: 'Mini-chefes possuem ataques em área devastadores. Traga poções de cura coletiva e escudos reforçados!',
          }
        ]
      }
    ]
  },
  {
    slug: 'itens',
    title: 'Itens Customizados & Encantamentos',
    category: 'conteudo',
    categoryLabel: 'Enciclopédia de Mundo',
    summary: 'Guia de receitas especiais, mochilas de viagem, ferramentas de precisão e encantamentos únicos do servidor.',
    iconName: 'Shield',
    readingTimeMinutes: 5,
    lastUpdated: '2025-02-08',
    tags: ['itens', 'crafting', 'mochilas', 'encantamentos', 'receitas'],
    relatedSlugs: ['mobs', 'biomas', 'sistemas'],
    sections: [
      {
        id: 'mochilas-viagem',
        title: '1. Mochilas de Aventureiro (Backpacks)',
        content: [
          'Para auxiliar longas jornadas pelas dimensões sem precisar retornar toda hora ao spawn, você pode criar Mochilas com couro e tecidos especiais.',
          'As mochilas podem ser melhoradas em bancadas de trabalho para aumentar seus slots de armazenamento (Pequena, Média e Lendária).',
        ]
      },
      {
        id: 'encantamentos-unicos',
        title: '2. Encantamentos Especiais',
        content: [
          'Além de todos os encantamentos clássicos do Minecraft, mesas de encantamento com estantes mágicas podem conceder encantamentos únicos:',
        ],
        table: {
          headers: ['Encantamento', 'Equipamento Aplicável', 'Efeito'],
          rows: [
            ['Passo Leve (Lightstep)', 'Botas', 'Anula dano de queda até 8 blocos e não aciona placas de pressão'],
            ['Ceifador (Reaper)', 'Foices / Espadas', 'Aumenta colheita de plantas e drop de carne animal'],
            ['Imã Espiritual (Magnetism)', 'Peitorais', 'Atrai itens soltos a até 5 blocos de distância diretamente para o inventário'],
            ['Toque Suave II (Deep Touch)', 'Picaretas', 'Permite coletar spawners de monstros inativos com segurança']
          ]
        }
      }
    ]
  },
  {
    slug: 'biomas',
    title: 'Biomas & Exploração do Mapa',
    category: 'conteudo',
    categoryLabel: 'Enciclopédia de Mundo',
    summary: 'Descubra a geração de terreno especial com montanhas dramáticas, florestas ancestrais, ruínas subaquáticas e cavernas colossais.',
    iconName: 'Trees',
    readingTimeMinutes: 3,
    lastUpdated: '2025-01-20',
    tags: ['biomas', 'mundo', 'terreno', 'exploracao', 'estruturas'],
    relatedSlugs: ['mundos', 'comece-a-jogar'],
    sections: [
      {
        id: 'geracao-customizada',
        title: '1. Geração de Terreno Enriquecida',
        content: [
          'O mundo de Aetheria utiliza um gerador de relevo realista que mantém a essência pura dos blocos originais do Minecraft, mas com cordilheiras de até Y=310, rios navegáveis mais largos e florestas densas com árvores monumentais.',
          'Novas estruturas pacíficas e ruínas de antigas civilizações podem ser encontradas enquanto você viaja pela natureza.',
        ]
      },
      {
        id: 'protecao-ambiental',
        title: '2. Zonas Preservadas vs. Zonas de Recursos',
        content: [
          'Para garantir que o mundo principal permaneça belo e sem crateras feias ao longo dos meses, criamos dois mundos interligados:',
          '• Mundo Principal (Construção & Vilas): Onde você constrói sua casa definitiva e faz amizades.',
          '• Mundo de Mineração (Recursos): Um mundo que é resetado a cada 3 meses para que sempre haja novos minérios, templos e árvores frescas para coletar.',
        ]
      }
    ]
  },
  {
    slug: 'mundos',
    title: 'Mundos & Dimensões Interligadas',
    category: 'conteudo',
    categoryLabel: 'Enciclopédia de Mundo',
    summary: 'Informações sobre o Mundo Principal, Mundo de Recursos, Nether Renovado, Dimensão do Fim e regras de reset.',
    iconName: 'Globe',
    readingTimeMinutes: 4,
    lastUpdated: '2025-01-18',
    tags: ['mundos', 'dimensoes', 'nether', 'the-end', 'reset'],
    relatedSlugs: ['biomas', 'regras'],
    sections: [
      {
        id: 'dimensoes-ativas',
        title: '1. Visão Geral dos Mundos',
        content: [
          'Todos os mundos são conectados através dos portais clássicos ou pelos teletransportes no Spawn.',
        ],
        table: {
          headers: ['Mundo', 'Finalidade', 'Política de Reset'],
          rows: [
            ['Aetheria (Overworld Principal)', 'Construções permanentes, vilas de jogadores, comércio', 'NUNCA é resetado'],
            ['Mundo de Mineração (Mining World)', 'Extração massiva de madeira, pedra e minérios', 'Reset a cada 90 dias'],
            ['Nether das Chamas', 'Fortalezas, bastiões, coleta de quartzo e netherite', 'Reset parcial das áreas externas'],
            ['O Vazio (The End)', 'Exploração de cidades do Fim e asas de Elytra', 'Reset periódico das ilhas externas']
          ]
        }
      }
    ]
  },
  {
    slug: 'perguntas-frequentes',
    title: 'Perguntas Frequentes (FAQ)',
    category: 'faq',
    categoryLabel: 'Dúvidas & Ajuda',
    summary: 'Respostas rápidas para as principais dúvidas sobre conexão, compatibilidade, terrenos, Discord e suporte da Staff.',
    iconName: 'HelpCircle',
    readingTimeMinutes: 4,
    lastUpdated: '2025-02-14',
    tags: ['faq', 'duvidas', 'ajuda', 'suporte', 'perguntas'],
    relatedSlugs: ['comece-a-jogar', 'comandos', 'regras'],
    sections: [
      {
        id: 'faq-geral',
        title: 'Dúvidas Frequentes',
        content: [
          'Aqui compilamos as respostas para as perguntas mais comuns enviadas em nosso canal de ajuda no Discord:',
        ],
        subsections: [
          {
            id: 'faq-1',
            title: 'O servidor aceita contas originais e não-originais?',
            content: [
              'Sim! O servidor possui autenticação híbrida inteligente. Contas originais entram automaticamente pelo login seguro da Mojang/Microsoft (sem precisar digitar senha). Contas não-originais possuem comando de registro com /register e /login para garantir total segurança da sua conta.'
            ]
          },
          {
            id: 'faq-2',
            title: 'Posso jogar no celular (Android/iOS) ou console?',
            content: [
              'Sim! Graças à tecnologia GeyserMC, você pode conectar usando a edição Bedrock. O IP é bedrock.aetheria.net e a porta é 19132.'
            ]
          },
          {
            id: 'faq-3',
            title: 'Existe venda de itens ou vantagens com dinheiro real?',
            content: [
              'NÃO! O Aetheria é um projeto com foco em jogabilidade justa e comunitária. Não vendemos moedas, ranks com vantagens ou itens que afetem a jogabilidade.'
            ]
          },
          {
            id: 'faq-4',
            title: 'Como reportar um jogador que quebrou as regras?',
            content: [
              'Abra um chamado (ticket) em nosso Discord oficial na aba #suporte com prints ou vídeos comprovando o ocorrido. Nossa equipe de moderação responde rapidamente.'
            ]
          }
        ]
      }
    ]
  }
];

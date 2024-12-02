 const secoes = [
    {
      id: 1,
      titulo: "Insira alguns dados básicos",
      entradaTexto: [
        {
          id: 1,
          label: "Nome",
          placeholder: "Digite seu nome completo",
        },
        {
          id: 2,
          label: "Email",
          placeholder: "Digite seu email",
        },
         {
          id: 3,
          label: "Crie uma senha",
          placeholder: "Insira sua senha",
        },
        {
          id: 4,
          label: "Confirme sua senha",
          placeholder: "insira sua senha",
        },
      ],
    },
    {
      id: 2,
      titulo: "Agora, mais alguns dados sobre você:",
      entradaTexto: [
        {
          id: 1,
          label: "CEP",
          placeholder: "Insira seu CEP",
        },
        {
          id: 2,
          label: "Endereço",
          placeholder: "Insira seu endereço",
        },
         {
          id: 3,
          label: "Número",
          placeholder: "Insira seu número",
        },
         {
          id: 4,
          label: "Complemento",
          placeholder: "Insira seu complemento",
        },
         {
          id: 5,
          label: "Telefone",
          placeholder: "(00) 00000-0000",
        },
      ],
    },
    {
      id: 3,
      titulo: "Para finalizar, Escolha seu \nplano!",
      checkbox: [
        {
          id: 1,
          value: "Essencial:",
          description: "Ideal para microempreendedores que estão começando e precisam de suporte inicial em marketing.",
          custo: "Custo: R$ 49,90/mês",
          title: "Funcionalidades:",
          funcionalidades: "-Consultoria de Marketing Automatizada: Sugestões de posts e campanhas baseadas em tendências de mercado e insights básicos. \n -Acesso à Biblioteca de Conteúdo: Modelos prontos de posts e dicas de marketing para redes sociais. \n-Ferramentas de Agendamento de Postagens: Agendamento automático de posts para redes sociais (Facebook, Instagram e WhatsApp). \n-Análise Simples de Engajamento: Relatórios básicos de desempenho de posts (número de curtidas, comentários e compartilhamentos). \n-Suporte via E-mail: Suporte ao cliente disponível por e-mail, com respostas em até 48 horas."
        },
        {
          id: 2,
          value: "Profissional:",
          description: "Perfeito para microempreendedores que desejam melhorar o atendimento ao cliente e otimizar seu marketing.",
          custo: "Custo: R$ 99,90/mês",
          title: "Funcionalidades:",
          funcionalidades:"-Tudo do Plano Básico \n-Acesso ao Chatbot para WhatsApp\n-Chatbot automatizado para responder clientes, fazer anotações de pedidos e oferecer informações sobre produtos/serviços.\n-Respostas Personalizadas: O chatbot se adapta às informações da empresa, criando respostas personalizadas.\n-Relatórios Detalhados de Engajamento: Relatórios avançados com métricas detalhadas de campanhas e interações com o chatbot.\n-Suporte Prioritário: Suporte por e-mail e chat com prioridade, respostas em até 24 horas."
        },
        {
          id: 3,
          value: "Premium:",
          description: "Solução completa para quem deseja expandir o alcance digital e otimizar o atendimento em múltiplas plataformas.",
          custo: "Custo: R$ 199,90/mês",
          title: "Funcionalidades:",
          funcionalidades:"-Tudo do Plano Intermediário\n-Acesso ao Chatbot para Instagram: Chatbot para Instagram que responde automaticamente DMs, gerencia interações e coleta pedidos.\n-Análise de Sentimentos: Relatórios que analisam o sentimento dos clientes em comentários e interações (positivo, negativo, neutro), ajudando a ajustar campanhas.\n-Ferramenta de Automação de Campanhas Multi-Canal: Criação e automação de campanhas que são publicadas em múltiplas redes sociais (Facebook, Instagram e WhatsApp) simultaneamente.\n-Consultoria Personalizada por Chatbot: Chatbot de IA que sugere melhorias nas campanhas de marketing com base nas interações com os clientes.\n-Suporte VIP: Suporte 24/7 por e-mail, chat e WhatsApp, com atendimento em até 2 horas.\n-Integração com Ferramentas de E-commerce: Integração com plataformas de e-commerce para automatizar o atendimento e vendas via chatbot.\n-Funcionalidade Principal: Chatbot para Instagram: Automatiza interações e vendas no Instagram, maximizando o alcance e a eficiência do atendimento.",
        },
        {
          id: 4,
          value: "Não tenho plano",
          
        }
      ],
    },
  ];

  export { secoes }
(function() {
  const chatWindow = document.getElementById('chat-window')
  const userInput = document.getElementById('user-input')
  const sendBtn = document.getElementById('send-btn')

  const botAnswers = [
    {
      keywords: ['orçamento', 'planejamento', 'gastar', 'economizar', 'finanças pessoais', 'controle financeiro'],
      response: 'Manter um orçamento mensal ajuda a controlar despesas e identificar economias possíveis. Anote tudo, receitas e gastos, para ter clareza.'
    },
    {
      keywords: ['investimento', 'investir', 'rendimentos', 'ações', 'renda fixa', 'renda variável', 'diversificação'],
      response: 'Investir diversificando entre renda fixa e variável aumenta potencial de ganhos com segurança, equilibrando riscos e oportunidades.'
    },
    {
      keywords: ['dívida', 'endividado', 'empréstimo', 'juros', 'cartão de crédito atrasado', 'calote', 'inadimplência'],
      response: 'Evite atrasar pagamentos e controlar o uso do cartão de crédito para não cair em juros altos e inadimplência que comprometem seu crédito.'
    },
    {
      keywords: ['poupança', 'reserva de emergência', 'dinheiro parado', 'fundo de emergência'],
      response: 'Poupança é boa para reserva de emergência, um dinheiro guardado para imprevistos que precisa ser acessível e seguro.'
    },
    {
      keywords: ['educação financeira', 'financeira', 'dinheiro', 'controle', 'conhecimento'],
      response: 'Ganhar conhecimento financeiro ajuda a pagar menos juros, investir melhor e alcançar seus sonhos com mais facilidade.'
    },
    {
      keywords: ['cartão de crédito', 'cartão', 'fatura', 'parcelamento', 'limite', 'juros do cartão'],
      response: 'Pague sempre a fatura do cartão em dia e evite parcelar sem planejamento para não se endividar com juros altos.'
    },
    {
      keywords: ['aposentadoria', 'futuro', 'longo prazo', 'previdência', 'investimento futuro', 'aposentadoria privada'],
      response: 'Investir para aposentadoria deve começar cedo, assim você aproveita os juros compostos e garante segurança no futuro.'
    },
    {
      keywords: ['impostos', 'declaração de imposto de renda', 'IR', 'tributos'],
      response: 'Organize documentos e faça sua declaração de imposto de renda para evitar problemas com a Receita Federal.'
    },
    {
      keywords: ['inflação', 'preços', 'custo de vida', 'aumento dos preços', 'poder de compra'],
      response: 'A inflação corrói o poder de compra, por isso, é importante investir em opções que protejam seu dinheiro dessa alta.'
    },
    {
      keywords: ['fintech', 'banco digital', 'app financeiro', 'conta digital'],
      response: 'Bancos digitais e fintechs facilitam gerenciar seu dinheiro sem taxas, com aplicativos modernos que tornam tudo simples.'
    },
    {
      keywords: ['financiamento', 'carro', 'casa', 'juros', 'parcelas', 'financiamento imobiliário'],
      response: 'Financiamentos são úteis, mas cuidado para juros e parcelas não comprometerem mais do que 30% da sua renda.'
    },
    {
      keywords: ['bolsa de valores', 'ações', 'mercado de capitais', 'stock market', 'investir em ações'],
      response: 'Comprar ações significa ser sócio de empresas. Estude o mercado e invista com cautela, avaliando os riscos.'
    },
    {
      keywords: ['diversificação', 'risco', 'investimentos', 'carteira', 'alocação de ativos'],
      response: 'Diversifique investimentos em vários ativos para proteger seu dinheiro de oscilações e diminuir riscos.'
    },
    {
      keywords: ['juros compostos', 'juros', 'rentabilidade'],
      response: 'Juros compostos são seus aliados: quanto mais tempo investir, mais seu dinheiro cresce exponencialmente.'
    },
    {
      keywords: ['conta digital', 'transferência', 'TED', 'PIX', 'transferência eletrônica'],
      response: 'PIX mudou o jeito de transferir dinheiro: instantâneo, gratuito e disponível 24h todos os dias.'
    },
    {
      keywords: ['finanças pessoais', 'controle financeiro', 'aplicativos', 'planilhas', 'organização'],
      response: 'Aplicativos e planilhas ajudam a manter suas finanças organizadas e a revisar gastos para melhorar o orçamento.'
    },
    {
      keywords: ['empréstimo pessoal', 'crédito pessoal', 'juros', 'parcelamento', 'taxa de juros'],
      response: 'Empréstimos devem ser usados com cuidado, verificando taxas e prazos para não sufocar seu orçamento mensal.'
    },
    {
      keywords: ['descontos', 'promoções', 'cupons', 'economizar', 'compras'],
      response: 'Use descontos e promoções para economizar, mas não compre algo só porque está barato, avalie se é necessário.'
    },
    {
      keywords: ['finanças familiares', 'dinheiro de casal', 'planejamento familiar', 'despesas da casa'],
      response: 'Combinar finanças em família com transparência e metas pode evitar conflitos e garantir estabilidade.'
    },
    {
      keywords: ['fundos imobiliários', 'FIIs', 'rendimentos', 'investimentos em imóveis'],
      response: 'Fundos imobiliários permitem investir em imóveis com valores menores e receber rendimentos mensais.'
    },
    {
      keywords: ['seguro', 'seguro de vida', 'seguro auto', 'proteção financeira', 'proteção'],
      response: 'Seguros protegem você e sua família em situações inesperadas, trazendo tranquilidade financeira.'
    },
    {
      keywords: ['educação', 'curso', 'capacitação', 'aprendizado', 'investir em conhecimento'],
      response: 'Investir em aprendizado aumenta seu potencial de renda e qualidade de vida a longo prazo.'
    },
    {
      keywords: ['metas financeiras', 'objetivos', 'planejamento', 'foco', 'disciplina'],
      response: 'Definir metas claras e planejadas é chave para alcançar seus sonhos e manter a disciplina financeira.'
    },
    {
      keywords: ['gastos fixos', 'gastos variáveis', 'despesas', 'controle de gastos'],
      response: 'Separar gastos fixos e variáveis ajuda a entender melhor para onde vai seu dinheiro e onde cortar custos.'
    },
    {
      keywords: ['conta conjunta', 'dinheiro compartilhado', 'casal', 'parceiros'],
      response: 'Contas conjuntas facilitam pagar despesas em comum, mas é essencial definir regras e limites claros.'
    },
    {
      keywords: ['investimento em ouro', 'ouro', 'ativo seguro', 'proteção'],
      response: 'O ouro é uma reserva de valor, usado para proteção em crises, mas não gera renda como dividendos.'
    },
    {
      keywords: ['rendimentos', 'dividendos', 'lucros', 'renda passiva'],
      response: 'Dividendos são pagamentos feitos por empresas aos acionistas, gerando renda passiva.'
    },
    {
      keywords: ['planejamento tributário', 'impostos', 'retenção', 'descontos fiscais'],
      response: 'Entenda seus impostos para pagar o justo e aproveitar benefícios e isenções legais.'
    },
    {
      keywords: ['finanças sustentáveis', 'investimentos verdes', 'ESG', 'responsabilidade social'],
      response: 'Investimentos ESG valorizam empresas que cuidam do meio ambiente, sociedade e boa governança.'
    },
    {
      keywords: ['fraudes', 'golpes financeiros', 'cuidado', 'segurança'],
      response: 'Esteja atento a golpes financeiros. Não compartilhe informações pessoais e verifique sempre a origem das mensagens.'
    },
    {
      keywords: ['crédito', 'score', 'pontuação', 'histórico de crédito'],
      response: 'Seu score influencia empréstimos e condições. Pague contas em dia para manter boa pontuação.'
    },
    {
      keywords: ['bolsa de valores', 'day trade', 'trading', 'operação', 'especulação'],
      response: 'Day trade tem riscos altos e exige experiência. Prefira investimentos mais seguros se não estiver preparado.'
    },
    {
      keywords: ['finanças comportamentais', 'psicologia financeira', 'hábitos', 'tomada de decisão'],
      response: 'Nossas emoções influenciam decisões financeiras. Conhecer isso ajuda a evitar compras por impulso.'
    },
    {
      keywords: ['crédito consignado', 'desconto em folha', 'empréstimo barato'],
      response: 'Consignado tem juros baixos, mas compromete seu salário mensal, use com planejamento.'
    },
    {
      keywords: ['financiamento estudantil', 'FIES', 'universidade', 'educação superior'],
      response: 'Estudar financiando sua educação pode ser uma estratégia, desde que o pagamento das parcelas seja planejado.'
    },
    {
      keywords: ['divórcio', 'separação', 'finanças após divórcio', 'partilha de bens'],
      response: 'Após separação, reorganize as finanças para garantir estabilidade e cumprir novos compromissos.'
    },
    {
      keywords: ['empreendedorismo', 'negócio próprio', 'finanças do negócio', 'gestão financeira'],
      response: 'Separe contas pessoais e da empresa para melhor gestão e evite misturar gastos.'
    },
    {
      keywords: ['dinheiro digital', 'criptomoedas', 'bitcoin', 'blockchain', 'ativos digitais'],
      response: 'Criptomoedas são ativos digitais voláteis. Invista só o que está disposto a perder.'
    },
    {
      keywords: ['finanças para jovens', 'adultos jovens', 'primeiro emprego', 'independência financeira'],
      response: 'Jovens devem poupar, criar reserva e evitar dívidas para garantir a independência financeira.'
    },
    {
      keywords: ['finanças para idosos', 'aposentados', 'renda fixa', 'segurança financeira'],
      response: 'Idosos devem priorizar investimentos seguros e renda estável para o dia a dia.'
    },
    {
      keywords: ['finanças pessoais femininas', 'mulheres', 'independência financeira', 'empoderamento'],
      response: 'Mulheres devem buscar educação financeira para garantir autonomia e segurança.'
    },
    {
      keywords: ['inflação', 'preços', 'custos', 'aumento'],
      response: 'Controle gastos e invista para proteger seu dinheiro da inflação crescente.'
    },
    {
      keywords: ['educação financeira para crianças', 'filhos', 'mesada', 'ensino'],
      response: 'Ensine crianças o valor do dinheiro com mesada e conversa para formar hábitos saudáveis.'
    },
    {
      keywords: ['objetivos', 'sonhos', 'poupança para viagem', 'compras', 'metas'],
      response: 'Ter metas claras ajuda a manter foco e definir quanto precisa poupar para realizá-las.'
    },
    {
      keywords: ['planejamento financeiro mensal', 'controle mensal', 'revisão'],
      response: 'Todo mês revise receitas e despesas para ajustar seu orçamento e evitar surpresas.'
    },
    {
      keywords: ['tecnologia e finanças', 'apps', 'controle', 'facilidade'],
      response: 'Apps ajudam a manter controle e acompanhamento diário das finanças, facilitando decisões.'
    },
    {
      keywords: ['finanças no casamento', 'dinheiro casal', 'compromisso financeiro', 'transparência'],
      response: 'Falem sobre dinheiro no casal para alinhar prioridades e evitar atritos desnecessários.'
    },
    {
      keywords: ['dinheiro', 'pobreza', 'riqueza', 'mentalidade', 'hábitos financeiros'],
      response: 'Transforme sua mentalidade sobre dinheiro para criar hábitos que levem ao sucesso financeiro.'
    },
    {
      keywords: ['gastos supérfluos', 'compras por impulso', 'consumo', 'controle emocional'],
      response: 'Evite compras por impulso planejando gastos e refletindo se o produto é realmente necessário.'
    },
    {
      keywords: ['emprestimos online', 'financiamentos online', 'segurança online'],
      response: 'Só use empréstimos online em sites confiáveis e evite divulgar dados pessoais para desconhecidos.'
    },
    {
      keywords: ['dívida ativa', 'cheque especial', 'overdraft', 'juros altos'],
      response: 'O cheque especial tem juros muito altos, use só em caso extremo e com cuidado para não entrar em dívidas.'
    },
    {
      keywords: ['fundos de investimento', 'fundos multimercado', 'renda fixa', 'fundos de ações'],
      response: 'Fundos de investimento reúnem dinheiro de vários investidores para aplicar em diversos ativos.'
    },
    {
      keywords: ['planejamento sucessório', 'herança', 'testamento'],
      response: 'Planeje sua sucessão para evitar conflitos familiares e garantir que bens sejam distribuídos conforme desejar.'
    },
    {
      keywords: ['economia circular', 'sustentabilidade', 'finanças sustentáveis'],
      response: 'Investir em sustentabilidade ajuda o planeta e pode gerar bons retornos financeiros no futuro.'
    },
    {
      keywords: ['economia doméstica', 'redução de gastos', 'afastar desperdícios'],
      response: 'Reduza gastos desnecessários revisando contratos, luz, água e otimizando gastos do dia a dia.'
    },
    {
      keywords: ['planejamento de aposentadoria', 'previdência privada', 'poupança para aposentadoria'],
      response: 'Um bom planejamento de aposentadoria envolve calcular quanto você precisará e começar a poupar o quanto antes, considerando previdência privada e investimentos.'
    },
    {
      keywords: ['custo de vida', 'orçamento familiar', 'despesas mensais'],
      response: 'Entender o custo de vida é essencial para um bom orçamento familiar. Revise suas despesas mensais e busque maneiras de reduzi-las.'
    },
    {
      keywords: ['educação financeira para adultos', 'cursos', 'workshops'],
      response: 'Participar de cursos e workshops de educação financeira pode ajudar a melhorar sua compreensão sobre investimentos e gestão de dinheiro.'
    },
    {
      keywords: ['finanças e saúde mental', 'estresse financeiro', 'ansiedade'],
      response: 'A saúde mental está ligada às finanças. Busque ajuda se o estresse financeiro estiver afetando seu bem-estar e considere técnicas de gerenciamento de estresse.'
    },
    {
      keywords: ['economia de energia', 'reduzir contas', 'sustentabilidade'],
      response: 'Reduzir o consumo de energia não só ajuda o meio ambiente, mas também pode diminuir suas contas. Considere usar lâmpadas LED e aparelhos eficientes.'
    },
    {
      keywords: ['planejamento de viagem', 'orçamento para viagem', 'economizar para viajar'],
      response: 'Planejar uma viagem envolve definir um orçamento e economizar com antecedência. Considere usar aplicativos para acompanhar seus gastos.'
    },
    {
      keywords: ['finanças e tecnologia', 'blockchain', 'fintechs'],
      response: 'A tecnologia está revolucionando as finanças. Explore opções como blockchain e fintechs para gerenciar seu dinheiro de forma mais eficiente.'
    },
    {
      keywords: ['investimentos de impacto', 'responsabilidade social', 'finanças éticas'],
      response: 'Investimentos de impacto buscam gerar retorno financeiro e social. Considere apoiar empresas que promovem mudanças positivas na sociedade.'
    },
    {
      keywords: ['planejamento financeiro para casais', 'dinheiro no relacionamento', 'finanças em casal'],
      response: 'Conversar abertamente sobre finanças é fundamental em um relacionamento. Definam juntos metas e estratégias para alcançar seus objetivos financeiros.'
    },
    {
      keywords: ['cuidado com fraudes', 'segurança financeira', 'proteger dados pessoais'],
      response: 'Mantenha seus dados pessoais seguros e esteja atento a fraudes. Use senhas fortes e não compartilhe informações sensíveis.'
    }
  ]

  const defaultResponse = 'Posso te ajudar com várias dicas sobre finanças, investimentos, dívidas, orçamento, planejamento e muito mais. Me pergunte!'

  function appendMessage(text, sender = 'bot') {
    const messageEl = document.createElement('div')
    messageEl.classList.add('message')
    messageEl.classList.add(sender === 'bot' ? 'bot-message' : 'user-message')
    messageEl.textContent = text
    chatWindow.appendChild(messageEl)
    chatWindow.scrollTop = chatWindow.scrollHeight
  }

  function findBotResponse(text) {
    const lowerText = text.toLowerCase()
    for (const item of botAnswers) {
      for (const kw of item.keywords) {
        if (lowerText.includes(kw)) {
          return item.response
        }
      }
    }
    return defaultResponse
  }

  function handleSendMessage(e) {
    e.preventDefault()
    const userText = userInput.value.trim()
    if (!userText) return
    appendMessage(userText, 'user')
    userInput.value = ''
    sendBtn.disabled = true
    setTimeout(() => {
      const botReply = findBotResponse(userText)
      appendMessage(botReply, 'bot')
      sendBtn.disabled = false
      userInput.focus()
    }, 800)
  }

  function initChat() {
    appendMessage('Olá! Sou seu assistente financeiro. Pergunte algo sobre finanças pessoais, investimentos, dívidas, planejamento e muito mais.')
    userInput.focus()
  }

  document.getElementById('input-area').addEventListener('submit', handleSendMessage)

  initChat()
})()

const dados = [
    {
        palavrasChave: ['orçamento', 'planejamento', 'gastar', 'economizar', 'finanças pessoais', 'controle financeiro'],
        resposta: 'Manter um orçamento mensal ajuda a controlar despesas e identificar economias possíveis. Anote tudo, receitas e gastos, para ter clareza.'
    },
    {
        palavrasChave: ['investimento', 'investir', 'rendimentos', 'ações', 'renda fixa', 'renda variável', 'diversificação'],
        resposta: 'Investir diversificando entre renda fixa e variável aumenta potencial de ganhos com segurança, equilibrando riscos e oportunidades.'
    },
    {
        palavrasChave: ['dívida', 'endividado', 'empréstimo', 'juros', 'cartão de crédito atrasado', 'calote', 'inadimplência'],
        resposta: 'Evite atrasar pagamentos e controlar o uso do cartão de crédito para não cair em juros altos e inadimplência que comprometem seu crédito.'
    },
    {
        palavrasChave: ['poupança', 'reserva de emergência', 'dinheiro parado', 'fundo de emergência'],
        resposta: 'Poupança é boa para reserva de emergência, um dinheiro guardado para imprevistos que precisa ser acessível e seguro.'
    },
    {
        palavrasChave: ['educação financeira', 'financeira', 'dinheiro', 'controle', 'conhecimento'],
        resposta: 'Ganhar conhecimento financeiro ajuda a pagar menos juros, investir melhor e alcançar seus sonhos com mais facilidade.'
    },
    {
        palavrasChave: ['cartão de crédito', 'cartão', 'fatura', 'parcelamento', 'limite', 'juros do cartão'],
        resposta: 'Pague sempre a fatura do cartão em dia e evite parcelar sem planejamento para não se endividar com juros altos.'
    },
    {
        palavrasChave: ['aposentadoria', 'futuro', 'longo prazo', 'previdência', 'investimento futuro', 'aposentadoria privada'],
        resposta: 'Investir para aposentadoria deve começar cedo, assim você aproveita os juros compostos e garante segurança no futuro.'
    },
    {
        palavrasChave: ['impostos', 'declaração de imposto de renda', 'IR', 'tributos'],
        resposta: 'Organize documentos e faça sua declaração de imposto de renda para evitar problemas com a Receita Federal.'
    },
    {
        palavrasChave: ['inflação', 'preços', 'custo de vida', 'aumento dos preços', 'poder de compra'],
        resposta: 'A inflação corrói o poder de compra, por isso, é importante investir em opções que protejam seu dinheiro dessa alta.'
    },
    {
        palavrasChave: ['fintech', 'banco digital', 'app financeiro', 'conta digital'],
        resposta: 'Bancos digitais e fintechs facilitam gerenciar seu dinheiro sem taxas, com aplicativos modernos que tornam tudo simples.'
    },
    {
        palavrasChave: ['financiamento', 'carro', 'casa', 'juros', 'parcelas', 'financiamento imobiliário'],
        resposta: 'Financiamentos são úteis, mas cuidado para juros e parcelas não comprometerem mais do que 30% da sua renda.'
    },
    {
        palavrasChave: ['bolsa de valores', 'ações', 'mercado de capitais', 'stock market', 'investir em ações'],
        resposta: 'Comprar ações significa ser sócio de empresas. Estude o mercado e invista com cautela, avaliando os riscos.'
    },
    {
        palavrasChave: ['diversificação', 'risco', 'investimentos', 'carteira', 'alocação de ativos'],
        resposta: 'Diversifique investimentos em vários ativos para proteger seu dinheiro de oscilações e diminuir riscos.'
    },
    {
        palavrasChave: ['juros compostos', 'juros', 'rentabilidade'],
        resposta: 'Juros compostos são seus aliados: quanto mais tempo investir, mais seu dinheiro cresce exponencialmente.'
    },
    {
        palavrasChave: ['conta digital', 'transferência', 'TED', 'PIX', 'transferência eletrônica'],
        resposta: 'PIX mudou o jeito de transferir dinheiro: instantâneo, gratuito e disponível 24h todos os dias.'
    },
    {
        palavrasChave: ['finanças pessoais', 'controle financeiro', 'aplicativos', 'planilhas', 'organização'],
        resposta: 'Aplicativos e planilhas ajudam a manter suas finanças organizadas e a revisar gastos para melhorar o orçamento.'
    },
    {
        palavrasChave: ['empréstimo pessoal', 'crédito pessoal', 'juros', 'parcelamento', 'taxa de juros'],
        resposta: 'Empréstimos devem ser usados com cuidado, verificando taxas e prazos para não sufocar seu orçamento mensal.'
    },
    {
        palavrasChave: ['descontos', 'promoções', 'cupons', 'economizar', 'compras'],
        resposta: 'Use descontos e promoções para economizar, mas não compre algo só porque está barato, avalie se é necessário.'
    },
    {
        palavrasChave: ['finanças familiares', 'dinheiro de casal', 'planejamento familiar', 'despesas da casa'],
        resposta: 'Combinar finanças em família com transparência e metas pode evitar conflitos e garantir estabilidade.'
    },
    {
        palavrasChave: ['fundos imobiliários', 'FIIs', 'rendimentos', 'investimentos em imóveis'],
        resposta: 'Fundos imobiliários permitem investir em imóveis com valores menores e receber rendimentos mensais.'
    },
    {
        palavrasChave: ['seguro', 'seguro de vida', 'seguro auto', 'proteção financeira', 'proteção'],
        resposta: 'Seguros protegem você e sua família em situações inesperadas, trazendo tranquilidade financeira.'
    },
    {
        palavrasChave: ['educação', 'curso', 'capacitação', 'aprendizado', 'investir em conhecimento'],
        resposta: 'Investir em aprendizado aumenta seu potencial de renda e qualidade de vida a longo prazo.'
    },
    {
        palavrasChave: ['metas financeiras', 'objetivos', 'planejamento', 'foco', 'disciplina'],
        resposta: 'Definir metas claras e planejadas é chave para alcançar seus sonhos e manter a disciplina financeira.'
    },
    {
        palavrasChave: ['gastos fixos', 'gastos variáveis', 'despesas', 'controle de gastos'],
        resposta: 'Separar gastos fixos e variáveis ajuda a entender melhor para onde vai seu dinheiro e onde cortar custos.'
    },
    {
        palavrasChave: ['conta conjunta', 'dinheiro compartilhado', 'casal', 'parceiros'],
        resposta: 'Contas conjuntas facilitam pagar despesas em comum, mas é essencial definir regras e limites claros.'
    },
    {
        palavrasChave: ['investimento em ouro', 'ouro', 'ativo seguro', 'proteção'],
        resposta: 'O ouro é uma reserva de valor, usado para proteção em crises, mas não gera renda como dividendos.'
    },
    {
        palavrasChave: ['rendimentos', 'dividendos', 'lucros', 'renda passiva'],
        resposta: 'Dividendos são pagamentos feitos por empresas aos acionistas, gerando renda passiva.'
    },
    {
        palavrasChave: ['planejamento tributário', 'impostos', 'retenção', 'descontos fiscais'],
        resposta: 'Entenda seus impostos para pagar o justo e aproveitar benefícios e isenções legais.'
    },
    {
        palavrasChave: ['finanças sustentáveis', 'investimentos verdes', 'ESG', 'responsabilidade social'],
        resposta: 'Investimentos ESG valorizam empresas que cuidam do meio ambiente, sociedade e boa governança.'
    },
    {
        palavrasChave: ['fraudes', 'golpes financeiros', 'cuidado', 'segurança'],
        resposta: 'Esteja atento a golpes financeiros. Não compartilhe informações pessoais e verifique sempre a origem das mensagens.'
    },
    {
        palavrasChave: ['crédito', 'score', 'pontuação', 'histórico de crédito'],
        resposta: 'Seu score influencia empréstimos e condições. Pague contas em dia para manter boa pontuação.'
    },
    {
        palavrasChave: ['bolsa de valores', 'day trade', 'trading', 'operação', 'especulação'],
        resposta: 'Day trade tem riscos altos e exige experiência. Prefira investimentos mais seguros se não estiver preparado.'
    },
    {
        palavrasChave: ['finanças comportamentais', 'psicologia financeira', 'hábitos', 'tomada de decisão'],
        resposta: 'Nossas emoções influenciam decisões financeiras. Conhecer isso ajuda a evitar compras por impulso.'
    },
    {
        palavrasChave: ['crédito consignado', 'desconto em folha', 'empréstimo barato'],
        resposta: 'Consignado tem juros baixos, mas compromete seu salário mensal, use com planejamento.'
    },
    {
        palavrasChave: ['financiamento estudantil', 'FIES', 'universidade', 'educação superior'],
        resposta: 'Estudar financiando sua educação pode ser uma estratégia, desde que o pagamento das parcelas seja planejado.'
    },
    {
        palavrasChave: ['divórcio', 'separação', 'finanças após divórcio', 'partilha de bens'],
        resposta: 'Após separação, reorganize as finanças para garantir estabilidade e cumprir novos compromissos.'
    },
    {
        palavrasChave: ['empreendedorismo', 'negócio próprio', 'finanças do negócio', 'gestão financeira'],
        resposta: 'Separe contas pessoais e da empresa para melhor gestão e evite misturar gastos.'
    },
    {
        palavrasChave: ['dinheiro digital', 'criptomoedas', 'bitcoin', 'blockchain', 'ativos digitais'],
        resposta: 'Criptomoedas são ativos digitais voláteis. Invista só o que está disposto a perder.'
    },
    {
        palavrasChave: ['finanças para jovens', 'adultos jovens', 'primeiro emprego', 'independência financeira'],
        resposta: 'Jovens devem poupar, criar reserva e evitar dívidas para garantir a independência financeira.'
    },
    {
        palavrasChave: ['finanças para idosos', 'aposentados', 'renda fixa', 'segurança financeira'],
        resposta: 'Idosos devem priorizar investimentos seguros e renda estável para o dia a dia.'
    },
    {
        palavrasChave: ['finanças pessoais femininas', 'mulheres', 'independência financeira', 'empoderamento'],
        resposta: 'Mulheres devem buscar educação financeira para garantir autonomia e segurança.'
    },
    {
        palavrasChave: ['inflação', 'preços', 'custos', 'aumento'],
        resposta: 'Controle gastos e invista para proteger seu dinheiro da inflação crescente.'
    },
    {
        palavrasChave: ['educação financeira para crianças', 'filhos', 'mesada', 'ensino'],
        resposta: 'Ensine crianças o valor do dinheiro com mesada e conversa para formar hábitos saudáveis.'
    },
    {
        palavrasChave: ['objetivos', 'sonhos', 'poupança para viagem', 'compras', 'metas'],
        resposta: 'Ter metas claras ajuda a manter foco e definir quanto precisa poupar para realizá-las.'
    },
    {
        palavrasChave: ['planejamento financeiro mensal', 'controle mensal', 'revisão'],
        resposta: 'Todo mês revise receitas e despesas para ajustar seu orçamento e evitar surpresas.'
    },
    {
        palavrasChave: ['tecnologia e finanças', 'apps', 'controle', 'facilidade'],
        resposta: 'Apps ajudam a manter controle e acompanhamento diário das finanças, facilitando decisões.'
    },
    {
        palavrasChave: ['finanças no casamento', 'dinheiro casal', 'compromisso financeiro', 'transparência'],
        resposta: 'Falem sobre dinheiro no casal para alinhar prioridades e evitar atritos desnecessários.'
    },
    {
        palavrasChave: ['dinheiro', 'pobreza', 'riqueza', 'mentalidade', 'hábitos financeiros'],
        resposta: 'Transforme sua mentalidade sobre dinheiro para criar hábitos que levem ao sucesso financeiro.'
    },
    {
        palavrasChave: ['gastos supérfluos', 'compras por impulso', 'consumo', 'controle emocional'],
        resposta: 'Evite compras por impulso planejando gastos e refletindo se o produto é realmente necessário.'
    },
    {
        palavrasChave: ['emprestimos online', 'financiamentos online', 'segurança online'],
        resposta: 'Só use empréstimos online em sites confiáveis e evite divulgar dados pessoais para desconhecidos.'
    },
    {
        palavrasChave: ['dívida ativa', 'cheque especial', 'overdraft', 'juros altos'],
        resposta: 'O cheque especial tem juros muito altos, use só em caso extremo e com cuidado para não entrar em dívidas.'
    },
    {
        palavrasChave: ['fundos de investimento', 'fundos multimercado', 'renda fixa', 'fundos de ações'],
        resposta: 'Fundos de investimento reúnem dinheiro de vários investidores para aplicar em diversos ativos.'
    },
    {
        palavrasChave: ['planejamento sucessório', 'herança', 'testamento'],
        resposta: 'Planeje sua sucessão para evitar conflitos familiares e garantir que bens sejam distribuídos conforme desejar.'
    },
    {
        palavrasChave: ['economia circular', 'sustentabilidade', 'finanças sustentáveis'],
        resposta: 'Investir em sustentabilidade ajuda o planeta e pode gerar bons retornos financeiros no futuro.'
    },
    {
        palavrasChave: ['economia doméstica', 'redução de gastos', 'afastar desperdícios'],
        resposta: 'Reduza gastos desnecessários revisando contratos, luz, água e otimizando gastos do dia a dia.'
    },
    {
        palavrasChave: ['planejamento de aposentadoria', 'previdência privada', 'poupança para aposentadoria'],
        resposta: 'Um bom planejamento de aposentadoria envolve calcular quanto você precisará e começar a poupar o quanto antes, considerando previdência privada e investimentos.'
    },
    {
        palavrasChave: ['custo de vida', 'orçamento familiar', 'despesas mensais'],
        resposta: 'Entender o custo de vida é essencial para um bom orçamento familiar. Revise suas despesas mensais e busque maneiras de reduzi-las.'
    },
    {
        palavrasChave: ['educação financeira para adultos', 'cursos', 'workshops'],
        resposta: 'Participar de cursos e workshops de educação financeira pode ajudar a melhorar sua compreensão sobre investimentos e gestão de dinheiro.'
    },
    {
        palavrasChave: ['finanças e saúde mental', 'estresse financeiro', 'ansiedade'],
        resposta: 'A saúde mental está ligada às finanças. Busque ajuda se o estresse financeiro estiver afetando seu bem-estar e considere técnicas de gerenciamento de estresse.'
    },
    {
        palavrasChave: ['economia de energia', 'reduzir contas', 'sustentabilidade'],
        resposta: 'Reduzir o consumo de energia não só ajuda o meio ambiente, mas também pode diminuir suas contas. Considere usar lâmpadas LED e aparelhos eficientes.'
    },
    {
        palavrasChave: ['planejamento de viagem', 'orçamento para viagem', 'economizar para viajar'],
        resposta: 'Planejar uma viagem envolve definir um orçamento e economizar com antecedência. Considere usar aplicativos para acompanhar seus gastos.'
    },
    {
        palavrasChave: ['finanças e tecnologia', 'blockchain', 'fintechs'],
        resposta: 'A tecnologia está revolucionando as finanças. Explore opções como blockchain e fintechs para gerenciar seu dinheiro de forma mais eficiente.'
    },
    {
        palavrasChave: ['investimentos de impacto', 'responsabilidade social', 'finanças éticas'],
        resposta: 'Investimentos de impacto buscam gerar retorno financeiro e social. Considere apoiar empresas que promovem mudanças positivas na sociedade.'
    },
    {
        palavrasChave: ['planejamento financeiro para casais', 'dinheiro no relacionamento', 'finanças em casal'],
        resposta: 'Conversar abertamente sobre finanças é fundamental em um relacionamento. Definam juntos metas e estratégias para alcançar seus objetivos financeiros.'
    },
    {
        palavrasChave: ['cuidado com fraudes', 'segurança financeira', 'proteger dados pessoais'],
        resposta: 'Mantenha seus dados pessoais seguros e esteja atento a fraudes. Use senhas fortes e não compartilhe informações sensíveis.'
    }
]


const janelaDeChat = document.getElementById('chat-window')
const textoDoUsuario = document.getElementById('user-input')
const botaoDeEnvio = document.getElementById('send-btn')

const respostaPadrao = 'Posso te ajudar com várias dicas sobre finanças, investimentos, dívidas, orçamento, planejamento e muito mais. Me pergunte!'

function criarMensagem(texto, sender = 'bot') {
  const msg = document.createElement('div')
  msg.classList.add('message')
  msg.classList.add(sender === 'bot' ? 'mensagem-do-bot' : 'mensagem-do-usuario')
  msg.textContent = texto
  
  janelaDeChat.appendChild(msg)
  
  janelaDeChat.scrollTop = janelaDeChat.scrollHeight
}

function acharRespostaDoBot(text) {
  const textoMinusculo = text.toLowerCase()
  textoMinusculo.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
  for (const item of dados) {
    for (const pc of item.palavrasChave) {
      if (textoMinusculo.includes(pc)) {
        return item.resposta
      }
    }
  }
  return respostaPadrao
}

function enviarMensagem(e) {
  e.preventDefault()
  const novoTextoDoUsuario = textoDoUsuario.value.trim()
  if (!novoTextoDoUsuario) return
  criarMensagem(novoTextoDoUsuario, 'usuario')
  textoDoUsuario.value = ''
  botaoDeEnvio.disabled = true
  setTimeout(() => {
    const respostaDoBot = acharRespostaDoBot(novoTextoDoUsuario)
    criarMensagem(respostaDoBot, 'bot')
    botaoDeEnvio.disabled = false
    textoDoUsuario.focus()
  }, 800)
}

function iniciarChat() {
  criarMensagem('Olá! Sou seu assistente financeiro. Pergunte algo sobre finanças pessoais, investimentos, dívidas, planejamento e muito mais.')
  textoDoUsuario.focus()
}

document.getElementById('input-area').addEventListener('submit', enviarMensagem)

iniciarChat()

document.querySelector('#botao-voltar').addEventListener('click', () => {
    window.open('', '_self', '');
    window.close();
})

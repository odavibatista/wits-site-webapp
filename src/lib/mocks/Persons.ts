interface IPersons {
  id: number
  name: string
  message: string
  profession: string
  nationality: string
  avatarUrl: string
  type: 'testimony' | 'history'
}

export const Persons: IPersons[] = [
  {
    id: 1,
    name: 'Carolina',
    message:
      'O caminho de aprendizagem do Wits proporcionou um ritmo estável e sustentável por vários meses de progresso constante.',
    nationality: 'Brasileira',
    profession: 'Analista de sistemas',
    avatarUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    type: 'testimony',
  },
  {
    id: 2,
    name: 'Adriano',
    message:
      'O que ganhei com os testes foi a capacidade de entender melhor o raciocínio lógico e como resolver problemas de forma eficaz.',
    nationality: 'Brasileiro',
    profession: 'Desenvolvedor de Software',
    avatarUrl:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    type: 'testimony',
  },
  {
    id: 3,
    name: 'Isadora',
    message:
      'Eu recomendo fortemente o Wits para qualquer um que queira desenvolver habilidades de lógica e raciocínio. Eu prometo que você não vai se arrepender.',
    nationality: 'Brasileira',
    profession: 'Gerente de Projetos',
    avatarUrl:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    type: 'testimony',
  },
  {
    id: 4,
    name: 'Henrique',
    message:
      'As habilidades de raciocínio adquiridas nos testes do Wits me fizeram sentir mais confiante sobre minha capacidade de resolver problemas complexos e pensar de forma crítica.',
    nationality: 'Português',
    profession: 'Gerente de Projetos',
    avatarUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    type: 'history',
  },
  {
    id: 5,
    name: 'Anna',
    message:
      'Meu objetivo é desenvolver habilidades de lógica e raciocínio para que, quando eu retornar ao mercado de trabalho, eu seja um candidato mais competitivo.',
    nationality: 'Italiana',
    profession: 'Gerente de Projetos',
    avatarUrl:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    type: 'history',
  },
  {
    id: 6,
    name: 'Flavio',
    message:
      'Já experimentei algumas plataformas de aprendizado, mas nenhuma delas se igualou à facilidade de desenvolvimento de raciocínio que experimentei com o Wits.',
    nationality: 'Brasileiro',
    profession: 'Gerente de Projetos',
    avatarUrl:
      'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    type: 'history',
  },
]

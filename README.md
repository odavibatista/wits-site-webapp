# 🧠 Wits - WEBAPP
<br>

<img src="https://i.imgur.com/18VE9Qi.png"></img>

<br>

Bem-vindo ao projeto front-end do Wits, seu e-learning gamificado de aprendizado de raciocínio e lógica. Aqui, iremos lhe instruir em como lançar a aplicação localmente e utilizá-la.

<br>

## 📖 Índice
- [Instalação](#installation)
- [Configuração](#configuration)
- [Tecnologias Utilizadas](#techs-used)
- [Equipe](#team)

## Instalação <a name="installation"></a>
Para instalar o projeto, será necessário algum gerenciador de pacotes JavaScript (NPM, Yarn, PNPM, Bun...).

Primeiro, abra sua linhade comando e digite a seguinte linha:
```
git clone https://github.com/odavibatista/wits-site-webapp.git
```

E em seguida:
```
cd wits-site-api
```

Já na root do projeto, baixe as dependências com o seu comando de instalação (com base noseu gerenciador de pacotes):

```
npm install

yarn install

bun install
```

## Configuração <a name="configuration"></a>

Após instalar as dependências, é preciso configurar as variáveis de ambiente do mesmo. Para isso, faça uma cópia do arquivo `.env.example` presente na root do projeto e nomeie-o para `.env`.

Dentro dele, você encontrará o seguinte esqueleto de variáveis presente:
```
# Do not forget to use "http" instead of 'https' for local development
BASE_URL= (A URL LOCAL DO FRONT-END)
NEXT_PUBLIC_API= (A URL DA API, UTILIZAR SOMENTE "http" AO INVÉS DE "https" CASO SUA API SEJA LOCAL)
```

Ao preenchermos a `.env` corretamente, teremos algo similar a isso:
```
# Do not forget to use "http" instead of 'https' for local development
BASE_URL="http://localhost:3000/"
NEXT_PUBLIC_API="http://localhost:5000/"
```

Após isso, podemos enfim lançar o projeto:
```
npm run dev

yarn dev

bun dev
```

Acessando a URL fornecida pelo Next, poderemos utilizar a aplicação, integrada com a API.

## Tecnologias Utilizadas <a name="techs-used"></a>
- [Axios](https://www.npmjs.com/package/axios)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/gettingstarted/)
- [ESLint](https://eslint.org/)
- [Framer Motion](https://www.npmjs.com/package/framer-motion)
- [Jose](https://www.npmjs.com/package/jose)
- [Lucide React](https://lucide.dev/guide/packages/lucide-react)
- [NextJS](https://nextjs.org/)
- [NextUI](https://nextui.org/)
- [Prettier](https://www.npmjs.com/package/prettier)
- [React](https://react.dev/)
- [Sonner](https://www.npmjs.com/package/sonner)
- [TailwindCSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Zod](https://zod.dev/)

## Equipe <a name="team"></a>

- [Bruno Almeida](https://github.com/thenrybruno)
- [Davi Batista](https://github.com/odavibatista)
- [Thiago Magno](https://github.com/thgmagno)
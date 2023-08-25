
# JuniorsWiki

Uma aplicação inteiramente idealizada e desenvolvida por mim. O objetivo é servir como uma "wiki" minimalista, onde um desenvolvedor júnior pode pesquisar por uma tecnologia, conceito, arquitetura ou algo relacionado à área de TI e ter uma explicação resumida do assunto.

Eu poderia ter feito tudo somente no front-end, mas resolvi torná-la fullstack criando uma API REST com um banco de dados que guarda as tecnologias, usuários e cuida da autenticação com JWT, principalmente para exercitar a parte do backend.

Um dos meus objetivos com o backend era implementar uma opção de gerar sugestões completas com os dados da tecnologia usando o Chat GPT, mas meu tempo de teste já tinha expirado, e pelo que entendi, para poder usar depois disso é obrigado a pagar, então descartei a idéia.

Todo o código do backend está disponível no seu [repositório](https://github.com/sogbog/JuniorsWiki_Backend).
## Deploy

Como eu não gosto muito dos planos gratuitos para hostear o backend e nessa aplicação ele não é 100% necessário, eu resolvi adaptar uma versão com somente frontend. Você pode acessar [nesse link](https://sogbog.github.io/JuniorsWiki/). Como vou ter que preencher a wiki manualmente aos poucos, dependendo de quando você acessar, pode ser que não tenham muitas tecnologias cadastradas.

> [!NOTE]
> As informações foram fornecidas pelo Chat GPT e pesquisas na internet, podem existir divergências da realidade.

## Como funciona
Quando iniciada, a tela inicial da aplicação, com o banco de dados vazio é assim:
![App inicial](https://i.imgur.com/Yr3xUee.png)
Como mencionei, a parte de usuário é bem básica, mais para implementar o sistema de autenticação com um backend. Para criar um usuário, digite um nome, uma senha e clique no botão de criar. Se tiver sucesso, ele já loga direto na conta criada. 

Se nenhum usuário admin existir o próximo usuário a ser criado sera automaticamente um administrador, indicado pela sigla ADM antes do nome do usuário logado. Também é possível criar um administrador não incluso nessa verificação com o username "admin". **Somente os usuários administradores podem criar e modificar tecnologias.** O sistema de usuário foi removido da versão do deploy por não ter backend

Para o admin é apresentado um card para adicionar uma tecnologias:
![App inicial adm](https://imgur.com/gO7zfvU.png)

Na tela de adicionar uma nova tecnologia, é possível inserir todos os dados sendo que somente o nome é necessário para cadastrar.
Na seção da imagem eu adicionei um preview para saber se o link da imagem é valido e como ela vai se encaixar na aplicação.
![Add tech](https://imgur.com/GO7Be5T.png)

Como um usuário comum, ou deslogado, o aplicativo fica assim:
![Home](https://imgur.com/XgSAarv.png)

Os detalhes da tecnologia são mostrados clicando em um card:
![App Screenshot](https://imgur.com/SQauts3.png)

Como um admin, um ícone de edição aparece no canto superior. Clicando nele o usuário vai para uma página identica à de criação mas com todas as informações preenchidas de acordo com a tecnologia que ele está editando.
## Tecnologias usadas na construção

**Front-end:** Typescript, React, Tailwind

**Back-end:** Typescript, Express, Prisma


## Rodar a aplicação

Se você quiser rodar a aplicação inteira, tanto no backend quanto no frontend, você precisará instalar as dependências usando um gerenciador de pacotes:


```bash
  npm install
```

No frontend é tudo que precisa fazer, mas no backend, você precisa primeiro criar(se não existir) um arquivo com o nome ".env" na root do projeto(pasta principal) e dentro desse arquivo deve colocar as seguintes variáveis:

```env
  DATABASE_URL= {localização do arquivo do banco de dados}
  PORT = {numero da porta onde sera hosteado o backend}
  JWT_SECRET = {segredo que vai gerar o jwt}
```
Claro que você deve trocar as chaves pelos valores que você quiser, por exemplo:
```env
  DATABASE_URL="file:./dev.db"
  PORT = 3333
  JWT_SECRET = "qualquercoisa"
```

Feito isso, basta você inciar os dois usando:


```bash
  npm run start
```

Lembre de verificar se o endereço e a porta do servidor que você escolheu são os mesmos do arquivo em src/services/api.ts
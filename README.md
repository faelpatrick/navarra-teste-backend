# TESTE FULLSTACK DEVELOPER
## Rafael Patrick de Souza

Este projeto é uma aplicação Node.js desenvolvida como parte do teste para a empresa Navarra. O objetivo é demonstrar competências em operações básicas de backend utilizando Express.js.

## Estrutura do Projeto

Este projeto possui duas versões principais:

1. **Versão MVC**: Estruturada seguindo o padrão de design Model-View-Controller. Esta versão tem como objetivo demonstrar conhecimentos em MVC.
2. **Versão Index.js**: Versão de inicial criada como teste, localizada no arquivo `index.js` na raiz do repositório.

## Como Rodar o Projeto

**Opção 1 - MVC**:
```bash
git clone https://github.com/faelpatrick/navarra-teste-backend.git
npm install
npm start
```
2. **Opção 2 - Index.js**:
```bash
node index.js
```

## Rotas

O projeto define as seguintes rotas:

- `GET /`: Rota de boas-vindas que retorna "Hello World!".
- `GET /status`: Rota que retorna o status 200.
- `POST /total-elementos`: Rota que recebe um array JSON e retorna o número total de elementos.
- `POST /ordenacao`: Rota que recebe um array JSON e retorna os elementos ordenados conforme critérios específicos.
- `POST /consumir-api`: Rota que faz uma requisição para uma API externa, recebe dados, os ordena e retorna.

## Estrutura do Projeto
`src/`: Pasta contendo os arquivos-fonte do projeto, organizados conforme a arquitetura MVC.
`src/server.js`: Ponto de entrada da aplicação.
`src/controllers/`: Controladores para gerenciar a lógica de negócio.
`src/routes/`: Definições de rotas da aplicação.

## Tecnologias Utilizadas
- Node.js
- Express.js
- Axios para requisições HTTP
- Sucrase para suporte a sintaxe moderna do JavaScript

## Configurações do Servidor

- **Porta**: O servidor esta configurado para verificar se exite configuração no .env caso não exista, ele irá utilizar a porta 3000.

`process.env.PORT || 3000`

## Repositório Git

Link para o repositório Git do projeto.
https://github.com/faelpatrick/navarra-teste-backend


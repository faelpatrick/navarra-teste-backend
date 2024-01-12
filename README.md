# TESTE FULLSTACK DEVELOPER
## Rafael Patrick de Souza

Breve descrição do projeto.

## Estrutura do Projeto

Este projeto possui duas versões principais:

1. **Versão MVC**: Estruturada seguindo o padrão de design Model-View-Controller. Esta versão tem como objetivo demonstrar conhecimentos em MVC.
2. **Versão Index.js**: Versão de inicial criada como teste, localizada no arquivo `index.js` na raiz do repositório.

## Como Rodar o Projeto

**Opção 1 - MVC**:
```bash
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

## Configurações do Servidor

- **Porta**: O servidor esta configurado para verificar se exite configuração no .env caso não exista, ele irá utilizar a porta 3000.

`process.env.PORT || 3000`

## Repositório Git

Link para o repositório Git do projeto.
https://github.com/faelpatrick/navarra-teste-backend


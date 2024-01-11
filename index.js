const express = require("express");
const app = express();

app.use(express.json());

// Rotas

// Rota 01. Status 200 OK
app.get("/status", (req, res) => {
  res.status(200).json({ status: "Status 200 - OK" });
});

// Rota 02. Criar um endpoint POST que receba um array JSON (https://pastebin.pl/view/raw/8fced5f8) com
// os elementos de uma fila de espera e que retorne o número total de elementos do array recebido.

app.post("/contagem", (req, res) => {
  const array = req.body;
  const total = array.length;
  res.status(200).json({ total: total });
});

// Rota 03.
/*Criar um endpoint POST que receba um array JSON com os elementos de uma fila de espera e que
retorne os elementos ordenados conforme as seguintes ponderações:

▪ 50% de importância: Ordenar os elementos pela maior quantidade.
▪ 30% de importância: Levar em consideração a melhor condição de pagamento,
com a ordem de prioridade seguindo a lógica: DIN > 30 > R60 > 90 > 120.
▪ 20% de importância: Dar prioridade aqueles com a designação "PORT".
o Além da ordenação, deve adicionar a cada elemento do array o atributo
“previsao_consumo” obtido através da multiplicação da quantidade pela constante 5.
• Consuma o seguinte URL (https://pastebin.pl/view/raw/8fced5f8) em forma de API e retorne os
mesmos dados.
*/

app.post("/contagem-detalhada", async (req, res) => {
  const array = req.body;
  const total = array.length;
  const ordenadoMaiorQtd = ordenarMaiorQuantidade(array);
  const condicaoPagamento = ordenarCondicaoPagamento(ordenadoMaiorQtd);
  return res.status(200).json({ total: total, ordenadoMaiorQtd: ordenadoMaiorQtd });
});

/* Funções */
const ordenarMaiorQuantidade = (array) => {
  return array.sort((a, b) => b.quantidade - a.quantidade);
};

const atribuicaoConsumo = (array) => {
  array.forEach((e) => (e.previsao_consumo = e.quantidade * 5));
  return array;
};
/* Teste */
function compararElementos(a, b) {
    // Converte a condição de pagamento em uma classificação numérica
    const condicaoPagamentoRanking = { 'DIN': 5, '30': 4, 'R60': 3, '90': 2, '120': 1 };
  
    // Comparação por país (PORT tem prioridade)
    if (a.pais === "PORT" && b.pais !== "PORT") {
      return -1;
    } else if (b.pais === "PORT" && a.pais !== "PORT") {
      return 1;
    }
  
    // Comparação por quantidade
    if (a.quantidade > b.quantidade) {
      return -1;
    } else if (a.quantidade < b.quantidade) {
      return 1;
    }
  
    // Comparação por condição de pagamento
    return (condicaoPagamentoRanking[b.condicao_pagamento] || 0) - (condicaoPagamentoRanking[a.condicao_pagamento] || 0);
  }
  
  app.post('/ordenacao', (req, res) => {
    let array = req.body;
    array.sort(compararElementos);
    array.forEach(elemento => elemento.previsao_consumo = elemento.quantidade * 5);
    res.status(200).json(array);
  });
/* Teste */

// Iniciando o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server rodando na porta ${PORT}`);
});

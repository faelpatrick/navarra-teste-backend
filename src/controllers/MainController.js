import axios from "axios";

class MainController {
  //função para ordernar elementos
  ordenarelementos = (array) => {
    array.sort(this.compararElementos); //compara com base na requisição
    array.forEach((elemento) => (elemento.previsao_consumo = elemento.quantidade * 5));
    return array;
  };
  compararElementos = async (a, b) => {
    const condicaoPagamentoRanking = { DIN: 5, 30: 4, R60: 3, 90: 2, 120: 1 };

    // Comparação por quantidade (50% de importância)
    if (a.quantidade !== b.quantidade) {
      return b.quantidade - a.quantidade;
    }

    // Comparação por condição de pagamento (30% de importância)
    if (condicaoPagamentoRanking[a.condicao_pagamento] !== condicaoPagamentoRanking[b.condicao_pagamento]) {
      return (condicaoPagamentoRanking[b.condicao_pagamento] || 0) - (condicaoPagamentoRanking[a.condicao_pagamento] || 0);
    }

    // Comparação por país "PORT" (20% de importância)
    if (a.pais === "PORT" && b.pais !== "PORT") {
      return -1;
    } else if (b.pais === "PORT" && a.pais !== "PORT") {
      return 1;
    }

    return 0; // Se todos os critérios forem iguais, mantém a ordem original
  };

  //Boas Vindas
  index = async (req, res) => {
    return res.send("Hello World!");
  };
  //Status 200 OK
  status = async (req, res) => {
    return res.status(200).json({ message: "Status 200 - OK" });
  };

  //Número total de elementos do array recebido.
  totalElementos = async (req, res) => {
    const array = req.body;
    const total = array.length;
    return res.status(200).json({ "total de elementos": total });
  };

  //Ordenação conforme as ponderações
  ordenacaoCompleta = async (req, res) => {
    let array = req.body;
    const elementosOrdenados = this.ordenarelementos(array);
    res.status(200).json(elementosOrdenados);
  };

  //Consumindo API e retornando os dados ordenados
  consumirApi = async (req, res) => {
    try {
      const response = await axios.get("https://pastebin.pl/view/raw/8fced5f8");
      const elementosOrdenados = this.ordenarelementos(response.data);
      res.status(200).json(elementosOrdenados);
    } catch (error) {
      console.error("Ocorreu um erro:", error);
      return res.status(500).json({ error: "Dados não encontrados ou formato inválido." });
    }
  };
}

export default new MainController();

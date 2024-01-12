import app from "./app";

// Iniciando o servidor
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server rodando na porta ${PORT}`);
});

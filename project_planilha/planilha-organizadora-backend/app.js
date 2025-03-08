const express = require('express');
const path = require('path');
const attractionsRouter = require('./routes/attractions');

const app = express();

// Middleware para permitir JSON no corpo da requisição
app.use(express.json());

// Definir a rota para o arquivo de atrações
app.use('/api/attractions', attractionsRouter);

// Configuração de porta
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

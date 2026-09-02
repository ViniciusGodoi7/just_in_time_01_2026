const express = require('express');
const path = require('path');
const routes = require('./src/routes');

const app = express();
const PORT = 3000;

// Middleware para interpretar requisições JSON
app.use(express.json());

// Servir arquivos estáticos do frontend (HTML, CSS, JS do navegador)
app.use(express.static(path.join(__dirname, 'public')));

// Rotas da API Backend
app.use('/api', routes);

// Redireciona a rota raiz para a tela de login
app.get('/', (req, res) => {
    res.redirect('/login.html');
});

// Inicialização do servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando com sucesso em http://localhost:${PORT}`);
});
const express = require('express');
const router = express.Router();

const authController = require('./controllers/authController');
const produtoController = require('./controllers/produtoController');
const producaoController = require('./controllers/producaoController');

// Autenticação
router.post('/login', authController.login);

// Produtos
router.get('/produtos', produtoController.listar);
router.post('/produtos', produtoController.criar);
router.put('/produtos/:id', produtoController.atualizar);
router.delete('/produtos/:id', produtoController.deletar);

// Gestão de Produção (JIT)
router.get('/producao/produtos', producaoController.listarOrdenados);
router.post('/producao/movimentacao', producaoController.registrarMovimentacao);

module.exports = router;
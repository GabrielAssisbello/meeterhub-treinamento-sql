const express = require('express');
const controladorCarrinho = require('../controllers/controllerCarrinho.js');
const router = express.Router();
const app = require('../app');

app.post('/carrinhos', controladorCarrinho.criarCarrinho);
app.get('/carrinhos', controladorCarrinho.obterTodosCarrinhos);
app.get('/carrinhos/:id', controladorCarrinho.obterCarrinhoPorId);
app.put('/carrinhos/:id', controladorCarrinho.atualizarCarrinho);
app.delete('/carrinhos/:id', controladorCarrinho.excluirCarrinho);

module.exports = router;

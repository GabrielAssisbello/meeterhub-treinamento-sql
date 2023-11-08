const express = require('express');
const controladorCarrinho = require('../controllers/controllerCarrinho.js');
const router = express.Router();

router.post('/carrinhos', controladorCarrinho.criarCarrinho);
router.get('/carrinhos', controladorCarrinho.obterTodosCarrinhos);
router.get('/carrinhos/:id', controladorCarrinho.obterCarrinhoPorId);
router.put('/carrinhos/:id', controladorCarrinho.atualizarCarrinho);
router.delete('/carrinhos/:id', controladorCarrinho.excluirCarrinho);

module.exports = router;

const express = require('express');
const controladorCarrinho = require('../controllers/controllerCarrinho.js');
const router = express.Router();

router.post('/', controladorCarrinho.criarCarrinho);
router.get('/', controladorCarrinho.obterTodosCarrinhos);
router.get('/:id', controladorCarrinho.obterCarrinhoPorId);
router.put('/:id', controladorCarrinho.atualizarCarrinho);
router.delete('/:id', controladorCarrinho.excluirCarrinho);

module.exports = router;

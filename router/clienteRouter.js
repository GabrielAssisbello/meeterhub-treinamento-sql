const express = require('express');
const controladorCliente = require('../controllers/controllerCliente.js');
const router = express.Router();

router.post('/', controladorCliente.criarCliente);
router.get('/', controladorCliente.obterTodosClientes);
router.get('/:id', controladorCliente.obterClientePorId);
router.put('/:id', controladorCliente.atualizarCliente);
router.delete('/:id', controladorCliente.excluirCliente);

module.exports = router;
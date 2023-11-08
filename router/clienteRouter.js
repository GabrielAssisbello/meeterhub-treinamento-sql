const express = require('express');
const controladorCliente = require('../controllers/controllerCliente.js');
const router = express.Router();

router.post('/clientes', controladorCliente.criarCliente);
router.get('/clientes', controladorCliente.obterTodosClientes);
router.get('/clientes/:id', controladorCliente.obterClientePorId);
router.put('/clientes/:id', controladorCliente.atualizarCliente);
router.delete('/clientes/:id', controladorCliente.excluirCliente);

module.exports = router;
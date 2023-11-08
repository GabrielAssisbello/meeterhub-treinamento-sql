const express = require('express');
const controladorCliente = require('../controllers/controllerCliente.js');
const router = express.Router();
const app = require('../app');

app.post('/clientes', controladorCliente.criarCliente);
app.get('/clientes', controladorCliente.obterTodosClientes);
app.get('/clientes/:id', controladorCliente.obterClientePorId);
app.put('/clientes/:id', controladorCliente.atualizarCliente);
app.delete('/clientes/:id', controladorCliente.excluirCliente);

module.exports = router;
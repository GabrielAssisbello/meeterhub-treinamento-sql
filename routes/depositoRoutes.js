const express = require('express');
const controladorDeposito = require('../controllers/controllerDeposito.js');
const router = express.Router();
const app = require('../app');

app.post('/depositos', controladorDeposito.criarDeposito);
app.get('/depositos', controladorDeposito.obterTodosDepositos);
app.get('/depositos/:id', controladorDeposito.obterDepositoPorId);
app.put('/depositos/:id', controladorDeposito.atualizarDeposito);
app.delete('/depositos/:id', controladorDeposito.excluirDeposito);

module.exports = router;
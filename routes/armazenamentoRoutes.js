const express = require('express');
const controladorArmazenamento = require('../controllers/controllerArmazenamento.js');
const router = express.Router();
const app = require('../app');

app.post('/armazenamentos', controladorArmazenamento.criarArmazenamento);
app.get('/armanezamentos', controladorArmazenamento.obterTodosArmazenamentos);
app.get('/armazenamentos/:id', controladorArmazenamento.obterArmazenamentoPorId);
app.put('/armazenamentos/:id', controladorArmazenamento.atualizarArmazenamento);
app.delete('/armazenamentos/:id', controladorArmazenamento.excluirArmazenamento);

module.exports = router;


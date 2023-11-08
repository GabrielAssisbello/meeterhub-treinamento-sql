const express = require('express');
const controladorArmazenamento = require('../controllers/controllerArmazenamento.js');
const router = express.Router();

router.post('/armazenamentos', controladorArmazenamento.criarArmazenamento);
router.get('/armanezamentos', controladorArmazenamento.obterTodosArmazenamentos);
router.get('/armazenamentos/:id', controladorArmazenamento.obterArmazenamentoPorId);
router.put('/armazenamentos/:id', controladorArmazenamento.atualizarArmazenamento);
router.delete('/armazenamentos/:id', controladorArmazenamento.excluirArmazenamento);

module.exports = router;


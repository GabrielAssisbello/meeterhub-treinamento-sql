const express = require('express');
const controladorArmazenamento = require('../controllers/controllerArmazenamento.js');
const router = express.Router();

router.post('/', controladorArmazenamento.criarArmazenamento);
router.get('/', controladorArmazenamento.obterTodosArmazenamentos);
router.get('/:id', controladorArmazenamento.obterArmazenamentoPorId);
router.put('/:id', controladorArmazenamento.atualizarArmazenamento);
router.delete('/:id', controladorArmazenamento.excluirArmazenamento);

module.exports = router;


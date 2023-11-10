const express = require('express');
const controladorEditora = require('../controllers/controllerEditora.js');
const router = express.Router();

router.post('/', controladorEditora.criarEditora);
router.get('/', controladorEditora.obterTodosEditoras);
router.get('/:id', controladorEditora.obterEditoraPorId);
router.put('/:id', controladorEditora.atualizarEditora);
router.delete('/:id', controladorEditora.excluirEditora);

module.exports = router;
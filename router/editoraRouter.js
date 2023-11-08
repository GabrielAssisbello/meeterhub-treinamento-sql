const express = require('express');
const controladorEditora = require('../controllers/controllerEditora.js');
const router = express.Router();

router.post('/editoras', controladorEditora.criarEditora);
router.get('/editoras', controladorEditora.obterTodosEditoras);
router.get('/editoras/:id', controladorEditora.obterEditoraPorId);
router.put('/editoras/:id', controladorEditora.atualizarEditora);
router.delete('/editoras/:id', controladorEditora.excluirEditora);

module.exports = router;
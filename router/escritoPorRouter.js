const express = require('express');
const controladorEscritoPor = require('../controllers/controllerEscritoPor.js');
const router = express.Router();

router.post('/', controladorEscritoPor.criarEscritoPor);
router.get('/', controladorEscritoPor.obterEscritoPorPorId);
router.get('/:id', controladorEscritoPor.obterEscritoPorPorId);
router.put('/:id', controladorEscritoPor.atualizarEscritoPor);
router.delete('/:id', controladorEscritoPor.excluirEscritoPor);

module.exports = router;
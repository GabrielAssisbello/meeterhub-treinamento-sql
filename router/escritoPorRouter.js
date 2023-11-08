const express = require('express');
const controladorEscritoPor = require('../controllers/controllerEscritoPor.js');
const router = express.Router();

router.post('/escritopors', controladorEscritoPor.criarEscritoPor);
router.get('/escritopors', controladorEscritoPor.obterEscritoPorPorId);
router.get('/escritopors/:id', controladorEscritoPor.obterEscritoPorPorId);
router.put('/escritopors/:id', controladorEscritoPor.atualizarEscritoPor);
router.delete('/escritopors/:id', controladorEscritoPor.excluirEscritoPor);

module.exports = router;
const express = require('express');
const controladorContem = require('../controllers/controllerContem.js');
const router = express.Router();

router.post('/contems', controladorContem.criarContem);
router.get('/contems', controladorContem.obterTodosContem);
router.get('/contems/:id', controladorContem.obterContemPorId);
router.put('/contems/:id', controladorContem.atualizarContem);
router.delete('/contems/:id', controladorContem.excluirContem);

module.exports = router;
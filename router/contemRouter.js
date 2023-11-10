const express = require('express');
const controladorContem = require('../controllers/controllerContem.js');
const router = express.Router();

router.post('/', controladorContem.criarContem);
router.get('/', controladorContem.obterTodosContem);
router.get('/:id', controladorContem.obterContemPorId);
router.put('/:id', controladorContem.atualizarContem);
router.delete('/:id', controladorContem.excluirContem);

module.exports = router;
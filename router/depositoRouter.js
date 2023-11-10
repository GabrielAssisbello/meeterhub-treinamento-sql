const express = require('express');
const controladorDeposito = require('../controllers/controllerDeposito.js');
const router = express.Router();

router.post('/', controladorDeposito.criarDeposito);
router.get('/', controladorDeposito.obterTodosDepositos);
router.get('/:id', controladorDeposito.obterDepositoPorId);
router.put('/:id', controladorDeposito.atualizarDeposito);
router.delete('/:id', controladorDeposito.excluirDeposito);

module.exports = router;
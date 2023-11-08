const express = require('express');
const controladorDeposito = require('../controllers/controllerDeposito.js');
const router = express.Router();

router.post('/depositos', controladorDeposito.criarDeposito);
router.get('/depositos', controladorDeposito.obterTodosDepositos);
router.get('/depositos/:id', controladorDeposito.obterDepositoPorId);
router.put('/depositos/:id', controladorDeposito.atualizarDeposito);
router.delete('/depositos/:id', controladorDeposito.excluirDeposito);

module.exports = router;
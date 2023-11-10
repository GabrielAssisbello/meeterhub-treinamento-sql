const express = require('express');
const controladorAutor = require('../controllers/controllerAutor.js');
const router = express.Router();

router.post('/', controladorAutor.criarAutor);
router.get('/', controladorAutor.obterTodosAutores);
router.get('/:id', controladorAutor.obterAutorPorId);
router.put('/:id', controladorAutor.atualizarAutores);
router.delete('/:id', controladorAutor.excluirAutor);

module.exports = router;
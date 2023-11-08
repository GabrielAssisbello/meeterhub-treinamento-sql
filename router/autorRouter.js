const express = require('express');
const controladorAutor = require('../controllers/controllerAutor.js');
const router = express.Router();

router.post('/autores', controladorAutor.criarAutor);
router.get('/autores', controladorAutor.obterTodosAutores);
router.get('/autores/:id', controladorAutor.obterAutorPorId);
router.put('/autores/:id', controladorAutor.atualizarAutores);
router.delete('/autores/:id', controladorAutor.excluirAutor);

module.exports = router;
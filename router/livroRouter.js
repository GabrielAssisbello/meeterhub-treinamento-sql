const express = require('express');
const controladorLivro = require('../controllers/controllerLivro.js');
const router = express.Router();

router.post('/', controladorLivro.criarLivro);
router.get('/', controladorLivro.obterTodosLivros);
router.get('/:id', controladorLivro.obterLivroPorId);
router.put('/:id', controladorLivro.atualizarLivro);
router.delete('/:id', controladorLivro.excluirLivro);

module.exports = router;
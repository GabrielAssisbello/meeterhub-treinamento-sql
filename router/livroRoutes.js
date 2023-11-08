const express = require('express');
const controladorLivro = require('../controllers/controllerLivro.js');
const router = express.Router();

router.post('/livros', controladorLivro.criarLivro);
router.get('/livros', controladorLivro.obterTodosLivros);
router.get('/livros/:id', controladorLivro.obterLivroPorId);
router.put('/livros/:id', controladorLivro.atualizarLivro);
router.delete('/livros/:id', controladorLivro.excluirLivro);

module.exports = router;
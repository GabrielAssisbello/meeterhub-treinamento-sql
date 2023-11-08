const express = require('express');
const controladorLivro = require('../controllers/controllerLivro.js');
const router = express.Router();
const app = require('../app');

app.post('/livros', controladorLivro.criarLivro);
app.get('/livros', controladorLivro.obterTodosLivros);
app.get('/livros/:id', controladorLivro.obterLivroPorId);
app.put('/livros/:id', controladorLivro.atualizarLivro);
app.delete('/livros/:id', controladorLivro.excluirLivro);

module.exports = router;
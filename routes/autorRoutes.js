const express = require('express');
const controladorAutor = require('../controllers/controllerAutor.js');
const router = express.Router();
const app = require('../app');

app.post('/autores', controladorAutor.criarAutor);
app.get('/autores', controladorAutor.obterTodosAutores);
app.get('/autores/:id', controladorAutor.obterAutorPorId);
app.put('/autores/:id', controladorAutor.atualizarAutores);
app.delete('/autores/:id', controladorAutor.excluirAutor);

module.exports = router;
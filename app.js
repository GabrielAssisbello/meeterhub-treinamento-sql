const express = require('express');
const bodyParser = require('body-parser');
const controladorCliente = require('./controllers/controllerCliente.js');
const controladorAutor = require('./controllers/controllerAutor.js');
const controladorEditora = require('./controllers/controllerEditora.js');
const controladorLivro = require('./controllers/controllerLivro.js');

const app = express(); 
const porta = 3000; 

app.use(bodyParser.json());

app.post('/clientes', controladorCliente.criarCliente);
app.get('/clientes', controladorCliente.obterTodosClientes);
app.get('/clientes/:id', controladorCliente.obterClientePorId);
app.put('/clientes/:id', controladorCliente.atualizarCliente);
app.delete('/clientes/:id', controladorCliente.excluirCliente);

app.post('/editoras', controladorEditora.criarEditora);
app.get('/editoras', controladorEditora.obterTodosEditoras);
app.get('/editoras/:id', controladorEditora.obterEditoraPorId);
app.put('/editoras/:id', controladorEditora.atualizarEditora);
app.delete('/editoras/:id', controladorEditora.excluirEditora);
//
app.post('/autores', controladorAutor.criarAutor);
app.get('/autores', controladorAutor.obterTodosAutores);
app.get('/autores/:id', controladorAutor.obterAutorPorId);
app.put('/autores/:id', controladorAutor.atualizarAutor);
app.delete('/autores/:id', controladorAutor.excluirAutor);
//
app.post('/livros', controladorLivro.criarLivro);
app.get('/livros', controladorLivro.obterTodosLivros);
app.get('/livros/:id', controladorLivro.obterLivroPorId);
app.put('/livros/:id', controladorLivro.atualizarLivro);
app.delete('/livros/:id', controladorLivro.excluirLivro);

app.listen( porta, () => {
    console.log(`servidor no ar na porta ${porta}`); 
})



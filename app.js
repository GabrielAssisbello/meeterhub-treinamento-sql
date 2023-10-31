const express = require('express');
const bodyParser = require('body-parser');
const controladorCliente = require('./controller.js');
const controladorAutor = require('./controller.js');
const controladorEditora = require('./controller.js');
const controladorLivro = require('./controller.js');

const app = express(); 
const porta = 3307; 

app.use(bodyParser.json());

app.post('/clientes', controladorCliente.criarCliente);
app.get('/clientes', controladorCliente.obterTodosClientes);
app.get('/clientes/:id', controladorCliente.obterClientePorId);
app.put('/clientes/:id', controladorCliente.atualizarCliente);
app.delete('/clientes/:id', controladorCliente.excluirCliente);
//
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


/*
criação da tabela 
CREATE DATABASE IF NOT EXISTS mcliente;

USE mcliente;

CREATE TABLE IF NOT EXISTS clientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(40) NOT NULL,
    endereco VARCHAR(40),
    cidade VARCHAR(30)
);
*/
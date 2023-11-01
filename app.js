const express = require('express');
const bodyParser = require('body-parser');
const controladorCliente = require('./controllers/controllerCliente.js');
const controladorAutor = require('./controllers/controllerAutor.js');
const controladorEditora = require('./controllers/controllerEditora.js');
const controladorLivro = require('./controllers/controllerLivro.js');
const controladorArmazenamento = require('./controllers/controllerArmazenamento.js');
const controladorCarrinho = require('./controllers/controllerCarrinho.js');
const controladorContem = require('./controllers/controllerContem.js');
const controladorDeposito = require('./controllers/controllerDeposito.js');
const controladorEscritoPor = require('./controllers/controllerEscritoPor.js');

const app = express(); 
const porta = 3000; 

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
app.put('/autores/:id', controladorAutor.atualizarAutores);
app.delete('/autores/:id', controladorAutor.excluirAutor);
//
app.post('/livros', controladorLivro.criarLivro);
app.get('/livros', controladorLivro.obterTodosLivros);
app.get('/livros/:id', controladorLivro.obterLivroPorId);
app.put('/livros/:id', controladorLivro.atualizarLivro);
app.delete('/livros/:id', controladorLivro.excluirLivro);
//
app.post('/armazenamentos', controladorArmazenamento.criarArmazenamento);
app.get('/armanezamentos', controladorArmazenamento.obterTodosArmazenamentos);
app.get('/armazenamentos/:id', controladorArmazenamento.obterArmazenamentoPorId);
app.put('/armazenamentos/:id', controladorArmazenamento.atualizarArmazenamento);
app.delete('/armazenamentos/:id', controladorArmazenamento.excluirArmazenamento);
//
app.post('/carrinhos', controladorCarrinho.criarCarrinho);
app.get('/carrinhos', controladorCarrinho.obterTodosCarrinhos);
app.get('/carrinhos/:id', controladorCarrinho.obterCarrinhoPorId);
app.put('/carrinhos/:id', controladorCarrinho.atualizarCarrinho);
app.delete('/carrinhos/:id', controladorCarrinho.excluirCarrinho);
//
app.post('/contems', controladorContem.criarContem);
app.get('/contems', controladorContem.obterTodosContem);
app.get('/carrinhos/:id', controladorContem.obterContemPorId);
app.put('/carrinhos/:id', controladorContem.atualizarContem);
app.delete('/carrinhos/:id', controladorContem.excluirContem);
//
app.post('/depositos', controladorDeposito.criarDeposito);
app.get('/depositos', controladorDeposito.obterTodosDepositos);
app.get('/depositos/:id', controladorDeposito.obterDepositoPorId);
app.put('/depositos/:id', controladorDeposito.atualizarDeposito);
app.delete('/depositos/:id', controladorDeposito.excluirDeposito);
//
app.post('/escritopors', controladorEscritoPor.criarEscritoPor);
app.get('/escritopors', controladorEscritoPor.obterEscritoPorPorId);
app.get('/escritopors/:id', controladorEscritoPor.obterEscritoPorPorId);
app.put('/escritopors/:id', controladorEscritoPor.atualizarEscritoPor);
app.delete('/escritopors/:id', controladorEscritoPor.excluirEscritoPor);


app.listen( porta, () => {
    console.log(`servidor no ar na porta ${porta}`); 
})



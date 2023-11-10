const express = require('express');
const bodyParser = require('body-parser');
const porta = 3000; 
const app = express();
app.use(bodyParser.json());


// import rotas 
const clienteRouter = require('./router/clienteRouter.js');
const editoraRouter = require('./router/editoraRouter.js');
const autorRouter = require('./router/autorRouter.js');
const livroRouter = require('./router/livroRouter.js');
const armazenamentoRouter = require('./router/armazenamentoRouter.js');
const carrinhoRouter = require('./router/carrinhoRouter.js');
const contemRouter = require('./router/contemRouter.js');
const depositoRouter = require('./router/depositoRouter.js');
const escritoPorRouter = require('./router/escritoPorRouter.js');

//usando as rotas
app.use(clienteRouter);//endpoint cliente
app.use(editoraRouter);//endpoint editora
app.use(autorRouter);//endpoint autor
app.use(livroRouter);//endpoint livro
app.use(armazenamentoRouter);//endpoint armazenamento
app.use(carrinhoRouter);//endpoint carrinho
app.use(contemRouter);//endpoint contem
app.use(depositoRouter);//endpoint deposito
app.use(escritoPorRouter);//endpoint escritoPor

app.listen( porta, () => {
    console.log(`servidor no ar na porta ${porta}`); 
})



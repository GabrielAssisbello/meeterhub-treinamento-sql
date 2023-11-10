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
app.use('/cliente', clienteRouter);//endpoint cliente
app.use('/editora', editoraRouter);//endpoint editora
app.use('/autor', autorRouter);//endpoint autor
app.use('/livro', livroRouter);//endpoint livro
app.use('/armazenamento', armazenamentoRouter);//endpoint armazenamento
app.use('/carrinho', carrinhoRouter);//endpoint carrinho
app.use('/contem', contemRouter);//endpoint contem
app.use('/deposito', depositoRouter);//endpoint deposito
app.use('/escritoPor', escritoPorRouter);//endpoint escritoPor

app.listen( porta, () => {
    console.log(`servidor no ar na porta ${porta}`); 
})



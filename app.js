const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const porta = 3000; 
app.use(bodyParser.json());


// definindo as rotas 
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
app.use(clienteRouter);
app.use(editoraRouter);
app.use(autorRouter);
app.use(livroRouter);
app.use(armazenamentoRouter);
app.use(carrinhoRouter);
app.use(contemRouter);
app.use(depositoRouter);
app.use(escritoPorRouter);

app.listen( porta, () => {
    console.log(`servidor no ar na porta ${porta}`); 
})



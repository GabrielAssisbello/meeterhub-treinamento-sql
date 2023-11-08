const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const porta = 3000; 
app.use(bodyParser.json());
module.exports = app;

// definindo as rotas 
const clienteRoutes = require('./router/clienteRoutes.js');
const editoraRoutes = require('./router/editoraRoutes.js');
const autorRoutes = require('./router/autorRoutes.js');
const livroRoutes = require('./router/livroRoutes.js');
const armazenamentoRoutes = require('./router/armazenamentoRoutes.js');
const carrinhoRoutes = require('./router/carrinhoRoutes.js');
const contemRoutes = require('./router/contemRoutes.js');
const depositoRoutes = require('./router/depositoRoutes.js');
const escritoPorRoutes = require('./router/escritoPorRoutes.js');

//usando as rotas
app.use(clienteRoutes);
app.use(editoraRoutes);
app.use(autorRoutes);
app.use(livroRoutes);
app.use(armazenamentoRoutes);
app.use(carrinhoRoutes);
app.use(contemRoutes);
app.use(depositoRoutes);
app.use(escritoPorRoutes);

app.listen( porta, () => {
    console.log(`servidor no ar na porta ${porta}`); 
})



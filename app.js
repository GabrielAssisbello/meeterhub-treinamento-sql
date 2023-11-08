const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const porta = 3000; 
module.exports = app;
app.use(bodyParser.json());

// definindo as rotas 
const clienteRoutes = require('./routes/clienteRoutes.js');
const editoraRoutes = require('./routes/editoraRoutes.js');
const autorRoutes = require('./routes/autorRoutes.js');
const livroRoutes = require('./routes/livroRoutes.js');
const armazenamentoRoutes = require('./routes/armazenamentoRoutes.js');
const carrinhoRoutes = require('./routes/carrinhoRoutes.js');
const contemRoutes = require('./routes/contemRoutes.js');
const depositoRoutes = require('./routes/depositoRoutes.js');
const escritoPorRoutes = require('./routes/escritoPorRoutes.js');

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



const express = require('express');
const controladorContem = require('../controllers/controllerContem.js');
const router = express.Router();
const app = require('../app');

app.post('/contems', controladorContem.criarContem);
app.get('/contems', controladorContem.obterTodosContem);
app.get('/contems/:id', controladorContem.obterContemPorId);
app.put('/contems/:id', controladorContem.atualizarContem);
app.delete('/contems/:id', controladorContem.excluirContem);

module.exports = router;
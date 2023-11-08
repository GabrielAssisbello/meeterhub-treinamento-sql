const express = require('express');
const controladorEscritoPor = require('../controllers/controllerEscritoPor.js');
const router = express.Router();
const app = require('../app');

app.post('/escritopors', controladorEscritoPor.criarEscritoPor);
app.get('/escritopors', controladorEscritoPor.obterEscritoPorPorId);
app.get('/escritopors/:id', controladorEscritoPor.obterEscritoPorPorId);
app.put('/escritopors/:id', controladorEscritoPor.atualizarEscritoPor);
app.delete('/escritopors/:id', controladorEscritoPor.excluirEscritoPor);

module.exports = router;
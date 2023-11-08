const express = require('express');
const controladorEditora = require('../controllers/controllerEditora.js');
const router = express.Router();
const app = require('../app');

app.post('/editoras', controladorEditora.criarEditora);
app.get('/editoras', controladorEditora.obterTodosEditoras);
app.get('/editoras/:id', controladorEditora.obterEditoraPorId);
app.put('/editoras/:id', controladorEditora.atualizarEditora);
app.delete('/editoras/:id', controladorEditora.excluirEditora);

module.exports = router;
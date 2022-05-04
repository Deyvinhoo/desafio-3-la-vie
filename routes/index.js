const express = require("express");
const PsicologosController = require("../controllers/psicologos.controller")
const PacientesController = require("../controllers/pacientes.controller")

const routes = express.Router();

// Importar os controllers do porjeto exemplo linha abaixo
// const GenderController = require('../controllers/gender.controller');


// Rotas Login
routes.post('/login',PsicologosController.exemplo);

// Rotas Psicologos
routes.get('/psicologos',PsicologosController.listarPsicologos);
routes.get('/psicologos/:id',PsicologosController.listarPsicologoId);
routes.post('/psicologos',PsicologosController.cadastrarPsicologo);
routes.put('/psicologos/:id',PsicologosController.atualizarPsicologo);
routes.delete('/psicologos/:id',PsicologosController.deletarPsicologo);

// Rotas Pacientes
routes.get('/pacientes/:id',PacientesController.exemplo2);
routes.post('/pacientes',PacientesController.exemplo3);
routes.put('/pacientes/:id',PacientesController.exemplo4);
routes.delete('/pacientes/:id',PacientesController.exemplo5);

// Rotas Atendimentos
routes.get('/atendimentos/:id',AtendimentosController.exemplo2);
routes.post('/atendimentos',AtendimentosController.exemplo3);


module.exports = routes;

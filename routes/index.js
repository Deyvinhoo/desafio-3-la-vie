const express = require("express");

const routes = express.Router();

// Importar os controllers do porjeto exemplo linha abaixo
// const GenderController = require('../controllers/gender.controller');


// Rotas Login
routes.post('/login',PsicologosController.exemplo);

// Rotas Psicologos
routes.get('/psicologos/:id',PsicologosController.exemplo2);
routes.post('/psicologos',PsicologosController.exemplo3);
routes.put('/psicologos/:id',PsicologosController.exemplo4);
routes.delete('/psicologos/:id',PsicologosController.exemplo5);

// Rotas Pacientes
routes.get('/pacientes/:id',PacientesController.exemplo2);
routes.post('/pacientes',PacientesController.exemplo3);
routes.put('/pacientes/:id',PacientesController.exemplo4);
routes.delete('/pacientes/:id',PacientesController.exemplo5);

// Rotas Atendimentos
routes.get('/atendimentos/:id',AtendimentosController.exemplo2);
routes.post('/atendimentos',AtendimentosController.exemplo3);


module.exports = routes;

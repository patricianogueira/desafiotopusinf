/*----------------------------- CRIAÇÃO DE ROTAS ------------------------------------- */


const express = require('express'); //importa o express

const FuncionarioController = require('./Controllers/FuncionarioController');
const DependenteController = require('./Controllers/DependenteController');

const routes = express.Router();

routes.get('/funcionario', FuncionarioController.index);
routes.post('/funcionario', FuncionarioController.create);
routes.delete('/funcionario/:cod_funcionario', FuncionarioController.delete);
routes.patch('/funcionario/:cod_funcionario', FuncionarioController.update);

routes.get('/dependente', DependenteController.index);
routes.get('/dependente/:cod_funcionario', DependenteController.indexespecific);
routes.post('/dependente', DependenteController.create);
routes.delete('/dependente/:cod_dependente', DependenteController.delete);
routes.patch('/dependente/:cod_dependente', DependenteController.update);

module.exports = routes; //exportando as rotas
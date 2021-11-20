const connection = require('../database/connection');

module.exports = {
    async index (request, response) {
        const dependente = await connection('dependente').select('*');
        return response.json(dependente);
    },
    /*----------------------------- LISTAGEM ESPECÍFICA ------------------------------------- */
    async indexespecific (request, response) {
        const {cod_funcionario} = request.params;
        
        const dependente = await connection('dependente')
        .where('cod_funcionario', cod_funcionario)
        .select('*');
        return response.json(dependente);
    },
 /*----------------------------- CADASTRO DEPENDENTE ------------------------------------- */
    async create(request, response) {
        const { nome, data_nascimento, num_rg, num_cpf, nome_mae, cod_funcionario} = request.body;
        const dependente = await connection('dependente')
        .where('num_cpf', num_cpf)
        .select('*');

        const funcionario = await connection('funcionario')
        .where('cod_funcionario', cod_funcionario)
        .select('*');

        if(funcionario==0){ //LÓGICA PARA VERIFICAR SE EXISTE FUNCIONÁRIO COM O CÓDIGO DIGITADO
            return response.status(401).json({error:'Código do funcionário inválido'});
        }else{

            if (dependente!=0){ //LÓGICA PARA NÃO RECEBER MAIS DE UM CADASTRO COM UM MESMO CPF
                console.log(cod_funcionario);
                return response.status(401).json({error:'CPF já cadastrado'});
            }else{
                await connection('dependente').insert({
                    nome,
                    data_nascimento,
                    num_rg,
                    num_cpf,
                    nome_mae,
                    cod_funcionario,
                });
                console.log(cod_funcionario);
                return response.json({ cod_funcionario });
                
            }
    }
    },
 /*----------------------------- APAGAR CADASTRO ------------------------------------- */
    async delete (request, response) {
        const {cod_dependente} = request.params;
        
        const dependente = await connection('dependente')
        .where('cod_dependente', cod_dependente)
        .select('cod_dependente')

        await connection('dependente').where('cod_dependente', cod_dependente).delete();
        return response.status(204).send();
    },
 /*----------------------------- ATUALIZAR CADASTRO ------------------------------------- */
    async update(request, response) {
        const {cod_dependente} = request.params;

        const { nome, data_nascimento, num_rg, num_cpf, nome_mae} = request.body;
        await connection('dependente').where('cod_dependente', cod_dependente).update({
            nome,
            data_nascimento,
            num_rg,
            num_cpf,
            nome_mae,
        });

        return response.json({ nome });
    }
};
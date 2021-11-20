const connection = require('../database/connection');

module.exports = {
    async index (request, response) {
        const funcionario = await connection('funcionario').select('*');
        return response.json(funcionario);
    },
 /*----------------------------- CADASTRO DE FUNCIONÁRIO ------------------------------------- */
    async create(request, response) {
        const { nome, data_nascimento, num_rg, num_cpf, nome_mae} = request.body;
        const funcionario = await connection('funcionario')
        .where('num_cpf', num_cpf)
        .select('*');

        if (funcionario!=0){ //LÓGICA PARA NÃO RECEBER MAIS DE UM CADASTRO COM O MESMO CPF
            return response.status(401).json({error:'CPF já cadastrado'});
        }else{
            await connection('funcionario').insert({
                nome,
                data_nascimento,
                num_rg,
                num_cpf,
                nome_mae,
            });
            
            return response.json({ nome });
         }
    },
 /*----------------------------- APAGAR CADASTRO ------------------------------------- */
    async delete (request, response) {
        const {cod_funcionario} = request.params;
        
        const dependente = await connection('dependente')
        .where('cod_funcionario', cod_funcionario)
        .select('*');
       //AO APAGAR CADASTRO DE FUNCIONÁRIO, APAGA OS DEPENDENTES VINCULADOS AO MESMO
        await connection('dependente').where('cod_funcionario', cod_funcionario).delete(); 
       
        const funcionario = await connection('funcionario')
        .where('cod_funcionario', cod_funcionario)
        .select('cod_funcionario')

        await connection('funcionario').where('cod_funcionario', cod_funcionario).delete();
        return response.status(204).send();
    },
/*----------------------------- ATUALIZA CADASTRO CADASTRO ------------------------------------- */
    async update(request, response) {
        const {cod_funcionario} = request.params;

        const { nome, data_nascimento, num_rg, num_cpf, nome_mae} = request.body;
        await connection('funcionario').where('cod_funcionario', cod_funcionario).update({
            nome,
            data_nascimento,
            num_rg,
            num_cpf,
            nome_mae,
        });

        return response.json({ nome });
    },
};
/*----------------------------- CRIAÇÃO DE TABELA FUNCIONÁRIO------------------------------------- */

exports.up = function(knex) {
    return knex.schema.createTable('funcionario', function(table){
        table.increments('cod_funcionario').primary();
        table.string('nome').notNullable();
        table.date('data_nascimento').notNullable();
        table.string('num_rg').notNullable();
        table.string('num_cpf').notNullable();
        table.string('nome_mae').notNullable();
    });
  };
  
  exports.down = function(knex) {
      return knex.schema.dropTable('funcionario');
  };

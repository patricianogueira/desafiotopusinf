/*----------------------------- CRIAÇÃO DE TABELA DEPENDENTE------------------------------------- */


exports.up = function(knex) {
    return knex.schema.createTable('dependente', function(table){
        table.increments('cod_dependente').primary();
        table.string('nome').notNullable();
        table.date('data_nascimento').notNullable();
        table.string('num_rg').notNullable();
        table.string('num_cpf').notNullable();
        table.string('nome_mae').notNullable();
        
          
        table.integer('cod_funcionario').notNullable();
  
        table.foreign('cod_funcionario').references('cod_funcionario').inTable('funcionario');
      });
  };
  
  exports.down = function(knex) {
     return knex.schema.dropTable('dependente');
  };

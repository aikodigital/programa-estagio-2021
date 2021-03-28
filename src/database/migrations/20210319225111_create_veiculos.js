
exports.up = function(knex) {
  return knex.schema.createTable('veiculos',function(table){
    table.specificType('id').primary();       //Optei por colocar como uma string, a fim de gerar uma chave hexadecimal única para cada veículo
    table.string('name').notNullable();
    table.string('modelo').notNullable();
    table.specificType('linhasID').notNullable();
    
    table.foreign('linhasID').references('idLinha').inTable('linhas');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('veiculos');
};


exports.up = function(knex) {
  return knex.schema.createTable('veiculos',function(table){
    table.string('id').primary();       //Optei por colocar como uma string, a fim de gerar uma chave hexadecimal única para cada veículo
    table.string('name').notNullable();
    table.string('modelo').notNullable();
    table.integer('linhasID').notNullable();
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable('veiculos');
};

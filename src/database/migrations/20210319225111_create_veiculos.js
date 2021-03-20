
exports.up = function(knex) {
  return knex.schema.createTable('veiculos',function(table){
    table.integer('id').primary();
    table.string('name').notNullable();
    table.string('modelo').notNullable();
    table.integer('linhasID').notNullable();
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable('veiculos');
};

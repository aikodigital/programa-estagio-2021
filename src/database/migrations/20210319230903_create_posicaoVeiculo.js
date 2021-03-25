
exports.up = function(knex) {
    return knex.schema.createTable('posicaoVeiculos',function(table){
        table.increments();
        table.float('latitude').notNullable();
        table.float('longitude').notNullable();
        table.specificType('veiculoID').notNullable();

        table.foreign('veiculoID').references('id').inTable('veiculos');
        })
};

exports.down = function(knex) {
  return knex.schema.dropTable('posicaoVeiculos');
};


exports.up = function(knex) {
    return knex.schema.createTable('posicaoVeiculos',function(table){
        table.increments();
        table.double('latitude').notNullable();
        table.double('longitude').notNullable();
        table.integer('veiculoID').notNullable();

        table.foreign('veiculoID').references('id').inTable('veiculos');
        })
};

exports.down = function(knex) {
  return knex.schema.dropTable('posicaoVeiculos');
};

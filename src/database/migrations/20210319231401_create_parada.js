
exports.up = function(knex) {
    return knex.schema.createTable('paradas',function(table){
        table.integer('idParada').primary();
        table.string('name').notNullable();
        table.double('latitude').notNullable();
        table.double('longitude').notNullable();
        })
};

exports.down = function(knex) {
  return knex.schema.dropTable('paradas');
};

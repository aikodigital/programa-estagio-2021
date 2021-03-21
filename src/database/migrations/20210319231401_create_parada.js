
exports.up = function(knex) {
    return knex.schema.createTable('paradas',function(table){
        table.specificType('idParada').primary();       // Utilizei do mesmo tipo de estratégia da tabela veículos, para que não haja repetições
        table.string('name').notNullable();
        table.specificType('latitude').notNullable();
        table.specificType('longitude').notNullable();
        })
};

exports.down = function(knex) {
  return knex.schema.dropTable('paradas');
};

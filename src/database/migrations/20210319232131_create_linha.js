
exports.up = function(knex) {
    return knex.schema.createTable('linhas',function(table){
        table.integer('idLinha').primary();
        table.string('name').notNullable();
        table.specificType('paradas','INT[]').notNullable();
        })
};

exports.down = function(knex) {
  return knex.schema.dropTable('linhas');
};


exports.up = function(knex) {
    return knex.schema.createTable('linhas',function(table){
        table.specificType('idLinha').primary();
        table.string('name').notNullable();
        table.specificType('paradas','integer').notNullable();
        
        table.foreign('paradas').references('idParada').inTable('paradas');
      
      })
};

exports.down = function(knex) {
  return knex.schema.dropTable('linhas');
};

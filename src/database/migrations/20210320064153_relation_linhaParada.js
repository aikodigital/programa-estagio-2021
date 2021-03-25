
exports.up = function(knex) {
    return knex.schema.createTable('linhasPorParada',function(table){
        table.increments('id').primary();
        table.specificType('idLinha').notNullable();
        table.specificType('idParada').notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('linhasPorParada');
};

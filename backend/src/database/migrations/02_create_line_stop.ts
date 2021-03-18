import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('line_stop', table => {
    table.increments('Id').primary();

    table.integer('line_id')
      .notNullable()
      .references('Id')
      .inTable('Linha');

    table.integer('stop_id')
      .notNullable()
      .references('Id')
      .inTable('Parada');
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('line_stop');
}
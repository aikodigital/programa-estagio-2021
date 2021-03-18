import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('Parada', table => {
    table.increments('Id').primary();
    table.string('Name').notNullable();
    table.decimal('Latitude').notNullable();
    table.decimal('Longitude').notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('Parada');
}
import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('Linha', table => {
    table.increments('Id').primary();
    table.string('Name').notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('Linha');
}
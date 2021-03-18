import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('Veiculo', table => {
    table.increments('Id').primary();
    table.string('Name').notNullable();
    table.string('Modelo').notNullable();

    table.integer('LinhaId')
      .notNullable()
      .references('Id')
      .inTable('Linha');
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('Veiculo');
}
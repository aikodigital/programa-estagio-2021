const knex = require('knex');
const configuration = require('../../knexfile');

const connections = knex(configuration.development);

module.exports= connections;
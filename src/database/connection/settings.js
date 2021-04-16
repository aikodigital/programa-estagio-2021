const pg_conn = 'postgres://' + (process.env.USER_DB || 'postgres') + ':' + (process.env.PASSWORD_DB || 'postgres') + '@' + (process.env.DB_DOMAIN || 'localhost') + ':5432/postgres';
const dbName = process.env.DATABASE_NAME || 'aiko';
const db_url = 'postgres://postgres:postgres@localhost:5432/' + dbName;
module.exports = { db_url, dbName, pg_conn };
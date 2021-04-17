const { Client } = require('pg');
const { pg_conn, dbName } = require('./settings');

const create = async () => {
	const client = new Client(pg_conn);
	await client.connect(err => {
		if (err) {
			console.error('connection error', err.stack);
		} else {
			console.log('connected');
		}
	});
	// create the db and ignore any errors, for example if it already exists.
	return await client.query('CREATE DATABASE ' + dbName).then(() => { console.log(`created database '${dbName}'`); }).catch(() => { console.log(`database '${dbName}' already exists`); });
};
module.exports = create;
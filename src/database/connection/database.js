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
	return client.query('CREATE DATABASE ' + dbName, function () {
		//db should exist now, initialize Sequelize
		console.log(`create database "${ dbName }" if not exists`);
		client.end(); // close the connection
	});
};
module.exports = create;
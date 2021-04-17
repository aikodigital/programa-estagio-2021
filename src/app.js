const app = require('express')();
const { swaggerSetup, swaggerServe } = require('./swagger');
const sequelize = require('./database/connection/sequelize');
sequelize.authenticate().then(() => { console.log('connected to database!!!'); sequelize.sync(); })
	.catch(error => console.log(error));//create tables if not exists
// eslint-disable-next-line no-unused-vars


app.use('/linha', require('./routes/linha'));
app.use('/parada', require('./routes/parada'));
app.use('/veiculo', require('./routes/veiculo'));
app.use('/posicao', require('./routes/posicao'));
app.use('/relations', require('./routes/relations'));
app.use('/api/v1', swaggerServe, swaggerSetup);
process.on('exit', function () {
	console.log('closing connection');
	sequelize.close();
});
process.on('SIGINT', function () {
	process.exit(2);
});
module.exports = app;
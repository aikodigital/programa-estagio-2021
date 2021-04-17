const createdb = require('./src/database/connection/database');
createdb().then(()=>{
	const app = require('./src/app.js');
	const Port = process.env.PORT || 3000;
	app.listen(Port,()=>{console.log('running on Port: '+Port);});
});
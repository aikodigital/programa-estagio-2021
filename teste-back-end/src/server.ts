import app from './app';

const PORTA = process.env.PORT || 3000;

const server = app.listen(PORTA, () => console.log(`App listening on PORT ${PORTA}`));

process.on('SIGINT', () => {
  server.close();
  console.log('App closed');
});

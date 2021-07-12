import { createConnection } from 'typeorm';

const connectToDB = async () => {
  const connection = await createConnection();
  console.log(`Connected with database ${connection.options.database}`);

  process.on('SIGINT', () => {
    connection.close().then(() => console.log('Closed connection with database'));
  });
};

export default connectToDB;

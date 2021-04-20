import {Pool} from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
  host: process.env.PGHOST,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  port: Number(process.env.PORT),
  database: process.env.PGDB,
});

pool.connect().then((res) => {
  console.log('Successfully connected with database');
}).catch((err) => {
  console.error(err);
  process.exit();
});

export default pool;

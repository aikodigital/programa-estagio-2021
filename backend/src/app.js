import express from 'express';

import './database/index';

const app = express();

app.get('/', (req, res) => {
  res.send('Olaa');
});

export default app;

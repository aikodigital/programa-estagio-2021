const app = require('./config/express-config');

app.listen(
  process.env.PORT,
  console.log(`API listening on port ${process.env.PORT}`),
);

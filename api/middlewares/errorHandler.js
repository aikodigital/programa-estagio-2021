function errorHandler(error, req, res, next) {
  const message = error.message;
  const status = 400; // Internal Server Error
  console.log(error);
  res.status(status).json(message);
}

module.exports = errorHandler;

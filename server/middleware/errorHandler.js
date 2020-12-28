function logErrors(err, req, res, next) {
  console.error(err.stack)
  next(err)
}

function clientErrorHandler(error, req, res, next) {
  res.status(500).send({ error })
}

module.exports = {
  logErrors,
  clientErrorHandler,
}

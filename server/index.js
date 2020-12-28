const express = require("express")
const app = express()
const port = 3001

const con = require("./db/db_connection.js")
const {
  logErrors,
  clientErrorHandler,
  errorHandler,
} = require("./middleware/errorHandler.js")

var index = require("./routes/index.js")
var products = require("./routes/products.js")

app.use(function (req, res, next) {
  req.con = con
  next()
})

app.use("/", index)
app.use("/products", products)

app.use(logErrors)
app.use(clientErrorHandler)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

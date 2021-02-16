const express = require("express")
var cors = require("cors")
const app = express()
const port = 3001

const con = require("./db/db_connection.js")
const {
  logErrors,
  clientErrorHandler,
} = require("./middleware/errorHandler.js")

var index = require("./routes/index.js")
var products = require("./routes/products.js")

app.use(cors())
app.use(function (req, res, next) {
  req.con = con
  next()
})

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use("/", index)
app.use("/products", products)

app.use(logErrors)
app.use(clientErrorHandler)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

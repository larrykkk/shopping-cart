var mysql = require("mysql")

var con = mysql.createConnection({
  host: "localhost",
  user: "larry",
  password: "5K6awa8qef",
  database: "shopping_cart",
  multipleStatements: true,
})

con.connect(function (err) {
  if (err) throw err
  console.log("Connected!")
})

module.exports = con

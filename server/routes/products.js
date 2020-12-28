var express = require("express")
var router = express.Router()

router.get("/", function (req, res, next) {
  var db = req.con

  // try {
  // } catch (error) {}

  db.query("SELECT * FROM productss", function (err, rows) {
    if (err) {
      return next(err.sqlMessage)
    }
    var data = rows
    console.log(123)
  })
})

router.post("/", function (req, res, next) {
  var db = req.con
  db.query("SELECT * FROM products", function (err, rows) {
    if (err) {
      return next(err.sqlMessage)
    }
    var data = rows
    console.log(123)
    res.send({
      data,
    })
  })
})

router.put("/", function (req, res, next) {
  res.send("Hello World!")
})

router.delete("/", function (req, res, next) {
  res.send("login?")
})

module.exports = router

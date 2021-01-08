var express = require("express")
var mysql = require("mysql")
var router = express.Router()
var dayjs = require("dayjs")

router.get("/", async function (req, res, next) {
  var db = req.con

  db.query(
    "SELECT * FROM products;SELECT COUNT(id) FROM products",
    (err, rows) => {
      if (err) {
        return next(err.sqlMessage)
      }
      const [search_result, [counts]] = rows
      res.send({
        payload: {
          search_result,
          counts: counts["COUNT(id)"],
        },
      })
    }
  )
})

router.post("/", function (req, res, next) {
  var db = req.con
  const { name, is_public, price, description, img } = req.body
  const create_time = dayjs().format("YYYY-MM-DDTHH:mm:ss")
  db.query(
    `INSERT INTO products (name, is_public, price, description, img,  create_time) VALUES (?,?,?,?,?,?);`,
    [name, is_public, price, description, img, create_time],
    function (err, rows) {
      if (err) {
        return next(err.sqlMessage)
      }
      res.send({
        payload: {
          id: rows.insertId,
        },
      })
    }
  )
})

router.put("/:id", function (req, res, next) {
  var db = req.con
  var id = req.params.id
  var query = mysql.format("UPDATE products SET ? WHERE ?", [req.body, { id }])

  db.query(query, function (err, rows) {
    if (err) {
      return next(err.sqlMessage)
    }
    res.send({
      payload: {
        id: rows.insertId,
      },
    })
  })
})

router.delete("/", function (req, res, next) {
  res.send("login?")
})

module.exports = router

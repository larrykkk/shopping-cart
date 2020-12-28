var express = require("express")
var router = express.Router()

router.get("/", function (req, res) {
  res.send("Hello World!")
})

router.get("/user", function (req, res) {
  res.send("Hello World!")
})

router.get("/login", function (req, res) {
  res.send("login?")
})

router.get("/logout", function (req, res) {
  res.send("login?")
})

module.exports = router

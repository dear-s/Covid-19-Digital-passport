var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/users", function (req, res, next) {
  res.send("users page source");
});

module.exports = router;

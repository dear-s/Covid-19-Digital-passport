var express = require("express");
var router = express.Router();

router.get("/hospitals", function (req, res, next) {
  res.send("Calling from backend - hospitals");
});

module.exports = router;

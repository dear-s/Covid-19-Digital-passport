var express = require("express");
var router = express.Router();
const hospital_enters_schema = require("../models/hospital_enters_schema");

router.get("/", async (req, res, next) => {
  console.log("connection done for 3rd...");

  const hosp_info = await hospital_enters_schema.find({});
  console.log("hosp_info: ", hosp_info);
  res.send(hosp_info);
});

module.exports = router;

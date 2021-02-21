var express = require("express");
var router = express.Router();
const hospital_info_schema = require("../models/hospital_info_schema");
const hospital_enters_schema = require("../models/hospital_enters_schema");

// id --> hospital_id
router.get("/", async (req, res, next) => {
  // console.log("connection done...");

  // get id somehow ---- get id - NEED TO DO
  const full_path = req._parsedOriginalUrl.pathname;
  global.id = full_path.slice(16, full_path.length);

  console.log(global.id);

  const hosp_info = await hospital_info_schema.findOne({
    hospital_id: global.id,
  });
  console.log("hosp_info: ", hosp_info);
  res.send(hosp_info);
});

// passport number and status to be entered
router.post("/", async (req, res, next) => {
  // add data to the database - write operation
  console.log("req.body: ", req.body);
  const new_entry = new hospital_enters_schema(req.body);
  await new_entry.save();
  res.redirect(`http://localhost:3000/#/hospitalportal/${global.id}`);
});

module.exports = router;

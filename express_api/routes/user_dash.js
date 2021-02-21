var express = require("express");
var router = express.Router();
const user_schema = require("../models/user_schema");
const hospital_enters_schema = require("../models/hospital_enters_schema");

// id --> hospital_id
router.get("/", async (req, res, next) => {
  // get id somehow ---- get id - NEED TO DO
  const full_path = req._parsedOriginalUrl.pathname;

  global.username = full_path.slice(12, full_path.length);

  console.log("global.username: ", global.username);

  const user_info = await user_schema.findOne({
    username: global.username,
  });
  console.log("user_info: ", user_info);

  const { passport } = user_info;

  const fetch_status = await hospital_enters_schema.findOne({
    passport_no: passport,
  });

  final_json = user_info;
  final_array = [user_info];

  console.log("fetch_status: ", fetch_status);
  if (fetch_status === null) {
    final_array.push("Not Vaccinated");
  } else {
    final_array.push(fetch_status["status"]);
  }

  console.log(final_array);
  // console.log("find sta: ", user_info["status"]);

  res.send(final_array);
});

module.exports = router;

var express = require("express");
var router = express.Router();
// const user_schema = require("../models/user_schema");
const hospital_info_schema = require("../models/hospital_info_schema");
// const hospital_enters_schema = require("../models/hospital_enters_schema");

router.post("/", async (req, res, next) => {
  console.log("login form connected");
  console.log("req.body: ", req.body);

  if (req.body["name"] != null) {
    // hospital wants to register

    const { hospital_id, name, address, password } = req.body;
    const new_entry = new hospital_info_schema({
      hospital_id: hospital_id,
      name: name,
      address: address,
      password: password,
    });
    await new_entry.save();
    res.redirect(`http://localhost:3000/#/hospitalportal/${hospital_id}`);
  } else {
    // simple login
    const { hospital_id } = req.body;
    res.redirect(`http://localhost:3000/#/hospitalportal/${hospital_id}`);
  }
});

module.exports = router;

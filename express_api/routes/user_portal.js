var express = require("express");
var router = express.Router();
const user_schema = require("../models/user_schema");

// passport number and status to be entered
router.post("/", async (req, res, next) => {
  //   console.log("login form connected");
  console.log("req.body: ", req.body);

  if ("username" in req.body) {
    const { username, password } = req.body;

    // get all usernames
    const get_usernames = await user_schema.find({ username: username });

    if (get_usernames.length === 0) {
      res.send(
        "Please register first. This username doesn't exist in the database."
      );
    } else {
      res.redirect(`http://localhost:3000/#/userportal/${username}`);
    }
  } else {
    //   register form
    const {
      user_username,
      user_password,
      user_first_name,
      user_last_name,
      user_dob,
      user_passport_no,
      user_address,
    } = req.body;

    json_to_enter = {
      username: user_username,
      first_name: user_first_name,
      last_name: user_last_name,
      dob: user_dob,
      address: user_address,
      // vaccination_center: String,
      passport_no: user_passport_no,

      password: user_password,
    };

    //   store it in user_schema
    const new_entry = new user_schema(json_to_enter);
    await new_entry.save();
    res.redirect(`http://localhost:3000/#/userportal/${user_username}`);
  }
});

module.exports = router;

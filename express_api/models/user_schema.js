const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const user_schema = new Schema({
  username: String,
  first_name: String,
  last_name: String,
  dob: String,
  address: String,
  vaccination_center: String,
  passport_no: String,

  password: String,
});

module.exports = mongoose.model("UserInfo", user_schema);

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const hospital_info = new Schema({
  hospital_id: String,
  password: String,
  name: String,
  address: String,
});

module.exports = mongoose.model("HospitalInfo", hospital_info);

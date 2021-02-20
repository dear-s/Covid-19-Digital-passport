// module.exports = (mongoose) => {
//   const covid_tracker = mongoose.model(
//     "covid_tracker",
//     mongoose.Schema({
//       name: String,
//       ssn: String, // will modify
//     })
//   );

//   return covid_tracker;
// };

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const hospital_enters = new Schema({
  passport_no: String,
  status: String,
});

module.exports = mongoose.model("HospitalEnters", hospital_enters);

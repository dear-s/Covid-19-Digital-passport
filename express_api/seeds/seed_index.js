const mongoose = require("mongoose");
const {
  passport_no,
  status,
  hospital_id,
  hospital_name,
  hospital_address,
  passwords,
  first_name,
  last_name,
  user_address,
  vaccination_center,
  dob,
  age,
  gender,
  username,
} = require("./fakeData");

const HospitalEntersSchema = require("../models/hospital_enters_schema");
const HospitalInfoSchema = require("../models/hospital_info_schema");
const UserInfoSchema = require("../models/user_schema");

mongoose.connect("mongodb://localhost:27017/pearl-hacks", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});

// let's generate data
const sample = (array) => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
  // reseting it everytime
  await HospitalEntersSchema.deleteMany({});

  for (let i = 0; i < 10; i++) {
    // const random1000 = Math.floor(Math.random() * 1000);

    const dataset = new HospitalEntersSchema({
      passport_no: `${sample(passport_no)}`,
      status: `${sample(status)}`,
    });
    await dataset.save();
  }

  await HospitalInfoSchema.deleteMany({});

  for (let i = 0; i < 10; i++) {
    const dataset2 = new HospitalInfoSchema({
      hospital_id: `${sample(hospital_id)}`,
      name: `${sample(hospital_name)}`,
      address: `${sample(hospital_address)}`,
      password: `${sample(passwords)}`,
    });
    await dataset2.save();
  }

  await UserInfoSchema.deleteMany({});

  for (let i = 0; i < 10; i++) {
    const dataset3 = new UserInfoSchema({
      username: `${sample(username)}`,
      first_name: `${sample(first_name)}`,
      last_name: `${sample(last_name)}`,
      dob: `${sample(dob)}`,
      address: `${sample(user_address)}`,
      // vaccination_center: `${sample(vaccination_center)}`,
      passport_no: `${sample(passport_no)}`,
      password: `${sample(passwords)}`,
    });
    await dataset3.save();
  }
};

seedDB().then(() => {
  mongoose.connection.close();
});

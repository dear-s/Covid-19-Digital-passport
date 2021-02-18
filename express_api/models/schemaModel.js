module.exports = (mongoose) => {
  const covid_tracker = mongoose.model(
    "covid_tracker",
    mongoose.Schema({
      name: String,
      ssn: String, // will modify
    })
  );

  return covid_tracker;
};

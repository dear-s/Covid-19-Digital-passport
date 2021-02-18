const dbConfig = require("../config_mongo/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.covid_tracker = require("./schemaModel.js")(mongoose);

module.exports = db;

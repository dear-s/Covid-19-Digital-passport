const dbConfig = require("../config_mongo/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.hospital_enters_schema = require("./hospital_enters_schema.js")(mongoose);
db.hospital_info_schema = require("./hospital_info_schema.js")(mongoose);
db.user_schema = require("./user_schema")(mongoose);

module.exports = db;

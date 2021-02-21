var createError = require("http-errors");
var express = require("express");
var path = require("path");
// var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");

var homeRouter = require("./routes/home");
var usersRouter = require("./routes/users");
var hospitalsRouter = require("./routes/hospitals"); // changes
var hospitalsIDRouter = require("./routes/hos_dash"); // changes
var viewDBRouter = require("./routes/view_db"); // changes
var userPortalRouter = require("./routes/user_portal"); // changes
var userDashRouter = require("./routes/user_dash"); // changes

const bodyParser = require("body-parser");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", homeRouter);
app.use("/users", usersRouter);
app.use("/hospitals", hospitalsRouter); // changes
app.use("/hospitals/view_db", viewDBRouter); // changes
app.use("/hospitalportal/:id", hospitalsIDRouter); // changes
app.use("/userportal", userPortalRouter); // changes
app.use("/userportal/:username", userDashRouter); // changes

const db = require("./models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;

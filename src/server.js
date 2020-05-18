const express = require("express");
const session = require('express-session');
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");
const passport = require('./Scripts/authentication/passport');
const bodyParser = require('body-parse');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(bodyParser.json());
app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// copied from homework 14
app.use(session({ 
  secret: "Racecar", 
  resave: false, 
  saveUninitialized: false 
}));
app.use(passport.initialize());
app.use(passport.session());

mongoose.connect("mongodb://localhost:27017", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.use(require("./routes/api-routes"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
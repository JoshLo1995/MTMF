const express = require("express");
const session = require('express-session');
// const logger = require("morgan");
// mongoDB stuff
const mongoose = require("mongoose");
const users = require('./routes/api/users');
// const routes = require('./routes/api/users');
const db = require('./config/keys');

const compression = require("compression");
const passport = require('passport');
const bodyParser = require('body-parser');


const PORT = process.env.PORT || 4000;

const app = express();

// app.use(logger("dev"));

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
// Passport middleware
app.use(passport.initialize());

//Passport config
require("./config/passport")(passport);

// Routes
app.use('/api/users', users);
app.use(passport.session());

// mongodb://localhost:27017
mongoose.connect(db.mongoURI, {
  useNewUrlParser: true,
  useFindAndModify: false
}).then(() => {
  console.log('MongoDB successfully connected');
}).catch(err => {if (err) throw err});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
// Require Libraries
const express = require('express');
const knex = require('knex');

// App Setup
const knexConfig = require('./knexfile.js');
const port = process.env.PORT || 3000;
var app = express();

// Middleware
app.use(express.json()); // parse query string parameters as JSON (GET/DELETE)
app.use(express.urlencoded({ extended: true })); // parse body parameters as JSON (POST/PUT)


// Routes
//Save path of route files

const cors = require('cors')
// var app = express()
app.use(cors())
app.use(function (req, res, next) {
  const allowedOrigins = [
    "http://localhost:3080/main#",
    // "http://localhost:3000",
  ];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", 'http://localhost:3080/main#');
  }
  // res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

//Url routes to file
var employees = require('./routes/employees');
var pto = require('./routes/pto');
var assignedtraining = require('./routes/assignedtraining');
var performance = require('./routes/performance');
var login = require('./routes/login');

app.use('/pto',pto);
app.use('/assignedtraining',assignedtraining);
app.use('/employees',  employees);
app.use('/performance', performance);
app.use('/login', login);

// const pool = knex(knexConfig);

app.get('/', (req, res) => {
    res.send('Hello Squirrel');
  });

// Start Server

 app.listen(3000, () => {
   console.log('Listening on port localhost:3000!');
 });
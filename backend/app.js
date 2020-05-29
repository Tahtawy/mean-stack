require('dotenv/config');

const express = require('express');
const mongoose = require('mongoose');

// Create express instance.
const app = express();

// Import middlewares.
const middlewares = require('./app/middlewares');
middlewares(app);

//Import routes.
const routes = require('./app/routes');
routes(app);

// Connect to database.
mongoose.connect(
  process.env.DATABASE_CONNECTION,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log('connected to db');
  },
);

// Listen to port 3000.
app.listen(3000);

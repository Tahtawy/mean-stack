const express = require('express');
const router = express.Router();

const postRoutes = require('./post');

module.exports = (app) => {
  app.get('/', (req, res) => {
    res.send('Hello There');
  });

  app.use('/posts', postRoutes);
};

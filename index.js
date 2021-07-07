'use strict';

require(`dotenv`).config();
const server = require('./src/server');
const pool = require('./src/models/pool');

pool
  .connect()
  .then(() => {
    server.start(process.env.PORT || 3000);
  })
  .catch((e) => {
    console.error('cant connect', e.massage);
  });

const Sequelize = require('sequelize');
const pg = require('pg');
const pgHstore = require('pg-hstore');
const db = new Sequelize(`postgres://localhost:5432/plantr`);

module.exports = db;

const Sequelize = require('sequelize');
const db = new Sequelize(`postgres://localhost:5432/plantr`);

module.exports = db;

const Gardener = db.define('garderner', {
  name: Sequelize.STRING,
  age: Sequelize.INTEGER
});

const Plot = db.define('plot', {
  size: Sequelize.INTEGER,
  shaded: Sequelize.BOOLEAN
});

const Vegetable = db.define('vegetable', {
  name: Sequelize.STRING,
  color: Sequelize.STRING,
  plantedOn: Sequelize.DATE // originally planted_on not in camel case
});

Vegetable.belongsToMany(Plot, {through: 'veggiePlot'});
Plot.belongsToMany(Vegetable, {through: 'veggiePlot'});

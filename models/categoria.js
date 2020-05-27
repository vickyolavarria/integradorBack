var Sequelize = require("sequelize");
var db = require('../db/index')
//-- Page Model
class Categoria extends Sequelize.Model {}

Categoria.init(
  {
    categoria: {
      type: Sequelize.STRING,
      allowNull: false,
    }
  },
  { sequelize:db, modelName: "categoria" }
);

module.exports = Categoria
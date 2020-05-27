var Sequelize = require("sequelize");
var db = require("../db/index");

class Producto extends Sequelize.Model {}
Producto.init(
  {
    nombre: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    precio: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    descripcion: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    disponible: {
      type: Sequelize.BOOLEAN,
      allowNull: false
    },
    truncarDescripcion: {
      type: Sequelize.VIRTUAL,
      get() {
        return `${this.getDataValue("descripcion").slice(0, 19)}...`;
      },
    }
  },
  { sequelize: db, modelName: "producto" }
);
 
Producto.beforeValidate((product, options) => {
  if (!product.disponible) {
    product.nombre = `${product.nombre} NO DISPONIBLE`;
  }
});

module.exports = Producto;

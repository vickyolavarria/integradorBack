const Producto = require("./producto")
const Categoria = require("./categoria");
Producto.belongsTo(Categoria, { as: 'categoria' });

module.exports = {Categoria,Producto}
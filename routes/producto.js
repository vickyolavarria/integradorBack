const express = require("express");
const router = express.Router();
const { Producto } = require("../models/index");
const { Categoria } = require("../models/index");

router.get("/", (req, res, next) => {
  Producto.findAll().then((productos) => {
    res.json({ productos: productos });
  });
});

router.get("/:id", function (req, res, next) {
  Producto.findOne({ where: { id: req.params.id } }).then(function (
    foundProduct
  ) {
    res.json({ foundProduct: foundProduct });
  });
});

router.post("/", (req, res, next) => {
  Categoria.findOrCreate({
    where: {
      categoria: req.body.categoria,
    },
  })
    .then((categoria) => {
      return Producto.create({
        nombre: req.body.nombre,
        precio: parseInt(req.body.precio),
        descripcion: req.body.descripcion,
        disponible: req.body.disponible,
      }).then((createdProduct) => {
        return createdProduct.setCategoria(categoria[0]);
      });
    })
    .then(function (createdProduct) {
      res.sendStatus(200);
    })
    .catch(next);
});

router.put("/:id", (req, res, next) => {
  Producto.findOne({ where: { id: req.params.id } }).then((producto) => {
    producto.reload();
  });
});

router.delete("/:id", (req, res, next) => {
  Producto.findOne({ where: { id: req.params.id } }).then((producto) => {
    producto.destroy();
  });
});

module.exports = router;

const express = require("express");
const router = express.Router();
const productoRouter = require("./producto");
const categoriaRouter = require("./categoria");

router.use("/productos", productoRouter);
router.use("/categorias", categoriaRouter);

module.exports = router;
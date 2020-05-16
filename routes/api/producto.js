const router = require("express").Router();
const { Producto, CategoriaProducto } = require("../../db");
const Sequelize = require("Sequelize");
const op = Sequelize.Op;

router.get("/", async (req, res) => {
  const categoriaProductos = await Producto.findAll({
    include: [
      {
        model: CategoriaProducto,
        where: {
          IdCategoriaProducto: { [op.col]: "producto.IdCategoriaProducto" },
        },
      },
    ],
  });
  res.json(categoriaProductos);
});

router.post("/", async (req, res) => {
  const categoriaProductos = await Producto.create(req.body);
  res.json(categoriaProductos);
});

router.post("/get", async (req, res) => {
  const producto = await Producto.findAll({
    where: { IdCategoriaProducto: req.body.IdCategoriaProducto },
    include: [
      {
        model: CategoriaProducto,
        where: {
          IdCategoriaProducto: { [op.col]: "producto.IdCategoriaProducto" },
        },
      },
    ],
  });
  res.json(producto);
});

router.put("/:idProducto", async (req, res) => {
  await Producto.update(req.body, {
    where: { idProducto: req.params.idProducto },
  });
  res.json({ success: "se ha modificado" });
});

router.delete("/:idProducto", async (req, res) => {
  await Producto.destroy({
    where: { idProducto: req.params.idProducto },
  });
  res.json({ succes: "se ha eliminado." });
});
module.exports = router;

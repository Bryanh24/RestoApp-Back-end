const router = require("express").Router();
const { CategoriaProducto } = require("../../db");

router.get("/", async (req, res) => {
  const categoriaProductos = await CategoriaProducto.findAll();
  res.json(categoriaProductos);
});

router.post("/", async (req, res) => {
  const categoriaProductos = await CategoriaProducto.create(req.body);
  res.json(categoriaProductos);
});

router.put('/:IdCategoriaProducto', async (req, res) => {
    await CategoriaProducto.update(req.body, {
        where: {IdCategoriaProducto: req.params.IdCategoriaProducto}
    });
    res.json({success: 'se ha modificado'})
});

router.delete("/:IdCategoriaProducto", async (req, res) => {
  await CategoriaProducto.destroy({
    where: { IdCategoriaProducto: req.params.IdCategoriaProducto },
  });
  res.json({ succes: "se ha eliminado." });
});
module.exports = router;

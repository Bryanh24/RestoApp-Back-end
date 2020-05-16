const router = require("express").Router();
const { Plato, CategoriaPlato } = require("../../db");
const Sequelize = require("sequelize");
const op = Sequelize.Op;

router.get("/", async (req, res) => {
  const plato = await Plato.findAll({
    include: [
      {
        model: CategoriaPlato,
        where: { IdCategoriaPlato: { [op.col]: "plato.IdCategoriaPlato" } },
      },
    ],
  });
  res.json(plato);
});

router.post("/get", async (req, res) => {
  const plato = await Plato.findAll({
    where: { IdCategoriaPlato: req.body.IdCategoriaPlato },
    include: [
      {
        model: CategoriaPlato,
        where: {
          IdCategoriaPlato: { [op.col]: "plato.IdCategoriaPlato" },
        },
      },
    ],
  });
  res.json(plato);
});

router.post("/", async (req, res) => {
  const plato = await Plato.create(req.body);
  res.json(plato);
});

router.put("/:IdPlato", async (req, res) => {
  await Plato.update(req.body, {
    where: { IdPlato: req.params.IdPlato },
  });
  res.json({ success: "se ha modificado" });
});

router.delete("/:IdPlato", async (req, res) => {
  await Plato.destroy({
    where: { IdPlato: req.params.IdPlato },
  });
  res.json({ succes: "se ha eliminado." });
});
module.exports = router;

const router = require("express").Router();
const bcrypt = require('bcryptjs');
const { Empleado } = require("../../db");

router.get("/", async (req, res) => {
  const empleados = await Empleado.findAll();
  res.json(empleados);
});

router.post("/register", async (req, res) => {
    req.body.PasswordEmpleado = bcrypt.hashSync(req.body.PasswordEmpleado,10);
  const empleados = await Empleado.create(req.body);
  res.json(empleados);
});

router.put("/:idEmpleado", async (req, res) => {
  await Empleado.update(req.body, {
    where: { idEmpleado: req.params.idEmpleado },
  });
  res.json({ success: "se ha modificado" });
});

router.delete("/:idEmpleado", async (req, res) => {
  await Empleado.destroy({
    where: { idEmpleado: req.params.idEmpleado },
  });
  res.json({ succes: "se ha eliminado." });
});
module.exports = router;

router.post("/login", async (req, res) => {
  const empleados = await Empleado.findOne({
    where: {
      UsuarioEmpleado: req.body.UsuarioEmpleado,
    },
  });
  if (empleados != null) {
    if (req.body.PasswordEmpleado === empleados.PasswordEmpleado) {
      res.json(empleados);
    } else {
      res.json({ message: "Password Incorrecto" });
    }
  }
  else{
    res.json({ message: "El usuario No existe." });
  }
});

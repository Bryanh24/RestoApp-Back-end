const router = require("express").Router();
const bcrypt = require("bcryptjs");
const Sequelize = require("sequelize");
const op = Sequelize.Op;
const { Empleado, Rol } = require("../../db");
const moment = require("moment");
const jwt = require("jwt-simple");

router.get("/", async (req, res) => {
  const empleados = await Empleado.findAll({
    include: [
      {
        model: Rol,
        where: { idRol: { [op.col]: "empleado.idRol" } },
      },
    ],
  });
  res.json(empleados);
});

router.post("/register", async (req, res) => {
  const usuario = await Empleado.findOne({
    where: { UsuarioEmpleado: req.body.UsuarioEmpleado },
  });
  if (usuario) {
    res.json({ error: "Ya existe un usuario con ese nombre" });
  } else {
    req.body.PasswordEmpleado = bcrypt.hashSync(req.body.PasswordEmpleado, 10);
    const empleados = await Empleado.create(req.body);
    res.json(empleados);
  }
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
  const empleado = await Empleado.findOne({
    where: { UsuarioEmpleado: req.body.UsuarioEmpleado },
  });
  if (empleado) {
    const iguales = bcrypt.compareSync(
      req.body.PasswordEmpleado,
      empleado.PasswordEmpleado
    );
    if (iguales) {
      res.json({ succes: createToken(empleado) });
     
    } else {
      res.json({ error: "contraseña incorrecta" });
    }
  } else {
    res.json({error:"el usuario no existe"});
  }
});

const createToken = (empleado) => {
  const payload = {
    idEmpleado: empleado.IdEmpleado,
    isLogged : true,
    createdAt: moment().unix(),
    expiredAt: moment().add(24, "hours").unix()
  };
  return jwt.encode(payload,'token');
};
module.exports = router;

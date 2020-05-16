const {CategoriaPlato} = require('../db')
module.exports = (sequelize, type) => {
  const Plato = sequelize.define("plato", {
    IdPlato: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    IdCategoriaPlato: type.INTEGER,
    NombrePlato: type.STRING,
    DescripcionPlato: type.STRING,
    PrecioPlato: type.DOUBLE,
  });
  return Plato;
};

const { plato } = require("../db");
module.exports = (sequelize, type) => {
  const categoriaPlato = sequelize.define("categoriaPlato", {
    IdCategoriaPlato: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    DescripcionCategoriaPlato: type.STRING,
  });
  categoriaPlato.associate = (models) => {
    categoriaPlato.hasMany(plato, {
      onDelete: "cascade",
    });
  };
  return categoriaPlato;
};

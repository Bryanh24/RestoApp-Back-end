module.exports = (sequelize, type) =>{
    return sequelize.define('Plato',{
         IdPlato: {
             type: type.INTEGER,
             primaryKey: true,
             autoIncrement: true
         },
         IdCategoriaPlato: type.INTEGER,
         NombrePlato: type.STRING,
         DescripcionPlato: type.STRING,
         PrecioPlato: type.DOUBLE,
    })
}
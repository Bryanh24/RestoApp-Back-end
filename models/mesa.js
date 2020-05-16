module.exports = (sequelize, type) =>{
    return sequelize.define('mesa',{
         IdMesa: {
             type: type.INTEGER,
             primaryKey: true,
             autoIncrement: true
         },
         DescripcionMesa: type.STRING ,
         EstadoMesa: type.INTEGER
    })
}
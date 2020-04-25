module.exports = (sequelize, type) =>{
    return sequelize.define('mesa',{
         idRol: {
             type: type.INTEGER,
             primaryKey: true,
             autoIncrement: true
         },
         DescripcionMesa: type.STRING 
    })
}
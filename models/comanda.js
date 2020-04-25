module.exports = (sequelize, type) =>{
    return sequelize.define('comanda',{
         IdComanda: {
             type: type.INTEGER,
             primaryKey: true,
             autoIncrement: true
         },
         IdEmpleado: type.INTEGER ,
         IdMesa:type.INTEGER 
    })
}
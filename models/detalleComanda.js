module.exports = (sequelize, type) =>{
    return sequelize.define('detalleComanda',{
         IdDetalleComanda: {
             type: type.INTEGER,
             primaryKey: true,
             autoIncrement: true
         },
         IdComanda: type.INTEGER ,
         IdProducto:type.INTEGER,
         IdPlato: type.INTEGER,
         CantidadDetalleComanda: type.INTEGER,
         ImporteDetalleComanda: type.INTEGER
    })
}
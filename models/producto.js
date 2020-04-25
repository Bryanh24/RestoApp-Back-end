module.exports = (sequelize, type) =>{
    return sequelize.define('Producto',{
         IdProducto: {
             type: type.INTEGER,
             primaryKey: true,
             autoIncrement: true
         },
         IdCategoriaProducto: type.INTEGER,
         DescripcionProducto: type.STRING,
         PrecioProducto: type.DOUBLE,
         CantidadProducto: type.INTEGER
    })
}
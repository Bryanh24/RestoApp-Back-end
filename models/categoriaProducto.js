module.exports = (sequelize, type) =>{
    return sequelize.define('categoriaProducto',{
         IdCategoriaProducto: {
             type: type.INTEGER,
             primaryKey: true,
             autoIncrement: true
         },
         DescripcionCategoriaProducto: type.STRING 
    })
}

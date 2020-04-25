module.exports = (sequelize, type) =>{
    return sequelize.define('categoriaPlato',{
         IdCategoriaPlato: {
             type: type.INTEGER,
             primaryKey: true,
             autoIncrement: true
         },
         DescripcionCategoriaPlato: type.STRING 
    })
}
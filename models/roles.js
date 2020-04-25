 module.exports = (sequelize, type) =>{
     return sequelize.define('rol',{
          idRol: {
              type: type.INTEGER,
              primaryKey: true,
              autoIncrement: true
          },
          DescripcionRol: type.STRING 
     })
 }
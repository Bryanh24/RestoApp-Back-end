module.exports = (sequelize, type) =>{
    return sequelize.define('empleado',{
         IdEmpleado: {
             type: type.INTEGER,
             primaryKey: true,
             autoIncrement: true
         },
         idRol: type.INTEGER ,
         UsuarioEmpleado:type.STRING, 
         PasswordEmpleado:  type.STRING(150), 
         NombreEmpleado:  type.STRING,  
         ApellidoEmpleado:  type.STRING, 
         DireccionEmpleado:  type.STRING, 
         TelefonoEmpleado: type.STRING
    })
}
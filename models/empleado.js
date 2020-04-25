module.exports = (sequelize, type) =>{
    return sequelize.define('empleado',{
         IdEmpleado: {
             type: type.INTEGER,
             primaryKey: true,
             autoIncrement: true
         },
         IdRol: type.INTEGER ,
         UsuarioEmpleado:type.STRING, 
         PasswordEmpleado:  type.STRING, 
         NombreEmpleado:  type.STRING,  
         ApellidoEmpleado:  type.STRING, 
         DireccionEmpleado:  type.STRING, 
         TelefonoEmpleado: type.INTEGER
    })
}
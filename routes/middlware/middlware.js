const jwt = require("jwt-simple");
const moment = require('moment');

const checkToken = (req, res, next) => {
  if (!req.headers["token"]) {
    return res.json({ error: "se necesita incluir el token en la cabecera" });
  } else {
    const Token = req.headers["token"];
    let payload = {};

    try {
      payload = jwt.decode(Token, "token");
    } catch (error) {
      return res.json({ error: "el token es incorrecto" });
    } 
    if(payload.expiredAt < moment().unix()){
        return res.json({error: 'el Token ha expirado.'})
    }
    req.IdEmpleado = payload.IdEmpleado;
  }
  next();
};

module.exports ={
    checkToken : checkToken
}

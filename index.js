const express = require("express");
const bodyParser = require("body-parser");
const apiRouter = require("./routes/api");
var cors = require("cors");
const app = express();

require("./db");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/", function (req, res) {
  res.send('<H1 style="text-align: center">ResoApp SOLO PERONAL AUTORIZADO</H1>');
});

app.use("/api", apiRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("servidor arrancado EN EL PUERTO PORT " + PORT);
});

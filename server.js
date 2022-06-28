const express = require("express");
const app = express();
require("./bin/connect");

require("./bin/routes")(app)
require("./bin/middlewares")(app);

app.listen(3000, ()=>{
  console.log("Servidor Funcionando")
})

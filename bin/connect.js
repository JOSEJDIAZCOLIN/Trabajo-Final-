const mongoose = require("mongoose");


try{
  //se intenta establecer una conexion con los datos de conexion
  mongoose.connect("mongodb+srv://KaterineC:qiIWvZeRY1CnDLsJ@cluster0.s2y2k.mongodb.net/?retryWrites=true&w=majority",
    {useNewUrlParser: true}
  );
  console.log("connectd database.");
} catch (e) {
  console.error(e);
}
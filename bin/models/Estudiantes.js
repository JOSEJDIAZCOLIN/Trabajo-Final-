  const mongoose =require("mongoose");
const Schema = mongoose.Schema;

const EstudianteSchema =new Schema({
  nombre1: String,
  nombre2: String,
  apellido1: String,
  apellido2: String,
  edad: Number,
  curso:String,
  grado: String,
  puzzle:[
        {
          type: Schema. Types.ObjectId,
          ref: "Puzzle"
        }
      ],
   sopadl:[
        {
          type: Schema. Types.ObjectId,
          ref: "Sopadl"
        }
      ]
    }
);
var Estudiante = mongoose.model("Estudiante", EstudianteSchema);
module.exports = Estudiante;
  

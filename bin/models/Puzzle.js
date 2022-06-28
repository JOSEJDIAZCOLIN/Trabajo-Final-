const mongoose =require("mongoose");
const Schema = mongoose.Schema;

const PuzzleSchema =new Schema({
  imagen: String,
  puntuacion:Number,
  n_piezas:Number,
  casillas:Matriz,
  dificultad:String,
  puzzle:[
        {
          type: Schema. Types.ObjectId,
          ref: "Estudiantes"
        }
      ]
    }
);
var Puzzle = mongoose.model("Puzlle", PuzzleSchema);
module.exports = Puzzle;
  
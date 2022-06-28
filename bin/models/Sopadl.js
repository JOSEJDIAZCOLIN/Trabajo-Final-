const mongoose =require("mongoose");
const Schema = mongoose.Schema;

const SopadlleSchema =new Schema({
  palabras_h: String,
  palabras_v: String,
  letras:Array,
  
  sopadl:[
        {
          type: Schema. Types.ObjectId,
          ref: "Estudiantes"
        }
      ]
    }
);
var Sopadl = mongoose.model("Sopadl", SopadlSchema);
module.exports = Sopadl;
const Estudiantes = require("./models/Estudiantes");


module.exports = (app)=>{
app.get("/",(req, res)=>{
  res.send("Pagina Principal")
})
  //Traer todos los estudiantes
  app.get("/estudiantes", (req, res)=>{
    res.send("Todos los estudiantes")
  })
  //Crear un estudiante
  app.post("/estudiantes", (req, res)=>{
    let estudiante =req.body
    Estudiantes.create(estudiante, (err, e)=>{
      res.send(e);
    })
  //Traer estudiante por su ID
  app.get("/estudiantes/:id",(req, res)=>{})
    req.send("estudiantes")
    })                 
  //Modificar un estudiante
  app.put("/estudiantes/:id", (req, res)=>{})
  //Eliminar estudiante
  app.delete("/estudiantes/:id", (req, res)=>{})
  }
const express=require("express");
const connectDB = require("./config/database");
const usuarioRoutes=require("./routes/user.routes")
//inicializa la app de express
const app = express();
//Middleware para parsear json
app.use(express.json())
//conectar a la base de datos
connectDB();
//ruta de bienvenida
app.get("/", (req,res)=>{
    
    res.send("bienvenidos a la API de Usuarios")
})
const PORT=3000;
//ruta de usuarios
app.use("/api/usuarios", usuarioRoutes)
//iniciar el servidor
app.listen(PORT,()=>{
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
    
});




    

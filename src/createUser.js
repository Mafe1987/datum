const User = require("./models/user.model")
const connectDb = require("./config/database");
const usuarioACrear= {
    name:"Santino Ursino",
    email: "santino@gmail.com",
    age:22
}
connectDb();
const guardandoUsuarios= new User(usuariosACrear)
//guardar en la base de datos.
guardandoUsuarios
.save()
.then(()=>console.log("usuario guardado"))
.catch(err=>console.error("Error al guardar usuario" + err));
const express=require("express");
const{
    crearUsuario,
    obtenerUsuarioPorId,
    obtenerUsuarios,
    actualizarUsuario,
    eliminarUsuario,

}= require("../controllers/user.controller");
const router=express.Router();
//ruta para crear nuevo usuario
router.post("/crear",crearUsuario);
//ruta para traer todos los usuarios
router.get("/", obtenerUsuarios);
//ruta para obtener un usuario especifico
router.get("/:id", obtenerUsuarioPorId);
//ruta para actualizar usuario
router.put("/:id", actualizarUsuario)
//ruta eliminar usuario
router.delete("/:id", eliminarUsuario)
module.exports=router;
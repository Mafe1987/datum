const Usuario = require("../models/user.model");
const bcrypt = require("bcrypt");
//crear nuevo usuario
const crearUsuario=async(usuarioData)=>{
    try{
        // Hashear la contraseña antes de guardarla
        const salt = await bcrypt.genSalt(10);
        usuarioData.contraseña = await bcrypt.hash(usuarioData.contraseña, salt);

        const nuevoUsuario = new Usuario(usuarioData);
        return await nuevoUsuario.save();
    } catch (error) {
        console.error(error);
        throw error;
    }

}; 
//obtener todos los usuarios
const obtenerUsuarios=async()=>{
    try{
        return await Usuario.find();
    }catch(error){
        console.error(error);
    }
};
//obtener usuario por su id
const obtenerUsuarioPorId=async(id)=>{
    try{
        const usuario=await Usuario.findById(id);
        if(!usuario){
            return "Usuario no encontrado";
        }
        return usuario;
    }catch(error){
        console.error(error);
    }
};
//actualizar un usuario existente
const actualizarUsuario=async(id, datosActualizados)=>{
    try{
        const usuarioActualizado=await Usuario.findByIdAndUpdate(
            id,
            datosActualizados,
            {new: true, runValidators: true}
        );
        if(!usuarioActualizado){
            return "Usuario no encontrado";
        }
        return usuarioActualizado;
    }catch(error){
        console.log("Estas en un error" + error);
    }
};
//eliminar un usuario
const eliminarUsuario=async(id)=>{
    try{
        const usuarioEliminado= await Usuario.findByIdAndDelete(id);
        if(!usuarioEliminado){
            return"Usuario no encontrado";
        }

    return{mensaje: "Usuario eliminado correctamente"};

    }catch(error){
    console.error(error);
    }
};
//verificar credenciales
const verificarCredenciales = async (req, res) => {
    try {
        const { email, contraseña } = req.body;
        if (!email || !contraseña) {
            return res.status(400).json({
                exito: false,
                mensaje: "Email y contraseña requeridos"
            });
        }

        const resultado = await usuarioService.verificarCredenciales(email, contraseña);

        if (!resultado.exito) {
            return res.status(401).json({
                exito: false,
                mensaje: resultado.mensaje
            });
        }

        res.status(200).json({
            exito: true,
            mensaje: "Credenciales correctas",
            datos: resultado.usuario,
        });
    } catch (error) {
        res.status(500).json({
            exito: false,
            mensaje: "Error al verificar credenciales",
            error: error.message
        });
    }
};
 
module.exports={
    crearUsuario,
    obtenerUsuarios,
    obtenerUsuarioPorId,
    actualizarUsuario,
    eliminarUsuario,
    verificarCredenciales,
};



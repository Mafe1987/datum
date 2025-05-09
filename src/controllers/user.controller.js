const usuarioService = require("../services/user.service");
//crear usuario nuevo
const crearUsuario = async (req, res) =>{
    try{
        const nuevoUsuario = await usuarioService.crearUsuario(req.body);
        res.status(201).json({
            exito: true,
            mensaje: "Usuario creado exitosamente",
            datos: nuevoUsuario,
        });
    }catch (error){
        res.status(404).json({
            exito: false,
            mensaje: error,
        });
    }
};
//obtener todos los usuarios

const obtenerUsuarios = async (req, res) => {
    try{
        const usuarios = await usuarioService.obtenerUsuarios();
        res.status(200).json({
            exito: true,
            datos: usuarios,
        });
    } catch (error){
        res.status(404).json({
            exito: false,
            mensaje: error,
        });

    }
};
//obtener usuario por ID
const obtenerUsuarioPorId = async(req, res) => {
    try{
        const usuario = await usuarioService.obtenerUsuarioPorId(req.params.id);
        res.status(200).json({
            exito: true,
            datos: usuario,

        });
    }catch (error){
        res.status(404).json({
            exito:false,
            message: error,
        });
    }
};
//actualiza un usuario existente
const actualizarUsuario=async(req, res)=>{
    try{
        const usuarioActualizado = await usuarioService.actualizarUsuario(
            req.params.id,
            req.body
        );
        res.status(200).json({
            exito:true,
            mensaje: "Usuario actualizado correctamente",
            datos:usuarioActualizado,
        });
    }catch (error){
        res.status(404).json({
            exito: false,
        });
    }
};
//eliminar usuario
const eliminarUsuario = async(req, res) => {
    try{
        await usuarioService.eliminarUsuario(req.params.id);
        res.status(200).json({
            exito: true,
            mensaje: "El usuario se elimino correctamente",

        });
    }catch(error){
        res.status(404).json({
            exito:false,
        });
    }
};
const verificarCredenciales=async(req, res) => {
    try{
        const{email,contraseña}=req.body
        if(!email || !contraseña){
            return res.status(400).json({
                exito:false,
                mensaje:"Email y contraseña requeridos"
            });
        }
        const resultados=await usuarioService.verificarCredenciales(email,contraseña)
        if(!resultados.exito){
            return res.status(401).json({
                exito:false,
                mensaje:resultados.mensaje
            });
        }
        return res.status(200).json({
            exito:true,
            mensaje:"Credenciales correctas",
            
        })
    }
    catch(error){
        res.status(500).json({
            exitos:false,
            mensaje:"error al verificar credenciales",
            error:error.mensaje,
        })
    }
}
module.exports={
    crearUsuario,
    obtenerUsuarios,
    obtenerUsuarioPorId,
    actualizarUsuario,
    eliminarUsuario,
};
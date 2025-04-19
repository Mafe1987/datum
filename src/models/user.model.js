const mongoose = require("mongoose");
const usuarioSchema = new mongoose.Schema({
    nombre:{
        type: String,
        required: [true, "El nombre es obligatorio"],
    },
    email:{
        type: String,
        required: [true, "El email es obligatorio"],
        unique: true,
    },
    edad:{
        type: Number,
        min:0,
    },
    activo:{
        type:Boolean,
        default:true,
    },
    fechaCreacion:{
        type: Date,
        default:Date.now,
    },
});
const Usuario= mongoose.model("Usuario", usuarioSchema);
module.exports=Usuario;
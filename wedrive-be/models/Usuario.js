const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const usuarioSchema = new Schema({
    usuario: {
        type: String,
        trim: true,
        unique: true,
        required: true,
    },
    contrasenna: {
        type: String,
        trim: true,
        required: true,
    },
    correo: {
      type: String,
      minLength: 10,
      required: true,
      lowercase: true
    },
    activo: {
        type: Boolean,
        default: true,
    },
    fechaRegistro: {
      type: Date,
      default: () => Date.now(),
      immutable: true,
    },
    nombre: {
        type: String,
        trim: true,
        required: true,
    },
    primerApellido: {
        type: String,
        trim: true,
        required: true,
    },
    segundoApellido: {
        type: String,
        trim: true,
    },
    fechaNacimiento: {
      type: Date
    },
});

const Usuario = model('Usuario', usuarioSchema);
module.exports = Usuario;
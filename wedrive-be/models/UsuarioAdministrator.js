const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const administradorSchema = new Schema({
  rol: [string],
  usuario: {
    type: Schema.Types.ObjectId,
    ref: 'Usuario',
    required: true,
  },
});

const Administrador = model('Administrador', administradorSchema);
module.exports = Administrador;
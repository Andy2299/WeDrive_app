const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const clienteSchema = new Schema({
  direccion: {
      type: String,
  },
  usuario: {
    type: Schema.Types.ObjectId,
    ref: 'Usuario',
    required: true,
  },
});

const Cliente = model('Cliente', clienteSchema);
module.exports = Cliente;
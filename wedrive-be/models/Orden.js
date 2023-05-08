const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const ordenSchema = new Schema({
    cliente: {
      type: Schema.Types.ObjectId,
      ref: 'Cliente',
      required: true,
    },
    vehiculo: {
      type: Schema.Types.ObjectId,
      ref: 'Vehiculo',
      required: true,
    },
    fechaCompra: {
      type: Date,
      default: () => Date.now(),
      immutable: true,
    },
  });

const Orden = model('Orden', ordenSchema);
module.exports = Orden;
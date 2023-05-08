const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const vehiculoSchema = new Schema({
    modelo:  {
      type: String,
      required: true,
    },
    marca: {
      type: Schema.Types.ObjectId,
      ref: 'Marca',
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    annio: {
      type: String,
      required: true,
    },
    precio: {
      type: Number,
      required: true,
    },
    estilo: {
      type: Schema.Types.ObjectId,
      ref: 'Estilo'
    },
    numPuertas: {
      type: Number,
      required: true,
    },
    cantPasajers: {
      type: Number,
      required: true,
    },
  });

const Vehiculo = model('Vehiculo', vehiculoSchema);
module.exports = Vehiculo;
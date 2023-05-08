const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const puntoCargaSchema = new Schema({
    nombre:  {
      type: String,
      required: true,
    },
    tipo:  {
      type: String,
      required: true,
    },
    costoHora: {
      type: Number,
      required: true,
    },
    kiloWatts: {
      type: Number,
      required: true,
    }
  });

const PuntoCarga = model('PuntoCarga', puntoCargaSchema);
module.exports = PuntoCarga;
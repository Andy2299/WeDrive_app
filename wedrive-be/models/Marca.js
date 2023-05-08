const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const marcaSchema = new Schema({
    marca:  {
      type: String,
      required: true,
    },
  });

const Marca = model('Marca', marcaSchema);
module.exports = Marca;
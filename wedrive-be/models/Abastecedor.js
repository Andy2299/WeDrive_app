const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const abastecedorSchema = new Schema({
    ubicacion:  {
      type: String,
      required: true,
    },
    puntosCarga: [{
      type: Schema.Types.ObjectId,
      ref: 'PuntoCarga'
    }]
  });

const Abastecedor = model('Abastecedor', abastecedorSchema);
module.exports = Abastecedor;
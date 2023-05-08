const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const blogSchema = new Schema({
    titulo:  {
      type: String,
      required: true,
    },
    publicado: {
      type: Boolean,
      default: false,
    },
    autor: {
      type: Schema.Types.ObjectId,
      ref: 'Administrador',
      required: true,
    },
    contenido: String,
    fechaCreado: {
      type: Date,
      default: () => Date.now(),
      immutable: true,
    },
    fechaActualizado: Date,
    comentarios: [{
      usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true,
      },
      contenido: String
    }]
  });

blogSchema.pre('save', function(next) {
  this.fechaActualizado = Date.now(); // Actualiza la fecha cada vez que se actualiza el blog
  next();
});

const Blog = model('Blog', blogSchema);
module.exports = Blog;
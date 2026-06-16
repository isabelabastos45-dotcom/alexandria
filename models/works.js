const mongoose = require('mongoose');

const TrabalhoSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true
  },

  descricao: {
    type: String,
    required: true
  },

  autor: {
    type: String,
    required: true
  },

  data: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Trabalho', TrabalhoSchema);
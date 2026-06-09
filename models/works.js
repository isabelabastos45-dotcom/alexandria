const mongoose = require('mongoose');

const TrabalhoSchema = new mongoose.Schema({
  titulo: String,
  descricao: String,
  data: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Trabalho', TrabalhoSchema);
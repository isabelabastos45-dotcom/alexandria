const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    senha: {
        type: String,
        required: true
    },
    
    favoritos: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Trabalho'
    }]
});

module.exports = mongoose.models.User || mongoose.model('User', UserSchema);
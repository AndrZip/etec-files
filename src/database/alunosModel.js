const mongo = require('mongoose');
const { Schema } = mongo;

const alunosSchema = new Schema({
    user: {
        type: String,
        unique: true,
        lowercase: true,
        required: true
    },

    password: {
        type: String,
        required: true
    }
});

const Alunos = mongo.model('Alunos', alunosSchema);
module.exports = Alunos;
const mongoose  = require('mongoose');
const {Schema} = mongoose;

const FormSchema = new Schema ({

    email: {
        type: String,
        required: true
    }, pais: {
        type: String,
        required: true
    }, contraseña: {
        type: String,
        required: true
    }, date: {
        type: Number,
        required: true
    }, sexo: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('formS', FormSchema);
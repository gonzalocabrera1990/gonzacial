const mongoose = require('mongoose');
const config = require('../../config');
const URI = config.mongoUrl;

mongoose.connect(URI)
    .then(db => console.log('La base de datos esta conectada'))
    .catch(err => console.error(err));

module.exports = mongoose;
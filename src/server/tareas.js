const mongoose = require('mongoose');
const {Schema} = mongoose;

const TaskSchema = new Schema({
    img: {data: Buffer, contentType: String} 
}, { 
    timestamps: true
});

module.exports = mongoose.model('Task', TaskSchema);
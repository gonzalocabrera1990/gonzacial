const mongoose  = require('mongoose');
const {Schema} = mongoose;

const Profile = new Schema ({

    username: {
        type: String,
        required: true
    }, lastname: {
        type: Number,
        required: true
    }, photoprofile: {
        type: String,
        required: false
    }, personalphrase: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('Profile', Profile);
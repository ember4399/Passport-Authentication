const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    }, email: {
        type: String,
        required: true
    }, password: {
        type: String,
        required: true
    }, date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', UserSchema);


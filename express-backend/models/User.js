const mongoose = require('mongoose')
const { Schema } = mongoose;

const UserSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true,
        unique: true
    },
    //role
    jobtitle: {
        type: String
    },
    birthdate: {
        type: String
    },
    address: {
        type: String
    },
    pfp: {
        type: String
    },
    date: {
        type: String,
        default: Date.now
    }
});

module.exports = mongoose.model('ems_user', UserSchema)
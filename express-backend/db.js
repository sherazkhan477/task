const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://aryan30:aryan1230@ems.rf8hfcn.mongodb.net/"


async function connectTOMongo() {
    await mongoose.connect(mongoURI);
    console.log("Connected to Mongo Successfully.");
}

module.exports = connectTOMongo;


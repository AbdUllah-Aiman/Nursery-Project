const mongoose = require("mongoose");
const ClassSchema = require("./ClassSchema");
const bcrypt = require('bcrypt');


// 1. create object from mongoose schema
const Schema = mongoose.Schema({
    FullName: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    Password: { type: String, required: true },
    image: String
});

Schema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt();
    this.Password = await bcrypt.hash(this.Password, salt);
    next();
})

// 2. mappping the schema to a collection
module.exports = mongoose.model("Teachers", Schema);

const mongoose = require("mongoose");
const ClassSchema = require("./ClassSchema");
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
// 2. mappping the schema to a collection
module.exports = mongoose.model("Teachers", Schema);

const mongoose = require("mongoose");
const { autoInc } = require('auto-increment-group');

const addresSchema = mongoose.Schema(
    {
        city: String,
        street: String,
        building: Number,
    },
    { _id: false }
);

// 1. create object from mongoose schema
const Schema = mongoose.Schema({
    id_Inc: { type: String },
    FullName: {
        type: String,
        required: true
    },
    Age: Number,
    Level: { type: String, enum: ["PreKG", "KG1", "KG2"] },
    Address: addresSchema
});

Schema.plugin(autoInc, {
    field: "id_Inc",
    digits: 4,
    startAt: 1,
    incrementBy: 1,
    unique: true
});
// 2. mappping the schema to a collection
module.exports = mongoose.model("Children", Schema);
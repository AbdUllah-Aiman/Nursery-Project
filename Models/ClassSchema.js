const mongoose = require("mongoose");
const { autoInc } = require('auto-increment-group');

// 1. create object from mongoose schema
const Schema = mongoose.Schema({
    id_Inc: { type: String },
    name: { type: String, required: true },
    Supervisor: {
        type: mongoose.ObjectId,
        ref: 'Teachers',
        required: true
    },
    ChildrenInClass: [{ type: String, ref: "Children" }]
});

Schema.plugin(autoInc, {
    field: "id_Inc",
    digits: 4,
    startAt: 1,
    incrementBy: 1,
    unique: true
});

// 2. mappping the schema to a collection
module.exports = mongoose.model("Classes", Schema);
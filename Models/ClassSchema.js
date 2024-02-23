const mongoose = require("mongoose");
const autoInc = require("auto-increment-group");

// 1. create object from mongoose schema
const Schema = mongoose.Schema({
    id: { type: Number },
    name: { type: String, required: true },
    Supervisor: {
        type: Number,
        ref: "Teachers"
    },
    ChildrenInClass: [{ type: Number, ref: "Children" }]
});
// 2. mappping the schema to a collection
module.exports = mongoose.model("Classes", Schema);


Schema.plugin(autoInc, {
    field: "id",
    digits: 4,
    startAt: 1,
    incrementBy: 1,
    unique: true
});
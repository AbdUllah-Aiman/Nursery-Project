const mongoose = require("mongoose");
// 1. create object from mongoose schema
const Schema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    Email: {
        type: String
        , required: true
        , unique: true
    },
    name: {
        type: String,
        required: true
    },
    class: {
        type: Number,
        ref: "classes"
    }
});
// 2. mappping the schema to a collection
module.exports = mongoose.model("childrens", Schema);

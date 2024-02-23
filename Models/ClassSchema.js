const mongoose = require("mongoose");
// 1. create object from mongoose schema
const Schema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    name: {type:String, required:true}
});
// 2. mappping the schema to a collection
module.exports = mongoose.model("classes", Schema);

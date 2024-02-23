const Child = require("../Models/ChildSchema");

module.exports.getAllChildren = (req, res, next) => {
    // res.status(200).json({ data: [{ 1: "First_child" }, { 2: "Second_child" }, { 3: "Third_child" }] });
    Child.find({})
        .then((childrens) => {
            res.status(200).json(childrens);
        })
        .catch((error) => { next(error) })
}

module.exports.getChildByID = (req, res, next) => {
    const id = req.params.id;
    Child.findById({ _id: id })
        .then((child) => {
            //we have to check if the child exists
            if (!child) throw new Error("Id does not exist"); //this will be caught by catch block
            res.status(200).json(child);
        })
        .catch((error) => {
            next(error); //this will be caught by the error middleware
        });

}
module.exports.addChild = (req, res, next) => {
    // get data from request body
    const child = new Child(req.body);
    child
        .save() //returns a promise
        .then((child) => {
            res.status(201).json({
                message: "child added successfully",
                child
            });
        })
        .catch((error) => {
            next(error);
        });
}

module.exports.updateChild = (req, res, next) => {
    // get data from request body
    const id = req.params.id;
    Child.findById({ _id: id })
        .then((child) => {
            //we have to check if the child exists
            if (!child)
                throw new Error("Id does not exist"); //this will be caught by catch block
            else
                child = new Child(req.body);
            res.status(201).json(child);
        })
        .catch((error) => {
            next(error); //this will be caught by the error middleware
        });
}

module.exports.deleteChildByID = (req, res, next) => {
    // get data from request body
    const id = req.params.id;
    Child.findById({ _id: id })
        .then((child) => {
            //we have to check if the child exists
            if (!child)
                throw new Error("Id does not exist"); //this will be caught by catch block
            else
                Child.deleteOne({ _id: id });
            res.status(200).json(child);
        })
        .catch((error) => {
            next(error); //this will be caught by the error middleware
        });
}

const Class = require("../Models/ClassSchema");
const Child = require("../Models/ChildSchema");
const Teacher = require("../Models/TeacherSchema");

module.exports.getallClasses = (req, res, next) => {
    Class.find({}, { _id: 0 })
        .then((classes) => {
            res.status(200).json(classes);
        })
        .catch((error) => { next(error) })
}

module.exports.getClassByID = (req, res, next) => {
    const id = req.params.id;
    Class.findOne({ id_Inc: id + "" })
        .then((_Class) => {
            //we have to check if the Class exists
            if (!_Class) {
                //this will be caught by catch block
                let error = new Error("Required Class Not Found");
                error.statusCode = 404;
                throw error;
            }
            res.status(200).json(_Class);
        })
        .catch((error) => {
            next(error); //this will be caught by the error middleware
        });
}

module.exports.addClass = (req, res, next) => {
    // get data from request body
    const newClass = new Class(req.body);
    newClass
        .save() //returns a promise
        .then((newClass) => {
            res.status(201).json({
                message: "Class added successfully",
                newClass
            });
        })
        .catch((error) => {
            next(error);
        });
}

module.exports.updateClass = (req, res, next) => {
    // get data from request body
    const id = req.params.id;
    const updatedData = req.body;

    // Update the class document by ID
    Class.findOneAndUpdate({ id_Inc: id + "" }, updatedData)
        .then((_class) => {
            // Check if the class exists
            if (!_class) {
                //this will be caught by catch block
                let error = new Error("Required Class Not Found");
                error.statusCode = 404;
                throw error;
            }
            // class updated successfully
            res.status(200).json({ Message: "Class Updated Successfully" });
            console.log(Object.keys(req.body));
        })
        .catch((error) => {
            next(error); //this will be caught by the error middleware
        });
}

module.exports.deleteClassByID = (req, res, next) => {
    // get data from request body
    const id = req.params.id;
    Class.findOneAndDelete({ id_Inc: id + "" })
        .then((_class) => {
            // Check if the class exists
            if (!_class) {
                //this will be caught by catch block
                let error = new Error("Required Class Not Found");
                error.statusCode = 404;
                throw error;
            }
            // Class deleted successfully
            res.status(200).json({ message: "Class deleted successfully" });
        })
        .catch((error) => {
            next(error); //this will be caught by the error middleware
        });
}

module.exports.getClassChildInfo = (req, res, next) => {
    // get data from request body
    const id = req.params.id;
    Class.findOne({ id_Inc: id + "" })
        .then((targetClass) => {
            if (targetClass) {
                const childrens = targetClass.ChildrenInClass;
                Child.find({}, { _id: 0 }).where('id_Inc').in(childrens)
                    .then((MyClassChildren) => { res.status(200).json(MyClassChildren) })
                    .catch((error) => { next(error) });
            }
            else {
                //this will be caught by catch block
                let error = new Error("Required Class Not Found");
                error.statusCode = 404;
                throw error;
            }
        }).catch((error) => {
            next(error); //this will be caught by the error middleware
        });
}

module.exports.getClassTeacherInfo = (req, res, next) => {
    const id = req.params.id;
    Class.findOne({ id_Inc: id })
        .then(targetClass => {
            if (targetClass) {
                Teacher.findOne({ _id: targetClass.Supervisor }, { _id: 0, Password: 0 })
                    .then((data) => { res.status(200).json(data) })
                    .catch((error) => { next(error) });
            }
            else {
                //this will be caught by catch block
                let error = new Error("Required Class Not Found");
                error.statusCode = 404;
                throw error;
            }
        })
        .catch(error => {
            next(error) //this will be caught by the error middleware
        })
}
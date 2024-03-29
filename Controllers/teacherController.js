const Teacher = require("../Models/TeacherSchema");
const Class = require("../Models/ClassSchema");

module.exports.getAllTeachers = (req, res, next) => {
    Teacher.find({})
        .then((teachers) => {
            res.status(200).json(teachers);
        })
        .catch((error) => { next(error) })
}

module.exports.getTeacherByID = (req, res, next) => {
    const id = req.params.id;
    Teacher.findOne({ _id: id })
        .then((teacher) => {
            //we have to check if the Class exists
            if (!teacher) {
                //this will be caught by catch block
                let error = new Error("Required Teacher Not Found");
                error.statusCode = 404;
                throw error;
            }
            res.status(200).json(teacher);
        })
        .catch((error) => {
            next(error); //this will be caught by the error middleware
        });
}

module.exports.addTeacher = (req, res, next) => {
    // get data from request body
    const newTeacher = new Teacher({ ...req.body, image: req.file.path });
    newTeacher
        .save() //returns a promise
        .then((newTeacher) => {
            res.status(201).json({
                message: "Teacher added successfully",
                newTeacher
            });
        })
        .catch((error) => {
            next(error);
        });
}

module.exports.updateTeacher = (req, res, next) => {
    // get data from request body
    const id = req.params.id;
    const updatedData = req.body;

    const newImage = req.file.path;

    if (newImage) {
        updatedData.image = newImage;
    }
    // Update the class document by ID
    Teacher.findOneAndUpdate({ _id: id }, updatedData)
        .then((teacher) => {
            // Check if the class exists
            if (!teacher) {
                //this will be caught by catch block
                let error = new Error("Required Teacher Not Found");
                error.statusCode = 404;
                throw error;
            }
            // class updated successfully
            res.status(201).json({ Message: "Teacher Updated Successfully" });
        })
        .catch((error) => {
            next(error); //this will be caught by the error middleware
        });
}

module.exports.deleteTeacherByID = (req, res, next) => {
    // get data from request body
    const id = req.params.id;
    Teacher.findOneAndDelete({ _id: id })
        .then((teacher) => {
            // Check if the class exists
            if (!teacher) {
                //this will be caught by catch block
                let error = new Error("Required Teacher Not Found");
                error.statusCode = 404;
                throw error;
            }
            // Class deleted successfully
            res.status(200).json({ message: "Teacher deleted successfully" });
        })
        .catch((error) => {
            next(error); //this will be caught by the error middleware
        });
}

module.exports.getSupervisors = (req, res, next) => {
    Class.find({}, { _id: 0, Supervisor: 1 }).populate({ path: "Supervisor" })
        .then((AllClasses) => {
            if (AllClasses)
                res.status(200).json(AllClasses)
        }).catch((error) => {
            next(error); //this will be caught by the error middleware
        });
}

const Teacher = require("../Models/TeacherSchema");
const bcrypt = require('bcrypt');

module.exports.changePassword = async (req, res, next) => {
    const id = req.token.id;
    console.log("req");
    if (!req.body.Password) {
        let error = new Error('No Password Provided');
        error.statusCode = 400;
        next(error);
    }

    // Hash the new password
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(req.body.Password, salt);

    // Update the password in the database
    const updatedTeacher = await Teacher.findOneAndUpdate(
        { _id: id },
        { Password: hashedPassword }
    )
        .then((teacher) => {
            if (!teacher) {
                //this will be caught by catch block
                let error = new Error("Teacher Not Found");
                error.statusCode = 404;
                throw error;
            }
            res.status(201).json({ Message: "Password Updated Successfully", data: teacher });
        })
        .catch((error) => {
            next(error); //this will be caught by the error middleware
        });
}

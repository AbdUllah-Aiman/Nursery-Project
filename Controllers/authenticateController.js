const jwt = require("jsonwebtoken");
const Teacher = require("../Models/TeacherSchema");
const bcrypt = require("bcrypt");

const Enc_Key = process.env.Secret_Key || "Nursery key"
module.exports.login = (req, res, next) => {
    //check if the email and password are correct
    const mail = req.body.Email.toLowerCase();
    const pass = req.body.Password;

    Teacher.findOne({ Email: mail, Password: pass })
        .then((teacher) => {
            if (!teacher) {
                let error = new Error("Email or password are incorrect");
                error.statusCode = 401;
                throw error;
            }
            //create a token
            // jwt.sign(data to be loaded from server, secret key, options)
            let token = jwt.sign(
                { id: teacher._id, FullName: teacher.FullName, role: "Teacher" },
                Enc_Key, { expiresIn: "1h" }
            );
            res.status(200).json(token);
            //client should store the token and send it in the header for each request
        })
        .catch((error) => {
            next(error)
        });
}

exports.encryptedLogin = (req, res, next) => {
    const mail = req.body.Email;
    const pass = req.body.Password;

    Teacher.findOne({ Email: mail })
        .then((teacher) => {
            if (!teacher) {
                let error = new Error("Incorrect Email");
                error.statusCode = 401;
                throw error;
            }
            bcrypt.compare(pass, teacher.Password)
                .then((authentication) => {
                    if (!authentication) {
                        let error = new Error("Incorrect Password");
                        error.statusCode = 401;
                        throw error;
                    }
                    let token = jwt.sign(
                        { id: teacher._id, FullName: teacher.FullName, role: "Teacher" },
                        Enc_Key, { expiresIn: "1h" }
                    );
                    res.status(200).json(token);
                })
                .catch((error) => {
                    next(error);
                })
        }).catch((error) => { next(error) });

}
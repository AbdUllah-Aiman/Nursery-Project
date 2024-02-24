const express = require("express");
const Controller = require("../Controllers/teacherController");
const { insertValidations } = require("../Middlewares/Validations/TeacherValidation")
const Validator = require("../Middlewares/Validations/Validator")

const router = express.Router();

router.route("/register")
    .post(insertValidations, Validator, Controller.addTeacher)

module.exports = router;
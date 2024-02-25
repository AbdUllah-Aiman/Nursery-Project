const express = require("express");
const Controller = require("../Controllers/teacherController");
const upload = require("../Middlewares/UploadImageMiddleware");
const { insertValidations } = require("../Middlewares/Validations/TeacherValidation")
const Validator = require("../Middlewares/Validations/Validator")

const router = express.Router();

router.route("/register")
    .post(upload.single('image'), insertValidations, Validator, Controller.addTeacher)

module.exports = router;
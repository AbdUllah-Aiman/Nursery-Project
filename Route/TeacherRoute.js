const express = require("express");
const Controller = require("../Controllers/teacherController");
const upload = require("../Middlewares/UploadImageMiddleware");
const { isAdmin, isTeacher, isTeacherOrAdmin } = require("../Middlewares/AuthorizationMiddleware")
const { insertValidations, updateValidations, deleteValidations } = require("../Middlewares/Validations/TeacherValidation")
const Validator = require("../Middlewares/Validations/Validator")

const router = express.Router();

router.route("/teachers")
        .get(isTeacherOrAdmin, Controller.getAllTeachers)
        .post(upload.single('image'), isAdmin, insertValidations, Validator, Controller.addTeacher)

router.get("/teachers/supervisors", isTeacherOrAdmin, Controller.getSupervisors)

router.route("/teachers/:id")
        .get(isTeacherOrAdmin, Controller.getTeacherByID)
        .delete(isAdmin, deleteValidations, Validator, Controller.deleteTeacherByID)
        .put(upload.single('image'), isTeacherOrAdmin, updateValidations, Validator, Controller.updateTeacher);

module.exports = router;
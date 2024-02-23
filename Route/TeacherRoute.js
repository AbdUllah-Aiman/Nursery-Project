const express = require("express");
const Controller = require("../Controllers/teacherController");
const { insertValidations, updateValidations, deleteValidations } = require("../Middlewares/Validations/TeacherValidation")
const Validator = require("../Middlewares/Validations/Validator")

const router = express.Router();

router.route("/teachers")
        .get(Controller.getAllTeachers)
        .post(insertValidations,Validator,Controller.addTeacher)


router.get("/teachers/supervisors", Controller.getSupervisors)

router.route("/teachers/:id")
        .get(Controller.getTeacherByID)
        .delete(deleteValidations,Validator,Controller.deleteTeacherByID)
        .put(updateValidations,Validator,Controller.updateTeacher);

module.exports = router;
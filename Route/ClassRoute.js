const express = require("express");
const Controller = require("../Controllers/classController");
const { isAdmin, isTeacher, isTeacherOrAdmin } = require("../Middlewares/AuthorizationMiddleware")
const { insertValidations, updateValidations, deleteValidations } = require("../Middlewares/Validations/ClassValidation")
const Validator = require("../Middlewares/Validations/Validator")

const router = express.Router();

router.route("/class")
    .get(isAdmin, Controller.getallClasses)
    .post(isAdmin, insertValidations, Validator, Controller.addClass)

router.route("/class/:id")
    .get(isTeacherOrAdmin, Controller.getClassByID)
    .delete(isAdmin, deleteValidations, Validator, Controller.deleteClassByID)
    .put(isAdmin, updateValidations, Validator, Controller.updateClass)

router.get("/class/child/:id", isTeacherOrAdmin, Controller.getClassChildInfo);

router.get("/class/teacher/:id", isTeacherOrAdmin, Controller.getClassTeacherInfo);

module.exports = router;
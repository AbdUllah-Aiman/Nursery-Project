const express = require("express");
const Controller = require("../Controllers/classController");
const { insertValidations, updateValidations, deleteValidations } = require("../Middlewares/Validations/ClassValidation")
const Validator = require("../Middlewares/Validations/Validator")

const router = express.Router();

router.route("/class")
    .get(Controller.getallClasses)
    .post(insertValidations,Validator,Controller.addClass)

router.route("/class/:id")
    .get(Controller.getClassByID)
    .delete(deleteValidations,Validator,Controller.deleteClassByID)
    .put(updateValidations,Validator,Controller.updateClass)

router.get("/class/child/:id", Controller.getClassChildInfo);

router.get("/class/teacher/:id", Controller.getClassTeacherInfo);

module.exports = router;
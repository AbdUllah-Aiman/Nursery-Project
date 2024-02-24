const express = require("express");
const Controller = require("../Controllers/childController");
const { isAdmin, isTeacher, isTeacherOrAdmin } = require("../Middlewares/AuthorizationMiddleware")
const { insertValidations, updateValidations, deleteValidations } = require("../Middlewares/Validations/ChildValidation")
const Validator = require("../Middlewares/Validations/Validator")

const router = express.Router();


router.route("/child")
        .get(isTeacherOrAdmin, Controller.getAllChildren)
        .post(isAdmin, insertValidations, Validator, Controller.addChild)

router.route("/child/:id")
        .get(isTeacherOrAdmin, Controller.getChildByID)
        .delete(isAdmin, deleteValidations, Validator, Controller.deleteChildByID)
        .put(isTeacherOrAdmin, updateValidations, Validator, Controller.updateChild);

module.exports = router;
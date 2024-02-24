const express = require("express");
const Controller = require("../Controllers/ChangePasswordController");
const { isTeacher } = require("../Middlewares/AuthorizationMiddleware")
const { updateValidations } = require("../Middlewares/Validations/PasswordValidation")
const Validator = require("../Middlewares/Validations/Validator")

const router = express.Router();

router.put("/changepassword", isTeacher, updateValidations, Validator, Controller.changePassword);

module.exports = router;
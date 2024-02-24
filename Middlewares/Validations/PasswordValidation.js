const { body, param, query } = require("express-validator");

exports.updateValidations = [
    body('Password').notEmpty()
        .isStrongPassword()
        .withMessage("Password should be at least 8 characters with mix of upper and lower case letters , numbers and special characters")
]
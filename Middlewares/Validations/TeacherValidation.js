const { body, param, query } = require("express-validator");

exports.insertValidations = [
    body("FullName")
        .isString().withMessage("Name Should Be String")
        .isAlpha("en-US", { ignore: ' ' })
        .withMessage("Name should be written in english, Numbers and special characters are not allowed")
        .trim().isLength({ min: 3 }).withMessage("Name Should be at least 3 letters"),
    body('Email').isEmail().withMessage("Should be a Valid Email"),
    body('Password').isStrongPassword()
        .withMessage("Password should be at least 8 characters Containing upper and lower case letters, numbers and special characters")
]

exports.updateValidations = [
    param("id").isMongoId().withMessage("Must Provide valid ObjectID"),
    body("FullName").optional()
        .isString().withMessage("Name Should Be String")
        .isAlpha("en-US", { ignore: ' ' })
        .withMessage("Name should be written in english, Numbers and special characters are not allowed")
        .trim().isLength({ min: 3 }).withMessage("Name Should be at least 3 letters"),
    body('Password').optional().isStrongPassword()
        .withMessage("Password should be at least 8 characters with mix of upper and lower case letters , numbers and special characters"),
    body('Email').optional().isEmail().withMessage("Should be a Valid Email")
]

exports.deleteValidations = [
    param('id').isInt({ min: 1 }).withMessage("ID Should be A positive Integer"),
]
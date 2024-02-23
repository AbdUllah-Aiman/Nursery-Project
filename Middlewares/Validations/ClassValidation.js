const { body, param } = require("express-validator");

exports.insertValidations = [
    body("name").isString().withMessage("Name should be string")
        .isAlpha("en-US", { ignore: ' ' })
        .withMessage("Name should be written in english, Numbers and special characters are not allowed")
        .trim().isLength({ min: 2 }).withMessage("Name should be at least 2 letters"),
    body("Supervisor").notEmpty().withMessage("Must Enter supervisor ID")
        .isString().withMessage("Supervisor id Must be string")
        .isLength({ min: 24, max: 24 }).withMessage("Supervisor id must be 24 letter objectID"),
    body("ChildrenInClass").optional().isArray()
]

exports.updateValidations = [
    param('id').isInt({ min: 1 }).withMessage("ID Should be A positive Integer"),
    body("name").optional().isString().withMessage("Name Should Be String")
        .isAlpha("en-US", { ignore: ' ' })
        .withMessage("Name should be written in english, Numbers and special characters are not allowed")
        .trim().isLength({ min: 2 }).withMessage("Name Should be at least 2 letters"),
    body("Supervisor").optional()
        .isString().withMessage("Supervisor id Must be string")
        .isLength({ min: 24, max: 24 }).withMessage("Supervisor id must be 24 letter objectID"),
    body("ChildrenInClass").optional().isArray()
]

exports.deleteValidations = [
    param('id').isInt({ min: 1 }).withMessage("ID Should be A positive Integer"),
]
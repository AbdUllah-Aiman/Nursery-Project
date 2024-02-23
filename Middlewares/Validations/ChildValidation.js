const { body, param, query } = require("express-validator");

exports.insertValidations = [
    body("FullName")
        .isString().withMessage("Name Should Be String")
        .isAlpha("en-US", { ignore: ' ' })
        .withMessage("Name should be written in english, Numbers and special characters are not allowed")
        .trim().isLength({ min: 3 }).withMessage("Name Should be at least 3 letters"),
    body('Level').isIn(['PreKG', 'KG1', 'KG2']).withMessage('Invalid level'),
    body('Address').isObject().withMessage('Address must be an object'),
    body('Address.city').notEmpty().withMessage('City is required')
        .isString().withMessage("City Should Be String")
        .isAlpha("en-US", { ignore: ' ' })
        .withMessage("Name should be written in english, Numbers and special characters are not allowed")
        .trim().isLength({ min: 3 }).withMessage("Name Should be at least 3 letters"),
    body('Address.street').optional().isString().withMessage("Street Should Be String")
        .isAlpha("en-US", { ignore: ' ' })
        .withMessage("Street should be written in english, Numbers and special characters are not allowed")
        .trim().isLength({ min: 3 }).withMessage("Street should be at least 3 letters"),
    body('Address.building').optional().isInt({ min: 1 }).withMessage('Building number must be a valid integer'),
    body('Age').isInt({ min: 3, max: 7 }).withMessage("Child's age Should be between 3 and 7 years old"),
]

exports.updateValidations = [
    param('id').isInt({ min: 1 }).withMessage("ID Should be A positive integer"),
    body("FullName").optional().isString().withMessage("Name Should Be String")
        .isAlpha("en-US", { ignore: ' ' })
        .withMessage("Name should be written in english, Numbers and special characters are not allowed")
        .trim().isLength({ min: 3 }).withMessage("Name Should be at least 3 letters"),
    body('Age').optional().isInt({ min: 3, max: 7 }).withMessage("Child's age Should be between 3 and 7 years old"),
]

exports.deleteValidations = [
    param('id').isInt({ min: 1 }).withMessage("ID Should be A positive integer"),
]
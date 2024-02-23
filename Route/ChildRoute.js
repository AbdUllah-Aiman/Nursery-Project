const express = require("express");
const Controller = require("../Controllers/childController");
const { insertValidations, updateValidations, deleteValidations } = require("../Middlewares/Validations/ChildValidation")
const Validator = require("../Middlewares/Validations/Validator")

const router = express.Router();


router.route("/child")
        .get(Controller.getAllChildren)
        .post(insertValidations, Validator, Controller.addChild)

router.route("/child/:id")
        .get(Controller.getChildByID)
        .delete(deleteValidations, Validator, Controller.deleteChildByID)
        .put(updateValidations, Validator, Controller.updateChild);

module.exports = router;
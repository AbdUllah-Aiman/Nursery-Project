const express = require("express");
const Controller = require("../Controllers/childController");

const router = express.Router();


router.route("/child")
        .get(Controller.getAllChildren)
        .post(Controller.addChild)
        .put(Controller.updateChild);

router.route("/child/:id")
        .get(Controller.getChildByID)
        .delete(Controller.deleteChildByID)
        
module.exports = router;
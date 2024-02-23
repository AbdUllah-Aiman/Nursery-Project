const express = require("express");
const Controller = require("../Controllers/childController");

const router = express.Router();


router.route("/child")
        .get(Controller.getAllChildren)
        .post(Controller.addChild)

router.route("/child/:id")
        .get(Controller.getChildByID)
        .delete(Controller.deleteChildByID)
        .put(Controller.updateChild);
        
module.exports = router;
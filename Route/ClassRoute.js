const express = require("express");
const Controller = require("../Controllers/classController");

const router = express.Router();

router.route("/class")
    .get(Controller.getallClasses)
    .post(Controller.addClass)

router.route("/class/:id")
    .get(Controller.getClassByID)
    .delete(Controller.deleteClassByID)
    .put(Controller.updateClass)

router.get("/class/child/:id", Controller.getClassChildInfo);

router.get("/class/teacher/:id", Controller.getClassTeacherInfo);

module.exports = router;
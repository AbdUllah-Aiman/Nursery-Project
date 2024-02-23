const express = require("express");
const Controller = require("../Controllers/teacherController");

const router = express.Router();

router.route("/teachers")
        .get(Controller.getAllTeachers)
        .post(Controller.addTeacher)


router.get("/teachers/supervisors", Controller.getSupervisors)

router.route("/teachers/:id")
        .get(Controller.getTeacherByID)
        .delete(Controller.deleteTeacherByID)
        .put(Controller.updateTeacher);

module.exports = router;
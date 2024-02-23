module.exports.getAllTeachers = (req, res, next) => {
    res.status(200).json({ data: [{ 1: "First_teacher" }, { 2: "Second_teacher" }, { 3: "Third_teacher" }] });
}

module.exports.getTeacherByID = (req, res, next) => {
    res.status(200).json({ data: "Teacher ID:"+req.params.id});
}

module.exports.addTeacher = (req, res, next) => {
    res.status(201).json({ data: "Added New Teacher" });
}

module.exports.updateTeacher = (req, res, next) => {
    res.status(200).json({ data: "Update Teacher data" });
}

module.exports.deleteTeacherByID = (req, res, next) => {
    res.status(200).json({ data: "Deleted Teacher: "+ req.params.id });
}

module.exports.getSupervisors = (req, res, next) => {
    res.status(200).json({ data: [{ 1: "First_Supervisor" }, { 2: "Second_Supervisor" }, { 3: "Third_Supervisor" }] });
}

module.exports.getallClasses = (req,res,next) => {
    res.status(200).json({ data: [{ 1: "First_class" }, { 2: "Second_class" }, { 3: "Third_class" }] });
}

module.exports.getClassByID = (req, res, next) => {
    res.status(200).json({ data: "Class:" + req.params.id });
}

module.exports.addClass = (req, res, next) => {
    res.status(201).json({ data: "Added New Class" });
}

module.exports.updateClass = (req, res, next) => {
    res.status(200).json({ data: "Update Class data" });
}

module.exports.deleteClassByID = (req, res, next) => {
    res.status(200).json({ data: "Deleted Class : " + req.params.id });
}

module.exports.getClassChildInfo = (req, res, next) => {
    res.status(200).json({ data: "Class Child Id: " + req.params.id });
}

module.exports.getClassTeacherInfo = (req, res, next) => {
    res.status(200).json({ data: "Class Supervisor Id: " + req.params.id });
}
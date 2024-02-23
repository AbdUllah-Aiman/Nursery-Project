module.exports.getAllChildren = (req, res, next) => {
    res.status(200).json({ data: [{ 1: "First_child" }, { 2: "Second_child" }, { 3: "Third_child" }] });
}

module.exports.getChildByID = (req, res, next) => {
    res.status(200).json({ data: "Child:" + req.params.id });
}

module.exports.addChild = (req, res, next) => {
    res.status(201).json({ data: "Added New Child" });
}

module.exports.updateChild = (req, res, next) => {
    res.status(200).json({ data: "Update Child data" });
}

module.exports.deleteChildByID = (req, res, next) => {
    res.status(200).json({ data: "Deleted Child : " + req.params.id });
}

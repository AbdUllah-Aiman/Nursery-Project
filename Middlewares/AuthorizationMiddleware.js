module.exports.isTeacher = (req, res, next) => {
    if (req.token.role == "Teacher") {
        next();
    } else {
        let error = new Error('Not Authorized');
        error.statusCode = 403;
        next(error);
    }
}

module.exports.isAdmin = (req, res, next) => {
    if (req.token.role == "Admin") {
        next();
    } else {
        let error = new Error('Not Authorized');
        error.statusCode = 403;
        next(error);
    }
}

module.exports.isTeacherOrAdmin = (req, res, next) => {
    if (req.token.role == "Teacher" || req.token.role == "Admin") {
        next();
    } else {
        let error = new Error('Not Authorized');
        error.statusCode = 403;
        next(error);
    }
}
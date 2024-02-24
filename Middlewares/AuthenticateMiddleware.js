const jwt = require("jsonwebtoken");

const Enc_Key = process.env.SECRET_KEY;


module.exports = (req, res, next) => {
    try {
        let token = req.get('authorization').split(" ")[1];
        let decodedToken = jwt.verify(token, Enc_Key);
        req.token = decodedToken;
        next();
    } catch (error) {
        error.message = "Not Authenticated";
        error.statusCode = 403;
        next(error);
    }

}


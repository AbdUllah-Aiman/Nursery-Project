const express = require("express");
const Controller = require("../Controllers/authenticateController");

const router = express.Router();

router.post("/login", Controller.encryptedLogin);

module.exports = router;

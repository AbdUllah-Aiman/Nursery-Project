const express = require("express");
const morgan = require("morgan");
require("dotenv").config();

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./Documentation/swagger-output.json'); 
const cors = require("cors");
const mongoose = require("mongoose");

const authenticateRoute = require("./Route/AuthenticateRoute");
const authenticateMW = require("./Middlewares/AuthenticateMiddleware");
const teacherRoute = require("./Route/TeacherRoute");
const childRoute = require("./Route/ChildRoute");
const classRoute = require("./Route/ClassRoute");
const changePasswordRoute = require("./Route/ChangePasswordRoute");
const RegisterTeacherRoute = require("./Route/RegisterTeacherRoute");


const server = express();
const port = process.env.PORT || 8080;
const Database = process.env.DB_URL || "mongodb://127.0.0.1:27017/NurseryDB";

// connect to DB and server
mongoose
    .connect(Database)
    .then(() => {
        console.log("Connected to the database");
        server.listen(port, () => {
            console.log("Connected to Nursery Server On Port:" + port);
        });
    })
    .catch((error) => {
        console.log("Error connecting to the database", error);
    });


server.use(cors());
// morgan middleware
server.use(morgan(":method :url"));
server.use(express.json())

// Add the Swagger UI middleware
server.use("/Nursery", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//routes
server.use(RegisterTeacherRoute);
server.use(authenticateRoute);
server.use(authenticateMW);

server.use(teacherRoute);
server.use(childRoute);
server.use(classRoute);
server.use(changePasswordRoute);

// Not Found middleware
server.use((request, response, next) => {
    response.status(404).json({ message: "Not Found" });
});

// Error middleware
server.use((error, request, response, next) => {
    const statusCode = error.status || 500;
    response.status(statusCode).json({ message: error + "" });
});
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const teacherRoute = require("./Route/TeacherRoute");
const childRoute = require("./Route/ChildRoute");
const classRoute = require("./Route/ClassRoute");


const server = express();
const port = process.env.PORT || 8080;

mongoose
    .connect("mongodb://127.0.0.1:27017/NurseryDB")
    .then(() => {
        console.log("Connected to the database");
        server.listen(port, () => {
            console.log("Connected to Nursery Server On Port:"+port);
        });
    })
    .catch((error) => {
        console.log("Error connecting to the database", error);
    });


// morgan middleware
server.use(morgan(":method :url"));
server.use(express.json())
server.use(teacherRoute);
server.use(childRoute);
server.use(classRoute);

// Not Found middleware
server.use((request, response, next) => {
    response.status(404).json({ message: "Not Found" });
});

// Error middleware
server.use((error, request, response, next) => {
    const statusCode = error.status || 500;
    response.status(statusCode).json({ message: error + "" });
});
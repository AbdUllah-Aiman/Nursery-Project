const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const teacherRoute = require("./Route/TeacherRoute");
const childRoute = require("./Route/ChildRoute");
const classRoute = require("./Route/ClassRoute");


const server = express();
const port=process.env.PORT||8080;

server.listen(port, () => {
    console.log("Nursery Server");
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
    response.status(500).json({ message: error + "" });
});
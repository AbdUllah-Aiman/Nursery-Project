const swaggerAutogen = require('swagger-autogen')();
const doc = {
    info: {
        title: 'Nursery Project',
        description: 'Nursery Project have 3 types of users one admin and teachers and children'
    },
    host: 'localhost:3000'
};

const outputFile = '../Documentation/swagger-output.json';
const routes = ['../app.js'];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen(outputFile, routes, doc);
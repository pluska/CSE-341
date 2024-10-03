const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'CSE-341 Project 1',
        description: 'First project for wk01 and wk02',
    },
    host: 'https://cse-341-huiw.onrender.com',
    schemes: ['http', 'https'],
};

const output = './swagger.json';
const endpointsFiles = ['./src/routes/index.js'];

swaggerAutogen(output, endpointsFiles, doc)
const express = require('express');

const routes = express.Router();

routes.get('/users', (request, response) => {
    const params = request.query;

    console.log(params);

    return response.json({
        evento: 'Semano Oministack 11.0',
        aluno: 'Davi Augusto'
    });
});

module.exports = routes;
const express = require('express');

const app = express();

app.get('/', (request, response) => {
    return response.json({
        evento: 'Semana Treinamento',
        aluno: 'Felipe Battistotti'
    });
});

app.listen(3333);

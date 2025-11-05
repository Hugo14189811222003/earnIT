const express = require('express');
const app = express();
require('dotenv').config();
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3001;
app.use(bodyParser.json());
app.use(express.json());
app.use('/api/cursos', require('./routers/curso.router.js'));

app.listen(PORT, () => {
    console.log('Servidor arrancando en el puerto ' + PORT)
})
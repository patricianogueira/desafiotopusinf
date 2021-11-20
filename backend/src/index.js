const express = require('express');
const cors = require('cors');
const routes = require('./routes'); //importando as rotas

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
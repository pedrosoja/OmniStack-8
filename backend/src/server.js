require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const server = express();

mongoose.connect(process.env.DB_ACCESS, {useNewUrlParser: true});
mongoose.Promise = global.Promise

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333, () => {
    console.log('Servidor rodando!!');
});

//MVC => (M) Model - (V) View - (C) Controller
// GET     => Recebe dados de um Resource
// POST    => Envia dados ou informações para serem processados por um Resource
// PUT     => Atualiza dados de um Resource
// DELETE  => Deleta dados de um Resource
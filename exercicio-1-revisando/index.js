const express = require('express');
const jokeController = require('./controllers/joke')
const app = express();

app.set("view engine", "ejs");

app.set("views", "./views");

app.get('/jokes', jokeController.listJokes);

app.listen(3000, console.log('Ouvindo na porta 3000'));

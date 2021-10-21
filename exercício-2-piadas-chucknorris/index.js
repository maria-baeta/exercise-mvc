const express = require('express');
const jokeController = require('./controllers/joke');
const categoriesController = require('./controllers/categories');

const app = express();
app.set('view engine', 'ejs');

app.set('views', './views');jokeController

app.get('/jokes', jokeController.randomJoke);

app.get('/jokes/:category', jokeController.jokeByCategory);

app.get('/categories', categoriesController.getCategories);

app.get('/', categoriesController.redirectToCategories);

const PORT = 3000;

app.listen(PORT, () => console.log(`ouvindo a porta ${PORT}`))
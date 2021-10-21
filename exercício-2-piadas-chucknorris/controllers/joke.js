const JokeModel = require('../model/joke');
const randomJoke = async (_req, res) => {
  const joke = await JokeModel.getRandomJoke();
  res.render('jokes/index', { joke })
}
const jokeByCategory = async (req, res) => {
  const { category } = req.params;
  const joke = await JokeModel.getJokeByCategory(category);
  res.render('jokes/index', { joke })
};

module.exports = { jokeByCategory, randomJoke }
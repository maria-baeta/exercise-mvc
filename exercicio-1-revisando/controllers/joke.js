const jokeModel = require('../model//jokeModel');

const listJokes = async (req, res) => {
  const joke = await jokeModel.getJoke();
  console.log(joke);
  return res.render('jokeView', { joke })
};

module.exports = { listJokes }
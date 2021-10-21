const axios = require('axios');

const getRandomJoke = async () => {
  const URL = 'https://api.chucknorris.io/jokes/random';
  const { data } = await axios(URL)
  return data.value
}

const getJokeByCategory = async (category) => {
  const URL = `https://api.chucknorris.io/jokes/random?category=${category}`
  const { data } = await axios.get(URL);
  return data.value
}

module.exports = { getJokeByCategory, getRandomJoke }
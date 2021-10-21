const axios = require('axios');

const getCategories = async () => {
  const URL = 'https://api.chucknorris.io/jokes/categories';
  const { data } = await axios(URL);
  return data
}

module.exports = { getCategories }
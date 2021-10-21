const CategoriesModel = require('../model/categories');

const getCategories = async (_req, res) => {
  const categories = await CategoriesModel.getCategories();
  res.render('categories/index', { categories })
};

const redirectToCategories = (_req, res) => {
  res.redirect('/categories')
};

module.exports = { getCategories, redirectToCategories }
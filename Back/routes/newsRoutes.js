const route = require('express').Router();
const { getNews } = require('../controllers/newsController');

route.get('/all', getNews);

module.exports = route;

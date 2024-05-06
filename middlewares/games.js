// Импортируем модель
const games = require('../models/game');

const findAllGames = async (req, res, next) => {
   req.gamesArray = await games.find({});
   next();
}

// Экспортируем функцию поиска всех категорий
module.exports = findAllGames;
// Импортируем модель
const games = require('../models/game');

/*const findAllGames = async (req, res, next) => {
   req.gamesArray = await games.find({});
   
   next();
}*/

const findAllGames = async (req, res, next) => {
   req.gamesArray = await games.find({}).populate("categories").populate("users");
   console.log(req.gamesArray);
   next();
 };

// Экспортируем функцию поиска всех категорий
module.exports = findAllGames;
const findAllGames = require("../middlewares/games");
const sendAllGames = require("../controllers/games")

const gamesRouter = require("express").Router();

gamesRouter.get("/games", findAllGames, sendAllGames)

module.exports = gamesRouter;
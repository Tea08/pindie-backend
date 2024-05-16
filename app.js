const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const pagesRouter = require("./routes/pages");
const connectToDatabase = require("./database/connect");
const cors = require('./middlewares/cors');
const apiRouter = require("./routes/api")

const app = express();
const PORT = 3000;

connectToDatabase();

app.use(
   cors,
   cookieParser(),
   bodyParser.json(),
   pagesRouter,
   apiRouter,
   express.static(path.join(__dirname, "public")),
);

app.listen(PORT, () => {
   console.log(`Listening on port ${PORT}`);
});
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const pagesRouter = require("./routes/pages");
const connectToDatabase = require("./database/connect");
const apiRouter = require("./routes/api")
//const cors = require('./middlewares/cors');
const cors = require('cors');

const app = express();
const PORT = 3001;

connectToDatabase();

app.use(
   cors(),
   cookieParser(),
   bodyParser.json(),
   pagesRouter,
   apiRouter,
   express.static(path.join(__dirname, "public")),
);

app.listen(PORT, () => {
   console.log(`Listening on port ${PORT}`);
});
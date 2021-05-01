
///LEFT OFF CONVERTING
require('dotenv').config();
const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");

const db = require("./database.js");
const eventsRouter = require('./routes/users');
const usersRouter = require('./routes/users');

const app = express();

app.use(express.json());


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/events', eventsRouter);
app.use('/users', usersRouter);

const port = process.env.PORT || 3001;

app.listen(port, () =>
      console.log(`Example app listening on port ${port}!`),
);

app.get("/", (req, res, next) => {
    res.json({"message":"Ok"})
});

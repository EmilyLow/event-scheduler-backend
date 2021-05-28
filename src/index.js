
///LEFT OFF CONVERTING
require('dotenv').config();
const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");

//Possibly can delete database.js file
// const db = require("./database.js");
const eventsRouter = require('./routes/events');
const usersRouter = require('./routes/users');
const settingsRouter = require('./routes/settings');

const app = express();

app.use(express.json());


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/events', eventsRouter);
app.use('/users', usersRouter);
app.use('/settings', settingsRouter);

const port = process.env.PORT || 3001;

app.listen(port, () =>
      console.log(`Example app listening on port ${port}!`),
);

app.get("/", (req, res, next) => {
    res.json({"message":"Ok"})
});

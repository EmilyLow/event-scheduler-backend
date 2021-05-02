const db = require("../data/db-config");

//This is where you make intermediary methods to interact with database


module.exports = {find};

function find() {
    return db('events');
}
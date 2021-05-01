
const sqlite3 = require('sqlite3').verbose();


const DBSOURCE = "db.sqlite";

//Very likely need to change this for knex
let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
        console.error(err.message);
        throw err;
    }
});

module.exports = db;
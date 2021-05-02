const db = require("../data/db-config");

//This is where you make intermediary methods to interact with database


module.exports = {find, findById, addEvent, updateEvent, removeEvent};

//Starting all as async for best practice (?)
//But it may be pointless if the server is the bottleneck

async function find() {
    return await db('events');
}

async function findById(id) {

    try {
        let eventData = await db('events').where({id}).first();
        return eventData;
    } catch(err) {
        return "Something went wrong when retrieving the event."
    }
    

}


async function addEvent(newEvent) {

    try {
        let id = await db('events').insert(newEvent);
        return findById(id);
    } catch(err) {
        return "Error adding event: " + err;
    }
    
}

async function updateEvent(newEvent, id) {
   

    try {
        const event = await db('events').where({id}).first();

        await db('events').where({id}).update(newEvent);

        return findById(id);
         
    } catch(err) {
        return "Error updating event: " + err;
    }
}

async function removeEvent(id) {
    try {
       return await db("accounts").where({id}).del();

    } catch(err) {
        return "Error deleting event: " + err;
    }
}
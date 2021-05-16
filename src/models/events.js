const db = require("../data/db-config");

//This is where you make intermediary methods to interact with database


module.exports = {find, findById, findByDate, addEvent, updateEvent, removeEvent};

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

async function findByDate(date) {
    try {
        //Note: This seems to work and lets the front-end specify a date in a string format
        //So convert to a date time by adding "00:00:000" and end of day

        //Note, also check how these convert to javascript dates
        //!Test adding Z
        console.log(date);
        let start = date + " " + "00:00:000Z";
        let end = date + " " + "23:59:59:999Z";
        return await db('events').where('start_time', '>=', start).where('start_time', '<', end).orderBy('start_time', 'desc');
        //Could also use .whereBetween(dateTime, [start, end]);
    } catch(err) {
        return "Something went wrong when retrieving the date."
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
       return await db('events').where({id}).del();

    } catch(err) {
        return "Error deleting event: " + err;
    }
}
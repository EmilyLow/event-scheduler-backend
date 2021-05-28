const db = require("../data/db-config");

module.exports = {find, findById, updateSettings};

async function find() {
    return await db('settings');
}

async function findById(id) {

    try {
        let settingsData = await db('settings').where({id}).first();
        return settingsData;
    } catch(err) {
        return "Something went wrong when retrieving the settings."
    }
    

}

async function updateSettings(newSettings, id) {
   

    try {
        const settings = await db('settings').where({id}).first();

        await db('settings').where({id}).update(newSettings);

        return find(ById(id));
         
    } catch(err) {
        return "Error updating settings: " + err;
    }
}
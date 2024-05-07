let client = require('../dbConnection');
let collection = client.db('test').collection('Cat');

const insertCat = (cat, callback) => {
    collection.insertOne(cat, callback);
}

const getCat = (callback) => {
    collection.find().toArray(callback);
}

const deleteCat = (cat, callback) => {
    collection.deleteOne(cat, callback);
}

module.exports = {insertCat, getCat, deleteCat}
const { MongoClient } = require('mongodb');
const uri = 'mongodb+srv://Zeba:zYvsec-5cobjy-magqej@zeba.c9uuklt.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri, { useNewUrlParser: true });

client.connect(err => {
    if (!err) {
        console.log('Mongo DB connected');
    } else {
        console.log('Error: ', err);
        process.exit(1);
    }
});

module.exports = client;
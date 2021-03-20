// CRUD operations.
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log("Unable to connect to the database");
    }

    const db = client.db(databaseName);

    // db.collection('users').insertOne({
    //     name: 'Kerri-Ann',
    //     age: 32,
    // }, (error, result) => {
    //     if (error) {
    //         return console.log("Unable to connect to insert user.");
    //     }

    //     console.log(result.ops);
    // });

    // db.collection('users').insertMany([
    //     {
    //         name: 'Jen',
    //         age: 28
    //     },
    //     {
    //         name: 'Yoshi',
    //         age: 6
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log("Unable to connect to insert user.");
    //     }

    //     console.log(result.ops);
    // })

    db.collection('tasks').insertMany([
        {
            description: 'Learn code',
            completed: true
        },
        {
            description: 'Go to gym',
            completed: false
        },
        {
            description: 'Play RD2',
            completed: true
        },
    ], (error, result) => {
        if (error) {
            return console.log('Unable to insert tasks.');
        }

        console.log(result.ops);
    });

});
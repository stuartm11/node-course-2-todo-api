// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server:', err);
    }

    console.log('Connected to MongoDB server');

    // deleteMany
    // db.collection('Todos')
    //     .deleteMany({text: 'Eat lunch'})
    //     .then((result) => {
    //         console.log(result);
    //     });
    // deleteOne
    // db.collection('Todos')
    //     .deleteOne({text: 'Eat lunch'})
    //     .then((result) => {
    //         console.log(result);
    //     });
    // findOneAndDelete
    // db.collection('Todos')
    //     .findOneAndDelete({completed: false})
    //     .then((result) => {
    //         console.log(result);
    //     });

    db.collection('Users')
        .deleteMany({name: 'Stuart Mehrens'})
        .then((result) => {
            console.log(result);
        }, (err) => {
            console.log('Unable to delete many', err);
        });

    db.collection('Users')
        .findOneAndDelete({_id: new ObjectID('5aaef2a2a22e29186ca6b74c')})
        .then((result) => {
            console.log(JSON.stringify(result, undefined, 2));
        }, (err) => {
            console.log('Unable to delete one', err);
        });
    // db.close();
});

// mongodb module v3 code
// const MongoClient = require('mongodb').MongoClient;
//
// MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
//     if (err) {
//         return console.log('Unable to connect to MongoDB server:', err);
//     }
//
//     console.log('Connected to MongoDB server');
//     const db = client.db('TodoApp');
//
//     db.collection('Todos').insertOne({
//         text:
//     }, (err, result) => {
//         if (err) {
//             return console.log('Unable to insert todo:', err);
//         }
//
//         console.log(JSON.stringify(result.ops));
//     });
//
//     client.close();
// });

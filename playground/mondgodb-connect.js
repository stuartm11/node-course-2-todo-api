// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

// var user = {name: 'Stuart', age: 30};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server:', err);
    }

    console.log('Connected to MongoDB server');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo:', err);
    //     }
    //
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // Insert new doc into Users (name, age, location)

    // db.collection('Users').insertOne({
    //     name: 'Stuart Mehrens',
    //     age: 30,
    //     location: 'Oakland, CA'
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert user:', err);
    //     }
    //
    //     console.log(result.ops[0]._id.getTimestamp());
    // });

    db.close();
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

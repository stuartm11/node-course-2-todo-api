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

    // db.collection('Todos')
    //     .find({_id: new ObjectID('5aaeee793fda8225d008f3c0')})
    //     .toArray()
    //     .then((docs) => {
    //         console.log('Todos');
    //         console.log(JSON.stringify(docs, undefined, 2));
    //     }, (err) => {
    //         console.log('Unable to fetch todos', err);
    //     });
    //
    // db.collection('Todos')
    //     .find()
    //     .count()
    //     .then((count) => {
    //         console.log('Todos count:', count);
    //     }, (err) => {
    //         console.log('Unable to fetch todos', err);
    //     });

    db.collection('Users')
        .find({name: 'Stuart Mehrens'})
        .toArray()
        .then((docs) => {
            console.log('Users');
            console.log(JSON.stringify(docs, undefined, 2));
        }, (err) => {
            console.log('Unable to fetch users', err);
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

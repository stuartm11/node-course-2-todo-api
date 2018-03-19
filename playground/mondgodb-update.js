const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server:', err);
    }

    console.log('Connected to MongoDB server');

    // db.collection('Todos')
    //     .findOneAndUpdate({
    //         _id: new ObjectID('5aaefd6c9e3021ea7eb7ce20')
    //     }, {
    //         $set: {
    //             completed: true
    //         }
    //     }, {
    //         returnOriginal: false
    //     })
    //     .then((result) => {
    //         console.log(result);
    //     }, (err) => {
    //         console.log(err);
    //     });

    db.collection('Users')
        .findOneAndUpdate({
            _id: new ObjectID('5aaeefa18196db3688c18bcc')
        }, {
            $set: {
                name: 'Stuart'
            },
            $inc: {
                age: -1
            }
        }, {
            returnOriginal: false
        })
        .then((result) => {
            console.log(result);
        }, (err) => {
            console.log(err);
        });
    // db.close();
});

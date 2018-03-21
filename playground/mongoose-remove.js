const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

Todo.remove({}).then((result) => {
    console.log(result);
});

Todo.findOneAndRemove({
    _id: 'sdfsd'
}).then((todo) => {
    console.log(todo);
});

Todo.findByIdAndRemove('asas').then((todo) => {
    console.log(todo);
});

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
const {ObjectID} = require('mongodb');

// var id = '6aaf294a43b627b038f6522d11';
// var idRight = '5aaf294a43b627b038f6522d';
//
// if (!ObjectID.isValid(id)) {
//     return console.log('Id not valid');
// }
//
// Todo.find({
//     _id: id
// }).then((todos) => {
//     if(!todos) {
//         return console.log('Id not found');
//     }
//     console.log('Todos', todos);
// }, (err) => {
//     console.log(err);
// });
//
// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     if(!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo', todo);
// }, (err) => {
//     console.log(err);
// });
//
// Todo.findById(id).then((todo) => {
//     if(!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo by Id', todo);
// }, (err) => {
//     console.log(err);
// }).catch((err) => console.log(err));

// User.findById

var userId = '5aaf12fb494e7ae0188216d6';

User.findById(userId).then((user) => {
    if(!user) {
        return console.log('User not found');
    }
    console.log('User:', user);
}, (err) => {
    console.log(err);
}).catch((err) => console.log(err));

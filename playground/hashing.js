const bcrypt = require('bcryptjs');

var password = '123abc!';

bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
        console.log(hash);
    });
});


var hashedPassword = '$2a$10$ucm4M/fNCtCNId0XF99vguIi5yfT8mrO55gcAymQNoCaBd.30ZzWS';

bcrypt.compare(password, hashedPassword, (err, res) => {
    if (res) {
        console.log(res);
    }
});
// const {SHA256} = require('crypto-js');
// const jwt = require('jsonwebtoken');
//
// var data = {
//     id: 10
// };
//
// var token = jwt.sign(data, '123abc');
// console.log(token);
// console.log(jwt.verify(token, '1123abc'));

// var message = 'I am user number 3';
// var hash = SHA256(message).toString();
//
// console.log(`Message: ${message}`);
// console.log(`Message: ${hash}`);
//
// var data = {
//     id: 4
// };
// var token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// }
//
//
// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(token.data)).toString();
//
// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
//
// if (resultHash === token.hash) {
//     console.log('Data was not changed');
// } else {
//     console.log('Data was changed, don\'t trust');
// }

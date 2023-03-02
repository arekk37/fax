const mongoose = require('mongoose');
const cryptoOperations = require('./crypto.js');
mongoose.connect('mongodb://localhost:27017/fax');
console.log(cryptoOperations.createCipherH())  


const User = mongoose.model('User', {
    username: {
        type: String
    },  
    tag: {
        type: String
    },
    psw: {
        type: String
    },
    // publicKey: {
    //     type: String
    // },
    // privateKey: {
    //     type: String
    // },
    // phoneNumber: {
    //     type: Number
    // },
    // email: {
    //     type: String
    // },
    // chats: {
    //     type: Array
    // },
    // avatar: {
    //     type: String
    // }
})



async function creatingUser(){

    const user = new User({
        username: 'Tester',
        tag: '@tester123',
        psw: 'haslo123'
    })
    await user.save();

}
creatingUser();



module.exports = mongoose;
const express = require('express');
const app = express();
const database = require('./database');

app.get('/', (req, res)=>{
    res.send('Welcome on homepage');
})

app.get('/login', (req, res) => {
    res.send('welcome on login page')
})

module.exports = app;
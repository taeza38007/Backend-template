const express = require('express');
const Router = express.Router();

Router.get('/',(req, res) => {
    // res.send('Hello from the server!');
    res.render('index');
});

module.exports = Router;
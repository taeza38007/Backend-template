const express = require('express');
const Router = express.Router();


// Display All Author Route
Router.get('/', (req, res) => {
    res.render('authors/index');
});


// Create New Author Route
Router.get('/new', (req, res) => {
    res.render('authors/new')
});


Router.post('/',(req, res) => {
    res.send('Create');
});

module.exports = Router;



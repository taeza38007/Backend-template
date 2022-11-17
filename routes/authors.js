const express = require('express');
const Router = express.Router();
const Author = require('../models/author');

// Display All Author Route
Router.get('/', async(req, res) => {

    let searchOptions = {};

    if(req.query.name != null && req.query.name !== ''){
        searchOptions.name = req.query.name;
    }

    console.log(typeof req.query);
    console.log(typeof req.query.name)

    Author.find(searchOptions)
    .then((result) =>{
        res.render('authors/index', { authors: result, searchOptions: req.query })
    })
    .catch((err) => console.log(err))

});


//New Author Route
Router.get('/new', (req, res) => {
    res.render('authors/new', { author: new Author()})
});

// Create Author Route
Router.post('/',(req, res) => {

    const author = new Author({
        name: req.body.name
    });
    author.save()
        .then( newAuthor => res.redirect(`authors`))
        .catch( err => res.render('authors/new', { author: author, yo : 'yoyo', errorMessage: 'EIRRRR'}))
        // .catch( err => console.log(err))
}); 

module.exports = Router;



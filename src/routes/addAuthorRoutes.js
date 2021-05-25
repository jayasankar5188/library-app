const express = require('express');
const addAuthorRouter = express.Router();
const Authordata = require('../model/authordata');
const nav =[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'},{link:'/addbook',name:'Add Book'},{link:'/addAuthor',name:'Add Author'}];

var authors = [
    {
        name: 'JK Rowling',
        year: '1965 - ',
        works: 'Harry Potter',
        img:'rowling.jpg'
    },
    {
        name: 'Arthur Conan Doyle',
        year: '1859 - 1930',
        works: 'Sherlock Holmes',
        img: 'doyle.jpg'
    },
    {
        name: 'Bram Stoker',
        year: '1847 - 1912',
        works: 'Dracula',
        img:'stoker.jpg'
    }
]

addAuthorRouter.get('/',function(req,res){
    res.render("addauthor",{
        nav,
        title:'Add Authors'
    });
});

addAuthorRouter.post('/addintoAuthor',function(req,res){
    var item = {
        name: req.body.name,
        works: req.body.works,
        image: req.body.image
    }
    var book = Authordata(item);
    book.save();
    res.redirect('/authors');
    

});

module.exports = addAuthorRouter;
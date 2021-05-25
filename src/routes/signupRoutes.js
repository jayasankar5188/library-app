const express = require('express');

const signupRouter = express.Router();
const Signupdata = require('../model/signupdata');
const nav =[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'},{link:'/addbook',name:'Add Book'},{link:'/addAuthor',name:'Add Author'}];


var books = [
    {
        title: 'Harry Potter',
        author: 'JK Rowling',
        genre: 'Fantasy/Adventure',
        img:'harry.jpeg'
    },
    {
        title: 'Sherlock Holmes',
        author: 'Arthur Conan Doyle',
        genre: 'Detective Fiction',
        img: 'sherlock.jpg'
    },
    {
        title: 'Dracula',
        author: 'Bram Stoker',
        genre: 'Horror/Fantasy',
        img:'dracula.jpg'
    }
]

signupRouter.get('/',function(req,res){
    res.render("signup",{
        nav,
        title:'Sign Up', books
    });
});



signupRouter.get('/:id',function(req,res){
    const id = req.params.id;
    res.render('signup',{
        nav,
        title:'Sign Up',
        book: books[id]
    })
})

signupRouter.get('/login',function(req,res){
    res.render('./',{
        nav,
        title:'Login'
    })
});

signupRouter.post('/sign',function(req,res){
    var item = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        
    }
    var book = Signupdata(item);
    book.save();
    res.redirect('../')
    

});

module.exports = signupRouter;
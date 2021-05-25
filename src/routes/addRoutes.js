const express = require('express');
const addRouter = express.Router();
const Bookdata = require('../model/bookdata');
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

addRouter.get('/',function(req,res){
    res.render("addbook",{
        nav,
        title:'Add Books', authors
    });
});

// addRouter.get('/:id',function(req,res){
//     const id = req.params.id;
//     res.render('addbook',{
//         nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'},{link:'/login',name:'Login'},{link:'/signup',name:'Sign Up'}],
//         title:'Add Books',
//         author: authors[id]
//     })
// })

addRouter.post('/add',function(req,res){
    var item = {
        title: req.body.title,
        author: req.body.author,
        genre: req.body.genre,
        image: req.body.image
    }
    var book = Bookdata(item);
    book.save();
    res.redirect('/books');
    

});


module.exports = addRouter;
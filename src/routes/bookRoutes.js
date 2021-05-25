const express = require('express');
const booksRouter = express.Router();
const Bookdata = require('../model/bookdata');
const nav =[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'},{link:'/addbook',name:'Add Book'},{link:'/addAuthor',name:'Add Author'}];

// var books = [
//     {
//         title: 'Harry Potter',
//         author: 'JK Rowling',
//         genre: 'Fantasy/Adventure',
//         img:'harry.jpeg'
//     },
//     {
//         title: 'Sherlock Holmes',
//         author: 'Arthur Conan Doyle',
//         genre: 'Detective Fiction',
//         img: 'sherlock.jpg'
//     },
//     {
//         title: 'Dracula',
//         author: 'Bram Stoker',
//         genre: 'Horror/Fantasy',
//         img:'dracula.jpg'
//     }
// ]

booksRouter.get('/',function(req,res){
    Bookdata.find()
    .then(function(books){
        res.render("books",{
            nav,
            title:'Books', books
        });
    })
    
});

booksRouter.get('/:id',function(req,res){
    const id = req.params.id;
    Bookdata.findOne({_id: id})
    .then(function(book){
        res.render('book',{
            nav,
            title:'Book',
            book
        })
    })
    
})

booksRouter.get('/:id/edit',function(req,res){
    const id = req.params.id;
    Bookdata.findOne({_id: id})
    .then(function(book){
        res.render('editbook',{
            nav,
            title:'Edit Book',
            book
        })
    })
})

booksRouter.put('/:id/update', function(req,res){
    const id = req.params.id;
    Bookdata.findOne({_id: id})
    .then(function(book){
       
        book.title = req.body.title;
        book.genre = req.body.genre;
        book.author = req.body.author;
        book.image = req.body.image;
        book.save();
        res.redirect('/books');
        })
    })

    booksRouter.delete('/:id/delete',function(req,res){
        const id = req.params.id;
        Bookdata.findOne({_id:id})
        .then(function(book){
            res.render('deletebook',{
                nav,
                title: 'Delete Book',
                book
            })
        })
        
    })

    booksRouter.delete('/:id/del',function(req,res){
        const id = req.params.id;
        Bookdata.findOne({_id:id})
        .then(function(book){
            book.remove();
            res.redirect('/books');
            })
        })

module.exports = booksRouter;
const express = require('express');
const authorsRouter = express.Router();
const Authordata = require('../model/authordata');
const nav =[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'},{link:'/addbook',name:'Add Book'},{link:'/addAuthor',name:'Add Author'}];

// var authors = [
//     {
//         name: 'JK Rowling',
//         year: '1965 - ',
//         works: 'Harry Potter',
//         img:'rowling.jpg'
//     },
//     {
//         name: 'Arthur Conan Doyle',
//         year: '1859 - 1930',
//         works: 'Sherlock Holmes',
//         img: 'doyle.jpg'
//     },
//     {
//         name: 'Bram Stoker',
//         year: '1847 - 1912',
//         works: 'Dracula',
//         img:'stoker.jpg'
//     }
// ]

authorsRouter.get('/',function(req,res){
    Authordata.find().
    then(function(authors){
        res.render("authors",{
            nav,
            title:'Authors', authors
        });
    })
    
});

authorsRouter.get('/:id',function(req,res){
    const id = req.params.id;
    Authordata.findOne({_id: id})
    .then(function(author){
        res.render('author',{
            nav,
            title:'Author',
            author
        })
    })
    
})

authorsRouter.delete('/:id/delete',function(req,res){
    const id = req.params.id;
    Authordata.findOne({_id:id})
    .then(function(book){
        res.render('deleteauthor',{
            nav,
            title: 'Delete Author',
            book
        })
    })
    
})

authorsRouter.delete('/:id/del',function(req,res){
    const id = req.params.id;
    Authordata.findOne({_id:id})
    .then(function(book){
        book.remove();
        res.redirect('/authors');
        })
    })
    


authorsRouter.get('/:id/edit',function(req,res){
    const id = req.params.id;
    Authordata.findOne({_id: id})
    .then(function(book){
        res.render('editauthor',{
            nav,
            title:'Edit Author',
            book
        })
    })
})

authorsRouter.put('/:id/update', function(req,res){
    const id = req.params.id;
    Authordata.findOne({_id: id})
    .then(function(book){
       
        book.name = req.body.name;
        book.works = req.body.works;
        book.image = req.body.image;
        book.save();
        res.redirect('/authors');
        })
    })


module.exports = authorsRouter;
const express = require('express');

const loginRouter = express.Router();
const Signupdata = require('../model/signupdata');
const nav =[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'},{link:'/addbook',name:'Add Book'},{link:'/addAuthor',name:'Add Author'}];

loginRouter.use(express.static('./public'));
let msg = "";


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

loginRouter.get('/',function(req,res){
    res.render("login",{
        nav,
        msg,
        title:'Login', 
        books,
        slink: 'signup.ejs' 
    });
});



loginRouter.get('/:id',function(req,res){
    const id = req.params.id;
    res.render('login',{
        nav,
        title:'Login',
        book: books[id]
    })
})

loginRouter.get('/signup',function(req,res){
    res.render('signup',{
        nav,
        title: 'Sign Up'
    })
})

loginRouter.post('/log',function(req,res){
    var item = {
        email: req.body.email,
        password: req.body.password,
        
    }
    const emailid = item.email;
    const password1 = item.password;
    Signupdata.findOne({email:emailid,password:password1})
    .then(function(data1){
        if(data1)
        {
            res.render('index',{
                nav,
                title: 'Library'
            })
        }
        if(data1 == null){
            res.redirect('/')
            
    }
        
    })
    
    
})


module.exports = loginRouter;
const express = require('express');
const app = express();
//start point
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const port = process.env.PORT || 5000;
const msg = "";
const nav = [{link:'/books',name:'Books'},{link:'/authors',name:'Authors'},{link:'/login',name:'Login'},{link:'/signup',name:'Sign Up'},{link:'/addbook',name:'Add Book'}];

const booksRouter = require('./src/routes/bookRoutes');
const authorsRouter = require('./src/routes/authorRoutes');
const loginRouter = require('./src/routes/loginRoutes');
const signupRouter = require('./src/routes/signupRoutes');
const addRouter = require('./src/routes/addRoutes');
const addAuthorRouter = require('./src/routes/addAuthorRoutes');

app.use(express.urlencoded({extended:true}));
app.use(express.static('./public'));
app.use(methodOverride('_method'));

app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/login',loginRouter);
app.use('/signup',signupRouter);
app.use('/addbook',addRouter);
app.use('/addAuthor',addAuthorRouter);



app.get('/',function(req,res){
    res.render("login",{
        msg,
        title:'Library'
    });
});

app.listen(port,()=>{console.log("Server ready at "+ port)});
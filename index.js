const express = require('express');
const app = express();
const dotenv = require('dotenv')
const mongoose = require('mongoose');
const path = require('path')
const mustacheExpress = require('mustache-express')
const bodyParser = require('body-parser')
const cors = require('cors')
const session = require('express-session');
const cookieParser = require("cookie-parser");
const multer  = require('multer')




dotenv.config()


mongoose.connect(process.env.DB_CONNECT, {useNewUrlParser: true} ,() => {
    console.log('connected to db');

})

app.set('views', path.join(__dirname,'views'))
app.engine('mustache', require('hogan-middleware').__express);
//app.engine('html', mustacheExpress()) ;

//app.set('view engine', 'html')
app.set('view engine', 'mustache');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cookieParser());

// app.use(express.json());
app.use(bodyParser.json());

app.use(cors())
app.use(express.static(path.join(__dirname, 'public')))
const authRoute = require('./routes/auth')  //importing the authentication route
const homeRoute = require('./routes/home');
const upload = multer()



app.use('/api/user', authRoute)
app.use('/index/home', homeRoute)

app.get('/', (req, res)=> {
    res.render('index', null)
});

app.listen('6110', ()=> {
    console.log('server is running')
})
